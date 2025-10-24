import React, { useEffect, useState } from 'react'
import Navbar from '../components/navbar.jsx'
import About from '../components/about.jsx'
import Footer from '../components/footer.jsx'
import Reveal from '../components/reveal.jsx'

export default function AboutUs() {
  const testimonials = [
    {
      quote: 'Consulted Dr Maan for facial palsy, he treated me very well and regularly reviewed, very much happy with the results. His treatment protocol and exercises helped me very much and completely cured my issue. Thanks a lot to him and the staff.',
      author: 'Its Crazy',
      role: 'Patient',
      initials: 'I',
      stars: 5
    },
    {
      quote: "Had a severe tendon tear for about a year due to gym activities; many physio centres asked for MRI scans and didn't mention proper diagnosis. Dr. Maan diagnosed my injury and helped me to cure.",
      author: 'Rahul Kumar',
      role: 'Patient',
      initials: 'R',
      stars: 4
    },
    {
      quote: 'Professional, caring, and effective rehabilitation plan. My mobility improved within weeks.',
      author: 'Neha Sharma',
      role: 'Patient',
      initials: 'N',
      stars: 5
    }
  ]
  const [idx, setIdx] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % testimonials.length), 5000)
    return () => clearInterval(t)
  }, [])
  return (
    <>
      <Navbar />
      <main className="bg-gradient-to-b from-[#0b1b2a] via-[#0e2033] to-[#0b1b2a]">
        {/* Hero header */}
        <section className="relative isolate overflow-hidden">
          <div className="absolute -top-24 -left-24 w-[28rem] h-[28rem] rounded-full blur-3xl opacity-25 bg-[#22d3ee]" />
          <div className="absolute -bottom-24 -right-24 w-[28rem] h-[28rem] rounded-full blur-3xl opacity-20 bg-emerald-400" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
            <Reveal>
              <nav className="text-white/80 text-sm">Home <span className="opacity-70">/</span> <span className="text-white">About Us</span></nav>
              <h1 className="mt-3 text-3xl sm:text-5xl font-extrabold text-white leading-tight">About Our Clinic</h1>
              <p className="mt-3 max-w-3xl text-white/80">We combine compassionate care with evidence-based physiotherapy to restore movement, relieve pain, and empower your long-term recovery.</p>
            </Reveal>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <Reveal>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Our Story</h2>
                <p className="mt-4 text-white/80 leading-relaxed">Founded with a vision to deliver outcomes-focused physiotherapy, our clinic blends manual therapy, exercise science, and patient education. We believe sustainable recovery comes from understanding the root cause and guiding you through every stage of rehabilitation.</p>
                <ul className="mt-5 space-y-2 text-white/80">
                  <li className="flex items-start gap-3"><span className="w-5 h-5 rounded-full bg-[#22d3ee] mt-0.5"/>Evidence-based protocols tailored to your goals</li>
                  <li className="flex items-start gap-3"><span className="w-5 h-5 rounded-full bg-emerald-400 mt-0.5"/>1:1 attention and measurable progress</li>
                  <li className="flex items-start gap-3"><span className="w-5 h-5 rounded-full bg-[#60a5fa] mt-0.5"/>Clear home programs and prevention strategies</li>
                </ul>
              </Reveal>
            </div>
            <div className="lg:col-span-6">
              <Reveal delay={120}>
                <div className="relative mx-auto w-full max-w-[560px] aspect-[4/3] rounded-2xl border border-white/10 bg-white/5 backdrop-blur shadow-[0_0_0_1px_rgba(255,255,255,0.05)] overflow-hidden">
                  <img src="/images/physical-therapy.webp" alt="Our clinic" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 ring-1 ring-white/10 rounded-2xl" />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-center text-2xl sm:text-3xl font-extrabold text-white">Our Values</h3>
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {title:'Patient-First Care', desc:'Respect, clarity, and shared decisions at every step.', icon:'#22d3ee'},
                {title:'Integrity', desc:'Honest guidance—no unnecessary treatments.', icon:'#60a5fa'},
                {title:'Evidence-Based', desc:'Grounded in current research and best practices.', icon:'#34d399'},
                {title:'Progress You Can See', desc:'Track outcomes and celebrate milestones.', icon:'#f59e0b'},
                {title:'Education', desc:'Understand your condition and prevention tools.', icon:'#fb7185'},
                {title:'Community', desc:'A supportive environment to keep you moving.', icon:'#8b5cf6'},
              ].map((v,i)=> (
                <Reveal key={v.title} delay={i*80}>
                  <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 text-white shadow-[0_0_0_1px_rgba(255,255,255,0.05)]">
                    <div className="w-10 h-10 rounded-lg" style={{background:v.icon}}/>
                    <h4 className="mt-3 font-semibold">{v.title}</h4>
                    <p className="mt-2 text-white/70 text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Stats strip */}
        <section className="py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                {kpi:'15+', label:'Years Experience'},
                {kpi:'10k+', label:'Sessions Delivered'},
                {kpi:'95%', label:'Patient Satisfaction'},
                {kpi:'12+', label:'Specialty Services'}
              ].map((s,i)=> (
                <div key={s.label} className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-5 text-center text-white">
                  <div className="text-2xl font-extrabold">{s.kpi}</div>
                  <div className="text-white/70 text-sm mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team snapshot */}
        <section className="py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-center text-2xl sm:text-3xl font-extrabold text-white">Meet the Team</h3>
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {name:'Dr. Maan', role:'Lead Physiotherapist', img:'/images/orthopaedic.webp'},
                {name:'Anita Verma', role:'Rehab Specialist', img:'/images/paediatric.webp'},
                {name:'Rohit Singh', role:'Sports Physio', img:'/images/back-pain-s.webp'}
              ].map((t,i)=> (
                <Reveal key={t.name} delay={i*90}>
                  <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-4 text-white shadow-[0_0_0_1px_rgba(255,255,255,0.05)]">
                    <div className="aspect-[4/3] rounded-xl overflow-hidden">
                      <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="mt-3">
                      <div className="font-semibold">{t.name}</div>
                      <div className="text-sm text-white/70">{t.role}</div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA banner */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 sm:p-8 text-white flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h4 className="text-xl font-extrabold">Ready to start your recovery?</h4>
                <p className="text-white/80">Book a consultation and we’ll tailor a plan for your goals.</p>
              </div>
              <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-[#3b82f6] hover:bg-[#2563eb] text-white font-semibold px-5 py-2">Book Appointment</a>
            </div>
          </div>
        </section>

        {/* What Our Clients Say */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-extrabold">
                <span className="text-white">WHAT OUR </span>
                <span className="text-[#22c55e]">CLIENTS SAY</span>
              </h2>
              <p className="mt-2 text-white/70">Real stories from patients who trusted us with their recovery.</p>
            </div>

            <div className="relative">
              {/* Background pattern */}
              <svg className="absolute -z-10 inset-0 w-full h-full opacity-[0.07]" viewBox="0 0 400 200" preserveAspectRatio="none" aria-hidden>
                <defs>
                  <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="1.5" cy="1.5" r="1.5" fill="#ffffff" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#dots)" />
              </svg>

              

              <Reveal>
                <div className="mx-auto max-w-3xl rounded-3xl bg-white text-[#0b1b2a] p-7 sm:p-8 shadow-2xl border border-white/10">
                  <div className="relative">
                    {/* Speech bubble tail */}
                    <span className="absolute -left-3 top-6 w-6 h-6 rotate-45 bg-white border-l border-t border-white/10" aria-hidden></span>
                    <p className="text-lg leading-relaxed">“{testimonials[idx].quote}”</p>
                  </div>
                  <div className="mt-4 flex items-center text-amber-500" aria-hidden>
                    {Array.from({length: 5}).map((_,i)=> (
                      <svg key={i} className={`w-4 h-4 ${i < testimonials[idx].stars ? '' : 'opacity-30'}`} viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                    ))}
                  </div>
                  <div className="mt-5 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#0b1b2a] text-white grid place-items-center font-semibold">{testimonials[idx].initials}</div>
                    <div>
                      <div className="font-semibold">{testimonials[idx].author}</div>
                      <div className="text-sm text-[#0b1b2a]/70">{testimonials[idx].role}</div>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center justify-between">
                    <div className="flex gap-2">
                      {testimonials.map((_, i) => (
                        <button key={i} aria-label={`Go to slide ${i+1}`} onClick={()=>setIdx(i)} className={`w-2.5 h-2.5 rounded-full ${i===idx ? 'bg-[#22c55e]' : 'bg-[#22c55e]/40'}`}></button>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <button onClick={()=>setIdx((idx-1+testimonials.length)%testimonials.length)} className="px-3 py-1 rounded-full bg-[#0b1b2a] text-white/80 hover:text-white">Prev</button>
                      <button onClick={()=>setIdx((idx+1)%testimonials.length)} className="px-3 py-1 rounded-full bg-[#0b1b2a] text-white/80 hover:text-white">Next</button>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
