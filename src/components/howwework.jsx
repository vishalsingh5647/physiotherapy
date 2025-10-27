import React from 'react'
import Reveal from './reveal.jsx'

export default function HowWeWork() {
  const steps = [
    {
      number: '01',
      title: 'Make Appointment',
      description: 'Book your Appointment On line by simply placing a call or Email us'
    },
    {
      number: '02',
      title: 'Get Consultation',
      description: 'Schedule your consultation online with a quick call or email us today!'
    },
    {
      number: '03',
      title: 'Chiropractic Therapy',
      description: 'Spinal adjustments and manipulations to relieve pain, improve function, and enhance health, tailored to your needs'
    },
    {
      number: '04',
      title: 'Enjoy Your Therapy',
      description: 'Enjoy the relief and improved well-being after your personalized chiropractic therapy.'
    }
  ]

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-teal-900">How We Work</h2>
          <p className="mt-3 text-gray-600 max-w-3xl mx-auto">
            We have a team of experts, including Physiotherapists and Dietician who are dedicated to providing you with the highest quality of care
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection line - hidden on mobile */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-gray-300 via-cyan-300 to-cyan-200" style={{ width: 'calc(100% - 8rem)', left: '4rem' }}></div>
          
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 100}>
              <div className="text-center relative">
                <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full text-3xl font-bold mb-6 relative z-10 ${
                  i === 0 ? 'bg-gray-400 text-white' :
                  i === 1 ? 'bg-cyan-400 text-white' :
                  i === 2 ? 'bg-cyan-300 text-teal-900' :
                  'bg-cyan-100 text-teal-900'
                }`}>
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-teal-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
