import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Itineraries from './pages/Itineraries'
import ItineraryDetails from './pages/ItineraryDetails'
import CustomItinerary from './pages/CustomItinerary'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/itineraries" element={<Itineraries />} />
        <Route path="/itinerary/:slug" element={<ItineraryDetails />} />
        <Route path="/custom-itinerary" element={<CustomItinerary />} />
      </Routes>
    </>
  )
}