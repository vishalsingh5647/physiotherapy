import React from 'react'
import Reveal from './reveal.jsx'

const items = [
  {
    title: 'Certified doctors',
    desc:
      'When you choose a board certified doctor, you can count on quality care for yourself and those you love.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-10 h-10 text-teal-300">
        <path strokeWidth="1.5" d="M7 7a5 5 0 1 0 10 0 5 5 0 0 0-10 0Z" />
        <path strokeWidth="1.5" d="M2 22a8 8 0 0 1 20 0" />
        <path strokeWidth="1.5" d="M12 8v3M10.5 9.5h3" />
      </svg>
    )
  },
  {
    title: 'Quick visits',
    desc:
      'Our doctor visit at-home service provides high-quality homecare services.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-10 h-10 text-sky-300">
        <rect x="3" y="4" width="18" height="14" rx="3" strokeWidth="1.5" />
        <path strokeWidth="1.5" d="M12 8v4M10 10h4" />
        <path strokeWidth="1.5" d="M7 20h10" />
      </svg>
    )
  },
  {
    title: 'Patients history',
    desc:
      'Taking a history from a patient is a skill necessary for examinations and afterwards as a practicing doctor.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-10 h-10 text-teal-300">
        <path strokeWidth="1.5" d="M6 2h8a3 3 0 0 1 3 3v15a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z" />
        <path strokeWidth="1.5" d="M9 7h6M9 11h6M9 15h6" />
      </svg>
    )
  },
  {
    title: 'Natural medicine',
    desc:
      'There are several alternative therapies out there, one of which is a physical therapy that focuses on treating, diagnosing, and preventing.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-10 h-10 text-teal-300">
        <path strokeWidth="1.5" d="M4 14c3 0 7-4 7-7 0 0-4 0-7 3s-3 7-3 7 0-3 3-3Z" />
        <path strokeWidth="1.5" d="M20 10c-3 0-7 4-7 7 0 0 4 0 7-3s3-7 3-7 0 3-3 3Z" />
      </svg>
    )
  }
]

export default function Provide() {
  return (
    <section id="provide" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-teal-900">
          SEE WHAT WE PROVIDE FOR <span className="text-cyan-600">YOUR HEALTH</span>
        </h2>
        <div className="mt-10 grid md:grid-cols-2 gap-4 sm:gap-6">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 50}>
              <div className="flex gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg transition-shadow">
                <div className="shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-cyan-50 grid place-items-center">
                    {it.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-teal-900">{it.title}</h3>
                  <p className="mt-1 text-gray-600 text-sm leading-relaxed">{it.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
