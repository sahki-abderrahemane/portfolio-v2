'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { timeline } from '@/data/timeline';
import CVDropdown from '@/components/ui/CVDropdown';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

const interests = [
  {
    icon: '🧠',
    label: 'Large Language Models & RAG',
    desc: 'Fine-tuning open source weights, dense retrieval, and grounded generation with verifiable citations.',
  },
  {
    icon: '👁️',
    label: 'Multimodal AI Systems',
    desc: 'Cross-modal image/text embeddings, FAISS vector indexing, and real-time visual product discovery.',
  },
  {
    icon: '⚡',
    label: 'Full Stack Web Architecture',
    desc: 'Next.js App Router, NestJS modular backends, TypeScript type-safety, and WebSocket event pipelines.',
  },
  {
    icon: '📊',
    label: 'Graph Representation Learning',
    desc: 'Network analysis with Node2Vec, link prediction, and interactive Cytoscape network visualisations.',
  },
  {
    icon: '🛡️',
    label: 'AI-Powered Anomaly Detection',
    desc: 'Unsupervised ML pipelines, log stream classification, and explainable AI metrics with SHAP.',
  },
  {
    icon: '🚀',
    label: 'Production Engineering & MLOps',
    desc: 'Dockerized microservices, Redis caching, structured logging, and robust API design.',
  },
];

const typeColors: Record<string, string> = {
  education: 'from-blue-600 to-blue-700',
  project: 'from-purple-600 to-purple-700',
  certification: 'from-green-600 to-green-700',
  achievement: 'from-orange-500 to-orange-600',
  work: 'from-cyan-600 to-cyan-700',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-24 text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

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
              <div className="relative w-52 h-52 md:w-64 md:h-64 rounded-2xl border border-purple-500/30 overflow-hidden bg-gradient-to-br from-[#2B0B3A] to-[#1a0624] p-1">
                <Image
                  src="/Me.svg"
                  width={256}
                  height={256}
                  alt="Abderrahemane Sahki"
                  className="w-full h-full object-cover rounded-2xl"
                  priority
                />
              </div>
            </motion.div>

            {/* Text */}
            <div>
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <span className="tag-pill mb-4 inline-block">About Me</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.1 }}
                className="text-4xl md:text-5xl font-bold text-white mb-4"
              >
                Hi, I&apos;m <span className="text-gradient">Abderrahemane</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.2 }}
                className="text-gray-300 text-lg leading-relaxed mb-4"
              >
                I&apos;m an AI Engineer and Full Stack Developer studying Computer Science Engineering at{' '}
                <span className="text-purple-300 font-semibold">ESTIN (Algeria)</span>. I combine machine learning research with modern software engineering to build scalable, AI-powered products that solve complex real-world problems.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.3 }}
                className="text-gray-400 leading-relaxed mb-8"
              >
                My background spans the entire product lifecycle: from data curation, model fine-tuning (QLoRA), and vector search (CLIP + FAISS) to production web applications built with Next.js, NestJS, FastAPI, and PostgreSQL.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.4 }}
                className="relative z-30 flex flex-wrap items-center gap-4"
              >
                <Link href="/contact" className="btn-primary inline-flex items-center gap-2 px-6 py-3">
                  Get In Touch
                </Link>
                <CVDropdown />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── NOW SECTION ────────────────────────────────────── */}
        <section className="mb-24">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="p-8 bg-gradient-to-br from-purple-950/40 via-surface to-cyan-950/20 border border-purple-800/30 rounded-2xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <h2 className="text-xl font-bold text-white uppercase tracking-wider text-sm font-mono">
                Current Focus &amp; Status (Now)
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-300 leading-relaxed">
              <div className="p-4 bg-background/60 rounded-xl border border-purple-900/20">
                <h3 className="text-white font-semibold mb-1">Full Stack Developer @ Primaria Tech</h3>
                <p className="text-gray-400">
                  Building agile web applications, optimizing API latency, and collaborating in cross-functional software teams.
                </p>
              </div>
              <div className="p-4 bg-background/60 rounded-xl border border-cyan-900/20">
                <h3 className="text-cyan-300 font-semibold mb-1">RAG &amp; LLM Engineering Research</h3>
                <p className="text-gray-400">
                  Exploring multimodal representations, synthetic instruction datasets, and PEFT fine-tuning pipelines for specialized domains.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ─── FOCUS AREAS ────────────────────────────────────── */}
        <section className="mb-24">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-10 text-center sm:text-left">
            <span className="tag-pill mb-3 inline-block">What I Do</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Areas of <span className="text-gradient">Expertise</span>
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
                className="p-6 bg-surface/50 border border-purple-800/20 hover:border-purple-600/40 rounded-2xl transition-all duration-200 hover:-translate-y-1"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-white font-bold text-base mb-2">{item.label}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ─── TIMELINE ───────────────────────────────────────── */}
        <section className="mb-12">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-12 text-center sm:text-left">
            <span className="tag-pill mb-3 inline-block">Journey</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Professional <span className="text-gradient">Timeline</span>
            </h2>
            <p className="text-gray-400 mt-2 text-sm">
              The evolution of my engineering and machine learning journey.
            </p>
          </motion.div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-purple-600/60 via-purple-600/20 to-transparent" />

            <div className="space-y-8 pl-14">
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
                    className={`absolute -left-[2.35rem] top-1.5 w-4 h-4 rounded-full bg-gradient-to-br ${typeColors[entry.type] || 'from-purple-600 to-purple-700'} ring-4 ring-background shadow-lg`}
                  />

                  {/* Card */}
                  <div className="bg-surface/50 border border-purple-800/20 hover:border-purple-600/30 rounded-xl p-6 transition-all duration-200">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="text-purple-400 font-bold text-sm font-mono">{entry.year}</span>
                      <span
                        className={`text-xs px-2.5 py-0.5 rounded-full bg-gradient-to-r ${typeColors[entry.type] || 'from-purple-600 to-purple-700'} text-white font-medium`}
                      >
                        {entry.type.charAt(0).toUpperCase() + entry.type.slice(1)}
                      </span>
                    </div>
                    <h3 className="text-white font-bold text-lg mb-2">{entry.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">{entry.description}</p>
                    {entry.tags && (
                      <div className="flex flex-wrap gap-1.5">
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
