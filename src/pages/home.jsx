import React from 'react'
import Navbar from '../components/navbar.jsx'
import Hero from '../components/hero.jsx'
import About from '../components/about.jsx'
import Divider from '../components/divider.jsx'
import Services from '../components/services.jsx'
import Achievement from '../components/achievement.jsx'
import HowWeWork from '../components/howwework.jsx'
import Provide from '../components/provide.jsx'
import WhyChooseUs from '../components/whychooseus.jsx'
import Technology from '../components/technology.jsx'
import Process from '../components/process.jsx'
import Stats from '../components/stats.jsx'
import Footer from '../components/footer.jsx'

export default function Home() {
  return (
    <div className="relative bg-gradient-to-br from-cyan-50 to-cyan-100 overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Divider />
      <Services />
      <Achievement />
      <Divider />
      <HowWeWork />
      <Provide />
      <WhyChooseUs />
      <Technology />
      <Process />
      <Stats />
      <Footer />
    </div>
  )
}
