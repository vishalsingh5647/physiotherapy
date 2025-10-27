import React from 'react'
import Reveal from './reveal.jsx'

export default function WhyChooseUs({ imageUrl }) {
  const points = [
    'Expertise and Experience',
    'Personalized Treatment Plans',
    'Comprehensive Care',
    'Compassionate Care'
  ]

  return (
    <section className="relative py-16 sm:py-20 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-cyan-50 to-cyan-100" />
      <div className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-cyan-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-blue-300/30 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-0 -z-10 opacity-30">
        <svg width="420" height="220" viewBox="0 0 420 220" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="2" fill="#22d3ee" />
            </pattern>
          </defs>
          <rect width="420" height="220" fill="url(#dots)" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <Reveal delay={60} y={16}>
          <div className="relative order-2 lg:order-1">
            <p className="text-cyan-700 font-semibold tracking-wider">WHY CHOOSE</p>
            <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
              <span className="text-teal-900">DR.AMULYA VEER DHAWAN </span>
              <span className="text-cyan-700">PHYSIOCARE</span>
            </h2>
            <p className="mt-5 text-gray-600 leading-relaxed">
              In a world where physical health is paramount, finding the right healthcare provider is crucial. Dr. Maan Physiocarе offers unparalleled care and expertise to help you regain mobility, alleviate pain, and improve quality of life.
            </p>

            <ul className="mt-6 space-y-3">
              {points.map((pt) => (
                <li key={pt} className="flex items-start gap-3 text-teal-900">
                  <span className="mt-0.5 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-[#0ea5a2] text-white">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                      <path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" />
                    </svg>
                  </span>
                  <span className="text-sm sm:text-base">{pt}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <a href="#about" className="inline-flex items-center gap-2 rounded-full bg-[#3b82f6] px-5 py-3 text-white font-medium shadow hover:bg-[#2563eb] transition-colors">
                Read More
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                  <path d="M12 4l1.41 1.41L8.83 10H20v2H8.83l4.58 4.59L12 18l-8-8z" />
                </svg>
              </a>
            </div>
          </div>
          </Reveal>

          <Reveal delay={120} y={24}>
          <div className="relative order-1 lg:order-2">
            <div className="group aspect-[16/11] sm:aspect-[16/10] lg:aspect-[16/12] w-full overflow-hidden rounded-2xl bg-cyan-100 shadow-sm">
              {imageUrl ? (
                <img src={imageUrl} alt="Physiotherapy" className="h-full w-full object-cover opacity-95 transition-transform duration-500 group-hover:scale-105" />
              ) : (
                <div className="h-full w-full grid place-items-center text-gray-400">
                  <span className="text-sm">Physiotherapy image</span>
                </div>
              )}
            </div>
          </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
