import itineraries from '../data/itineraries'
import ItineraryCard from '../components/ItineraryCard'

export default function Itineraries() {
  return (
    <main className="page">
      <section className="page-header">
        <h1>Preplanned Adventures</h1>
        <p>Browse our ready-to-book itineraries by continent.</p>
      </section>

      {itineraries.map((group) => (
        <section key={group.continent} className="continent-section">
          <h2>{group.continent}</h2>

          <div className="card-grid">
            {group.trips.map((trip) => (
              <ItineraryCard key={trip.slug} trip={trip} />
            ))}
          </div>
        </section>
      ))}
    </main>
  )
}