import React from 'react'
import Reveal from './reveal.jsx'

export default function Stats({
  items = [
    { value: '12+', label: 'Years Experience' },
    { value: '10K+', label: 'Happy Patients' },
    { value: '99%', label: 'Satisfaction' },
    { value: '3', label: 'Clinics' }
  ]
}) {
  return (
    <section className="py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
        {items.map((s, i) => (
          <Reveal key={i} delay={i * 80}>
            <div className="rounded-2xl border border-gray-200 bg-white p-5 text-center shadow-sm">
              <div className="text-2xl font-extrabold text-teal-900">{s.value}</div>
              <div className="text-xs text-gray-600">{s.label}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}


