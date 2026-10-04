'use client';
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CVOption {
  label: string;
  sublabel: string;
  badge: string;
  filename: string;
  href: string;
}

const cvOptions: CVOption[] = [
  {
    label: 'English CV',
    sublabel: 'English version',
    badge: 'EN',
    filename: 'Abderrahmane_Sahki_CV_English.pdf',
    href: '/Abderrahmane_Sahki_CV_English.pdf',
  },
  {
    label: 'French Resume',
    sublabel: 'Version française',
    badge: 'FR',
    filename: 'Abderrahmane_Sahki_Resume_FR.pdf',
    href: '/Abderrahmane_Sahki_Resume_ATS.pdf',
  },
];

interface CVDropdownProps {
  className?: string;
  compact?: boolean;
}

export default function CVDropdown({ className = '', compact = false }: CVDropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <div ref={ref} className={`relative ${open ? 'z-50' : 'z-20'} ${className}`}>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="listbox"
        className={`flex items-center gap-2 font-semibold rounded-lg transition-all duration-200 hover:-translate-y-0.5
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500
          ${compact
            ? 'px-4 py-2 text-sm bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-500 hover:to-blue-400 text-white shadow-lg hover:shadow-purple-500/30'
            : 'px-6 py-3 text-base bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white'
          }`}
      >
        {/* Download icon */}
        <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
        {compact ? 'Resume' : 'Download CV'}
        {/* Chevron */}
        <svg
          className={`w-3.5 h-3.5 flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.15 }}
            role="listbox"
            className="absolute left-0 sm:left-auto sm:right-0 mt-2 w-60 bg-[#1A0B2E] backdrop-blur-md border border-purple-800/60
              rounded-xl shadow-2xl shadow-black/80 z-[100] overflow-hidden"
          >
            <div className="px-4 py-2.5 border-b border-purple-900/40 bg-purple-950/30">
              <p className="text-[10px] font-semibold text-purple-300 uppercase tracking-wider">Select Version</p>
            </div>
            <div className="p-1">
              {cvOptions.map((opt) => (
                <a
                  key={opt.label}
                  href={opt.href}
                  download={opt.filename}
                  role="option"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 px-3.5 py-3 text-sm text-gray-200 hover:text-white
                    hover:bg-purple-600/20 rounded-lg transition-colors duration-150 group"
                >
                  <span className="w-9 h-6 flex items-center justify-center text-[10px] font-bold
                    bg-gradient-to-br from-purple-600/30 to-blue-500/20 text-purple-200 border border-purple-500/40 rounded">
                    {opt.badge}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-white group-hover:text-purple-200 transition-colors text-xs">
                      {opt.label}
                    </p>
                    <p className="text-[10px] text-gray-400 truncate">
                      {opt.sublabel}
                    </p>
                  </div>
                  <svg className="w-4 h-4 text-purple-400 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3" />
                  </svg>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
