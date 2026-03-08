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
    { name: 'React', icon: '/react.svg', level: 90 },
    { name: 'Next.js', icon: '/next.svg', level: 88 },
    { name: 'TypeScript', icon: '/typescript.svg', level: 82 },
    { name: 'JavaScript', icon: '/js.svg', level: 92 },
];

const backend = [
    { name: 'Node.js', icon: '/nodejs.svg', level: 88 },
    { name: 'NestJS', icon: '/nestjs.svg', level: 80 },
    { name: 'FastAPI', icon: '/python.svg', level: 78 },
    { name: 'Express', icon: '/express.svg', level: 90 },
];

const databases = [
    { name: 'MongoDB', icon: '/mongo.svg', level: 85 },
    { name: 'PostgreSQL', icon: '/postgresql.svg', level: 75 },
    { name: 'MySQL', icon: '/mysql.svg', level: 75 },
    { name: 'Redis', icon: '/redis.svg', level: 65 },
];

const architectures = [
    {
        title: 'Monolithic',
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" /></svg>,
        desc: 'Traditional single-unit architecture — ideal for small to medium applications. Clean layered structure with controllers, services, and repositories.',
        tags: ['MVC', 'Layered', 'Tight coupling'],
        color: 'from-blue-600/20 to-blue-700/10',
        border: 'border-blue-600/25',
    },
    {
        title: 'Microservices',
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.401.604-.401.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.959.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z" /></svg>,
        desc: 'Distributed system where each service is independently deployable. Enables teams to work in isolation and scale individual services.',
        tags: ['Independent deploy', 'Scalable', 'API Gateway'],
        color: 'from-purple-600/20 to-purple-700/10',
        border: 'border-purple-600/25',
    },
    {
        title: 'GraphQL API',
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" /></svg>,
        desc: 'Flexible query language for APIs — clients request exactly the data they need. Ideal for complex, interconnected data requirements.',
        tags: ['Type-safe', 'Single endpoint', 'Flexible queries'],
        color: 'from-pink-600/20 to-pink-700/10',
        border: 'border-pink-600/25',
    },
    {
        title: 'Real-time',
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" /></svg>,
        desc: 'WebSocket-based systems with Socket.io for live chat, notifications, collaborative editing, and live dashboards.',
        tags: ['WebSockets', 'Socket.io', 'Low latency'],
        color: 'from-green-600/20 to-green-700/10',
        border: 'border-green-600/25',
    },
];

// Microservices diagram items
const microservicesDiagram = [
    { label: 'React / Next.js Frontend', color: 'border-blue-500/40 text-blue-300' },
    null, // arrow
    { label: 'API Gateway', color: 'border-purple-500/40 text-purple-300' },
    null, // arrow
    null, // row of services
];

const services = [
    { label: 'Auth Service', color: 'text-pink-300 border-pink-500/30' },
    { label: 'User Service', color: 'text-cyan-300 border-cyan-500/30' },
    { label: 'Data Service', color: 'text-green-300 border-green-500/30' },
    { label: 'AI/ML Service', color: 'text-orange-300 border-orange-500/30' },
];

