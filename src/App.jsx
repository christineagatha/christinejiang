// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import './App.css'

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />

        <section id="about" className="section">
          <h1>About</h1>
        </section>

        <section id="experience" className="section">
          <h1>Experience</h1>
        </section>

        <section id="projects" className="section">
          <h1>Projects</h1>
        </section>

        <section id="skills" className="section">
          <h1>Skills</h1>
        </section>

        <section id="contact" className="section">
          <h1>Contact</h1>
        </section>
      </div>
    </>
  )
}

export default App