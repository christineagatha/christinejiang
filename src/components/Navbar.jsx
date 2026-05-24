import { useState } from "react"

function Navbar() {
  const [showCreative, setShowCreative] = useState(false)

  return (
    <nav className="navbar">
      <div className="logo">Christine Jiang</div>

      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>

        <button
          className="creative-button"
          onClick={() => setShowCreative(!showCreative)}
        >
          ✦
        </button>
      </div>

      {showCreative && (
        <div className="creative-menu">
          <p>Running</p>
          <p>Art</p>
          <p>Fashion</p>
          <p>Music</p>
          <p>Travel</p>
        </div>
      )}
    </nav>
  )
}

export default Navbar