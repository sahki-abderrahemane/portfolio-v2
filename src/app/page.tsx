'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { getFeaturedProjects } from '@/data/projects';
import { certifications } from '@/data/certifications';
import CVDropdown from '@/components/ui/CVDropdown';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

const stats = [
  { value: '03+', label: 'Years Building', suffix: 'Since 2022' },
  { value: '10+', label: 'Projects', suffix: 'Shipped & deployed' },
  { value: '06', label: 'ML Certifications', suffix: 'Stanford · DataCamp' },
  { value: '15+', label: 'Technologies', suffix: 'Across full stack + AI' },
];

const aiStrip = ['LLMs', 'RAG', 'Fine-Tuning', 'Multimodal', 'Vector Search', 'ML'];
const engStrip = ['Next.js', 'NestJS', 'FastAPI', 'PostgreSQL', 'Docker', 'TypeScript'];

const trajectory = [
  { year: '2022', label: 'Software Engineering', color: 'from-gray-500 to-gray-400' },
  { year: '2023', label: 'Full Stack', color: 'from-blue-600 to-blue-400' },
  { year: '2024', label: 'ML + AI', color: 'from-purple-600 to-purple-400' },
  { year: '2024', label: 'LLM Systems', color: 'from-violet-600 to-cyan-400' },
  { year: 'Now', label: 'RAG · Fine-Tuning · Multimodal', color: 'from-cyan-500 to-blue-400' },
];

const statusColor: Record<string, string> = {
  Live: 'bg-green-500/15 text-green-400 border-green-500/30',
  Completed: 'bg-blue-500/15 text-blue-400 border-blue-500/30',
  Private: 'bg-gray-500/15 text-gray-400 border-gray-500/30',
  'In Progress': 'bg-yellow-500/15 text-yellow-400 border-yellow-500/30',
};

