import React from 'react';

const itineraries = {
  Africa: ['Safari in Kenya', 'Pyramids of Giza in Egypt', 'Victoria Falls in Zimbabwe'],
  Asia: ['Great Wall in China', 'Temple of Angkor in Cambodia', 'Cherry Blossoms in Japan'],
  Europe: ['Eiffel Tower in France', 'Colosseum in Italy', 'Big Ben in England'],
  NorthAmerica: ['Grand Canyon in USA', 'Banff National Park in Canada', 'New York City in USA'],
  SouthAmerica: ['Christ the Redeemer in Brazil', 'Galapagos Islands in Ecuador', 'Patagonia in Argentina'],
  Australia: ['Great Barrier Reef', 'Sydney Opera House', 'Uluru'],
  Antarctica: ['Research Stations', 'Penguin Colonies', 'Iceberg Cruises']
};

const SetLocations = () => {
  return (
    <section id="destinations" className="section">
      <h2>Preset Travel Itineraries</h2>

      <div className="card-grid">
        {Object.entries(itineraries).map(([continent, places]) => (
          <article className="card" key={continent}>
            <h3>{continent.replace('NorthAmerica', 'North America').replace('SouthAmerica', 'South America')}</h3>
            <ul>
              {places.map((place) => (
                <li key={place}>{place}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default SetLocations;