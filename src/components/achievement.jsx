import React from 'react'
import Reveal from './reveal.jsx'

export default function Achievement() {
  const achievements = [
    {
      value: '10,000+',
      label: 'Happy Patients',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8">
          <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
        </svg>
      )
    },
    {
      value: '10+',
      label: 'Experience',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8">
          <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
        </svg>
      )
    },
    {
      value: '8+',
      label: 'Therapist & Staff',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8">
          <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
        </svg>
      )
    },
    {
      value: '5',
      label: 'User Rating',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8">
          <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
        </svg>
      )
    }
  ]

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-cyan-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-teal-900">Our Achievement</h2>
          <p className="mt-3 text-gray-600 max-w-3xl mx-auto">
            At Global Physiotherapy Clinic, we take pride in our commitment to excellence and patient care.
          </p>
          <p className="mt-2 text-gray-600 max-w-3xl mx-auto">
            Our clinic has garnered recognition for its specialized orthopedic rehabilitation services.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
          {achievements.map((item, i) => (
            <Reveal key={item.label} delay={i * 100}>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-teal-600 text-white mb-4 shadow-lg">
                  {item.icon}
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-teal-900">{item.value}</div>
                <div className="mt-2 text-sm font-medium text-gray-600">{item.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
