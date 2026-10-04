'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Project } from '@/data/projects';

const statusVariant: Record<string, string> = {
  Live: 'bg-green-500/15 text-green-400 border-green-500/30',
  Completed: 'bg-blue-500/15 text-blue-400 border-blue-500/30',
  Private: 'bg-gray-500/15 text-gray-400 border-gray-500/30',
  'In Progress': 'bg-yellow-500/15 text-yellow-400 border-yellow-500/30',
};

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group relative bg-gradient-to-br from-surface to-background-alt rounded-2xl border border-purple-800/20 hover:border-purple-600/40 overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-900/25 flex flex-col"
    >
      {/* Project number */}
      <div className="absolute top-4 left-4 z-10 font-mono text-xs font-bold text-purple-500/60" aria-hidden="true">
        {String(index + 1).padStart(2, '0')}
      </div>

      {/* Category badge */}
      <div className="absolute top-4 right-4 z-10">
        <span className={`text-[10px] px-2 py-0.5 rounded-full border font-medium backdrop-blur-sm ${statusVariant[project.status]}`}>
          {project.status}
        </span>
      </div>

      {/* Hero image */}
      <div className="relative h-48 bg-gradient-to-br from-[#2B0B3A] to-[#1a0624] overflow-hidden flex-shrink-0">
        <Image
          src={project.image}
          alt={`${project.title} screenshot`}
          fill
          className="object-cover opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />

        {/* Category label */}
        <div className="absolute bottom-3 left-4">
          <span className="text-[10px] font-mono font-semibold uppercase tracking-[0.15em] text-purple-300/80">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h2 className="text-white font-bold text-2xl mb-2 group-hover:text-purple-200 transition-colors duration-200">
          {project.title}
        </h2>

        {/* Problem-first description */}
        <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
          {project.problem || project.description}
        </p>

        {/* Tech summary — single line */}
        <p className="font-mono text-[11px] text-gray-600 mb-5">
          {project.technologies.slice(0, 5).join(' · ')}
          {project.technologies.length > 5 && ` · +${project.technologies.length - 5}`}
        </p>

        {/* Actions */}
        <div className="flex items-center gap-3 pt-4 border-t border-purple-800/20">
          <Link
            href={`/projects/${project.slug}`}
            className="flex-1 text-center py-2.5 bg-purple-600/20 hover:bg-purple-600/30 border border-purple-600/30 hover:border-purple-500 text-purple-300 hover:text-white rounded-lg text-sm font-medium transition-all duration-200"
          >
            View Case Study →
          </Link>

          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} on GitHub`}
              className="p-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all duration-200 flex items-center justify-center"
            >
              <Image src="/github.svg" width={16} height={16} alt="" aria-hidden="true" />
            </a>
          )}

          {project.links.link && (
            <a
              href={project.links.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live demo`}
              className="p-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all duration-200 flex items-center justify-center"
            >
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
