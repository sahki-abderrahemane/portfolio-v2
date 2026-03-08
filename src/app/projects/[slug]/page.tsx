'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound, useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { getProjectBySlug, projects } from '@/data/projects';

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' as const },
    }),
};

const statusColor: Record<string, string> = {
    Live: 'bg-green-500/15 text-green-400 border-green-500/30',
    Completed: 'bg-blue-500/15 text-blue-400 border-blue-500/30',
    Private: 'bg-gray-500/15 text-gray-400 border-gray-500/30',
    'In Progress': 'bg-yellow-500/15 text-yellow-400 border-yellow-500/30',
};

export default function ProjectDetailPage() {
    const params = useParams<{ slug: string }>();
    const project = getProjectBySlug(params.slug);

    if (!project) return notFound();

    const others = projects.filter((p) => p.slug !== project.slug).slice(0, 2);

    return (
        <div className="min-h-screen bg-[#11071F] pt-24 pb-20">
            <div className="max-w-5xl mx-auto px-6">

                {/* Back button */}
                <motion.div
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mb-10"
                >
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 text-gray-400 hover:text-purple-300 text-sm transition-colors duration-200"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Projects
                    </Link>
                </motion.div>

                {/* Hero banner */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden mb-10 border border-purple-800/20"
                >
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#11071F] via-[#11071F]/50 to-transparent" />

                    {/* Overlay content */}
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                            <span className={`text-xs px-3 py-1 rounded-full border font-medium ${statusColor[project.status]}`}>
                                {project.status}
                            </span>
                            <span className="text-xs px-3 py-1 rounded-full bg-purple-600/30 text-purple-200 border border-purple-500/40 font-medium">
                                {project.category}
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold text-white">{project.title}</h1>
                        <p className="text-purple-300 text-sm mt-1">{project.theme}</p>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {/* Main content */}
                    <div className="lg:col-span-2 space-y-10">

                        {/* Overview */}
                        <motion.section variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
                            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                                <span className="w-1 h-5 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full" />
                                Overview
                            </h2>
                            <p className="text-gray-300 leading-relaxed">{project.longDescription}</p>
                        </motion.section>

                        {/* Key Features */}
                        <motion.section variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={1}>
                            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                <span className="w-1 h-5 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full" />
                                Key Features
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {project.highlights.map((h, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center gap-3 p-3 bg-[#1A0B2E]/60 border border-purple-800/20 rounded-xl"
                                    >
                                        <svg className="w-4 h-4 text-purple-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gray-300 text-sm">{h}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.section>

                        {/* Architecture */}
                        {project.architecture && (
                            <motion.section variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={2}>
                                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                    <span className="w-1 h-5 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full" />
                                    Architecture
                                </h2>
                                <div className="p-5 bg-[#1A0B2E]/60 border border-purple-800/20 rounded-xl">
                                    <code className="text-purple-300 text-sm font-mono whitespace-pre-wrap leading-relaxed">
                                        {project.architecture}
                                    </code>
                                </div>
                            </motion.section>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Links */}
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="p-6 bg-[#1A0B2E]/60 border border-purple-800/20 rounded-2xl"
                        >
                            <h3 className="text-white font-semibold mb-4">Project Links</h3>
                            <div className="space-y-3">
                                {project.links.link ? (
                                    <a
                                        href={project.links.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 p-3 bg-purple-600/15 hover:bg-purple-600/25 border border-purple-600/30 rounded-xl text-sm text-purple-300 hover:text-purple-200 transition-all duration-200"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                        Live Demo
                                    </a>
                                ) : null}
                                {project.links.github ? (
                                    <a
                                        href={project.links.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-sm text-gray-300 hover:text-white transition-all duration-200"
                                    >
                                        <Image src="/github.svg" width={16} height={16} alt="GitHub" />
                                        GitHub Repository
                                    </a>
                                ) : null}
                                {!project.links.link && !project.links.github && (
                                    <div className="flex items-center gap-3 p-3 bg-gray-800/30 border border-gray-700/30 rounded-xl text-sm text-gray-500">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                        </svg>
                                        Private Repository
                                    </div>
                                )}
                            </div>
                        </motion.div>

                        {/* Tech Stack */}
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            custom={1}
                            className="p-6 bg-[#1A0B2E]/60 border border-purple-800/20 rounded-2xl"
                        >
                            <h3 className="text-white font-semibold mb-4">Tech Stack</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((t) => (
                                    <span key={t} className="tag-pill text-[11px]">{t}</span>
                                ))}
                            </div>
                        </motion.div>

                        {/* Status */}
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            custom={2}
                            className="p-6 bg-[#1A0B2E]/60 border border-purple-800/20 rounded-2xl"
                        >
                            <h3 className="text-white font-semibold mb-3">Details</h3>
                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Category</span>
                                    <span className="text-gray-300">{project.category}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Status</span>
                                    <span className={`text-xs px-2 py-0.5 rounded-full border ${statusColor[project.status]}`}>
                                        {project.status}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Other projects */}
                {others.length > 0 && (
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="mt-20 pt-12 border-t border-purple-900/20"
                    >
                        <h2 className="text-2xl font-bold text-white mb-8">Other Projects</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {others.map((p, i) => (
                                <Link
                                    key={p.slug}
                                    href={`/projects/${p.slug}`}
                                    className="group flex gap-4 p-5 bg-[#1A0B2E]/60 border border-purple-800/20 hover:border-purple-600/40 rounded-2xl transition-all duration-200 hover:-translate-y-1"
                                >
                                    <div className="relative w-20 h-16 rounded-xl overflow-hidden flex-shrink-0">
                                        <Image src={p.image} alt={p.title} fill className="object-cover" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-purple-400 text-xs font-medium mb-0.5">{p.theme}</p>
                                        <h3 className="text-white font-semibold group-hover:text-purple-200 transition-colors duration-200 truncate">
                                            {p.title}
                                        </h3>
                                        <p className="text-gray-500 text-xs mt-1 line-clamp-1">{p.description}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    );
}
