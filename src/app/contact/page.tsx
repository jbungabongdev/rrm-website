"use client";
import React, { useState } from 'react';

export default function ContactPagePreview() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Orange AppBar Preview */}
      <div className="bg-gradient-to-r from-orange-50 to-amber-50 border-b border-orange-200 p-4">
        <div className="text-center">
          <span className="text-orange-800 font-bold text-lg">WeldLearn Contact Page Preview</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get in touch with us to start your welding journey or learn more about our programs
          </p>
        </div>

        {/* Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input 
                    type="text" 
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input 
                    type="text" 
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="Smith"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input 
                  type="tel" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="(08) 1234 5678"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Service Request</label>
                <select 
                  value={formData.course}
                  onChange={(e) => setFormData({...formData, course: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                >
                  <option value="">Select a program</option>
                  <option value="mig">MIG Welding Course</option>
                  <option value="tig">TIG Welding Course</option>
                  <option value="arc">Arc Welding Course</option>
                  <option value="pipeline">Pipeline Welding</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea 
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Tell us about your welding goals..."
                />
              </div>
              
              <button 
                onClick={handleSubmit}
                className="w-full bg-orange-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
              >
                Send Message
              </button>
            </div>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-orange-50 rounded-xl p-6 border-l-4 border-orange-500">
                <div className="flex items-center mb-3">
                  <div className="bg-orange-100 p-2 rounded-full mr-3">
                    <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900">Visit Our Campus</h3>
                </div>
                <p className="text-gray-600">123 Industrial Drive<br />Perth WA 6000<br />Australia</p>
              </div>

              <div className="bg-orange-50 rounded-xl p-6 border-l-4 border-orange-500">
                <div className="flex items-center mb-3">
                  <div className="bg-orange-100 p-2 rounded-full mr-3">
                    <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900">Call Us</h3>
                </div>
                <p className="text-gray-600">
                  <strong>(08) 9123 4567</strong><br />
                  Mon - Fri: 8:00 AM - 6:00 PM<br />
                  Sat: 9:00 AM - 2:00 PM
                </p>
              </div>

              <div className="bg-orange-50 rounded-xl p-6 border-l-4 border-orange-500">
                <div className="flex items-center mb-3">
                  <div className="bg-orange-100 p-2 rounded-full mr-3">
                    <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900">Email Us</h3>
                </div>
                <p className="text-gray-600">
                  <strong>info@weldlearn.com.au</strong><br />
                  <strong>admissions@weldlearn.com.au</strong>
                </p>
              </div>
            </div>

            {/* Google Map Placeholder */}
            <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg">
              <div className="h-80 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center cursor-pointer hover:from-gray-300 hover:to-gray-400 transition-colors">
                <div className="text-center text-gray-600">
                  <div className="text-4xl mb-4">🗺️</div>
                  <div className="font-semibold mb-2">Interactive Google Map</div>
                  <div className="text-sm">123 Industrial Drive, Perth WA</div>
                  <div className="text-xs mt-2 bg-white px-3 py-1 rounded-full inline-block">
                    Click for directions
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}