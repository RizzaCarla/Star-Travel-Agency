import React, { useState } from 'react';

const CustomItinerary = () => {
  const [form, setForm] = useState({
    location: '',
    budget: '',
    contact: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Itinerary submitted for ${form.location} with a budget of ${form.budget}. Contact: ${form.contact}`
    );

    setForm({
      location: '',
      budget: '',
      contact: ''
    });
  };

  return (
    <section id="itinerary" className="section">
      <h2>Create a Custom Itinerary</h2>

      <form className="itinerary-form" onSubmit={handleSubmit}>
        <label>
          Dream Travel Location
          <input
            type="text"
            name="location"
            value={form.location}
            onChange={handleChange}
            placeholder="e.g. Bali, Japan, Paris"
            required
          />
        </label>

        <label>
          Budget
          <input
            type="text"
            name="budget"
            value={form.budget}
            onChange={handleChange}
            placeholder="e.g. $2500"
            required
          />
        </label>

        <label>
          Contact Information
          <input
            type="text"
            name="contact"
            value={form.contact}
            onChange={handleChange}
            placeholder="Email or phone number"
            required
          />
        </label>

        <button type="submit" className="btn">Submit Itinerary</button>
      </form>
    </section>
  );
};

export default CustomItinerary;