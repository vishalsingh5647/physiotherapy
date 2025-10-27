import React from 'react';
import Reveal from '../components/reveal';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const ContactUs = () => {
  const contactInfo = {
    phone: '+91-7838202820',
    whatsapp: 'https://wa.me/917838202820',
    email: 'info@yourclinic.com',
    address: 'Plot no 264, near Artemis Hospital Rd, Sector 52, Gurugram, Haryana 122022',
    hours: [
      'Monday - Friday: 8:00 AM - 8:00 PM',
      'Saturday: 9:00 AM - 5:00 PM',
      'Sunday: 10:00 AM - 2:00 PM'
    ]
  };

  const socialLinks = [
    { 
      icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M22 12a10 10 0 10-11.6 9.9v-7h-2.4V12h2.4V9.7c0-2.4 1.4-3.7 3.6-3.7 1 0 2 .2 2 .2v2.2h-1.1c-1.1 0-1.5.7-1.5 1.4V12h2.6l-.4 2.9h-2.2v7A10 10 0 0022 12z"/></svg>, 
      url: '#' 
    },
    { 
      icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M22.46 6c-.85.38-1.78.64-2.75.76a4.8 4.8 0 002.1-2.66c-.93.55-1.95.95-3.04 1.17a4.77 4.77 0 00-8.13 4.35A13.54 13.54 0 013.39 4.62a4.77 4.77 0 001.48 6.37 4.75 4.75 0 01-2.16-.6v.06a4.77 4.77 0 003.83 4.68 4.78 4.78 0 01-2.15.08 4.77 4.77 0 004.46 3.31A9.57 9.57 0 012 19.54a13.5 13.5 0 007.29 2.14c8.75 0 13.54-7.25 13.54-13.54 0-.21 0-.41-.01-.61A9.66 9.66 0 0024 4.56a9.52 9.52 0 01-2.54.7z"/></svg>, 
      url: '#' 
    },
    { 
      icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm0 2h10c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3zm11 1a1 1 0 100 2 1 1 0 000-2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z"/></svg>, 
      url: '#' 
    },
    { 
      icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zM9 17H6.5v-7H9v7zM7.75 8.5a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zM18 17h-2.5v-3.5c0-1-.02-2.5-1.5-2.5s-1.5 1.5-1.5 2.5V17H10v-7h2.5v1h.03c.35-.66 1.2-1.36 2.47-1.36 2.64 0 3.13 1.74 3.13 4v3.36z"/></svg>, 
      url: '#' 
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-cyan-100">
      <Navbar />
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-teal-900">Get In Touch</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're here to help and answer any questions you might have. We look forward to hearing from you.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-16 relative">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <Reveal>
              <div className="space-y-8">
                <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                  <h2 className="text-2xl font-bold mb-6 text-teal-900">Contact Information</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="text-cyan-600 mt-1">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"/></svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-teal-900">Our Location</h3>
                        <p className="text-gray-600">{contactInfo.address}</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="text-cyan-600 mt-1">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.56.57 1 1 0 011 1v3.61a1 1 0 01-1 1A16 16 0 013 5a1 1 0 011-1h3.61a1 1 0 011 1 11.36 11.36 0 00.57 3.56 1 1 0 01-.24 1.01l-2.32 2.22z"/></svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-teal-900">Phone Number</h3>
                        <a href={`tel:${contactInfo.phone}`} className="text-cyan-600 hover:text-cyan-700 transition-colors">
                          {contactInfo.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="text-cyan-600 mt-1">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-teal-900">Email Address</h3>
                        <a href={`mailto:${contactInfo.email}`} className="text-cyan-600 hover:text-cyan-700 transition-colors">
                          {contactInfo.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="text-cyan-600 mt-1">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-teal-900">Working Hours</h3>
                        <ul className="space-y-1">
                          {contactInfo.hours.map((hour, index) => (
                            <li key={index} className="text-gray-600">{hour}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h3 className="font-semibold mb-3 text-teal-900">Follow Us</h3>
                    <div className="flex space-x-4">
                      {socialLinks.map((social, index) => (
                        <a 
                          key={index} 
                          href={social.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-10 h-10 flex items-center justify-center rounded-full bg-cyan-50 hover:bg-cyan-100 transition-colors border border-gray-200"
                        >
                          <span className="text-cyan-600 hover:text-cyan-700 transition-colors">
                            {social.icon}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.819397105008!2d77.0932!3d28.4241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI1JzI2LjgiTiA3N8KwMDUnMzUuNSJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Our Location"
                    className="w-full h-64 md:h-full"
                  ></iframe>
                </div>
              </div>
            </Reveal>

            {/* Contact Form */}
            <Reveal delay={120}>
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <h2 className="text-2xl font-bold mb-6 text-teal-900">Send Us a Message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1 text-gray-700">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-colors text-gray-900"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1 text-gray-700">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-colors text-gray-900"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-1 text-gray-700">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-colors text-gray-900"
                      placeholder="+91 1234567890"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-1 text-gray-700">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-colors text-gray-900"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1 text-gray-700">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-colors text-gray-900"
                      placeholder="Tell us about your needs..."
                    ></textarea>
                  </div>

                  <div className="flex items-center">
                    <button
                      type="submit"
                      className="px-8 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                    >
                      Send Message
                    </button>
                    <div className="ml-4 text-sm text-gray-600">
                      We'll get back to you within 24 hours
                    </div>
                  </div>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-3xl font-bold text-center mb-12 text-teal-900">Frequently Asked Questions</h2>
          </Reveal>
          
          <div className="space-y-4">
            {[
              {
                question: "What are your working hours?",
                answer: "Our clinic is open Monday to Friday from 8:00 AM to 8:00 PM, Saturday from 9:00 AM to 5:00 PM, and Sunday from 10:00 AM to 2:00 PM."
              },
              {
                question: "Do I need a referral to book an appointment?",
                answer: "No, you don't need a referral to book an appointment. However, some insurance providers may require a referral for coverage, so we recommend checking with your provider."
              },
              {
                question: "What should I bring to my first appointment?",
                answer: "Please bring your ID, insurance card (if applicable), any relevant medical records or imaging reports, and a list of your current medications."
              },
              {
                question: "Do you accept insurance?",
                answer: "Yes, we accept most major insurance plans. Please contact our office with your insurance information, and we'll be happy to verify your coverage."
              }
            ].map((faq, index) => (
              <Reveal key={index} delay={index * 50}>
                <div className="bg-cyan-50 border border-gray-200 rounded-lg overflow-hidden">
                  <button className="w-full px-6 py-4 text-left focus:outline-none">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium text-teal-900">{faq.question}</h3>
                      <svg className="w-5 h-5 text-cyan-600 transition-transform transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  <div className="px-6 pb-4 pt-0 text-gray-600">
                    {faq.answer}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ContactUs;
