'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { certifications, Certification } from '@/data/certifications';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
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
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.25 }}
        className="relative z-10 w-full max-w-2xl bg-surface border border-purple-800/40 rounded-2xl p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
          aria-label="Close modal"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mb-5">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>

        <h2 className="text-white font-bold text-2xl mb-1">{cert.title}</h2>
        <p className="text-purple-400 font-medium mb-1">{cert.issuer}</p>
        <p className="text-gray-500 text-xs mb-5 font-mono">Issued {cert.date}</p>

        <p className="text-gray-300 leading-relaxed mb-6">{cert.description}</p>

        <div className="mb-6">
          <p className="text-white text-xs font-semibold uppercase tracking-wider mb-2">Skills &amp; Topics:</p>
          <div className="flex flex-wrap gap-1.5">
            {cert.skills.map((s) => (
              <span key={s} className="tag-pill text-[11px]">{s}</span>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-3 pt-4 border-t border-purple-900/30">
          {cert.image && (
            <a
              href={cert.image}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 px-5 py-2.5 text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              View PDF Certificate
            </a>
          )}
          {cert.linkedinUrl && (
            <a
              href={cert.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-lg text-sm font-medium transition-all duration-200"
            >
              Verify on LinkedIn
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function CertificationsPage() {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  // Top tier priority certifications
  const priorityCerts = certifications.filter((c) => c.id === 1 || c.id === 6);
  const otherCerts = certifications.filter((c) => c.id !== 1 && c.id !== 6);

  return (
    <div className="min-h-screen bg-background pt-24 pb-24 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="tag-pill mb-4 inline-block">Credentials</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            06 ML &amp; AI <span className="text-gradient">Certifications</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Rigorous specializations validating expertise across machine learning, neural architectures, and production AI engineering.
          </p>
        </motion.div>

        {/* ─── PRIORITY HERO CERTIFICATIONS ───────────────────── */}
        <div className="mb-14">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-purple-400 mb-4 text-center sm:text-left">
            Featured Specializations
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {priorityCerts.map((cert, i) => (
              <motion.div
                key={cert.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={i}
                className="p-8 bg-gradient-to-br from-surface to-surface-alt border border-purple-600/30 hover:border-purple-500 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-900/30 cursor-pointer flex flex-col justify-between"
                onClick={() => setSelectedCert(cert)}
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="text-xs font-mono uppercase text-purple-300 bg-purple-600/20 border border-purple-500/30 px-3 py-1 rounded-full">
                      {cert.issuer}
                    </span>
                    <span className="text-xs text-gray-500 font-mono">{cert.date}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-3 hover:text-purple-200 transition-colors">
                    {cert.title}
                  </h2>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    {cert.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {cert.skills.map((s) => (
                      <span key={s} className="tag-pill text-[11px]">{s}</span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-purple-800/20 text-purple-400 text-sm font-medium">
                    <span>Click to view credential details</span>
                    <span>→</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ─── ALL OTHER CERTIFICATIONS ───────────────────────── */}
        <div>
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-gray-400 mb-4 text-center sm:text-left">
            Core Learning &amp; Foundations
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {otherCerts.map((cert, i) => (
              <motion.div
                key={cert.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={i}
                className="p-6 bg-surface/50 border border-purple-800/20 hover:border-purple-600/40 rounded-2xl transition-all duration-200 hover:-translate-y-0.5 cursor-pointer flex flex-col justify-between"
                onClick={() => setSelectedCert(cert)}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-purple-400 text-xs font-medium">{cert.issuer}</p>
                    <span className="text-gray-600 text-xs font-mono">{cert.date}</span>
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">{cert.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">{cert.description}</p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {cert.skills.slice(0, 4).map((s) => (
                      <span key={s} className="tag-pill text-[10px]">{s}</span>
                    ))}
                  </div>
                  <span className="text-purple-400 hover:text-purple-300 text-xs font-medium inline-flex items-center gap-1">
                    View Details →
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
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
