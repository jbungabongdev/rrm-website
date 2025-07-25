"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import './globals.css';

// Static AppBar Component 
function StaticAppBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="bg-gradient-to-r from-orange-50 to-amber-50 border-b border-orange-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-orange-800 hover:text-orange-600 transition-colors">
              RMM Group
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="/"
                className={`flex items-center gap-2 px-3 py-2 text-sm font-medium transition-colors ${
                  isActive('/') ? 'text-orange-900' : 'text-orange-700 hover:text-orange-600'
                }`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Home
              </Link>
              
              <Link
                href="/about"
                className={`flex items-center gap-2 px-3 py-2 text-sm font-medium transition-colors ${
                  isActive('/about') ? 'text-orange-900' : 'text-orange-700 hover:text-orange-600'
                }`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                About Us
              </Link>
              
              <Link
                href="/services"
                className={`flex items-center gap-2 px-3 py-2 text-sm font-medium transition-colors ${
                  isActive('/services') ? 'text-orange-900' : 'text-orange-700 hover:text-orange-600'
                }`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Services
              </Link>
              
              <Link
                href="/teachers"
                className={`flex items-center gap-2 px-3 py-2 text-sm font-medium transition-colors ${
                  isActive('/teachers') ? 'text-orange-900' : 'text-orange-700 hover:text-orange-600'
                }`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 515.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 919.288 0M15 7a3 3 0 11-6 0 3 3 0 616 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Teachers
              </Link>
               
              <Link
                href="/contact"
                className={`flex items-center gap-2 px-3 py-2 text-sm font-medium transition-colors ${
                  isActive('/contact') ? 'text-orange-900' : 'text-orange-700 hover:text-orange-600'
                }`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="text-orange-700 hover:text-orange-900 focus:outline-none focus:text-orange-900"
            >
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gradient-to-r from-orange-50 to-amber-50 border-t border-orange-200">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center gap-3 block px-3 py-2 text-base font-medium transition-colors w-full text-left ${
                  isActive('/') ? 'text-orange-900' : 'text-orange-700 hover:text-orange-600'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Home
              </Link>
              
              <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className={`flex items-center gap-3 block px-3 py-2 text-base font-medium transition-colors w-full text-left ${isActive('/about') ? 'text-orange-900' : 'text-orange-700 hover:text-orange-600'}`}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                About Us
              </Link>
              
              <Link href="/services" onClick={() => setIsMobileMenuOpen(false)} className={`flex items-center gap-3 block px-3 py-2 text-base font-medium transition-colors w-full text-left ${isActive('/services') ? 'text-orange-900' : 'text-orange-700 hover:text-orange-600'}`}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Services
              </Link>
              
              <Link href="/teachers" onClick={() => setIsMobileMenuOpen(false)} className={`flex items-center gap-3 block px-3 py-2 text-base font-medium transition-colors w-full text-left ${isActive('/teachers') ? 'text-orange-900' : 'text-orange-700 hover:text-orange-600'}`}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 515.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 919.288 0M15 7a3 3 0 11-6 0 3 3 0 616 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Teachers
              </Link>
              
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className={`flex items-center gap-3 block px-3 py-2 text-base font-medium transition-colors w-full text-left ${isActive('/contact') ? 'text-orange-900' : 'text-orange-700 hover:text-orange-600'}`}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans bg-white">
        <StaticAppBar />
        <main className="min-h-[calc(100vh-4rem)]">
          {children}
        </main>
        <footer className="bg-gray-900 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p>&copy; 2024 RMM Group. All rights reserved.</p>
          </div>
        </footer>
        <style jsx>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll 20s linear infinite;
          }
        `}</style>
      </body>
    </html>
  );
}