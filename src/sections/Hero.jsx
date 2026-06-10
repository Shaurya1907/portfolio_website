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
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isIpad = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isIpad);
  const cameraPosition = isSmall ? 20 : isMobile ? 18 : isIpad ? 15.5 : 14;
  const heroTitleClass = isSmall
    ? 'text-3xl'
    : isMobile
    ? 'text-4xl'
    : isIpad
    ? 'text-5xl'
    : 'text-5xl lg:text-6xl';
  const heroTagClass = isSmall
    ? 'text-base'
    : isMobile
    ? 'text-lg'
    : isIpad
    ? 'text-xl'
    : 'text-xl lg:text-2xl';
  const showLogos = !isMobile && !isIpad;

  return (
    <section id="home" className="relative min-h-[100svh] w-full overflow-hidden pt-16 sm:pt-20">

      {/* TEXT */}
      <div className="absolute inset-x-0 top-0 z-10 flex h-full flex-col items-center justify-start px-4 pt-16 text-center pointer-events-none sm:pt-20 lg:pt-24">
        <p className={`${heroTitleClass} font-medium text-white text-center leading-tight max-w-4xl lg:max-w-5xl`}>
          Hi, I am Shaurya <span className="waving-hand">👋</span>
        </p>
        <p className={`hero_tag text-gray_gradient ${heroTagClass} text-center max-w-3xl lg:max-w-4xl`}>
          Building Engines & Games
        </p>
      </div>

      {/* HERO ONLY CANVAS */}
      <div className="absolute inset-0 h-full w-full">
        <Canvas 
          className="h-full w-full" 
          shadows
          frameloop="demand"
          dpr={[1, 1.5]}
          gl={{ antialias: false, powerPreference: 'high-performance' }}
        >

          {/* Background */}
          <color attach="background" args={['#04030f']} />
          {/* <fog attach="fog" args={['#1c0c30', 16, 30]} /> */}

          <Suspense fallback={<CanvasLoader />}>

              <ambientLight intensity={0.2 * Math.PI} />

              <PerspectiveCamera 
                makeDefault 
                position={[0, 1, cameraPosition]} 
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
              scale={isSmall ? 2.5 * sizes.deskScale : isMobile ? 2.8 * sizes.deskScale : isIpad ? 0.95 * sizes.deskScale : 1 * sizes.deskScale}
            />

            

            {/* Logos (Billboard inside components) */}
            {showLogos && (
              <UnrealLogo position={sizes.reactLogoPosition} />
            )}
            {showLogos && (
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
            autoRotateSpeed={1.2}
            enablePan={false}
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />

          {/* Stars */}
          <Stars radius={50} depth={30} count={1000} factor={4} fade speed={1} />

        </Canvas>
      </div>

      {/* BUTTON */}
      <div className="absolute bottom-5 left-0 right-0 z-10 flex w-full justify-center px-4 sm:bottom-7 lg:bottom-10">
        <a href="#about" className="w-fit">
          <Button 
            name="Let's work together" 
            isBeam 
            containerClass="w-full sm:w-fit sm:min-w-80 lg:min-w-96" 
          />
        </a>
      </div>

    </section>
  )
}

export default Hero;