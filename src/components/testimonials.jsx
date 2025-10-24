import React from 'react'
import Reveal from './reveal.jsx'

export default function Testimonials({
  items = [
    { quote: 'Amazing care and results. My back pain is gone.', author: 'Rahul S.' },
    { quote: 'Professional team and thoughtful guidance.', author: 'Neha P.' },
    { quote: 'Recovered faster than expected!', author: 'Aman K.' }
  ]
}) {
  return (
    <section id="testimonials" className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">What Patients Say</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <Reveal key={i} delay={i * 90}>
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-5 text-white transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
                <p className="text-white/90">“{t.quote}”</p>
                <div className="mt-3 text-sm text-white/70">— {t.author}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}


