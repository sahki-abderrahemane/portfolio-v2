import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'AI / ML', href: '/ai' },
  { label: 'Engineering', href: '/engineering' },
  { label: 'Certifications', href: '/certifications' },
  { label: 'Contact', href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="w-full mt-24 bg-gradient-to-t from-[#0a0314] via-[#0F0516] to-transparent border-t border-purple-900/20">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center font-bold text-white shadow-lg">
                AS
              </div>
              <span className="text-white font-semibold text-lg">Abderrahemane</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              AI Engineer & Full Stack Developer building intelligent systems and
              scalable applications from Algeria.
            </p>
            {/* Social */}
            <div className="flex items-center gap-3 mt-6">
              <Link
                href="https://www.linkedin.com/in/abderrahemane-sahki-a71a6224b"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-blue-600/20 border border-white/10 hover:border-blue-500/40 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
              >
                <Image src="/linkedin.svg" width={18} height={18} alt="LinkedIn" />
              </Link>
              <Link
                href="https://github.com/sahki-abderrahemane"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-purple-600/20 border border-white/10 hover:border-purple-500/40 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
              >
                <Image src="/github.svg" width={18} height={18} alt="GitHub" />
              </Link>
              <Link
                href="mailto:a_sahki@estin.dz"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-red-600/20 border border-white/10 hover:border-red-500/40 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
              >
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Navigation</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-purple-300 text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Get In Touch</h3>
            <div className="space-y-3">
              <a
                href="mailto:a_sahki@estin.dz"
                className="flex items-center gap-3 text-gray-400 hover:text-purple-300 text-sm transition-colors duration-200"
              >
                <svg className="w-4 h-4 shrink-0 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                a_sahki@estin.dz
              </a>
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <svg className="w-4 h-4 shrink-0 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Béjaïa, Algeria
              </div>
              <Link
                href="/contact"
                className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white text-sm font-medium rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-purple-500/25"
              >
                Send Message
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-purple-900/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Abderrahemane Sahki. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            AI Engineer · Full Stack Developer · ML Enthusiast
          </p>
        </div>
      </div>
    </footer>
  )
}