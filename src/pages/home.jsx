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
      <WhyChooseUs imageUrl="/images/exersize01.webp" />
      <HowWeWork />
      <Divider />
      <Provide />
      <div className="my-8">
        <div className="h-[2px] w-full bg-gradient-to-r from-cyan-300 via-cyan-500 to-cyan-300" />
      </div>
      <Technology />
      <div className="my-8">
        <div className="h-[2px] w-full bg-gradient-to-r from-cyan-300 via-cyan-500 to-cyan-300" />
      </div>
      <Process />
      <Divider /> 
      <Footer />
    </div>
  )
}
