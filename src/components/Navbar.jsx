import { Link, useLocation } from "react-router-dom"
import { useState } from "react"

export default function Navbar() {
  const location = useLocation()
  const isHomePage = location.pathname === "/"

  const [spin, setSpin] = useState(false)

  const handleClick = () => {
    setSpin(false)
    setTimeout(() => setSpin(true), 10)
  }

  return (
    <header className={`navbar ${isHomePage ? "navbar-home" : ""}`}>
      <Link
        to="/"
        className={`logo ${isHomePage ? "logo-home" : ""}`}
        onClick={handleClick}
      >
        <span className={`star ${spin ? "spin" : ""}`}>★</span>
        Star Travel Agency
      </Link>

      {!isHomePage && (
        <nav className="nav-links">
          <Link to="/itineraries">Preplanned Trips</Link>
          <Link to="/custom-itinerary">Custom Itinerary</Link>
        </nav>
      )}
    </header>
  )
}