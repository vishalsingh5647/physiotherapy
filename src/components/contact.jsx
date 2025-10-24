import React from 'react'
import Reveal from './reveal.jsx'

export default function Contact({
  phone = '+91-7838202820',
  whatsapp = 'https://wa.me/917838202820',
  address = 'Plot no 264, near Artemis Hospital Rd, Sector 52, Gurugram',
  email = 'info@yourclinic.com'
}) {
  return (
    <section id="contact" className="relative isolate overflow-hidden py-16 sm:py-20 bg-gradient-to-b from-[#0b1b2a] via-[#0e2033] to-[#0b1b2a]">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-20 w-[28rem] h-[28rem] bg-sky-500/10 blur-3xl rounded-full"/>
        <div className="absolute -bottom-24 -right-20 w-[28rem] h-[28rem] bg-teal-400/10 blur-3xl rounded-full"/>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-start">
        <Reveal>
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Contact Us</h2>
            <p className="mt-3 text-white/70">We’re here to help you plan your recovery.</p>
            <div className="mt-6 space-y-3 text-white/80">
              <div><span className="text-white">Phone:</span> <a href={`tel:${phone}`} className="text-[#22d3ee]">{phone}</a></div>
              <div><span className="text-white">WhatsApp:</span> <a href={whatsapp} className="text-[#22d3ee]">Chat now</a></div>
              <div><span className="text-white">Email:</span> <a href={`mailto:${email}`} className="text-[#22d3ee]">{email}</a></div>
              <div><span className="text-white">Address:</span> {address}</div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
            <form className="grid gap-4">
              <input className="rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/60 px-3 py-2" placeholder="Your name" />
              <input className="rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/60 px-3 py-2" placeholder="Phone or email" />
              <textarea className="rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/60 px-3 py-2" rows="4" placeholder="Your message" />
              <button type="button" className="rounded-lg bg-[#3b82f6] hover:bg-[#2563eb] text-white px-4 py-2 text-sm font-semibold">Send</button>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  )
}


