import React from 'react'

export default function WhyChooseUs() {
  const items = [
    {
      title: 'Natural Healing',
      desc: 'Safe and effective treatments using natural techniques.',
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 text-teal-300" fill="currentColor">
          <path d="M12 2C8 6 6 9 6 12a6 6 0 0 0 12 0c0-3-2-6-6-10zm0 0s7 5 7 10a7 7 0 0 1-14 0c0-5 7-10 7-10z"/>
        </svg>
      )
    },
    {
      title: 'Personalized Care',
      desc: 'Plans tailored to your specific recovery needs.',
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 text-teal-300" fill="currentColor">
          <path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm-7 9a7 7 0 0 1 14 0Z"/>
        </svg>
      )
    },
    {
      title: 'Experienced Therapist',
      desc: 'Over 15 years of evidence-based physiotherapy.',
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 text-teal-300" fill="currentColor">
          <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
        </svg>
      )
    },
    {
      title: 'Online Consultation',
      desc: 'Convenient remote sessions from your home.',
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 text-teal-300" fill="currentColor">
          <path d="M4 5h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-6l-4 3v-3H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z"/>
        </svg>
      )
    }
  ]

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-teal-900">Why Choose Us?</h2>
          <p className="mt-3 text-gray-600 max-w-3xl mx-auto">
            Experience compassionate, personalized, and scientifically guided physiotherapy.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl border border-gray-200 bg-white p-6 text-teal-900 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-cyan-50 grid place-items-center mb-4">
                {it.icon}
              </div>
              <h3 className="text-lg font-semibold">{it.title}</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
