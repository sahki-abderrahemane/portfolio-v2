'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '@/data/projects';

type Filter = 'All' | 'AI' | 'Web' | 'Full Stack' | 'Research';
const filters: Filter[] = ['All', 'AI', 'Web', 'Full Stack', 'Research'];

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] as const },
    }),
};

const statusColor: Record<string, string> = {
    Live: 'bg-green-500/15 text-green-400 border-green-500/30',
    Completed: 'bg-blue-500/15 text-blue-400 border-blue-500/30',
    Private: 'bg-gray-500/15 text-gray-400 border-gray-500/30',
    'In Progress': 'bg-yellow-500/15 text-yellow-400 border-yellow-500/30',
};

export default function ProjectsPage() {
    const [activeFilter, setActiveFilter] = useState<Filter>('All');

    const filtered =
        activeFilter === 'All'
            ? projects
            : projects.filter((p) => p.category === activeFilter);

    return (
        <div className="min-h-screen bg-[#11071F] pt-24 pb-20">
            <div className="max-w-7xl mx-auto px-6">

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
                        Ranging from healthcare platforms to educational tools and workshop management systems — each project tells a story.
                    </p>
                </motion.div>

                {/* Filters */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    {filters.map((f) => (
                        <button
                            key={f}
                            onClick={() => setActiveFilter(f)}
                            className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${activeFilter === f
                                ? 'bg-purple-600/30 text-purple-200 border-purple-500'
                                : 'bg-transparent text-gray-400 border-gray-700 hover:border-purple-600/50 hover:text-white'
                                }`}
                        >
                            {f}
                            {f !== 'All' && (
                                <span className="ml-2 text-xs opacity-60">
                                    ({projects.filter((p) => p.category === f).length})
                                </span>
                            )}
                        </button>
                    ))}
                </motion.div>

                {/* Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeFilter}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    >
                        {filtered.map((project, i) => (
                            <motion.div
                                key={project.slug}
                                variants={fadeUp}
                                initial="hidden"
                                animate="show"
                                custom={i}
                                className="group relative bg-gradient-to-br from-[#1A0B2E] to-[#13082A] rounded-2xl border border-purple-800/20 hover:border-purple-600/40 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-900/25 flex flex-col"
                            >
                                {/* Image */}
                                <div className="relative h-52 bg-gradient-to-br from-[#2B0B3A] to-[#1a0624] overflow-hidden flex-shrink-0">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A0B2E] via-[#1A0B2E]/40 to-transparent" />

                                    {/* Badges */}
                                    <div className="absolute top-3 left-3 flex gap-2">
                                        <span className="px-2.5 py-1 bg-purple-600/80 text-purple-100 text-xs rounded-full font-medium backdrop-blur-sm">
                                            {project.category}
                                        </span>
                                    </div>
                                    <div className="absolute top-3 right-3">
                                        <span className={`px-2.5 py-1 text-xs rounded-full border font-medium backdrop-blur-sm ${statusColor[project.status]}`}>
                                            {project.status}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-7 flex flex-col flex-1">
                                    <p className="text-purple-400 text-xs font-medium uppercase tracking-wider mb-1">{project.theme}</p>
                                    <h2 className="text-white font-bold text-2xl mb-3 group-hover:text-purple-200 transition-colors duration-200">
                                        {project.title}
                                    </h2>
                                    <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">{project.description}</p>

                                    {/* Tech stack */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.technologies.map((t) => (
                                            <span key={t} className="tag-pill text-[11px]">{t}</span>
                                        ))}
                                    </div>

                                    {/* Actions */}
                                    <div className="flex items-center gap-3 pt-4 border-t border-purple-800/20">
                                        <Link
                                            href={`/projects/${project.slug}`}
                                            className="flex-1 text-center py-2.5 bg-purple-600/20 hover:bg-purple-600/30 border border-purple-600/30 hover:border-purple-500 text-purple-300 hover:text-white rounded-lg text-sm font-medium transition-all duration-200"
                                        >
                                            View Details
                                        </Link>
                                        {project.links.github && (
                                            <a
                                                href={project.links.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all duration-200"
                                            >
                                                <Image src="/github.svg" width={18} height={18} alt="GitHub" />
                                            </a>
                                        )}
                                        {project.links.link && (
                                            <a
                                                href={project.links.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all duration-200 flex items-center"
                                            >
                                                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {filtered.length === 0 && (
                    <div className="text-center py-20 text-gray-500">
                        No projects found in this category yet.
                    </div>
                )}
            </div>
        </div>
    );
}
