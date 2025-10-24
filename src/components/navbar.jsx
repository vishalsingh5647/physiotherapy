import React, { useState, useEffect } from 'react'
import { treatments } from './services.jsx'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

function Icon({ children, className = '' }) {
  return (
    <span className={`inline-flex items-center justify-center w-4 h-4 ${className}`} aria-hidden>
      {children}
    </span>
  )
}

export default function Navbar() {
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const pathname = location?.pathname || '/'
  const isTreatment = pathname.startsWith('/treatment/')
  const currentSlug = isTreatment ? pathname.split('/').pop() : null
  useEffect(() => { setOpen(false) }, [pathname])
  return (
    <header className="w-full relative z-50">
      <div className="w-full bg-[#072c41] text-white text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-2 gap-3">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <a href="tel:+91 7206890200" className="flex items-center gap-2 hover:opacity-90">
                <Icon>
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.56.57 1 1 0 011 1v3.61a1 1 0 01-1 1A16 16 0 013 5a1 1 0 011-1h3.61a1 1 0 011 1 11.36 11.36 0 00.57 3.56 1 1 0 01-.24 1.01l-2.32 2.22z"/></svg>
                </Icon>
                <span>+91 7206890200</span>
              </a>
              <a href="mailto:xyz@gmail.com" className="flex items-center gap-2 hover:opacity-90">
                <Icon>
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                </Icon>
                <span>xyz@gmail.com</span>
              </a>
              <div className="flex items-center gap-2">
                <Icon>
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 6a1 1 0 011-1h16a1 1 0 011 1v2H3V6zm0 5h18v7a1 1 0 01-1 1H4a1 1 0 01-1-1v-7zm5 6h8v-2H8v2z"/></svg>
                </Icon>
                <span>Mon to Sat: 9:00AM to 10:00PM, Sun: 5:00 to 10:00</span>
              </div>
            </div>
            <div className="flex items-center gap-4 opacity-90">
              <a href="#" aria-label="Facebook" className="hover:opacity-100">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 10-11.6 9.9v-7h-2.4V12h2.4V9.7c0-2.4 1.4-3.7 3.6-3.7 1 0 2 .2 2 .2v2.2h-1.1c-1.1 0-1.5.7-1.5 1.4V12h2.6l-.4 2.9h-2.2v7A10 10 0 0022 12z"/></svg>
              </a>
              <a href="#" aria-label="Instagram" className="hover:opacity-100">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 5a5 5 0 100 10 5 5 0 000-10zm6-1a1 1 0 100 2 1 1 0 000-2zm-6 3a3 3 0 110 6 3 3 0 010-6z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#0b1b2a]/90 backdrop-blur supports-[backdrop-filter]:bg-[#0b1b2a]/70 border-b border-white/10 relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4 gap-6">
            <a href="#" className="flex items-center gap-2 shrink-0">
              <span className="w-8 h-8 rounded-full bg-[#3b82f6] text-white grid place-items-center text-lg font-bold">P</span>
              <span className="text-white text-lg sm:text-xl font-semibold leading-tight">DR.AMULYA VEER DHAWAN<br className="hidden sm:block"/>PHYSIOCARE</span>
            </a>

            <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
              <Link to="/" className="font-semibold text-white">Home</Link>
              <Link to="/about" className="hover:text-white">About Us</Link>
              <div className="relative">
                <button type="button" onClick={() => setOpen(o => !o)} className={`inline-flex items-center gap-1 ${isTreatment ? 'text-white font-semibold' : 'hover:text-white'}`} aria-expanded={open} aria-haspopup="true">
                  Our Treatment
                  <svg className="w-4 h-4 opacity-80" viewBox="0 0 24 24" fill="currentColor"><path d="M7 10l5 5 5-5"/></svg>
                </button>
                <div className={`absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[1100px] max-w-[95vw] transition z-[1000] ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                  <div className="grid grid-cols-5 gap-3 rounded-xl border border-white/10 bg-[#0b1b2a]/95 backdrop-blur p-3 shadow-2xl">
                    {treatments.map(t => {
                      const active = currentSlug === t.slug
                      return (
                        <Link key={t.title} to={`/treatment/${t.slug}`} onClick={() => setOpen(false)} className={`group/item rounded-lg p-3 text-center hover:bg-white/5 ${active ? 'bg-white/10 ring-1 ring-white/20' : ''}`}>
                          <img src={t.img} alt="" className={`mx-auto w-12 h-12 rounded-full object-cover ring-1 ${active ? 'ring-[#22d3ee]' : 'ring-white/10'}`} loading="lazy" />
                          <div className={`mt-2 font-semibold text-[13px] leading-tight line-clamp-2 ${active ? 'text-white' : 'text-white'}`}>{t.title}</div>
                          <div className="mt-1 text-white/60 text-[11px] leading-snug line-clamp-2">{t.desc}</div>
                        </Link>
                      )
                    })}
                  </div>
                </div>
              </div>
              <a href="#technology" className="hover:text-white">Technology</a>
              <a href="#testimonials" className="hover:text-white">Testimonials</a>
              <a href="#contact" className="hover:text-white">Contact Us</a>
            </nav>

            <div className="flex items-center gap-3">
              <a href="#contact" className="hidden md:inline-block bg-[#3b82f6] hover:bg-[#2563eb] text-white text-sm font-semibold px-4 py-2 rounded-full">Book An Appointment</a>
              <button className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-md border border-white/20 text-white" aria-label="Open Menu">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"/></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

