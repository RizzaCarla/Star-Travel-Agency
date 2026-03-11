import { useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import itineraries from '../data/itineraries'

export default function ItineraryDetails() {
  const { slug } = useParams()

  const trip = useMemo(() => {
    for (const group of itineraries) {
      const found = group.trips.find((item) => item.slug === slug)
      if (found) return found
    }
    return null
  }, [slug])

  if (!trip) {
    return (
      <main className="page">
        <section className="page-header">
          <h1>Trip Not Found</h1>
          <p>We couldn’t find that itinerary.</p>
          <Link to="/itineraries" className="btn btn-primary">
            Back to Trips
          </Link>
        </section>
      </main>
    )
  }

  return (
    <main className="page trip-details-page">
      <section className="trip-hero">
        <img src={trip.image} alt={trip.title} className="trip-image" />

        <div className="trip-summary">
          <h1>{trip.title}</h1>
          <p className="trip-location">{trip.location}</p>
          <p className="trip-description">{trip.summary}</p>

          <div className="trip-meta">
            <span className="tag">{trip.duration}</span>
            <span className="trip-price-large">{trip.price}</span>
          </div>

          <a
            href={trip.paymentLink}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            Buy This Trip
          </a>
        </div>
      </section>

      <section className="trip-section">
        <h2>Activities Included</h2>
        <ul className="trip-list">
          {trip.activities.map((activity) => (
            <li key={activity}>{activity}</li>
          ))}
        </ul>
      </section>

      <section className="trip-section">
        <h2>Schedule</h2>
        <div className="schedule-list">
          {trip.schedule.map((item) => (
            <div className="schedule-item card" key={`${item.day}-${item.time}-${item.activity}`}>
              <p className="schedule-day">{item.day}</p>
              <p className="schedule-time">{item.time}</p>
              <p>{item.activity}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="trip-section">
        <h2>What’s Included</h2>
        <ul className="trip-list">
          {trip.includes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </main>
  )
}