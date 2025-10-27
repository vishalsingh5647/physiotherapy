import React from 'react'
import Reveal from './reveal.jsx'

export default function About({
  title = 'About Our Clinic',
  subtitle = 'Compassionate, evidence-based physiotherapy',
  description = 'We provide personalized physiotherapy focused on long-term outcomes: restoring mobility, relieving pain, and preventing re-injury through education and progressive rehab.',
  imageSrc = 'https://images.unsplash.com/photo-1580281657527-47e65d3e2124?q=80&w=1200&auto=format&fit=crop',
  imageAlt = 'Clinic team'
}) {
  return (
    <section id="about" className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <Reveal>
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-teal-900">{title}</h2>
            <p className="mt-2 text-cyan-700 font-semibold">{subtitle}</p>
            <p className="mt-4 text-gray-600 leading-relaxed">{description}</p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {[ 'Patient-first care', 'Certified therapists', 'Modern equipment', 'Clear progress tracking' ].map((item, i) => (
                <Reveal key={item} delay={i * 70}>
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#0ea5a2] text-white grid place-items-center text-xs">✓</span>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="group aspect-[16/10] w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <img src={imageSrc} alt={imageAlt} className="w-full h-full object-cover opacity-95 transition-transform duration-500 group-hover:scale-105" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}


