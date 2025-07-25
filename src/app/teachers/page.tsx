"use client";

// ❌ REMOVED: import Image from "next/image";
// ❌ REMOVED: import { useState } from "react";
// ❌ REMOVED: import { useRouter } from "next/navigation";
// ❌ REMOVED: LoadingSpinner component
// ❌ REMOVED: AppBar component (entire function)

// Teacher Card Component
function TeacherCard({ name, specialty, experience, rating, imageUrl, bio }: {
  name: string;
  specialty: string;
  experience: string;
  rating: number;
  imageUrl: string;
  bio: string;
}) {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      {/* Teacher Image */}
      <div className="relative h-64 sm:h-72 bg-gradient-to-br from-orange-400 to-amber-500">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-32 h-32 sm:w-40 sm:h-40 bg-white rounded-full flex items-center justify-center">
            <svg className="w-16 h-16 sm:w-20 sm:h-20 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Teacher Info */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">{name}</h3>
            <p className="text-orange-600 font-medium">{specialty}</p>
          </div>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            ))}
            <span className="text-sm text-gray-600 ml-1">({rating}.0)</span>
          </div>
        </div>

        <div className="space-y-3 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {experience} experience
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Perth, Australia
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-6 line-clamp-3">{bio}</p>

        <div className="flex gap-3">
          <button className="flex-1 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg transition-colors font-medium">
            View Profile
          </button>
          <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
            Message
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Teachers() {
  const teachers = [
    {
      name: "Mike Rodriguez",
      specialty: "MIG Welding Specialist",
      experience: "15+ years",
      rating: 5,
      imageUrl: "/teacher1.jpg",
      bio: "Expert in MIG welding with extensive experience in automotive and structural welding. Specializes in aluminum welding techniques and precision work."
    },
    {
      name: "Sarah Chen",
      specialty: "TIG Welding Master",
      experience: "12+ years",
      rating: 5,
      imageUrl: "/teacher2.jpg",
      bio: "Master craftsperson in TIG welding with focus on stainless steel and exotic metals. Known for teaching precise control and beautiful weld aesthetics."
    },
    {
      name: "David Thompson",
      specialty: "Arc Welding Expert",
      experience: "20+ years",
      rating: 4,
      imageUrl: "/teacher3.jpg",
      bio: "Veteran welder with two decades of experience in heavy industrial welding. Expert in stick welding and structural fabrication techniques."
    },
    {
      name: "Lisa Martinez",
      specialty: "Pipeline Welding",
      experience: "10+ years",
      rating: 5,
      imageUrl: "/teacher4.jpg",
      bio: "Certified pipeline welder with extensive field experience. Specializes in high-pressure welding applications and safety protocols."
    },
    {
      name: "James Wilson",
      specialty: "Underwater Welding",
      experience: "8+ years",
      rating: 4,
      imageUrl: "/teacher5.jpg",
      bio: "Specialized underwater welding instructor with commercial diving certification. Expert in marine welding applications and safety procedures."
    },
    {
      name: "Anna Kowalski",
      specialty: "Artistic Welding",
      experience: "6+ years",
      rating: 5,
      imageUrl: "/teacher6.jpg",
      bio: "Creative welding artist focusing on decorative and sculptural metalwork. Teaches artistic techniques and creative applications of welding."
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
            Meet Our Expert Instructors
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Learn from industry professionals with decades of real-world experience. 
            Our certified instructors are passionate about sharing their expertise and helping you master the art of welding.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-orange-600 mb-2">50+</div>
            <div className="text-sm text-gray-600">Expert Instructors</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-orange-600 mb-2">98%</div>
            <div className="text-sm text-gray-600">Student Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-orange-600 mb-2">200+</div>
            <div className="text-sm text-gray-600">Years Combined Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-orange-600 mb-2">24/7</div>
            <div className="text-sm text-gray-600">Support Available</div>
          </div>
        </div>

        {/* Teachers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teachers.map((teacher, index) => (
            <TeacherCard key={index} {...teacher} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-orange-600 to-amber-600 rounded-2xl p-8 sm:p-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Ready to Start Learning?
            </h2>
            <p className="text-orange-100 mb-6 text-lg">
              Join thousands of students who have mastered welding with our expert instructors
            </p>
            <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Browse All Courses
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}