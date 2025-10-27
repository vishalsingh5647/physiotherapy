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
      <section className="min-h-[60vh] bg-gradient-to-br from-cyan-50 to-cyan-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-teal-900">Treatment Not Found</h1>
          <p className="mt-3 text-gray-600">The treatment you are looking for does not exist.</p>
          <Link to="/" className="inline-block mt-6 rounded-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold px-5 py-2">Go Home</Link>
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
          <section className="relative isolate overflow-hidden bg-gradient-to-br from-cyan-50 to-cyan-100">

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left: Text */}
                <div className="lg:col-span-6">
                  <Reveal>
                    <nav className="text-gray-600 text-sm"><Link to="/" className="hover:text-teal-900">Home</Link> <span className="opacity-70">/</span> <span className="text-teal-900 font-semibold">{item.title}</span></nav>
                    <h1 className="mt-3 text-3xl sm:text-5xl font-extrabold text-teal-900 leading-tight">{item.title}</h1>
                    <p className="mt-4 max-w-xl text-gray-600">{details.overview}</p>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <a href="/contact" className="inline-flex items-center justify-center rounded-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold px-5 py-2">Book Appointment</a>
                      <a href="#learn" className="inline-flex items-center justify-center rounded-full bg-white hover:bg-gray-50 text-teal-900 ring-1 ring-gray-300 font-semibold px-5 py-2">Learn More</a>
                    </div>
                  </Reveal>
                </div>

                {/* Right: Image */}
                <div className="lg:col-span-6">
                  <Reveal delay={120}>
                    <div className="relative mx-auto w-full max-w-[520px] aspect-[4/3] rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
                      <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
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
      <section id="learn" className="bg-white py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <Reveal>
              <div className="rounded-2xl border border-gray-200 bg-cyan-50 p-6 shadow-sm">
                <h2 className="text-xl font-bold text-teal-900">Key Symptoms</h2>
                <ul className="mt-3 list-disc list-inside text-gray-700 space-y-1">
                  {details.symptoms.map((s, i) => (<li key={i}>{s}</li>))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="rounded-2xl border border-gray-200 bg-cyan-50 p-6 shadow-sm">
                <h2 className="text-xl font-bold text-teal-900">Common Causes</h2>
                <ul className="mt-3 list-disc list-inside text-gray-700 space-y-1">
                  {details.causes.map((c, i) => (<li key={i}>{c}</li>))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="rounded-2xl border border-gray-200 bg-cyan-50 p-6 shadow-sm">
                <h2 className="text-xl font-bold text-teal-900">Benefits</h2>
                <ul className="mt-3 list-disc list-inside text-gray-700 space-y-1">
                  {details.benefits.map((b, i) => (<li key={i}>{b}</li>))}
                </ul>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <div className="mt-8 rounded-2xl border border-gray-200 bg-cyan-50 p-6 shadow-sm">
              <h2 className="text-xl font-bold text-teal-900">Our Approach</h2>
              <ol className="mt-3 list-decimal list-inside text-gray-700 space-y-1">
                {details.approach.map((step, i) => (<li key={i}>{step}</li>))}
              </ol>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="mt-8 rounded-2xl border border-gray-200 bg-cyan-50 p-6 shadow-sm">
              <h2 className="text-xl font-bold text-teal-900">FAQs</h2>
              <div className="mt-3 divide-y divide-gray-200">
                {details.faqs.map((f, i) => (
                  <details key={i} className="group py-3">
                    <summary className="cursor-pointer list-none flex items-center justify-between text-teal-900 font-semibold">
                      <span>{f.q}</span>
                      <span className="ml-4 text-gray-600 group-open:rotate-180 transition">▾</span>
                    </summary>
                    <p className="mt-2 text-gray-600">{f.a}</p>
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
