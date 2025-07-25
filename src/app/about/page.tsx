"use client";

// ❌ REMOVED: import { useState } from "react";
// ❌ REMOVED: import { useRouter } from "next/navigation";
// ❌ REMOVED: AppBar component (entire function)
// ❌ REMOVED: LoadingSpinner component

// Content Section Component
function ContentSection({ title, content, isReversed, icon }: {
  title: string;
  content: string;
  isReversed?: boolean;
  icon: string;
}) {
  return (
    <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8 lg:gap-16 mb-20`}>
      {/* Text Content */}
      <div className="flex-1 space-y-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          {title}
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          {content}
        </p>
      </div>

      {/* Image Placeholder */}
      <div className="flex-1 w-full">
        <div className="bg-gradient-to-br from-orange-400 to-amber-500 rounded-2xl h-80 sm:h-96 flex items-center justify-center shadow-lg">
          <div className="bg-white rounded-full p-8">
            <span className="text-6xl">{icon}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function About() {
  const sections = [
    {
      title: "Our Story",
      content: "Founded in 2010, WeldLearn began as a small workshop in Perth with a simple mission: to provide world-class welding education that combines traditional craftsmanship with modern techniques. Our founders, experienced welders with decades in the industry, recognized the need for comprehensive training that bridges the gap between theory and real-world application. Today, we've grown into Australia's premier welding education center, having trained over 5,000 successful welders who now work across industries from mining to aerospace.",
      icon: "🏭",
      isReversed: false
    },
    {
      title: "Our Mission",
      content: "We believe that welding is both an art and a science. Our mission is to empower individuals with the skills, knowledge, and confidence to excel in the welding industry. Through hands-on training, cutting-edge equipment, and expert instruction, we prepare our students for successful careers while maintaining the highest safety standards. We're committed to fostering a learning environment that values precision, creativity, and continuous improvement.",
      icon: "🎯",
      isReversed: true
    },
    {
      title: "State-of-the-Art Facilities",
      content: "Our 15,000 square foot training facility features the latest welding equipment and technology. From traditional stick welding stations to advanced robotic welding cells, our students learn on the same equipment they'll use in their careers. Our workshops are equipped with proper ventilation, safety systems, and individual workstations that allow for personalized instruction. We also maintain a materials testing lab where students can examine their work and understand the science behind strong, reliable welds.",
      icon: "🔧",
      isReversed: false
    },
    {
      title: "Industry Partnerships",
      content: "We've built strong relationships with leading companies across Australia, from major mining corporations to boutique fabrication shops. These partnerships ensure our curriculum stays current with industry needs and provide our graduates with direct pathways to employment. Many of our students receive job offers before graduation, and our placement rate consistently exceeds 95%. We also collaborate with equipment manufacturers to ensure our students train on the latest technology.",
      icon: "🤝",
      isReversed: true
    }
  ];

  return (
    <div className="font-sans min-h-screen bg-white">
      {/* ❌ REMOVED: <AppBar /> - Now in layout.tsx */}
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-orange-50 to-amber-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
            About WeldLearn
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Forging the future of welding education through expert instruction, 
            cutting-edge facilities, and unwavering commitment to excellence.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-orange-600 mb-2">15+</div>
              <div className="text-gray-600 font-medium">Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-orange-600 mb-2">5,000+</div>
              <div className="text-gray-600 font-medium">Graduates</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-orange-600 mb-2">95%</div>
              <div className="text-gray-600 font-medium">Job Placement Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-orange-600 mb-2">50+</div>
              <div className="text-gray-600 font-medium">Industry Partners</div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {sections.map((section, index) => (
            <ContentSection
              key={index}
              title={section.title}
              content={section.content}
              icon={section.icon}
              isReversed={section.isReversed}
            />
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-gradient-to-r from-orange-600 to-amber-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Start Your Welding Journey?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Join thousands of successful welders who started their careers with us. 
            Discover your potential and build a rewarding future in welding.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              View Our Programs
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors">
              Schedule a Tour
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}