// GitHub SVG icon
const GitHubIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export default function HomePage() {
  const featured = getFeaturedProjects().slice(0, 3);
  const topCerts = certifications.slice(0, 3);

  return (
    <div className="min-h-screen bg-background pt-16">

      {/* ═══════════════════════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[95vh] flex items-center overflow-x-clip grid-bg z-20" aria-label="Introduction">
        {/* Ambient glows */}
        <div className="pointer-events-none absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full bg-purple-700/10 blur-[130px]" />
        <div className="pointer-events-none absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-blue-700/6 blur-[110px]" />
        <div className="pointer-events-none absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full bg-purple-800/6 blur-[100px]" />

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 py-24 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">

            {/* ── Left: Text ─────────────────────────────────────── */}
            <div className="flex-1 text-center lg:text-left">

              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-3 justify-center lg:justify-start mb-8"
              >
                {/* Mini avatar */}
                <div className="w-8 h-8 rounded-full border border-purple-500/40 overflow-hidden flex-shrink-0">
                  <Image src="/Me.svg" width={32} height={32} alt="" aria-hidden="true" className="w-full h-full object-cover" />
                </div>
                <span className="font-mono text-xs font-semibold tracking-[0.2em] uppercase text-purple-300/90">
                  AI Engineer · Full Stack Developer
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.1 }}
                className="font-bold text-white leading-[1.1] mb-6"
                style={{ fontSize: 'clamp(3rem, 6.5vw, 6.5rem)' }}
              >
                Building{' '}
                <span className="text-gradient">AI-powered</span>
                {' '}systems that solve real problems.
              </motion.h1>

              {/* Supporting text */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="text-gray-400 text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed mb-10"
              >
                I design and build intelligent products across LLMs, RAG, multimodal AI,
                machine learning, and modern full-stack systems.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.38 }}
                className="relative z-30 flex flex-wrap gap-4 justify-center lg:justify-start"
              >
                <Link
                  href="/projects"
                  className="btn-primary inline-flex items-center gap-2 px-6 py-3 text-base"
                >
                  View My Work
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>

                <CVDropdown />

                <Link
                  href="https://github.com/sahki-abderrahemane"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-gray-300 hover:text-white rounded-lg font-medium transition-all duration-200 text-base"
                >
                  <GitHubIcon />
                  GitHub
                </Link>
              </motion.div>
            </div>

            {/* ── Right: Abstract AI Visual ───────────────────────── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative flex-shrink-0 w-72 h-72 md:w-96 md:h-96"
              aria-hidden="true"
            >
              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-600/20 to-blue-600/10 blur-3xl" />

              {/* SVG node graph */}
              <svg viewBox="0 0 400 400" className="w-full h-full" fill="none">
                {/* Outer ring connections */}
                <line x1="200" y1="200" x2="110" y2="100" stroke="rgba(152,87,211,0.25)" strokeWidth="1.5" />
                <line x1="200" y1="200" x2="310" y2="100" stroke="rgba(110,191,244,0.25)" strokeWidth="1.5" />
                <line x1="200" y1="200" x2="340" y2="230" stroke="rgba(152,87,211,0.2)" strokeWidth="1.5" />
                <line x1="200" y1="200" x2="290" y2="320" stroke="rgba(110,191,244,0.2)" strokeWidth="1.5" />
                <line x1="200" y1="200" x2="110" y2="320" stroke="rgba(152,87,211,0.2)" strokeWidth="1.5" />
                <line x1="200" y1="200" x2="60" y2="230" stroke="rgba(110,191,244,0.2)" strokeWidth="1.5" />

                {/* Cross connections between outer nodes */}
                <line x1="110" y1="100" x2="310" y2="100" stroke="rgba(152,87,211,0.12)" strokeWidth="1" />
                <line x1="310" y1="100" x2="340" y2="230" stroke="rgba(110,191,244,0.12)" strokeWidth="1" />
                <line x1="340" y1="230" x2="290" y2="320" stroke="rgba(152,87,211,0.12)" strokeWidth="1" />
                <line x1="290" y1="320" x2="110" y2="320" stroke="rgba(110,191,244,0.12)" strokeWidth="1" />
                <line x1="110" y1="320" x2="60" y2="230" stroke="rgba(152,87,211,0.12)" strokeWidth="1" />
                <line x1="60" y1="230" x2="110" y2="100" stroke="rgba(110,191,244,0.12)" strokeWidth="1" />

                {/* Outer nodes */}
                {[
                  { cx: 110, cy: 100, r: 8, fill: '#9857d3', label: 'LLM' },
                  { cx: 310, cy: 100, r: 8, fill: '#6EBFF4', label: 'RAG' },
                  { cx: 340, cy: 230, r: 6, fill: '#9857d3', label: 'CLIP' },
                  { cx: 290, cy: 320, r: 8, fill: '#6EBFF4', label: 'API' },
                  { cx: 110, cy: 320, r: 6, fill: '#9857d3', label: 'DB' },
                  { cx: 60, cy: 230, r: 7, fill: '#6EBFF4', label: 'UI' },
                ].map((n) => (
                  <g key={n.label}>
                    <circle cx={n.cx} cy={n.cy} r={n.r + 4} fill={n.fill} opacity="0.15" />
                    <circle cx={n.cx} cy={n.cy} r={n.r} fill={n.fill} opacity="0.9" />
                    <text x={n.cx} y={n.cy - n.r - 6} textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.6)" fontFamily="monospace">
                      {n.label}
                    </text>
                  </g>
                ))}

                {/* Centre node — pulsing */}
                <circle cx="200" cy="200" r="36" fill="rgba(152,87,211,0.08)" />
                <circle cx="200" cy="200" r="26" fill="rgba(152,87,211,0.15)" />
                <circle cx="200" cy="200" r="18" fill="#9857d3" opacity="0.9" className="pulse-glow" />
                <text x="200" y="196" textAnchor="middle" fontSize="9" fill="white" fontFamily="monospace" fontWeight="bold">AI</text>
                <text x="200" y="208" textAnchor="middle" fontSize="8" fill="rgba(255,255,255,0.7)" fontFamily="monospace">Core</text>
              </svg>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600 text-xs"
          aria-hidden="true"
        >
          <span className="tracking-wider">SCROLL</span>
          <div className="w-px h-8 bg-gradient-to-b from-purple-500/50 to-transparent" />
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          STATS BAR
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="border-y border-purple-900/20 bg-surface/40" aria-label="Statistics">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-purple-900/20">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={i}
                className="text-center px-4 py-2"
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{s.value}</div>
                <div className="text-sm font-medium text-purple-300 mb-0.5">{s.label}</div>
                <div className="text-xs text-gray-600">{s.suffix}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          FEATURED PROJECTS
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6" aria-label="Featured projects">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="tag-pill mb-4 inline-block">Featured Work</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Selected <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A selection of projects showcasing AI engineering, full-stack production, and graph ML.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {featured.map((project, i) => (
            <motion.article
              key={project.slug}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={i}
              className="group relative bg-gradient-to-br from-surface to-background-alt rounded-2xl border border-purple-800/20 hover:border-purple-600/40 overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-900/30 flex flex-col"
            >
              {/* Project number */}
              <div className="absolute top-4 left-4 z-10 font-mono text-xs font-bold text-purple-500/70">
                {String(i + 1).padStart(2, '0')}
              </div>

              {/* Image */}
              <div className="relative h-44 bg-gradient-to-br from-[#2B0B3A] to-[#1a0624] overflow-hidden flex-shrink-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
                <div className="absolute top-3 right-3">
                  <span className={`text-[10px] px-2 py-0.5 rounded-full border font-medium backdrop-blur-sm ${statusColor[project.status]}`}>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <p className="text-purple-400 text-[10px] font-semibold uppercase tracking-[0.15em] mb-2">
                  {project.category}
                </p>
                <h3 className="text-white font-bold text-xl mb-2 group-hover:text-purple-200 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1 line-clamp-2">
                  {project.problem || project.description}
                </p>

                {/* Tech tags — single line summary */}
                <p className="text-[11px] text-gray-600 mb-4 font-mono">
                  {project.technologies.slice(0, 4).join(' · ')}
                  {project.technologies.length > 4 && ` · +${project.technologies.length - 4}`}
                </p>

                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors duration-200"
                >
                  View Case Study
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 border border-purple-600/40 text-purple-300 hover:bg-purple-600/10 rounded-xl transition-all duration-200 font-medium hover:-translate-y-0.5"
          >
            See All Projects
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          AI ENGINEERING STRIP
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-12 border-t border-purple-900/15" aria-label="AI engineering focus areas">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10"
          >
            <div className="flex-shrink-0 text-center sm:text-left">
              <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-purple-400 mb-1">AI Focus</p>
              <Link href="/ai" className="text-white font-bold text-lg hover:text-purple-300 transition-colors duration-200 flex items-center gap-1.5">
                AI / ML
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="flex-1 flex flex-wrap gap-2 justify-center sm:justify-start">
              {aiStrip.map((tag) => (
                <span key={tag} className="px-3 py-1.5 text-sm font-medium bg-purple-600/10 text-purple-300 border border-purple-600/20 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          ENGINEERING STRIP
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-12 border-t border-purple-900/15" aria-label="Engineering stack">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10"
          >
            <div className="flex-shrink-0 text-center sm:text-left">
              <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-blue-400 mb-1">Full Stack</p>
              <Link href="/engineering" className="text-white font-bold text-lg hover:text-blue-300 transition-colors duration-200 flex items-center gap-1.5">
                Engineering
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="flex-1 flex flex-wrap gap-2 justify-center sm:justify-start">
              {engStrip.map((tag) => (
                <span key={tag} className="px-3 py-1.5 text-sm font-medium bg-blue-600/10 text-blue-300 border border-blue-600/20 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          TRAJECTORY
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 border-t border-purple-900/15" aria-label="Career trajectory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="tag-pill mb-4 inline-block">Journey</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">My Trajectory</h2>
          </motion.div>

          <div className="relative flex flex-col gap-0" role="list">
            {/* Vertical line */}
            <div className="absolute left-[1.65rem] top-4 bottom-4 w-px bg-gradient-to-b from-purple-600/60 via-purple-500/30 to-transparent" aria-hidden="true" />

            {trajectory.map((t, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={i}
                role="listitem"
                className="relative flex items-center gap-6 py-4"
              >
                {/* Dot */}
                <div className={`relative flex-shrink-0 w-[3.3rem] h-[3.3rem] rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center shadow-lg`} aria-hidden="true">
                  <span className="text-[10px] font-mono font-bold text-white/90">{t.year}</span>
                </div>
                <div>
                  <p className="text-white font-semibold">{t.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          CERTIFICATIONS STRIP
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-16 border-t border-purple-900/15" aria-label="Certifications">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="tag-pill mb-4 inline-block">Credentials</span>
            <h2 className="text-3xl font-bold text-white">
              06 ML <span className="text-gradient">Certifications</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {topCerts.map((cert, i) => (
              <motion.div
                key={cert.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={i}
                className="p-5 bg-surface/60 border border-purple-800/20 rounded-xl hover:border-purple-600/40 transition-colors duration-200"
              >
                <p className="text-purple-400 text-xs font-medium mb-1">{cert.issuer}</p>
                <p className="text-white font-semibold text-sm leading-snug">{cert.title}</p>
                <p className="text-gray-600 text-xs mt-1">{cert.date}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/certifications" className="text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors duration-200 inline-flex items-center gap-1.5">
              View all 6 certifications
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          CTA
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24" aria-label="Call to action">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl p-12 text-center"
            style={{
              background: 'linear-gradient(135deg, rgba(113,39,186,0.2), rgba(59,130,246,0.08))',
              border: '1px solid rgba(152,87,211,0.25)',
            }}
          >
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-600/5 to-blue-600/5" aria-hidden="true" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Let's build something <span className="text-gradient">intelligent.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
              Open to AI engineering roles, full-stack projects, and research collaborations.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2 px-8 py-3 text-base">
                Get In Touch
              </Link>
              <Link href="/about" className="inline-flex items-center gap-2 px-8 py-3 border border-purple-600/40 text-purple-300 hover:bg-purple-600/10 rounded-lg font-medium transition-all duration-200 text-base">
                Learn About Me
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}