import React from 'react'

export default function Hero({
  backgroundSrc = '../images/img-1.jpg',
  backgroundAlt = 'Physiotherapy background',
  headline = 'Natural Recovery\nfor Every Body',
  accent = 'Expert Physiotherapy Care',
  subheading = 'Let nature guide your healing with time-tested remedies and gentle, tailored support.',
  primaryCta = { label: 'Book an Appointment', href: '#book' },
  secondaryCta = { label: 'Call Now', href: 'tel:+91 7206890200' },
  social = [
    { name: 'WhatsApp', href: 'https://wa.me/7206890200', bg: '#25D366', svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M20.52 3.48A11.9 11.9 0 0 0 12.06 0C5.5 0 .2 5.29.2 11.83c0 2.08.55 4.1 1.6 5.88L0 24l6.47-1.69a11.8 11.8 0 0 0 5.59 1.42h.01c6.56 0 11.86-5.29 11.86-11.83 0-3.17-1.24-6.14-3.41-8.42ZM12.07 21.6h-.01a9.8 9.8 0 0 1-5.01-1.37l-.36-.21-3.84 1 1.03-3.74-.24-.38a9.7 9.7 0 0 1-1.52-5.08c0-5.38 4.4-9.76 9.8-9.76 2.61 0 5.07 1.01 6.92 2.85a9.62 9.62 0 0 1 2.88 6.9c0 5.38-4.4 9.76-9.8 9.76Zm5.62-7.27c-.31-.16-1.82-.9-2.11-1-.28-.1-.49-.16-.7.16-.21.31-.81 1-.99 1.21-.18.21-.36.23-.67.08-.31-.16-1.3-.47-2.47-1.5-.92-.79-1.54-1.77-1.72-2.08-.18-.31-.02-.48.13-.64.14-.14.31-.36.46-.54.15-.18.2-.31.3-.52.1-.21.05-.39-.02-.54-.07-.16-.7-1.69-.96-2.31-.25-.6-.5-.52-.69-.53l-.59-.01c-.2 0-.52.07-.79.39-.27.31-1.03 1-1.03 2.44 0 1.43 1.06 2.81 1.21 3.01.15.2 2.09 3.19 5 4.47.7.3 1.24.47 1.66.61.7.22 1.35.19 1.86.11.57-.08 1.82-.74 2.08-1.46.26-.72.26-1.34.18-1.46-.08-.12-.28-.2-.59-.36Z"/></svg>
    ) },
    { name: 'Instagram', href: '#', bg: '#E4405F', svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm0 2h10c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3zm11 1a1 1 0 100 2 1 1 0 000-2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z"/></svg>
    ) },
    { name: 'Facebook', href: '#', bg: '#1877F2', svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M22 12.07C22 6.48 17.52 2 11.93 2 6.35 2 1.87 6.48 1.87 12.07c0 4.99 3.65 9.13 8.43 9.93v-7.02H7.9v-2.9h2.4V9.79c0-2.38 1.42-3.69 3.6-3.69 1.04 0 2.13.19 2.13.19v2.34h-1.2c-1.18 0-1.55.73-1.55 1.49v1.79h2.64l-.42 2.9h-2.22V22c4.78-.8 8.43-4.94 8.43-9.93z"/></svg>
    ) }
  ]
}) {
  return (
    <section className="relative isolate min-h-[85vh] overflow-hidden">
      {/* Full-bleed background */}
      <div className="absolute inset-0 -z-10">
        <img src={backgroundSrc} alt={backgroundAlt} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#0b1b2a]/10"/>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"/>
        <div className="absolute -top-20 -right-20 w-[32rem] h-[32rem] bg-[#0ea5a2]/20 blur-3xl rounded-full"/>
      </div>

      <div className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            {/* Social vertical bar */}
            <div className="hidden lg:block absolute left-4 top-1/2 -translate-y-1/2 z-10">
              <div className="flex flex-col gap-4">
                {social.map((s) => (
                  <a key={s.name} href={s.href} aria-label={s.name} className="w-10 h-10 rounded-full grid place-items-center shadow-lg" style={{ backgroundColor: s.bg }}>
                    <span className="text-white">{s.svg}</span>
                  </a>
                ))}
              </div>
            </div>
            {/* Left: Text block */}
            <div className="lg:col-span-7 text-white">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 ring-1 ring-white/20 px-3 py-1 backdrop-blur">
                <span className="w-1.5 h-1.5 rounded-full bg-[#22d3ee]"/>
                <span className="text-[11px] tracking-[0.18em] font-semibold uppercase">{accent}</span>
              </div>
              <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-sky-300">
                {headline.split('\n').map((line, i, arr) => (
                  <span key={i}>
                    {line}
                    {i < arr.length - 1 && <br />}
                  </span>
                ))}
              </h1>
              <p className="mt-5 text-white/80 max-w-2xl">
                {subheading}
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:items-center">
                <a href={primaryCta.href} className="inline-flex items-center justify-center rounded-xl bg-[#3b82f6] hover:bg-[#2563eb] text-white font-semibold px-6 py-3 text-sm shadow-sm">
                  {primaryCta.label}
                </a>
                <a href={secondaryCta.href} className="inline-flex items-center justify-center rounded-xl bg-white/10 hover:bg-white/15 text-white ring-1 ring-[#3b82f6]/40 font-semibold px-6 py-3 text-sm backdrop-blur">
                  {secondaryCta.label}
                </a>
              </div>
            </div>

            {/* Right: Empty to mirror reference composition */}
            <div className="lg:col-span-5"/>
          </div>
        </div>
      </div>

      {/* Bottom divider removed intentionally */}
    </section>
  )
}


