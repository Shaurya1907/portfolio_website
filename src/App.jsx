import React, { useState } from 'react'

import Navbar from "./sections/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import About from './sections/About.jsx';
import Projects from './sections/Projects.jsx';
import Achievement from './sections/Achievement.jsx';
import Contact from './sections/Contact.jsx';
import Footer from './sections/Footer.jsx';
import Education from './sections/Education.jsx';
import Game from "./sections/Game.jsx";

const App = () => {

  const [isGameRunning, setIsGameRunning] = useState(false)

  return (
    <main className="max-w-7xl mx-auto">

      {!isGameRunning && (
        <>
          <Navbar />
          <Hero />
          <About />
          <Projects />
        </>
      )}

      <Game
        isGameRunning={isGameRunning}
        setIsGameRunning={setIsGameRunning}
      />

      {!isGameRunning && (
        <>
          <Achievement />
          <Education />
          <Contact />
          <Footer />
        </>
      )}

    </main>
  )
}

export default App