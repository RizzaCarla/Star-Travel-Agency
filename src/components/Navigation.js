import React from 'react';

const Navigation = () => {
  return (
    <header className="navbar">
      <div className="logo">Star Travel Agency</div>

      <nav>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#destinations">Destinations</a></li>
          <li><a href="#itinerary">Custom Itinerary</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;