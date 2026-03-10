import React from 'react';

const SetLocations = () => {
    const itineraries = {
        Africa: ['Safari in Kenya', 'Pyramids of Giza in Egypt', 'Victoria Falls in Zimbabwe'],
        Asia: ['Great Wall in China', 'Temple of Angkor in Cambodia', 'Cherry Blossoms in Japan'],
        Europe: ['Eiffel Tower in France', 'Colosseum in Italy', 'Big Ben in England'],
        North America: ['Grand Canyon in USA', 'Machu Picchu in Peru', 'Banff National Park in Canada'],
        South America: ['Christ the Redeemer in Brazil', 'Galapagos Islands in Ecuador', 'Tango in Argentina'],
        Australia: ['Great Barrier Reef', 'Sydney Opera House', 'Uluru'],
        Antarctica: ['Research Stations', 'Penguin Colonies']
    };

    return (
        <div>
            <h1>Preset Travel Itineraries</h1>
            {Object.keys(itineraries).map(continent => (
                <div key={continent}>
                    <h2>{continent}</h2>
                    <ul>
                        {itineraries[continent].map(itinerary => (
                            <li key={itinerary}>{itinerary}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default SetLocations;