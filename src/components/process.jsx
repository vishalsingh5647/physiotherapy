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
    <section id="process" className="relative py-16 sm:py-20 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-cyan-50 to-cyan-100" />
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg className="absolute -top-32 -left-32 w-[900px] h-[900px] opacity-35" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="rg" cx="50%" cy="50%" r="60%">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity=".45" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
            </radialGradient>
          </defs>
          <path fill="url(#rg)" d="M300,520Q190,520,120,430Q50,340,100,240Q150,140,260,110Q370,80,450,150Q530,220,520,320Q510,420,400,480Q290,540,300,520Z">
            <animate attributeName="d" dur="10s" repeatCount="indefinite"
              values="M300,520Q190,520,120,430Q50,340,100,240Q150,140,260,110Q370,80,450,150Q530,220,520,320Q510,420,400,480Q290,540,300,520Z;
                      M320,520Q210,540,130,450Q50,360,90,260Q130,160,240,120Q350,80,440,150Q530,220,520,320Q510,420,410,470Q310,520,320,520Z;
                      M300,520Q190,520,120,430Q50,340,100,240Q150,140,260,110Q370,80,450,150Q530,220,520,320Q510,420,400,480Q290,540,300,520Z" />
          </path>
        </svg>
        <svg className="absolute bottom-0 left-0 w-full h-40 opacity-70" viewBox="0 0 1440 200" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="wave" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
          <path fill="url(#wave)" fillOpacity="0.20" d="M0,100 C300,140 400,40 720,90 C1040,140 1240,60 1440,110 L1440,200 L0,200 Z">
            <animateTransform attributeName="transform" attributeType="XML" type="translate" from="0 0" to="-80 0" dur="10s" repeatCount="indefinite" />
          </path>
          <path fill="url(#wave)" fillOpacity="0.12" d="M0,120 C260,160 460,60 740,110 C1020,160 1180,80 1440,130 L1440,200 L0,200 Z">
            <animateTransform attributeName="transform" attributeType="XML" type="translate" from="0 0" to="80 0" dur="12s" repeatCount="indefinite" />
          </path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal y={12}>
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-teal-900">How We Work</h2>
            <p className="mt-2 text-gray-600">A simple, effective process designed around your recovery.</p>
          </div>
        </Reveal>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <Reveal key={s.step} delay={i * 120} y={18}>
              <div className="relative group rounded-2xl p-5 bg-white/70 backdrop-blur-md border border-white/60 transition-all hover:-translate-y-1 shadow-[0_2px_12px_rgba(34,211,238,0.12)] hover:shadow-[0_16px_40px_rgba(34,211,238,0.30)]">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-100/0 via-white/0 to-white/0 group-hover:from-cyan-100/60 group-hover:to-transparent transition-opacity" />
                <div className="relative flex items-start gap-4">
                  <div className="shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 text-white font-extrabold ring-1 ring-white/50">
                    {s.step}
                  </div>
                  <div>
                    <div className="font-semibold text-teal-900">{s.title}</div>
                    <p className="mt-1 text-sm text-gray-600">{s.desc}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}


