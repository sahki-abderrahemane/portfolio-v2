'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { certifications, Certification } from '@/data/certifications';

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: i * 0.08, ease: 'easeOut' as const },
    }),
};

const categoryColors: Record<string, string> = {
    'Machine Learning': 'bg-purple-600/15 text-purple-300 border-purple-600/30',
    Development: 'bg-blue-600/15 text-blue-300 border-blue-600/30',
    Cloud: 'bg-orange-600/15 text-orange-300 border-orange-600/30',
    Other: 'bg-gray-600/15 text-gray-300 border-gray-600/30',
};

function CertModal({ cert, onClose }: { cert: Certification; onClose: () => void }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={onClose}
        >
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.3 }}
                className="relative z-10 w-full max-w-2xl bg-[#1A0B2E] border border-purple-800/30 rounded-2xl p-8 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Icon */}
                <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mb-5">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                </div>

                <h2 className="text-white font-bold text-2xl mb-1">{cert.title}</h2>
                <p className="text-purple-400 font-medium mb-1">{cert.issuer}</p>
                <p className="text-gray-500 text-sm mb-5">{cert.date}</p>

                <p className="text-gray-300 leading-relaxed mb-5">{cert.description}</p>

                <div className="mb-6">
                    <p className="text-white text-sm font-medium mb-2">Skills Covered:</p>
                    <div className="flex flex-wrap gap-2">
                        {cert.skills.map((s) => (
                            <span key={s} className="tag-pill text-[11px]">{s}</span>
                        ))}
                    </div>
                </div>

                <div className="flex flex-wrap gap-3">
                    {cert.image && (
                        <a
                            href={cert.image}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2.5 bg-purple-600/20 hover:bg-purple-600/30 border border-purple-600/40 text-purple-300 rounded-xl text-sm font-medium transition-all duration-200"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            View Certificate
                        </a>
                    )}
                    {cert.linkedinUrl && (
                        <a
                            href={cert.linkedinUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2.5 bg-blue-600/15 hover:bg-blue-600/25 border border-blue-600/30 text-blue-300 rounded-xl text-sm font-medium transition-all duration-200"
                        >
                            LinkedIn Profile
                        </a>
                    )}
                </div>
            </motion.div>
        </motion.div>
    );
}

export default function CertificationsPage() {
    const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

    return (
        <div className="min-h-screen bg-[#11071F] pt-24 pb-20">
            <div className="max-w-6xl mx-auto px-6">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <span className="tag-pill mb-4 inline-block">Credentials</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        My <span className="text-gradient">Certifications</span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Professional certifications that validate my expertise in machine learning, AI engineering, and data science from world-class institutions.
                    </p>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="grid grid-cols-3 gap-4 mb-14 max-w-lg mx-auto"
                >
                    <div className="stat-card">
                        <div className="text-2xl font-bold text-white">{certifications.length}+</div>
                        <div className="text-gray-400 text-xs mt-1">Certifications</div>
                    </div>
                    <div className="stat-card">
                        <div className="text-2xl font-bold text-white">3+</div>
                        <div className="text-gray-400 text-xs mt-1">Institutions</div>
                    </div>
                    <div className="stat-card">
                        <div className="text-2xl font-bold text-white">2025</div>
                        <div className="text-gray-400 text-xs mt-1">Most Recent</div>
                    </div>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certifications.map((cert, i) => (
                        <motion.div
                            key={cert.id}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            custom={i}
                            className="group p-6 bg-gradient-to-br from-[#1A0B2E] to-[#13082A] border border-purple-800/20 hover:border-purple-600/40 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-900/25 cursor-pointer flex flex-col"
                            onClick={() => setSelectedCert(cert)}
                        >
                            {/* Card header */}
                            <div className="flex items-start gap-4 mb-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                    </svg>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-white font-semibold text-base leading-snug group-hover:text-purple-200 transition-colors duration-200 mb-0.5">
                                        {cert.title}
                                    </h3>
                                    <p className="text-purple-400 text-xs font-medium truncate">{cert.issuer}</p>
                                    <p className="text-gray-500 text-xs">{cert.date}</p>
                                </div>
                            </div>

                            <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1 line-clamp-2">{cert.description}</p>

                            {/* Skills preview */}
                            <div className="flex flex-wrap gap-1.5 mb-4">
                                {cert.skills.slice(0, 3).map((s) => (
                                    <span key={s} className="tag-pill text-[10px]">{s}</span>
                                ))}
                                {cert.skills.length > 3 && (
                                    <span className="tag-pill text-[10px]">+{cert.skills.length - 3}</span>
                                )}
                            </div>

                            {/* Footer */}
                            <div className="flex items-center justify-between pt-4 border-t border-purple-800/20">
                                <span className={`text-xs px-2.5 py-1 rounded-full border ${categoryColors[cert.category]}`}>
                                    {cert.category}
                                </span>
                                <span className="text-purple-400 hover:text-purple-300 text-xs font-medium flex items-center gap-1 transition-colors duration-200">
                                    View Details
                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedCert && (
                    <CertModal cert={selectedCert} onClose={() => setSelectedCert(null)} />
                )}
            </AnimatePresence>
        </div>
    );
}
