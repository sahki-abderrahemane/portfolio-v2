'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { timeline } from '@/data/timeline';

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, delay: i * 0.1, ease: 'easeOut' as const },
    }),
};

const interests = [
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" /></svg>,
        label: 'Artificial Intelligence', desc: 'Building intelligent systems that learn',
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>,
        label: 'Data Science', desc: 'Turning raw data into actionable insights',
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" /></svg>,
        label: 'Full Stack Engineering', desc: 'End-to-end scalable web applications',
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" /></svg>,
        label: 'MLOps & Deployment', desc: 'Taking models from research to production',
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" /></svg>,
        label: 'System Design', desc: 'Designing resilient distributed architectures',
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg>,
        label: 'Continuous Learning', desc: 'Always exploring new technologies',
    },
];

const typeColors: Record<string, string> = {
    education: 'from-blue-600 to-blue-700',
    project: 'from-purple-600 to-purple-700',
    certification: 'from-green-600 to-green-700',
    achievement: 'from-orange-500 to-orange-600',
    work: 'from-teal-600 to-teal-700',
};

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-[#11071F] pt-24 pb-20">
            <div className="max-w-5xl mx-auto px-6">

                {/* ─── INTRO ──────────────────────────────────────────── */}
                <section className="mb-24">
                    <div className="flex flex-col lg:flex-row items-center gap-14">
                        {/* Avatar */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="relative flex-shrink-0"
                        >
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-600/30 to-blue-600/10 blur-2xl scale-110" />
                            <div className="relative w-52 h-52 md:w-64 md:h-64 rounded-2xl border border-purple-500/20 overflow-hidden bg-gradient-to-br from-[#2B0B3A] to-[#1a0624] p-1">
                                <Image
                                    src="/Me.svg"
                                    width={256}
                                    height={256}
                                    alt="Abderrahemane Sahki"
                                    className="w-full h-full object-cover rounded-2xl"
                                />
                            </div>
                        </motion.div>

                        {/* Text */}
                        <div>
                            <motion.div
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <span className="tag-pill mb-4 inline-block">About Me</span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.55, delay: 0.1 }}
                                className="text-4xl md:text-5xl font-bold text-white mb-4"
                            >
                                Hi, I'm <span className="text-gradient">Abderrahemane</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.55, delay: 0.2 }}
                                className="text-gray-300 text-lg leading-relaxed mb-4"
                            >
                                I'm a fourth-year Computer Science student at{' '}
                                <span className="text-purple-300 font-medium">ESTIN, Algeria</span>, passionate
                                about building intelligent systems and scalable web applications. My journey
                                spans machine learning, full-stack development, and system architecture.
                            </motion.p>

                            <motion.p
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.55, delay: 0.3 }}
                                className="text-gray-400 leading-relaxed mb-8"
                            >
                                Driven by curiosity and a love for technology, I combine AI/ML expertise with
                                modern full-stack engineering to create meaningful digital products. I believe
                                in writing clean, maintainable code and designing systems that scale.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.55, delay: 0.4 }}
                                className="flex flex-wrap gap-4"
                            >
                                <Link
                                    href="/contact"
                                    className="btn-primary inline-flex items-center gap-2 px-6 py-3"
                                >
                                    Get In Touch
                                </Link>
                                <a
                                    href="/Abderrahmane_Sahki_Resume_ATS.pdf"
                                    download
                                    className="inline-flex items-center gap-2 px-6 py-3 border border-purple-600/40 text-purple-300 hover:bg-purple-600/10 rounded-lg font-medium transition-all duration-200"
                                >
                                    Download CV
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </a>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* ─── INTERESTS ──────────────────────────────────────── */}
                <section className="mb-24">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="mb-10"
                    >
                        <span className="tag-pill mb-3 inline-block">What I Love</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                            Interests &amp; <span className="text-gradient">Focus Areas</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {interests.map((item, i) => (
                            <motion.div
                                key={item.label}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                custom={i}
                                className="p-6 bg-[#1A0B2E]/60 border border-purple-800/20 hover:border-purple-600/40 rounded-2xl transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-900/20"
                            >
                                <div className="w-11 h-11 mb-3 rounded-xl bg-gradient-to-br from-purple-600/20 to-blue-600/10 border border-purple-500/20 flex items-center justify-center text-purple-300">{item.icon}</div>
                                <h3 className="text-white font-semibold mb-1">{item.label}</h3>
                                <p className="text-gray-400 text-sm">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* ─── TIMELINE ───────────────────────────────────────── */}
                <section className="mb-12">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="mb-10"
                    >
                        <span className="tag-pill mb-3 inline-block">My Journey</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                            Professional <span className="text-gradient">Timeline</span>
                        </h2>
                        <p className="text-gray-400 mt-2 text-sm">
                            (Edit <code className="text-purple-400">src/data/timeline.ts</code> to update this section)
                        </p>
                    </motion.div>

                    <div className="relative">
                        {/* Vertical line */}
                        <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-purple-600/60 via-purple-600/20 to-transparent" />

                        <div className="space-y-10 pl-14">
                            {timeline.map((entry, i) => (
                                <motion.div
                                    key={i}
                                    variants={fadeUp}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true }}
                                    custom={i}
                                    className="relative"
                                >
                                    {/* Dot */}
                                    <div
                                        className={`absolute -left-[2.35rem] top-1 w-4 h-4 rounded-full bg-gradient-to-br ${typeColors[entry.type]} ring-4 ring-[#11071F] shadow-lg`}
                                    />

                                    {/* Card */}
                                    <div className="bg-[#1A0B2E]/60 border border-purple-800/20 hover:border-purple-600/30 rounded-xl p-5 transition-all duration-200">
                                        <div className="flex flex-wrap items-center gap-3 mb-2">
                                            <span className="text-purple-400 font-bold text-sm">{entry.year}</span>
                                            <span
                                                className={`text-xs px-2 py-0.5 rounded-full bg-gradient-to-r ${typeColors[entry.type]} text-white font-medium`}
                                            >
                                                {entry.type.charAt(0).toUpperCase() + entry.type.slice(1)}
                                            </span>
                                        </div>
                                        <h3 className="text-white font-semibold text-lg mb-1">{entry.title}</h3>
                                        <p className="text-gray-400 text-sm leading-relaxed mb-3">{entry.description}</p>
                                        {entry.tags && (
                                            <div className="flex flex-wrap gap-2">
                                                {entry.tags.map((tag) => (
                                                    <span key={tag} className="tag-pill text-[11px]">{tag}</span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
