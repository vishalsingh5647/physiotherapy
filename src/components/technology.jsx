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
    <section id="technology" className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Technology</h2>
        <p className="mt-2 text-white/70">Advanced modalities to accelerate recovery and reduce pain.</p>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((t, i) => (
            <Reveal key={t} delay={i * 70}>
              <div className="rounded-xl border border-white/10 p-4 bg-white/5 backdrop-blur text-white hover:bg-white/10 transition-colors">{t}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}


