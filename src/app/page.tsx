"use client";

export default function Home() {
  return (
    <div className="font-sans min-h-screen" style={{backgroundColor: '#FFFFFF'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Video Section */}
        <div className="relative w-full aspect-video bg-gradient-to-br from-orange-400 to-amber-500 rounded-2xl overflow-hidden shadow-2xl mb-16">
          <video
            src="/welding-video.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
            onError={() => console.log('❌ Video failed to load')}
            onLoadedData={() => console.log('✅ Video loaded successfully')}
          >
            Your browser does not support the video tag.
          </video>
          
          <div className="relative z-10 h-full flex items-center justify-center text-center px-8">
            <div className="max-w-4xl">
              <div className="backdrop-blur-md bg-black/30 rounded-2xl p-8 sm:p-12 border border-white/20">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-2xl">
                  Master the Art of Welding
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl text-white mb-8 leading-relaxed drop-shadow-xl">
                  Transform your career with professional welding training. From beginner basics to advanced techniques, 
                  we provide hands-on education that opens doors to high-paying careers.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    Start Your Journey
                  </button>
                  <button className="border-2 border-white text-white bg-white/10 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-orange-600 transition-all duration-300 backdrop-blur-sm transform hover:-translate-y-1">
                    Watch Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2x2 Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-orange-500 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-orange-100 p-3 rounded-full mr-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Expert Knowledge</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Our instructors bring decades of real-world welding experience from industries including mining, 
              construction, aerospace, and marine. Learn from professionals who have mastered every technique 
              from basic stick welding to advanced TIG and MIG applications.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-orange-500 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-orange-100 p-3 rounded-full mr-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">15+ Years Experience</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              With over 15 years in welding education, we have refined our teaching methods to deliver the most 
              effective training programs. Our proven curriculum has successfully prepared thousands of students 
              for rewarding careers in the welding industry.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-orange-500 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-orange-100 p-3 rounded-full mr-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Comprehensive Services</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              From beginner courses to specialized certifications, we offer complete welding education services. 
              Our programs include MIG, TIG, stick welding, pipeline welding, underwater welding, and artistic 
              metalwork - all designed to meet industry standards.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-orange-500 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-orange-100 p-3 rounded-full mr-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Hands-On Practice</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Our state-of-the-art workshop provides extensive hands-on practice with professional-grade equipment. 
              Students work on real projects, building confidence and skills through practical application of 
              welding techniques in a safe, supervised environment.
            </p>
          </div>
        </div>

        {/* Technology Section */}
        <div className="mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">
            Technology & Certifications
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            We use industry-leading equipment and maintain the highest certification standards
          </p>
          
          <div className="relative overflow-hidden bg-gray-50 py-8 rounded-xl">
            <div className="flex animate-scroll space-x-16 items-center justify-center">
              <div className="flex flex-col items-center min-w-32">
                <div className="bg-white p-4 rounded-lg shadow-md mb-2">
                  <span className="text-2xl font-bold text-gray-700">LINCOLN</span>
                </div>
                <span className="text-sm text-gray-600">Electric</span>
              </div>
              
              <div className="flex flex-col items-center min-w-32">
                <div className="bg-white p-4 rounded-lg shadow-md mb-2">
                  <span className="text-2xl font-bold text-gray-700">MILLER</span>
                </div>
                <span className="text-sm text-gray-600">Welders</span>
              </div>
              
              <div className="flex flex-col items-center min-w-32">
                <div className="bg-white p-4 rounded-lg shadow-md mb-2">
                  <span className="text-2xl font-bold text-gray-700">ESAB</span>
                </div>
                <span className="text-sm text-gray-600">Welding</span>
              </div>
              
              <div className="flex flex-col items-center min-w-32">
                <div className="bg-white p-4 rounded-lg shadow-md mb-2">
                  <span className="text-2xl font-bold text-gray-700">AWS</span>
                </div>
                <span className="text-sm text-gray-600">Certified</span>
              </div>
              
              <div className="flex flex-col items-center min-w-32">
                <div className="bg-white p-4 rounded-lg shadow-md mb-2">
                  <span className="text-2xl font-bold text-gray-700">ISO</span>
                </div>
                <span className="text-sm text-gray-600">9001</span>
              </div>
              
              <div className="flex flex-col items-center min-w-32">
                <div className="bg-white p-4 rounded-lg shadow-md mb-2">
                  <span className="text-2xl font-bold text-gray-700">LINCOLN</span>
                </div>
                <span className="text-sm text-gray-600">Electric</span>
              </div>
              
              <div className="flex flex-col items-center min-w-32">
                <div className="bg-white p-4 rounded-lg shadow-md mb-2">
                  <span className="text-2xl font-bold text-gray-700">MILLER</span>
                </div>
                <span className="text-sm text-gray-600">Welders</span>
              </div>
              
              <div className="flex flex-col items-center min-w-32">
                <div className="bg-white p-4 rounded-lg shadow-md mb-2">
                  <span className="text-2xl font-bold text-gray-700">ESAB</span>
                </div>
                <span className="text-sm text-gray-600">Welding</span>
              </div>
            </div>
          </div>
        </div>

        {/* Clients Section */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-gray-600 mb-12 text-lg">
            Our graduates work with Australias top companies across multiple industries
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-700 mb-2">BHP</div>
                <div className="text-sm text-gray-500">Mining</div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-700 mb-2">RIO TINTO</div>
                <div className="text-sm text-gray-500">Resources</div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-700 mb-2">BOEING</div>
                <div className="text-sm text-gray-500">Aerospace</div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-700 mb-2">FORTESCUE</div>
                <div className="text-sm text-gray-500">Metals</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}