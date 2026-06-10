import React, { useEffect, useRef, useState, Suspense, lazy } from 'react'

// Navbar and Hero load immediately — they're above the fold
import Navbar from "./sections/Navbar.jsx"
import Hero from "./sections/Hero.jsx"

// Everything else is lazy — only loads when needed
const About       = lazy(() => import('./sections/About.jsx'))
const Projects    = lazy(() => import('./sections/Projects.jsx'))
const Achievement = lazy(() => import('./sections/Achievement.jsx'))
const Education   = lazy(() => import('./sections/Education.jsx'))
const Contact     = lazy(() => import('./sections/Contact.jsx'))
const Footer      = lazy(() => import('./sections/Footer.jsx'))
const Game        = lazy(() => import('./sections/Game.jsx'))

// Simple loading placeholder
const SectionLoader = () => (
  <div className="flex items-center justify-center h-40 w-full">
    <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin" />
  </div>
)

const DeferredSection = ({ children, fallbackHeight = 'min-h-[40vh]' }) => {
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    if (isVisible) return

    const element = containerRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '300px 0px' }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [isVisible])

  return (
    <div ref={containerRef} className={fallbackHeight}>
      {isVisible ? children : <SectionLoader />}
    </div>
  )
}

const App = () => {
  const [isGameRunning, setIsGameRunning] = useState(false)

  return (
    <main className="w-full min-h-screen overflow-x-hidden">

      <Navbar />
      <Hero isGameRunning={isGameRunning} />

      <DeferredSection>
        <Suspense fallback={<SectionLoader />}>
          <About />
        </Suspense>
      </DeferredSection>

      <DeferredSection fallbackHeight="min-h-[70vh]">
        <Suspense fallback={<SectionLoader />}>
          <Projects />
        </Suspense>
      </DeferredSection>

      <DeferredSection fallbackHeight="min-h-[55vh]">
        <Suspense fallback={<SectionLoader />}>
          <Game
            isGameRunning={isGameRunning}
            setIsGameRunning={setIsGameRunning}
          />
        </Suspense>
      </DeferredSection>

      <DeferredSection fallbackHeight="min-h-[45vh]">
        <Suspense fallback={<SectionLoader />}>
          <Achievement />
        </Suspense>
      </DeferredSection>

      <DeferredSection fallbackHeight="min-h-[55vh]">
        <Suspense fallback={<SectionLoader />}>
          <Education />
        </Suspense>
      </DeferredSection>

      <DeferredSection fallbackHeight="min-h-[45vh]">
        <Suspense fallback={<SectionLoader />}>
          <Contact />
        </Suspense>
      </DeferredSection>

      <DeferredSection fallbackHeight="min-h-[20vh]">
        <Suspense fallback={<SectionLoader />}>
          <Footer />
        </Suspense>
      </DeferredSection>

    </main>
  )
}

export default App