'use client';
import React, { useState, useEffect, useRef } from 'react';

export interface ProgressSection {
  id: string;
  label: string;
}

interface CaseStudyProgressProps {
  sections: ProgressSection[];
}

export default function CaseStudyProgress({ sections }: CaseStudyProgressProps) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id ?? '');
  const [progress, setProgress] = useState(0);
  const observersRef = useRef<IntersectionObserver[]>([]);

  useEffect(() => {
    // Clean up previous observers
    observersRef.current.forEach((o) => o.disconnect());
    observersRef.current = [];

    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        setProgress(Math.min(100, Math.round((window.scrollY / docHeight) * 100)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Observe each section
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveId(id); },
        { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
      );
      observer.observe(el);
      observersRef.current.push(observer);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observersRef.current.forEach((o) => o.disconnect());
    };
  }, [sections]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const activeIndex = sections.findIndex((s) => s.id === activeId);

  return (
    <>
      {/* Desktop — floating left sidebar */}
      <aside
        className="hidden xl:flex fixed left-6 top-1/2 -translate-y-1/2 z-40 flex-col gap-1.5"
        aria-label="Case study progress"
      >
        {/* Progress bar */}
        <div className="w-0.5 h-32 bg-purple-900/30 rounded-full mx-auto mb-3 relative overflow-hidden">
          <div
            className="absolute top-0 left-0 w-full bg-gradient-to-b from-purple-500 to-blue-400 rounded-full transition-all duration-200"
            style={{ height: `${progress}%` }}
          />
        </div>
        <p className="text-[9px] font-mono text-gray-600 text-center mb-2">{progress}%</p>

        {sections.map((s, i) => {
          const isActive = s.id === activeId;
          const isPast = i < activeIndex;
          return (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              title={s.label}
              className="flex items-center gap-2 group text-left"
            >
              <span
                className={`w-1.5 h-1.5 rounded-full flex-shrink-0 transition-all duration-200 ${
                  isActive
                    ? 'bg-purple-400 scale-150'
                    : isPast
                    ? 'bg-purple-600/60'
                    : 'bg-gray-700'
                }`}
              />
              <span
                className={`text-[10px] font-medium transition-all duration-200 whitespace-nowrap ${
                  isActive ? 'text-purple-300 opacity-100' : 'text-gray-600 opacity-0 group-hover:opacity-100'
                }`}
              >
                {s.label}
              </span>
            </button>
          );
        })}
      </aside>

      {/* Mobile — sticky top bar */}
      <div className="xl:hidden sticky top-16 z-30 bg-[#1A0B2E]/95 backdrop-blur-md border-b border-purple-800/20 px-4 py-2 overflow-x-auto">
        <div className="flex items-center gap-3 min-w-max">
          {/* Mini progress bar */}
          <div className="w-16 h-1 bg-purple-900/40 rounded-full overflow-hidden flex-shrink-0">
            <div
              className="h-full bg-gradient-to-r from-purple-500 to-blue-400 rounded-full transition-all duration-200"
              style={{ width: `${progress}%` }}
            />
          </div>
          {sections.map((s) => {
            const isActive = s.id === activeId;
            return (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className={`text-[11px] font-medium whitespace-nowrap transition-colors duration-200 flex-shrink-0 ${
                  isActive ? 'text-purple-300' : 'text-gray-500 hover:text-gray-300'
                }`}
              >
                {s.label}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}
