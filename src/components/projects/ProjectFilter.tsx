'use client';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '@/data/projects';

type FilterCategory = 'All' | Project['category'];

const filterCategories: FilterCategory[] = [
  'All',
  'AI / ML',
  'Full-Stack Production',
  'Dashboards & Internal Tools',
  'Data / Graph',
];

interface ProjectFilterProps {
  projects: Project[];
  activeFilter: FilterCategory;
  onFilterChange: (filter: FilterCategory) => void;
}

export default function ProjectFilter({ projects, activeFilter, onFilterChange }: ProjectFilterProps) {
  const countFor = (cat: FilterCategory) =>
    cat === 'All' ? projects.length : projects.filter((p) => p.category === cat).length;

  return (
    <div role="group" aria-label="Filter projects by category">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="flex flex-wrap justify-center gap-2 mb-12"
      >
        {filterCategories.map((cat) => {
          const count = countFor(cat);
          if (count === 0 && cat !== 'All') return null;
          const isActive = activeFilter === cat;
          return (
            <button
              key={cat}
              onClick={() => onFilterChange(cat)}
              aria-pressed={isActive}
              className={`relative px-5 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                isActive
                  ? 'bg-purple-600/30 text-purple-200 border-purple-500 shadow-sm shadow-purple-500/20'
                  : 'bg-transparent text-gray-400 border-gray-700/60 hover:border-purple-600/50 hover:text-white'
              }`}
            >
              {cat}
              {cat !== 'All' && (
                <AnimatePresence mode="wait">
                  <motion.span
                    key={count}
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.7 }}
                    className="ml-2 text-xs opacity-60"
                  >
                    ({count})
                  </motion.span>
                </AnimatePresence>
              )}

              {/* Active indicator */}
              {isActive && (
                <motion.span
                  layoutId="filter-indicator"
                  className="absolute inset-0 rounded-full bg-purple-600/10 -z-10"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </motion.div>
    </div>
  );
}

export type { FilterCategory };
