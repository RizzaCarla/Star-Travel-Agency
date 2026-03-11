import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import SetLocations from './components/SetLocations';
import CustomItinerary from './components/CustomItinerary';

function App() {
  return (
    <div className="app">
      <Navigation />

      <main>
        <Home />
        <SetLocations />
        <CustomItinerary />
      </main>
    </div>
  );
}

export default App;