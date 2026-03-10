import React, { useState } from 'react';

const CustomItinerary = () => {
  const [location, setLocation] = useState('');
  const [budget, setBudget] = useState('');
  const [contact, setContact] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Itinerary submitted for ${location} with a budget of ${budget}. Contact: ${contact}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Dream Travel Location:
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Budget:
          <input
            type="number"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Contact Information:
          <input
            type="email"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            required
          />
        </label>
      </div>
      <button type="submit">Submit Itinerary</button>
    </form>
  );
};

export default CustomItinerary;