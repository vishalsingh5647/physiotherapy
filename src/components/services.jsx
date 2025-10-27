import React from 'react'
import Reveal from './reveal.jsx'
import { Link } from 'react-router-dom'

export const treatments = [
  {
    title: 'Arthritis Treatment',
    desc: 'Renowned care for arthritis with personalized, evidence-based physiotherapy.',
    href: 'https://drmaanphysiocare.com/arthritis-treatment/',
    slug: 'arthritis-treatment',
    img: '/images/arthritis-treatment.webp'
  },
  {
    title: 'Back Pain',
    desc: 'Effective and personalized programs to relieve persistent back pain.',
    href: 'https://drmaanphysiocare.com/back-pain/',
    slug: 'back-pain',
    img: '/images/back-pain-s.webp'
  },
  {
    title: 'Balance Exercise Therapy',
    desc: 'Holistic enhancement of balance, coordination, and stability.',
    href: 'https://drmaanphysiocare.com/balance-exercise-therapy/',
    slug: 'balance-exercise-therapy',
    img: '/images/balance-exercise.webp'
  },
  {
    title: 'Foot & Ankle Pain',
    desc: 'Targeted protocols to address foot and ankle dysfunction and pain.',
    href: 'https://drmaanphysiocare.com/foot-ankle-pain/',
    slug: 'foot-ankle-pain',
    img: '/images/foot-ankle-pain.webp'
  },
  {
    title: 'Heat Therapy',
    desc: 'Adjunct thermotherapy to improve circulation and reduce pain.',
    href: 'https://drmaanphysiocare.com/heat-therapy/',
    slug: 'heat-therapy',
    img: '/images/heat-therapy.webp'
  },
  {
    title: 'Hip Pain',
    desc: 'Comprehensive hip rehabilitation to restore mobility and function.',
    href: 'https://drmaanphysiocare.com/hip-pain/',
    slug: 'hip-pain',
    img: '/images/hip-pain.webp'
  },
  {
    title: 'Knee Pain',
    desc: 'Evidence-based care to reduce knee pain and improve daily activity.',
    href: 'https://drmaanphysiocare.com/knee-pain/',
    slug: 'knee-pain',
    img: '/images/knee-pain.webp'
  },
  {
    title: 'Neurological Physiotherapy',
    desc: 'Specialized neuro-rehab focused on safety and functional outcomes.',
    href: 'https://drmaanphysiocare.com/neurological-physiotherapy/',
    slug: 'neurological-physiotherapy',
    img: '/images/Neurological.webp'
  },
  {
    title: 'Orthopaedics',
    desc: 'Orthopaedic rehab for musculoskeletal injuries and post-fracture care.',
    href: 'https://drmaanphysiocare.com/orthopaedics/',
    slug: 'orthopaedics',
    img: '/images/orthopaedic.webp'
  },
  {
    title: 'Paediatric Physiotherapy',
    desc: 'Child-focused therapy tailored to unique developmental needs.',
    href: 'https://drmaanphysiocare.com/paediatric-physiotherapy/',
    slug: 'paediatric-physiotherapy',
    img: '/images/paediatric.webp'
  },
  {
    title: 'Post Surgery',
    desc: 'Guided rehabilitation to accelerate recovery after surgery.',
    href: 'https://drmaanphysiocare.com/post-surgery/',
    slug: 'post-surgery',
    img: '/images/post-surgery.webp'
  },
  {
    title: 'Physical Therapy',
    desc: 'Comprehensive physiotherapy programs driven by best practices.',
    href: 'https://drmaanphysiocare.com/physical-therapy/',
    slug: 'physical-therapy',
    img: '/images/physical-therapy.webp'
  },
  {
    title: 'Shoulder Pain',
    desc: 'Relief and restoration programs for shoulder dysfunction.',
    href: 'https://drmaanphysiocare.com/shoulder-pain/',
    slug: 'shoulder-pain',
    img: '/images/shoulder-pain.webp'
  },
  {
    title: 'Spinal Injuries',
    desc: 'Focused spinal rehab supporting function and long-term outcomes.',
    href: 'https://drmaanphysiocare.com/spinal-injuries/',
    slug: 'spinal-injuries',
    img: '/images/spin-injuries.webp'
  },
  {
    title: 'Post-Surgical Rehabilitation',
    desc: 'Structured post-op programs beyond the immediate recovery phase.',
    href: 'https://drmaanphysiocare.com/post-surgical-rehabilitation/',
    slug: 'post-surgical-rehabilitation',
    img: '/images/post-surgery.webp'
  }
]


export default function Services({ items = treatments }) {
  return (
    <section id="services" className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-teal-900">Our Treatment</h2>
        <p className="mt-2 text-center text-gray-600 max-w-3xl mx-auto">Explore specialized physiotherapy treatments tailored to your condition and recovery goals.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 md:gap-y-16">
          {items.map((t, i) => (
            <Reveal key={t.title} delay={i * 50}>
              <Link to={`/treatment/${t.slug}`} aria-label={t.title} className="group block text-left rounded-2xl border border-gray-200 bg-white p-6 shadow-[0_2px_10px_rgba(239,68,68,0.14)] hover:shadow-[0_14px_34px_rgba(239,68,68,0.34)] hover:-translate-y-1 transition-all ring-1 ring-transparent hover:ring-red-200/70">
                <div className="mx-auto w-48 h-48 sm:w-56 sm:h-56 rounded-full border-2 border-dotted border-emerald-400/70 p-1 ring-1 ring-white/10 group-hover:ring-white/20 transition">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <img loading="lazy" decoding="async" src={t.img} alt={t.title} className="w-full h-full object-cover transform transition duration-500 group-hover:scale-105" />
                  </div>
                </div>
                <h3 className="mt-5 text-xl font-extrabold text-teal-900">{t.title}</h3>
                <p className="mt-2 text-gray-600 max-w-md text-sm leading-relaxed">
                  {t.desc}
                </p>
                <div className="mt-4 inline-flex items-center gap-2 text-cyan-600 font-semibold">
                  <span>Learn more</span>
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M5 12h12M13 6l6 6-6 6"/></svg>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}


