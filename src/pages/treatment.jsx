import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { treatments } from '../components/services.jsx'
import Reveal from '../components/reveal.jsx'
import Navbar from '../components/navbar.jsx'
import Footer from '../components/footer.jsx'

export default function Treatment() {
  const { slug } = useParams()
  const item = treatments.find(t => t.slug === slug)

  useEffect(() => {
    if (item) {
      document.title = `${item.title} | Dr. Maan Physiocare`
    } else {
      document.title = 'Treatment | Dr. Maan Physiocare'
    }
    window.scrollTo(0, 0)
  }, [item])

  if (!item) {
    return (
      <section className="min-h-[60vh] bg-gradient-to-b from-[#0b1b2a] via-[#0e2033] to-[#0b1b2a]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">Treatment Not Found</h1>
          <p className="mt-3 text-white/70">The treatment you are looking for does not exist.</p>
          <Link to="/" className="inline-block mt-6 rounded-full bg-[#3b82f6] hover:bg-[#2563eb] text-white font-semibold px-5 py-2">Go Home</Link>
        </div>
      </section>
    )
  }

  // Fallback details if none defined in data
  const details = item.details || {
    overview: item.desc,
    symptoms: [
      `Pain, discomfort, or reduced mobility related to ${item.title.toLowerCase()}.`,
      'Stiffness in the affected area, especially after rest.',
      'Swelling, weakness, or fatigue during daily tasks.'
    ],
    causes: [
      'Overuse or poor posture over time.',
      'Previous injury, surgery, or biomechanical imbalances.',
      'Lifestyle, ergonomics, or age-related degeneration.'
    ],
    approach: [
      'Personalized assessment and goal setting.',
      'Manual therapy, mobilization, and soft-tissue techniques as needed.',
      'Targeted exercise therapy for strength, flexibility, and motor control.',
      'Education on posture, ergonomics, and activity modification.',
      'Home program and progress tracking.'
    ],
    benefits: [
      'Reduced pain and inflammation.',
      'Improved mobility and function.',
      'Better strength, balance, and confidence in daily activities.'
    ],
    faqs: [
      { q: 'How many sessions will I need?', a: 'This depends on your condition and goals. Most clients feel improvement within 3–5 sessions.' },
      { q: 'Will I get a home program?', a: 'Yes, you will receive a personalized plan with clear progressions.' },
      { q: 'Is the treatment safe?', a: 'Yes. We use evidence-based protocols and adjust intensity to your tolerance.' }
    ]
  }

  return (
    <>
    <Navbar />
    <main>
      {/* Hero */}
      {(() => {
        const palette = {
          'arthritis-treatment': '#34d399',
          'back-pain': '#60a5fa',
          'balance-exercise-therapy': '#22d3ee',
          'foot-ankle-pain': '#f59e0b',
          'heat-therapy': '#ef4444',
          'hip-pain': '#8b5cf6',
          'knee-pain': '#10b981',
          'neurological-physiotherapy': '#06b6d4',
          'orthopaedics': '#f97316',
          'paediatric-physiotherapy': '#e879f9',
          'post-surgery': '#f43f5e',
          'physical-therapy': '#38bdf8',
          'shoulder-pain': '#fb7185',
          'spinal-injuries': '#22c55e',
          'post-surgical-rehabilitation': '#7dd3fc'
        }
        const accent = palette[slug] || '#22d3ee'
        return (
          <section className="relative isolate overflow-hidden">
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0b1b2a] via-[#0e2033] to-[#0b1b2a]" />
            {/* Accent glow blobs */}
            <div className="pointer-events-none absolute -top-24 -left-24 w-[28rem] h-[28rem] rounded-full blur-3xl opacity-30" style={{ background: accent }} />
            <div className="pointer-events-none absolute -bottom-24 -right-24 w-[28rem] h-[28rem] rounded-full blur-3xl opacity-25" style={{ background: accent }} />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left: Text */}
                <div className="lg:col-span-6">
                  <Reveal>
                    <nav className="text-white/80 text-sm"><Link to="/" className="hover:text-white">Home</Link> <span className="opacity-70">/</span> <span className="text-white">{item.title}</span></nav>
                    <h1 className="mt-3 text-3xl sm:text-5xl font-extrabold text-white leading-tight">{item.title}</h1>
                    <p className="mt-4 max-w-xl text-white/85">{details.overview}</p>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <a href="#contact" className="inline-flex items-center justify-center rounded-full text-white font-semibold px-5 py-2" style={{ backgroundColor: accent }}>Book Appointment</a>
                      <a href="#learn" className="inline-flex items-center justify-center rounded-full bg-white/10 hover:bg-white/15 text-white ring-1 ring-white/20 font-semibold px-5 py-2">Learn More</a>
                    </div>
                  </Reveal>
                </div>

                {/* Right: Image */}
                <div className="lg:col-span-6">
                  <Reveal delay={120}>
                    <div className="relative mx-auto w-full max-w-[520px] aspect-[4/3] rounded-2xl border border-white/10 bg-white/5 backdrop-blur shadow-[0_0_0_1px_rgba(255,255,255,0.05)] overflow-hidden">
                      <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 ring-1 ring-white/10 rounded-2xl" />
                      <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full" style={{ background: accent, opacity: .15, filter: 'blur(40px)' }} />
                    </div>
                  </Reveal>
                </div>
              </div>

              {/* Seamless transition */}
            </div>
          </section>
        )
      })()}

      {/* Details */}
      <section id="learn" className="bg-gradient-to-b from-[#0b1b2a] via-[#0e2033] to-[#0b1b2a] py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <Reveal>
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 text-white">
                <h2 className="text-xl font-bold">Key Symptoms</h2>
                <ul className="mt-3 list-disc list-inside text-white/80 space-y-1">
                  {details.symptoms.map((s, i) => (<li key={i}>{s}</li>))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 text-white">
                <h2 className="text-xl font-bold">Common Causes</h2>
                <ul className="mt-3 list-disc list-inside text-white/80 space-y-1">
                  {details.causes.map((c, i) => (<li key={i}>{c}</li>))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 text-white">
                <h2 className="text-xl font-bold">Benefits</h2>
                <ul className="mt-3 list-disc list-inside text-white/80 space-y-1">
                  {details.benefits.map((b, i) => (<li key={i}>{b}</li>))}
                </ul>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 text-white">
              <h2 className="text-xl font-bold">Our Approach</h2>
              <ol className="mt-3 list-decimal list-inside text-white/80 space-y-1">
                {details.approach.map((step, i) => (<li key={i}>{step}</li>))}
              </ol>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 text-white">
              <h2 className="text-xl font-bold">FAQs</h2>
              <div className="mt-3 divide-y divide-white/10">
                {details.faqs.map((f, i) => (
                  <details key={i} className="group py-3">
                    <summary className="cursor-pointer list-none flex items-center justify-between text-white/90 font-semibold">
                      <span>{f.q}</span>
                      <span className="ml-4 text-white/60 group-open:rotate-180 transition">▾</span>
                    </summary>
                    <p className="mt-2 text-white/70">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
    <Footer />
    </>
  )
}
