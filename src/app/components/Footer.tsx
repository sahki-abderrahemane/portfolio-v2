import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const socials = [
  {
    href: 'https://www.linkedin.com/in/abderrahemane-sahki-a71a6224b',
    label: 'LinkedIn',
    icon: (
      <Image src="/linkedin.svg" width={18} height={18} alt="" aria-hidden="true" />
    ),
    hoverClass: 'hover:bg-blue-600/20 hover:border-blue-500/40',
  },
  {
    href: 'https://github.com/sahki-abderrahemane',
    label: 'GitHub',
    icon: (
      <Image src="/github.svg" width={18} height={18} alt="" aria-hidden="true" />
    ),
    hoverClass: 'hover:bg-purple-600/20 hover:border-purple-500/40',
  },
  {
    href: 'mailto:a_sahki@estin.dz',
    label: 'Email',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    hoverClass: 'hover:bg-red-600/20 hover:border-red-500/40',
  },
];

export default function Footer() {
  return (
    <footer className="w-full mt-24 border-t border-purple-900/20 bg-gradient-to-t from-[#0a0314] via-[#0F0516] to-transparent">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">

          {/* Brand + tagline */}
          <div className="text-center md:text-left">
            <Link href="/" className="inline-flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center font-bold text-white shadow-lg">
                AS
              </div>
              <span className="text-white font-semibold">Abderrahemane Sahki</span>
            </Link>
            <p className="text-gray-500 text-sm">AI Engineer · Full Stack Developer</p>
            <div className="mt-3 inline-flex items-center gap-2 text-xs text-green-400">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
              Available for new opportunities
            </div>
          </div>

          {/* Social links */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex items-center gap-3" role="list" aria-label="Social links">
              {socials.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('mailto') ? undefined : '_blank'}
                  rel={s.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  aria-label={s.label}
                  role="listitem"
                  className={`w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 transition-all duration-200 hover:-translate-y-0.5 ${s.hoverClass}`}
                >
                  {s.icon}
                </Link>
              ))}
            </div>
            <p className="text-gray-600 text-xs">
              © {new Date().getFullYear()} Abderrahemane Sahki
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}