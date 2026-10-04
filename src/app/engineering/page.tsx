'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: 'easeOut' as const },
  }),
};

const frontend = [
  { name: 'React', icon: '/react.svg', level: 90, desc: 'Component architectures & hooks' },
  { name: 'Next.js', icon: '/next.svg', level: 88, desc: 'App Router, SSR, SSG & Server Components' },
  { name: 'TypeScript', icon: '/typescript.svg', level: 85, desc: 'Strict typing, generics & interfaces' },
  { name: 'JavaScript', icon: '/js.svg', level: 92, desc: 'ES6+, async workflows & browser APIs' },
];

const backend = [
  { name: 'Node.js', icon: '/nodejs.svg', level: 88, desc: 'Event-driven asynchronous services' },
  { name: 'NestJS', icon: '/nestjs.svg', level: 82, desc: 'Modular backend architecture & dependency injection' },
  { name: 'FastAPI', icon: '/python.svg', level: 85, desc: 'High-performance Python APIs & ML model serving' },
  { name: 'Express', icon: '/express.svg', level: 90, desc: 'RESTful API routing & custom middleware' },
];

const databases = [
  { name: 'PostgreSQL', icon: '/postgresql.svg', level: 80, desc: 'Relational data modeling, indexing & ACID' },
  { name: 'MongoDB', icon: '/mongo.svg', level: 85, desc: 'Document schemas, aggregations & Atlas' },
  { name: 'MySQL', icon: '/mysql.svg', level: 78, desc: 'Relational schemas & marketplace queries' },
  { name: 'Redis', icon: '/redis.svg', level: 75, desc: 'In-memory caching, sessions & BullMQ' },
];

const architectures = [
  {
    title: 'Modular Monoliths',
    desc: 'Domain-driven modular services built with NestJS. Clear separation of concerns with controllers, services, and repositories for maintainability.',
    tags: ['NestJS', 'Domain-Driven', 'Clean Architecture'],
    example: 'DA-Mall Marketplace Backend',
    color: 'from-blue-600/20 to-blue-700/10',
    border: 'border-blue-600/25',
  },
  {
    title: 'Hybrid AI Microservices',
    desc: 'Separation of heavy ML inference pipelines from core business APIs. Fast API gateways orchestrate lightweight web services and asynchronous Python workers.',
    tags: ['FastAPI Gateway', 'Microservices', 'Asynchronous Queues'],
    example: 'Email EU Graph & VisualMind Search',
    color: 'from-purple-600/20 to-purple-700/10',
    border: 'border-purple-600/25',
  },
  {
    title: 'Real-time Event Systems',
    desc: 'WebSocket-based bidirectional communication architectures with Socket.io for live chat, telemetry, and notifications.',
    tags: ['WebSockets', 'Socket.io', 'Sub-millisecond latency'],
    example: 'HealSeek & Edu+ Platforms',
    color: 'from-emerald-600/20 to-emerald-700/10',
    border: 'border-emerald-600/25',
  },
  {
    title: 'Vector Search & Embeddings Layer',
    desc: 'Sub-50ms approximate nearest neighbor (ANN) retrieval indexes with FAISS and CLIP embeddings connected to caching layers.',
    tags: ['FAISS', 'Vector Stores', 'Embedding Space'],
    example: 'VisualMind & MentorAI RAG',
    color: 'from-cyan-600/20 to-cyan-700/10',
    border: 'border-cyan-600/25',
  },
];

const principles = [
  { title: 'Security by Design', desc: 'JWT authentication, input sanitation, rate limiting, and strict CORS policies.' },
  { title: 'Performance Optimization', desc: 'Redis caching, query indexing, edge asset optimization, and minimal bundle footprints.' },
  { title: 'Clean, Typed Code', desc: 'Strong TypeScript typing, SOLID principles, DRY abstractions, and comprehensive docs.' },
  { title: 'Containerization & CI/CD', desc: 'Docker multi-stage builds, predictable environments, and automated testing.' },
  { title: 'Observability & Logging', desc: 'Structured logging, healthcheck endpoints, and proactive error tracing.' },
  { title: 'Scalable Database Design', desc: 'Normalized schemas, indexing strategies, connection pooling, and replication.' },
];

