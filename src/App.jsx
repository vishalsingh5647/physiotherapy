import './App.css'
import Home from './pages/home.jsx'
import { Routes, Route } from 'react-router-dom'
import Treatment from './pages/treatment.jsx'
import AboutUs from './pages/aboutus.jsx'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b1b2a] via-[#0e2033] to-[#0b1b2a]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/treatment/:slug" element={<Treatment />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </div>
  )
}

export default App
