import React from 'react'
import Reveal from './reveal.jsx'

const defaultSteps = [
  { step: '01', title: 'Make Appointment', desc: 'Book online, call or WhatsApp us to schedule.' },
  { step: '02', title: 'Get Consultation', desc: 'Detailed assessment and goal-oriented planning.' },
  { step: '03', title: 'Therapy Sessions', desc: 'Personalized treatment using modern techniques.' },
  { step: '04', title: 'Enjoy Recovery', desc: 'Track progress and maintain results long-term.' },
]

export default function Process({ steps = defaultSteps }) {
  return (
    <section id="process" className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-teal-900">How We Work</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <Reveal key={s.step} delay={i * 90}>
              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="text-cyan-600 font-extrabold text-2xl">{s.step}</div>
                <div className="mt-2 font-semibold text-teal-900">{s.title}</div>
                <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}


