import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Reveal from '../components/reveal';

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
    { icon: <FaFacebook />, url: '#' },
    { icon: <FaTwitter />, url: '#' },
    { icon: <FaInstagram />, url: '#' },
    { icon: <FaLinkedin />, url: '#' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b1b2a] to-[#0e2033] text-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[url('/src/assets/contact-bg.jpg')] bg-cover bg-center opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b1b2a]/90 to-[#0e2033]/90"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Get In Touch</h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              We're here to help and answer any questions you might have. We look forward to hearing from you.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-16 relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-24 -left-20 w-[28rem] h-[28rem] bg-sky-500/5 blur-3xl rounded-full" />
          <div className="absolute -bottom-24 -right-20 w-[28rem] h-[28rem] bg-teal-400/5 blur-3xl rounded-full" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <Reveal>
              <div className="space-y-8">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="text-blue-400 mt-1">
                        <FaMapMarkerAlt size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold">Our Location</h3>
                        <p className="text-blue-100">{contactInfo.address}</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="text-blue-400 mt-1">
                        <FaPhone size={18} />
                      </div>
                      <div>
                        <h3 className="font-semibold">Phone Number</h3>
                        <a href={`tel:${contactInfo.phone}`} className="text-blue-300 hover:text-blue-400 transition-colors">
                          {contactInfo.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="text-blue-400 mt-1">
                        <FaEnvelope size={18} />
                      </div>
                      <div>
                        <h3 className="font-semibold">Email Address</h3>
                        <a href={`mailto:${contactInfo.email}`} className="text-blue-300 hover:text-blue-400 transition-colors">
                          {contactInfo.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="text-blue-400 mt-1">
                        <FaClock size={18} />
                      </div>
                      <div>
                        <h3 className="font-semibold">Working Hours</h3>
                        <ul className="space-y-1">
                          {contactInfo.hours.map((hour, index) => (
                            <li key={index} className="text-blue-100">{hour}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h3 className="font-semibold mb-3">Follow Us</h3>
                    <div className="flex space-x-4">
                      {socialLinks.map((social, index) => (
                        <a 
                          key={index} 
                          href={social.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-blue-500/20 transition-colors border border-white/10"
                        >
                          <span className="text-blue-300 hover:text-white transition-colors">
                            {social.icon}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10">
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
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
                      placeholder="+91 1234567890"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
                      placeholder="Tell us about your needs..."
                    ></textarea>
                  </div>

                  <div className="flex items-center">
                    <button
                      type="submit"
                      className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#0e2033]"
                    >
                      Send Message
                    </button>
                    <div className="ml-4 text-sm text-blue-200">
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
      <section className="py-16 bg-gradient-to-b from-[#0e2033] to-[#0b1b2a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
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
                <div className="bg-white/5 border border-white/10 rounded-lg overflow-hidden">
                  <button className="w-full px-6 py-4 text-left focus:outline-none">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">{faq.question}</h3>
                      <svg className="w-5 h-5 text-blue-400 transition-transform transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  <div className="px-6 pb-4 pt-0 text-blue-100">
                    {faq.answer}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