const principles = [
    { icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>, title: 'Security First', desc: 'JWT auth, input validation, rate limiting, HTTPS everywhere' },
    { icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>, title: 'Performance', desc: 'Caching with Redis, CDN, lazy loading, query optimization' },
    { icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" /></svg>, title: 'Clean Code', desc: 'SOLID principles, DRY, meaningful naming, comprehensive docs' },
    { icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" /></svg>, title: 'CI/CD Mindset', desc: 'Automated testing, code reviews, incremental delivery' },
    { icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" /></svg>, title: 'Observability', desc: 'Structured logging, error tracking, health endpoints' },
    { icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" /></svg>, title: 'Testing', desc: 'Unit tests, integration tests, e2e testing strategies' },
];

export default function EngineeringPage() {
    return (
        <div className="min-h-screen bg-[#11071F] pt-24 pb-20">
            <div className="max-w-6xl mx-auto px-6">

                {/* ─── HEADER ─────────────────────────────────────────── */}
                <section className="mb-20 text-center">
                    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                        <span className="tag-pill mb-4 inline-block">Engineering</span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5">
                            Software <span className="text-gradient">Engineering</span>
                        </h1>
                        <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
                            Designing and building scalable full-stack applications — from beautiful React UIs
                            to robust NestJS backends, database architecture, and real-time systems.
                        </p>
                    </motion.div>
                </section>

                {/* ─── TECH SKILLS ─────────────────────────────────────── */}
                <section className="mb-20">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-10">
                        <span className="tag-pill mb-3 inline-block">Stack</span>
                        <h2 className="text-3xl font-bold text-white">Technical <span className="text-gradient">Proficiency</span></h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Frontend */}
                        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="p-6 bg-[#1A0B2E]/60 border border-purple-800/20 rounded-2xl">
                            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                                <span className="text-2xl">🎨</span> Frontend
                            </h3>
                            <div className="space-y-5">
                                {frontend.map((tech) => (
                                    <div key={tech.name}>
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center gap-2">
                                                <Image src={tech.icon} width={20} height={20} alt={tech.name} className="object-contain" />
                                                <span className="text-gray-300 text-sm">{tech.name}</span>
                                            </div>
                                            <span className="text-gray-500 text-xs">{tech.level}%</span>
                                        </div>
                                        <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${tech.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                                                className="h-full bg-gradient-to-r from-purple-600 to-blue-500 rounded-full"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Backend */}
                        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={1} className="p-6 bg-[#1A0B2E]/60 border border-purple-800/20 rounded-2xl">
                            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                                <span className="text-2xl">⚙️</span> Backend
                            </h3>
                            <div className="space-y-5">
                                {backend.map((tech) => (
                                    <div key={tech.name}>
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center gap-2">
                                                <Image src={tech.icon} width={20} height={20} alt={tech.name} className="object-contain" />
                                                <span className="text-gray-300 text-sm">{tech.name}</span>
                                            </div>
                                            <span className="text-gray-500 text-xs">{tech.level}%</span>
                                        </div>
                                        <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${tech.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
                                                className="h-full bg-gradient-to-r from-green-600 to-emerald-500 rounded-full"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Databases */}
                        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={2} className="p-6 bg-[#1A0B2E]/60 border border-purple-800/20 rounded-2xl">
                            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                                <span className="text-2xl">🗄️</span> Databases
                            </h3>
                            <div className="space-y-5">
                                {databases.map((tech) => (
                                    <div key={tech.name}>
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center gap-2">
                                                <Image src={tech.icon} width={20} height={20} alt={tech.name} className="object-contain" />
                                                <span className="text-gray-300 text-sm">{tech.name}</span>
                                            </div>
                                            <span className="text-gray-500 text-xs">{tech.level}%</span>
                                        </div>
                                        <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${tech.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
                                                className="h-full bg-gradient-to-r from-orange-600 to-amber-500 rounded-full"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* ─── ARCHITECTURE PATTERNS ──────────────────────────── */}
                <section className="mb-20">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-10">
                        <span className="tag-pill mb-3 inline-block">Design</span>
                        <h2 className="text-3xl font-bold text-white">
                            Architecture <span className="text-gradient">Patterns</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {architectures.map((arch, i) => (
                            <motion.div
                                key={arch.title}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                custom={i}
                                className={`p-6 bg-gradient-to-br ${arch.color} border ${arch.border} rounded-2xl transition-all duration-200 hover:-translate-y-1 hover:shadow-xl`}
                            >
                                <div className="w-11 h-11 mb-3 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-white">{arch.icon}</div>
                                <h3 className="text-white font-bold text-lg mb-2">{arch.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-4">{arch.desc}</p>
                                <div className="flex flex-wrap gap-2">
                                    {arch.tags.map((t) => (
                                        <span key={t} className="tag-pill text-[11px]">{t}</span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* ─── MICROSERVICES DIAGRAM ───────────────────────────── */}
                <section className="mb-20">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-8">
                        <span className="tag-pill mb-3 inline-block">Example</span>
                        <h2 className="text-3xl font-bold text-white">
                            Microservices <span className="text-gradient">Architecture</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        custom={1}
                        className="p-8 bg-[#1A0B2E]/60 border border-purple-800/20 rounded-2xl font-mono text-sm"
                    >
                        <div className="flex flex-col items-center gap-3">
                            <div className="px-6 py-2.5 rounded-xl border border-blue-500/40 text-blue-300 bg-blue-500/10">
                                React / Next.js — Client
                            </div>
                            <div className="text-gray-600 text-lg">↓</div>
                            <div className="px-6 py-2.5 rounded-xl border border-purple-500/40 text-purple-300 bg-purple-500/10">
                                API Gateway (Routing, Auth, Rate Limiting)
                            </div>
                            <div className="text-gray-600 text-lg">↓</div>
                            <div className="flex flex-wrap justify-center gap-3">
                                {services.map((s) => (
                                    <div key={s.label} className={`px-4 py-2 rounded-xl border ${s.color} bg-white/5 text-xs`}>
                                        {s.label}
                                    </div>
                                ))}
                            </div>
                            <div className="text-gray-600 text-lg">↓</div>
                            <div className="flex flex-wrap justify-center gap-3">
                                <div className="px-4 py-2 rounded-xl border border-orange-500/30 text-orange-300 bg-orange-500/5 text-xs">MongoDB</div>
                                <div className="px-4 py-2 rounded-xl border border-cyan-500/30 text-cyan-300 bg-cyan-500/5 text-xs">PostgreSQL</div>
                                <div className="px-4 py-2 rounded-xl border border-red-500/30 text-red-300 bg-red-500/5 text-xs">Redis Cache</div>
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* ─── PRINCIPLES ─────────────────────────────────────── */}
                <section className="mb-12">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-10">
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
                                className="p-5 bg-[#1A0B2E]/60 border border-purple-800/20 hover:border-purple-600/40 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                            >
                                <div className="w-10 h-10 mb-3 rounded-xl bg-gradient-to-br from-purple-600/20 to-blue-600/10 border border-purple-500/20 flex items-center justify-center text-purple-300">{p.icon}</div>
                                <h3 className="text-white font-semibold mb-1">{p.title}</h3>
                                <p className="text-gray-400 text-sm">{p.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
