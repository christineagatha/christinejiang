// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Navbar from "./components/Navbar"
import './App.css'

function App() {
  return (
    <>
      <div>
        <Navbar />

        <section id="about" className="section">
          <h1>About</h1>
        </section>

        <section id="experience" className="section">
          <h1>Experience</h1>
        </section>

        <section id="projects" className="section">
          <h1>Projects</h1>
        </section>

        <section id="contact" className="section">
          <h1>Contact</h1>
        </section>

        <h1>Christine Jiang</h1>
        <p>Computer Science student at WashU</p>

        <h2>About Me</h2>
        <p>
          Interested in AI, HCI, humanoid robotics, and software engineering.
        </p>

        <h2>Projects</h2>
        <ul>
          <li>Bear Fitness App</li>
          <li>RAG Research Chatbot</li>
          <li>Humanoid Robotics Research</li>
        </ul>
      </div>
    </>
  )
}

export default App