import { Link } from 'react-router-dom'

export default function ItineraryCard({ trip }) {
  return (
    <Link to={`/itinerary/${trip.slug}`} className="card itinerary-card itinerary-link">
      <h3>{trip.title}</h3>
      <p>{trip.summary}</p>
      <span className="tag">{trip.duration}</span>
      <div className="trip-price">{trip.price}</div>
    </Link>
  )
}