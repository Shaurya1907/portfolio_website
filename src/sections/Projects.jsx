import React, { Suspense, useState } from 'react'
import { myProjects } from '../constants'
import { Canvas } from '@react-three/fiber';
import { Center, OrbitControls } from '@react-three/drei';
import CanvasLoader from '../components/CanvasLoader';
import DemoComputer from '../components/DemoComputer';

const projectCount = myProjects.length;

const Projects = () => {
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
    const currentProject = myProjects[selectedProjectIndex];

    const handleNavigation = (direction) => {
        setSelectedProjectIndex((prevIndex) => {
            if(direction === 'previous'){
                return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
            }else{
                return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
            }
        })
    }

  return (
    <section id="work" className="c-space my-20">
      <p className="head-text">My work</p>

      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200 h-96 md:h-full overflow-hidden">
          
          <div className="hidden sm:block absolute top-4 right-4 pointer-events-none">
            <img 
              src={currentProject.spotlight}
              alt="spotlight" 
              className="w-48 h-48 md:w-72 md:h-72 object-cover rounded-xl shadow-inner" 
              loading="lazy"
            />
          </div>
          <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg" style={currentProject.logoStyle}>
            <img src={currentProject.logo} alt="logo" className="w-10 h-10 shadow-sm" />
          </div>
          <div className="flex flex-col gap-5 text-white-600 my-5">
            <p className="text-white text-2xl font-semibold animatedText">{currentProject.title}</p>
            <p className="animatedText">{currentProject.desc}</p>
            <p className="animatedText">{currentProject.subdesc}</p>
          </div>
          <div className="flex items-center justify-between flex-wrap gap-5 z-10">
            <div className="flex items-center gap-3 flex-wrap">
              {currentProject.tags?.map((tag) => (
                <div key={tag.name} className="tech-logo">
                  <img src={tag.path} alt={tag.name} />
                </div>
              ))}
            </div>
            <a className="flex items-center gap-2 cursor-pointer text-white-600" href={currentProject.href} target="_blank" rel="noreferrer">
                <p>Check Live Site</p>
                <img src="/assets/arrow-up.png" className="w-3 h-3" alt="arrow" />
            </a>
          </div>
          <div className="flex justify-between items-center mt-7">
            <button className="arrow-btn" onClick={() => handleNavigation('previous')}>
              <img src ="/assets/left-arrow.png" alt="left arrow" className="w-4 h-4" />
            </button>
            <button className="arrow-btn" onClick={() => handleNavigation('next')}>
              <img src ="/assets/right-arrow.png" alt="right arrow" className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="border border-black-300 bg-black-200 rounded h-96 md:h-full overflow-hidden">
          {/*
            <Canvas dpr={[1, 1.5]} gl={{ antialias: false, powerPreference: 'high-performance' }} camera={{ position: [0, -0.1, 4.3], fov: 36 }}>
              <ambientLight intensity={Math.PI} />
              <directionalLight position={[10, 10, 5]} />
              <Center>
                <Suspense fallback={<CanvasLoader />}>
                  <group scale={1.2} position={[-0.2, -1.7, 0]} rotation={[0, -0.1, 0]}>
                    <DemoComputer texture={currentProject.texture} />
                  </group>
                </Suspense>
              </Center>
              <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} minDistance={3.5} maxDistance={5.5} enablePan={false} />
            </Canvas>
          */}

          <div className="w-full h-96 md:h-full overflow-hidden flex items-center justify-center">
            {/* Desktop/Tablet bezel */}
            <div className="hidden sm:block w-full h-80 md:h-full max-w-full rounded-xl shadow-2xl border border-black-400 bg-gradient-to-b from-black-900/60 to-black-900 p-1">
              <div className="w-full h-full bg-black rounded-md overflow-hidden flex items-center justify-center relative">
                  <video
                    src={currentProject.texture}
                    poster={currentProject.spotlight}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    aria-label={`${currentProject.title} preview video`}
                    className="w-full h-full object-cover"
                  />
              </div>
            </div>

            {/* Mobile: full-bleed simple video (no bezel or overlays) */}
            <div className="block sm:hidden w-full h-full">
              <video
                src={currentProject.texture}
                poster={currentProject.spotlight}
                controls
                muted
                playsInline
                preload="metadata"
                aria-label={`${currentProject.title} preview video (tap to play)`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Projects