import React, { Suspense } from 'react'
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls, Stars } from '@react-three/drei';
import HackerRoom from '../components/HackerRoom';
import CanvasLoader from '../components/CanvasLoader';
import { useMediaQuery } from 'react-responsive';
import { calculateSizes } from '../constants';
import UnrealLogo from '../components/UnrealLogo';
import CPlusPlusLogo from '../components/CPlusPlus';
import Button from '../components/Button';

const Hero = () => {

  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section id="home" className="h-screen w-full pt-20">

      {/* TEXT */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-start pt-20 z-10 pointer-events-none">
        <p className="lg:text-5xl sm:text-2xl text-2xl font-medium text-white text-center">
          Hi, I am Shaurya <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient lg:text-xl sm:text-xl text-base text-center">
          Building Engines & Games
        </p>
      </div>

      {/* HERO ONLY CANVAS */}
      <div className="absolute inset-0 w-full h-full">
        <Canvas className="w-full h-full" shadows>

          {/* Background */}
          <color attach="background" args={['#04030f']} />
          {/* <fog attach="fog" args={['#1c0c30', 16, 30]} /> */}

          <Suspense fallback={<CanvasLoader />}>

              <ambientLight intensity={0.2 * Math.PI} />

              <PerspectiveCamera 
                makeDefault 
                position={[0, 1, isMobile ? 18 : 14]} 
                fov={60}
              >
                <spotLight
                  castShadow
                  intensity={1 * Math.PI}
                  decay={0}
                  angle={0.15}
                  penumbra={0.8}
                  position={[20, 15, 0]}
                  shadow-mapSize={[2048, 2048]}
                  shadow-bias={-0.00005}
                />
                <pointLight
                  intensity={100}
                  position={[0, 5, 0]}
                  color={'#0004ff'}
                  penumbra={0.9}
                />
              </PerspectiveCamera>

            {/* Main Scene */}
            <HackerRoom 
              position={sizes.deskPosition}
              rotation={[0.04, 3.16, 0.02]}
              scale={isMobile ? 3 * sizes.deskScale : 1* sizes.deskScale}
            />

            {/* Logos (Billboard inside components) */}
            {!isMobile && (
                <UnrealLogo position={sizes.reactLogoPosition} />
            )}
            {!isMobile && (
                <CPlusPlusLogo 
                    scale={sizes.cppLogoScale} 
                    position={sizes.cppLogoPosition} 
                />
            )}



          </Suspense>

          {/* Controls */}
          <OrbitControls 
            target={[0, 0, 0]} 
            autoRotate
            autoRotateSpeed={2}
            enablePan={false}
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />

          {/* Stars */}
          <Stars radius={500} depth={50} count={1000} factor={10} />

        </Canvas>
      </div>

      {/* BUTTON */}
      <div className="absolute bottom-7 left-0 right-0 w-full z-10 flex justify-center px-4">
        <a href="#about" className="w-fit">
          <Button 
            name="Let's work together" 
            isBeam 
            containerClass="sm:w-fit w-full sm:min-w-96" 
          />
        </a>
      </div>

    </section>
  )
}

export default Hero;