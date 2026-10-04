'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '@/data/projects';
import ProjectCard from '@/components/projects/ProjectCard';
import ProjectFilter, { FilterCategory } from '@/components/projects/ProjectFilter';

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('All');

  const filtered =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="tag-pill mb-4 inline-block">My Work</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            All <span className="text-gradient">Projects</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From multimodal AI systems to production e-commerce platforms — each project tells a story.
          </p>
        </motion.div>

        {/* Filter bar */}
        <ProjectFilter
          projects={projects}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            No projects found in this category.
          </div>
        )}
      </div>
    </div>
  );
}
