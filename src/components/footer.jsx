import React from 'react'

export default function Footer({
  brand = 'Global Physiotherapy Clinic',
  tagline = 'Discover the power of natural healing with chiropractic care.',
  links = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '#services' },
    { label: 'Contact Us', href: '/contact' }
  ],
  otherPages = [
    { label: 'Ortho Physiotherapy', href: '#' },
    { label: 'Neurological Physiotherapy', href: '#' },
    { label: 'Sports Rehabilitation', href: '#' },
    { label: 'Holistic Nutrition', href: '#' },
    { label: 'Spine Physiotherapy', href: '#' }
  ],
  contact = {
    phone1: '+91-7838202820',
    phone2: '+91-9053072333',
    email: 'info@globalphysioclinic.com',
    address: 'Plot no 264, near Artemis Hospital Rd, Koyal Vihar, Sector 52, Gurugram, Haryana 122413'
  },
  socials = [
    {
      name: 'WhatsApp', href: 'https://wa.me/917206890200', bg: '#25D366', svg: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white"><path d="M20.52 3.48A11.9 11.9 0 0 0 12.06 0C5.5 0 .2 5.29.2 11.83c0 2.08.55 4.1 1.6 5.88L0 24l6.47-1.69a11.8 11.8 0 0 0 5.59 1.42h.01c6.56 0 11.86-5.29 11.86-11.83 0-3.17-1.24-6.14-3.41-8.42ZM12.07 21.6h-.01a9.8 9.8 0 0 1-5.01-1.37l-.36-.21-3.84 1 1.03-3.74-.24-.38a9.7 9.7 0 0 1-1.52-5.08c0-5.38 4.4-9.76 9.8-9.76 2.61 0 5.07 1.01 6.92 2.85a9.62 9.62 0 0 1 2.88 6.9c0 5.38-4.4 9.76-9.8 9.76Zm5.62-7.27c-.31-.16-1.82-.9-2.11-1-.28-.1-.49-.16-.7.16-.21.31-.81 1-.99 1.21-.18.21-.36.23-.67.08-.31-.16-1.3-.47-2.47-1.5-.92-.79-1.54-1.77-1.72-2.08-.18-.31-.02-.48.13-.64.14-.14.31-.36.46-.54.15-.18.2-.31.3-.52.1-.21.05-.39-.02-.54-.07-.16-.7-1.69-.96-2.31-.25-.6-.5-.52-.69-.53l-.59-.01c-.2 0-.52.07-.79.39-.27.31-1.03 1-1.03 2.44 0 1.43 1.06 2.81 1.21 3.01.15.2 2.09 3.19 5 4.47.7.3 1.24.47 1.66.61.7.22 1.35.19 1.86.11.57-.08 1.82-.74 2.08-1.46.26-.72.26-1.34.18-1.46-.08-.12-.28-.2-.59-.36Z"/></svg>
      )
    },
    {
      name: 'Instagram', href: '#', bg: '#E4405F', svg: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white"><path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm0 2h10c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3zm11 1a1 1 0 100 2 1 1 0 000-2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z"/></svg>
      )
    },
    {
      name: 'Facebook', href: '#', bg: '#1877F2', svg: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white"><path d="M22 12.07C22 6.48 17.52 2 11.93 2 6.35 2 1.87 6.48 1.87 12.07c0 4.99 3.65 9.13 8.43 9.93v-7.02H7.9v-2.9h2.4V9.79c0-2.38 1.42-3.69 3.6-3.69 1.04 0 2.13.19 2.13.19v2.34h-1.2c-1.18 0-1.55.73-1.55 1.49v1.79h2.64l-.42 2.9h-2.22V22c4.78-.8 8.43-4.94 8.43-9.93z"/></svg>
      )
    }
  ]
}) {
  return (
    <footer className="bg-gradient-to-b from-cyan-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Logo and Tagline */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-16 h-16 rounded-full bg-teal-800 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-10 h-10 text-white">
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 2C8 6 6 9 6 12a6 6 0 0 0 12 0c0-3-2-6-6-10zm0 0s7 5 7 10a7 7 0 0 1-14 0c0-5 7-10 7-10z"/>
                </svg>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">{tagline}</p>
            <div className="mt-5 flex gap-3">
              {socials.map((s) => (
                <a key={s.name} href={s.href} className="w-9 h-9 rounded-full grid place-items-center hover:opacity-90 transition-opacity" style={{ backgroundColor: s.bg }} aria-label={s.name}>
                  {s.svg || <span className="sr-only">{s.name}</span>}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-teal-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {links.map((l) => (
                <li key={l.label}><a href={l.href} className="text-gray-600 hover:text-teal-900 text-sm transition-colors">{l.label}</a></li>
              ))}
            </ul>
          </div>

          {/* Other Pages */}
          <div>
            <h3 className="font-bold text-teal-900 mb-4">Other Pages</h3>
            <ul className="space-y-2">
              {otherPages.map((l) => (
                <li key={l.label}><a href={l.href} className="text-gray-600 hover:text-teal-900 text-sm transition-colors">{l.label}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-teal-900 mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"/>
                </svg>
                <span className="text-gray-600">{contact.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-teal-600 flex-shrink-0">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.56.57 1 1 0 011 1v3.61a1 1 0 01-1 1A16 16 0 013 5a1 1 0 011-1h3.61a1 1 0 011 1 11.36 11.36 0 00.57 3.56 1 1 0 01-.24 1.01l-2.32 2.22z"/>
                </svg>
                <a href={`tel:${contact.phone1}`} className="text-gray-600 hover:text-teal-900">{contact.phone1}</a>
              </li>
              <li className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-teal-600 flex-shrink-0">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.56.57 1 1 0 011 1v3.61a1 1 0 01-1 1A16 16 0 013 5a1 1 0 011-1h3.61a1 1 0 011 1 11.36 11.36 0 00.57 3.56 1 1 0 01-.24 1.01l-2.32 2.22z"/>
                </svg>
                <a href={`tel:${contact.phone2}`} className="text-gray-600 hover:text-teal-900">{contact.phone2}</a>
              </li>
              <li className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-teal-600 flex-shrink-0">
                  <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <a href={`mailto:${contact.email}`} className="text-gray-600 hover:text-teal-900">{contact.email}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="bg-teal-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-sm">
          <div>Global Physiotherapy Clinic Designed By Rajeev Yadav.</div>
          <div>Copyright © {new Date().getFullYear()}. All rights reserved to Global Physiotherapy</div>
        </div>
      </div>
    </footer>
  )
}


