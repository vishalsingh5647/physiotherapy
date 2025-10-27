import React from 'react'
import Reveal from './reveal.jsx'

export default function Contact({
  phone = '+91-7838202820',
  whatsapp = 'https://wa.me/917838202820',
  address = 'Plot no 264, near Artemis Hospital Rd, Sector 52, Gurugram',
  email = 'info@yourclinic.com'
}) {
  return (
    <section id="contact" className="relative isolate overflow-hidden py-16 sm:py-20">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-start">
        <Reveal>
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-teal-900">Contact Us</h2>
            <p className="mt-3 text-gray-600">We’re here to help you plan your recovery.</p>
            <div className="mt-6 space-y-3 text-gray-700">
              <div><span className="text-teal-900 font-semibold">Phone:</span> <a href={`tel:${phone}`} className="text-cyan-600 hover:text-cyan-700">{phone}</a></div>
              <div><span className="text-teal-900 font-semibold">WhatsApp:</span> <a href={whatsapp} className="text-cyan-600 hover:text-cyan-700">Chat now</a></div>
              <div><span className="text-teal-900 font-semibold">Email:</span> <a href={`mailto:${email}`} className="text-cyan-600 hover:text-cyan-700">{email}</a></div>
              <div><span className="text-teal-900 font-semibold">Address:</span> {address}</div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6">
            <form className="grid gap-4">
              <input className="rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="Your name" />
              <input className="rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="Phone or email" />
              <textarea className="rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500" rows="4" placeholder="Your message" />
              <button type="button" className="rounded-lg bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 text-sm font-semibold transition-colors">Send</button>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  )
}


