import React, { useState, useEffect } from 'react';
import Reveal from './reveal.jsx'

const TextRotator = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  
  const conditions = [
    'Scoliosis',
    'Back Pain',
    'Neck Pain',
    'Joint Pain',
    'Sports Injuries'
  ];

  useEffect(() => {
    const cycleText = () => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % conditions.length);
        setIsVisible(true);
      }, 500); // Half of the transition time
    };

    const interval = setInterval(cycleText, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="relative inline-block min-w-[200px] text-cyan-600 font-bold">
      <span 
        className={`inline-block transition-all duration-500 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
        }`}
      >
        {conditions[currentIndex]}
      </span>
    </span>
  );
};

export default function ChiropracticHero() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-cyan-100 relative flex flex-col overflow-hidden">
      {/* Main Content Container */}
      <div className="container mx-auto px-6 pt-12 pb-8 flex-grow flex items-center justify-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <Reveal delay={50} y={18}>
            <div className="space-y-7 max-w-2xl">
            {/* Heading */}
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tighter">
              <span className="text-teal-900 block mb-3">Say Goodbye</span>
              <span className="text-teal-900 block mb-3">To{' '}
              <span className="text-cyan-500">
                <TextRotator />
              </span>
              </span>
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
              Chiropractic is a form of alternative medicine that focuses on
              diagnosing and treating mechanical disorders of the
              musculoskeletal system, particularly the spine.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-teal-900 font-semibold px-8 py-3 rounded-md transition-all duration-300 transform hover:scale-105 text-base shadow-md hover:shadow-lg">
                Get Started
              </button>
              <button className="text-cyan-500 hover:text-cyan-600 font-semibold px-8 py-3 transition-all duration-300 border-2 border-cyan-400 hover:border-cyan-500 rounded-md text-base">
                Learn More
              </button>
            </div>

            {/* Customer Stats Card */}
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 max-w-md mt-4">
              <div className="flex items-center gap-6">
                {/* Patient Image */}
                <div className="flex-shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop"
                    alt="Patient"
                    className="w-20 h-20 rounded-full object-cover"
                  />
                </div>
                
                {/* Stats */}
                <div>
                  <div className="text-3xl font-bold text-teal-900">10K+</div>
                  <div className="text-gray-600 font-medium">Satisfied Customers</div>
                </div>
              </div>
            </div>
            </div>
          </Reveal>

          {/* Right Content - Medical Professional and Spine */}
          <Reveal delay={120} y={24}>
            <div className="relative h-[650px] w-full">
            {/* Spine Model with Labels - Positioned to the left */}
            <div className="absolute -left-40 top-1/2 transform -translate-y-1/2 z-10 w-1/2">
              <div className="relative">
                <img
                  src="/images/BackBone.png"
                  alt="Spine model"
                  className="h-[650px] w-auto object-contain ml-4"
                />
                
                {/* Back Pain Label with Connector */}
                <div className="absolute top-[30%] left-[60%] transform -translate-y-1/2">
                  <div className="relative">
                    <div className="absolute -left-4 top-1/2 w-4 h-0.5 bg-cyan-500"></div>
                    <div className="w-2.5 h-2.5 bg-cyan-500 rounded-full"></div>
                  </div>
                  <div className="absolute left-6 -translate-y-1/2 bg-white/90 px-3 py-1 rounded-full text-teal-900 font-medium text-sm whitespace-nowrap shadow">
                    Back Pain
                  </div>
                </div>
                
                {/* Low Back Pain Label with Connector */}
                <div className="absolute top-[60%] left-[55%] transform -translate-y-1/2">
                  <div className="relative">
                    <div className="absolute -left-4 top-1/2 w-4 h-0.5 bg-cyan-500"></div>
                    <div className="w-2.5 h-2.5 bg-cyan-500 rounded-full"></div>
                  </div>
                  <div className="absolute left-6 -translate-y-1/2 bg-white/90 px-3 py-1 rounded-full text-teal-900 font-medium text-sm whitespace-nowrap shadow">
                    Low Back Pain
                  </div>
                </div>
              </div>
            </div>

            {/* Medical Professional Image - Positioned to the right */}
            <div className="absolute right-0 top-0 bottom-0 z-20 w-2/3 flex items-end">
              <img
                src="/images/img-2.png"
                alt="Medical Professional"
                className="w-full h-[90%] object-cover object-top rounded-tl-3xl rounded-bl-3xl"
              />
            </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Make an Appointment Section */}
      <Reveal delay={150} y={20}>
        <div className="w-[calc(100%-5rem)] sm:w-[calc(100%-10rem)] lg:w-[calc(100%-15rem)] bg-teal-800 rounded-t-3xl px-6 py-6 mt-auto ml-20 lg:ml-40">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-white text-2xl lg:text-3xl font-bold mb-6 text-center">
            Make an Appointment
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pr-4 sm:pr-6">
            {/* Name Input */}
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-3 text-base rounded-md bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 h-full"
            />
            
            {/* Phone Number Input */}
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-4 py-3 text-base rounded-md bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 h-full"
            />
            
            {/* Email Input */}
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 text-base rounded-md bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 h-full"
            />
            
            {/* Services Dropdown */}
            <div className="sm:col-span-2 lg:col-span-1">
              <select
                className="w-full px-4 py-3 text-base rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 appearance-none cursor-pointer h-full"
                defaultValue=""
              >
                <option value="" disabled>Services</option>
                <option value="chiropractic">Chiropractic Care</option>
                <option value="massage">Massage Therapy</option>
                <option value="physiotherapy">Physiotherapy</option>
                <option value="consultation">Consultation</option>
              </select>
            </div>
            
            {/* Date Input */}
            <div className="sm:col-span-1">
              <input
                type="date"
                placeholder="Date"
                className="w-full px-4 py-3 text-base rounded-md bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 h-full"
              />
            </div>
            
            {/* Make Appointment Button */}
            <div className="sm:col-span-1">
              <button className="w-full px-4 py-3 text-base rounded-md bg-yellow-400 hover:bg-yellow-500 text-teal-900 font-semibold transition-all hover:shadow-lg h-full">
                Make Appointment
              </button>
            </div>
          </div>
        </div>
        </div>
      </Reveal>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-colors z-50"
        aria-label="Chat on WhatsApp"
      >
        <svg
          className="w-8 h-8"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>
    </div>
  );
}