export default function EngineeringPage() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-24 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* ─── HEADER ─────────────────────────────────────────── */}
        <section className="mb-20 text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="tag-pill mb-4 inline-block">Production Engineering</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5">
              Full-Stack <span className="text-gradient">Software Engineering</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
              Building reliable, maintainable, and high-performance production systems — combining modern TypeScript frontends with resilient backend architectures and optimized databases.
            </p>
          </motion.div>
        </section>

        {/* ─── PROFICIENCY STACKS ──────────────────────────────── */}
        <section className="mb-24">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-10 text-center sm:text-left">
            <span className="tag-pill mb-3 inline-block">Stack</span>
            <h2 className="text-3xl font-bold text-white">
              Technical <span className="text-gradient">Proficiency</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Frontend */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="p-6 bg-surface/50 border border-purple-800/20 rounded-2xl flex flex-col">
              <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                <span className="text-xl">🎨</span> Frontend Engineering
              </h3>
              <div className="space-y-6 flex-1">
                {frontend.map((tech) => (
                  <div key={tech.name}>
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <Image src={tech.icon} width={20} height={20} alt="" className="object-contain" />
                        <span className="text-gray-200 text-sm font-medium">{tech.name}</span>
                      </div>
                      <span className="text-gray-400 text-xs font-mono">{tech.level}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-gray-800/80 rounded-full overflow-hidden mb-1">
                      <div className="h-full bg-gradient-to-r from-purple-500 to-blue-400 rounded-full" style={{ width: `${tech.level}%` }} />
                    </div>
                    <p className="text-[11px] text-gray-500">{tech.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Backend */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={1} className="p-6 bg-surface/50 border border-purple-800/20 rounded-2xl flex flex-col">
              <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                <span className="text-xl">⚙️</span> Backend &amp; APIs
              </h3>
              <div className="space-y-6 flex-1">
                {backend.map((tech) => (
                  <div key={tech.name}>
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <Image src={tech.icon} width={20} height={20} alt="" className="object-contain" />
                        <span className="text-gray-200 text-sm font-medium">{tech.name}</span>
                      </div>
                      <span className="text-gray-400 text-xs font-mono">{tech.level}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-gray-800/80 rounded-full overflow-hidden mb-1">
                      <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" style={{ width: `${tech.level}%` }} />
                    </div>
                    <p className="text-[11px] text-gray-500">{tech.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Databases */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={2} className="p-6 bg-surface/50 border border-purple-800/20 rounded-2xl flex flex-col">
              <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                <span className="text-xl">🗄️</span> Databases &amp; Storage
              </h3>
              <div className="space-y-6 flex-1">
                {databases.map((tech) => (
                  <div key={tech.name}>
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <Image src={tech.icon} width={20} height={20} alt="" className="object-contain" />
                        <span className="text-gray-200 text-sm font-medium">{tech.name}</span>
                      </div>
                      <span className="text-gray-400 text-xs font-mono">{tech.level}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-gray-800/80 rounded-full overflow-hidden mb-1">
                      <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" style={{ width: `${tech.level}%` }} />
                    </div>
                    <p className="text-[11px] text-gray-500">{tech.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ─── ARCHITECTURE PATTERNS ──────────────────────────── */}
        <section className="mb-24">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-10 text-center sm:text-left">
            <span className="tag-pill mb-3 inline-block">System Design</span>
            <h2 className="text-3xl font-bold text-white">
              Architecture <span className="text-gradient">Patterns in Practice</span>
            </h2>
            <p className="text-gray-400 mt-2 max-w-2xl">
              Proven patterns and system designs implemented in production projects.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {architectures.map((arch, i) => (
              <motion.div
                key={arch.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={i}
                className={`p-7 bg-gradient-to-br ${arch.color} border ${arch.border} rounded-2xl transition-all duration-200 hover:-translate-y-1`}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-white font-bold text-xl">{arch.title}</h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">{arch.desc}</p>
                <p className="text-xs font-mono text-purple-300 mb-4">
                  Implemented in: <span className="text-white font-semibold">{arch.example}</span>
                </p>
                <div className="flex flex-wrap gap-2">
                  {arch.tags.map((t) => (
                    <span key={t} className="tag-pill text-[11px]">{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ─── PRINCIPLES ─────────────────────────────────────── */}
        <section className="mb-12">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-10 text-center sm:text-left">
            <span className="tag-pill mb-3 inline-block">Philosophy</span>
            <h2 className="text-3xl font-bold text-white">
              Engineering <span className="text-gradient">Principles</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {principles.map((p, i) => (
              <motion.div
                key={p.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={i}
                className="p-6 bg-surface/50 border border-purple-800/20 hover:border-purple-600/40 rounded-2xl transition-all duration-200"
              >
                <h3 className="text-white font-bold text-base mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-purple-400" />
                  {p.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
