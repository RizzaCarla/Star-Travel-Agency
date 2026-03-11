import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Are you excited to getaway?</h1>
        <p>
          Explore exciting destinations around the world, choose a preplanned trip,
          or request a custom itinerary designed just for you.
        </p>

        <div className="hero-buttons">
          <Link to="/itineraries" className="btn btn-secondary">
            Select Your Adventure
          </Link>

          <Link to="/custom-itinerary" className="btn btn-primary">
            Plan Your Adventure
          </Link>
        </div>
      </div>
    </section>
  )
}