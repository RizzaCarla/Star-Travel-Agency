export default function CustomItinerary() {
  return (
    <main className="page">
      <section className="page-header">
        <h1>Custom Itinerary</h1>
        <p>
          Tell us what kind of trip you’re dreaming of, and we’ll help you plan it.
        </p>
      </section>

      <section className="custom-box">
        <h2>How It Works</h2>
        <ul>
          <li>Tell us where you want to go</li>
          <li>Share your budget and travel dates</li>
          <li>Let us know your preferred activities and travel style</li>
          <li>We’ll help guide you through your perfect trip</li>
        </ul>

        <div className="contact-buttons">
          <a href="tel:+11234567890" className="contact-btn call">
            Call to Plan Your Trip
          </a>

          <a
            href="mailto:travel@startravelagency.com?subject=Custom Itinerary Request"
            className="contact-btn email"
          >
            Email for a Custom Itinerary
          </a>
        </div>
        
      </section>
    </main>
  )
}