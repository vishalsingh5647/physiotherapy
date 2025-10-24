import React from 'react'
import Navbar from '../components/navbar.jsx'
import Hero from '../components/hero.jsx'
import About from '../components/about.jsx'
import Services from '../components/services.jsx'
import Provide from '../components/provide.jsx'
import WhyChooseUs from '../components/whychooseus.jsx'
import Technology from '../components/technology.jsx'
import Process from '../components/process.jsx'
import Stats from '../components/stats.jsx'
import Testimonials from '../components/testimonials.jsx'
import Contact from '../components/contact.jsx'
import Footer from '../components/footer.jsx'

export default function Home() {
  return (
    <div className="relative bg-gradient-to-b from-[#0b1b2a] via-[#0e2033] to-[#0b1b2a] overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-20 w-[30rem] h-[30rem] bg-sky-500/10 blur-3xl rounded-full"/>
        <div className="absolute -bottom-24 -right-20 w-[30rem] h-[30rem] bg-teal-400/10 blur-3xl rounded-full"/>
      </div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Provide />
      <WhyChooseUs />
      <Technology />
      <Process />
      <Stats />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}
