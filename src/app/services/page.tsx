"use client";

// ❌ REMOVED: import Image from "next/image";
// ❌ REMOVED: import { useState } from "react";
// ❌ REMOVED: import { useRouter } from "next/navigation";
// ❌ REMOVED: LoadingSpinner component
// ❌ REMOVED: AppBar component (entire function)

// Service Card Component
function ServiceCard({ title, description, features, price, duration, icon, popular }: {
  title: string;
  description: string;
  features: string[];
  price: string;
  duration: string;
  icon: string;
  popular?: boolean;
}) {
  return (
    <div className={`relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${popular ? 'ring-2 ring-orange-500 scale-105' : ''}`}>
      {popular && (
        <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-center py-2 text-sm font-semibold">
          Most Popular
        </div>
      )}
      
      {/* Service Icon */}
      <div className={`relative h-48 bg-gradient-to-br from-orange-400 to-amber-500 ${popular ? 'mt-10' : ''}`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
            <span className="text-3xl">{icon}</span>
          </div>
        </div>
      </div>

      {/* Service Info */}
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 text-sm mb-4">{description}</p>
        </div>

        {/* Features */}
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 mb-3">What is Included:</h4>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-sm text-gray-600">
                <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Price and Duration */}
        <div className="mb-6">
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-2xl font-bold text-orange-600">{price}</span>
            <span className="text-gray-500 text-sm">AUD</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {duration}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
            popular 
              ? 'bg-orange-600 hover:bg-orange-700 text-white' 
              : 'bg-orange-600 hover:bg-orange-700 text-white'
          }`}>
            Enroll Now
          </button>
          <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  const services = [
    {
      title: "Beginner MIG Welding",
      description: "Perfect for complete beginners. Learn the fundamentals of MIG welding with hands-on practice.",
      features: [
        "Basic safety protocols",
        "Equipment familiarization", 
        "MIG welding techniques",
        "Practice projects",
        "Certificate of completion",
        "Tool kit included"
      ],
      price: "$299",
      duration: "2 weeks (16 hours)",
      icon: "⚡",
      popular: false
    },
    {
      title: "Advanced TIG Welding",
      description: "Master precision TIG welding for stainless steel and aluminum projects.",
      features: [
        "Advanced TIG techniques",
        "Stainless steel welding",
        "Aluminum welding",
        "Precision control training",
        "Advanced safety protocols",
        "Professional certification"
      ],
      price: "$499",
      duration: "3 weeks (24 hours)",
      icon: "🔥",
      popular: true
    },
    {
      title: "Industrial Arc Welding",
      description: "Heavy-duty welding techniques for industrial and construction applications.",
      features: [
        "Stick welding mastery",
        "Structural welding",
        "Industrial safety standards",
        "Heavy metal techniques",
        "Code compliance training",
        "Industry certification"
      ],
      price: "$399",
      duration: "2.5 weeks (20 hours)",
      icon: "🔨",
      popular: false
    },
    {
      title: "Pipeline Welding Specialist",
      description: "Specialized training for high-pressure pipeline welding applications.",
      features: [
        "Pipeline welding standards",
        "High-pressure techniques",
        "X-ray testing preparation",
        "Field welding practices",
        "Safety in hazardous environments",
        "Pipeline certification"
      ],
      price: "$699",
      duration: "4 weeks (32 hours)",
      icon: "🚰",
      popular: false
    },
    {
      title: "Underwater Welding",
      description: "Elite training for underwater welding with commercial diving certification.",
      features: [
        "Underwater welding techniques",
        "Commercial diving basics",
        "Marine safety protocols",
        "Hyperbaric welding",
        "Emergency procedures",
        "Commercial diver certification"
      ],
      price: "$1299",
      duration: "6 weeks (48 hours)",
      icon: "🤿",
      popular: false
    },
    {
      title: "Creative Metal Art",
      description: "Express your creativity through decorative and artistic metalwork.",
      features: [
        "Artistic welding techniques",
        "Design fundamentals",
        "Sculpture creation",
        "Surface finishing",
        "Creative project portfolio",
        "Art studio access"
      ],
      price: "$349",
      duration: "3 weeks (18 hours)",
      icon: "🎨",
      popular: false
    }
  ];

  return (
    <div className="font-sans min-h-screen bg-white">
      {/* ❌ REMOVED: <AppBar /> - Now in layout.tsx */}
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Professional Welding Services
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From beginner basics to advanced specializations. Our comprehensive welding courses 
            are designed to get you certified and job-ready with hands-on training from industry experts.
          </p>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-orange-600 mb-2">100%</div>
            <div className="text-sm text-gray-600">Hands-On Training</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-orange-600 mb-2">95%</div>
            <div className="text-sm text-gray-600">Job Placement Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-orange-600 mb-2">24/7</div>
            <div className="text-sm text-gray-600">Workshop Access</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-orange-600 mb-2">50+</div>
            <div className="text-sm text-gray-600">Industry Partners</div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-orange-600 to-amber-600 rounded-2xl p-8 sm:p-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Ready to Start Your Welding Career?
            </h2>
            <p className="text-orange-100 mb-6 text-lg">
              Join thousands of successful welders who started their journey with us
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Browse All Courses
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}