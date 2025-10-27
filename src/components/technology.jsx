import React from 'react'
import Reveal from './reveal.jsx'

export default function Technology({
  items = [
    'Heat / Cryo Therapy',
    'Laser Therapy',
    'Spinal Decompression Therapy (SDT)',
    'Shockwave Therapy',
    'Wireless Therapy',
    'Intelect Advanced Combo'
  ]
}) {
  return (
    <section id="technology" className="relative py-16 sm:py-20 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-cyan-50 to-cyan-100" />
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-cyan-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-blue-300/30 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-8 opacity-25">
        <svg width="500" height="200" viewBox="0 0 500 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="t-dots" x="0" y="0" width="22" height="22" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="2" fill="#22d3ee" />
            </pattern>
          </defs>
          <rect width="500" height="200" fill="url(#t-dots)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal y={14}>
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-teal-900">Technology</h2>
            <p className="mt-2 text-gray-600">Advanced modalities to accelerate recovery and reduce pain.</p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((t, i) => (
            <Reveal key={t} delay={i * 80} y={18}>
              <div className="group relative rounded-2xl p-5 bg-white/70 backdrop-blur-md border border-white/60 text-teal-900 transition-all shadow-[0_2px_12px_rgba(34,211,238,0.12)] hover:shadow-[0_16px_40px_rgba(34,211,238,0.30)] hover:-translate-y-1">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-100/0 via-white/0 to-white/0 group-hover:from-cyan-100/50 group-hover:to-transparent transition-opacity" />
                <div className="relative flex items-start gap-3">
                  <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-50 ring-1 ring-cyan-200/60">
                    <svg viewBox="0 0 24 24" className="h-5 w-5 text-cyan-600" fill="currentColor"><path d="M12 2l2.09 6.26L20 9l-5 3.64L16.18 20 12 16.9 7.82 20 9 12.64 4 9l5.91-.74L12 2z"/></svg>
                  </span>
                  <div className="font-semibold leading-snug">{t}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}


