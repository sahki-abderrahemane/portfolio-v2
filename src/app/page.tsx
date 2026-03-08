'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { getFeaturedProjects } from '@/data/projects';
import { skills } from '@/data/skills';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' as const },
  }),
};

const stats = [
  {
    value: '4+', label: 'Web Projects',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>,
  },
  {
    value: '6+', label: 'ML Certifications',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" /></svg>,
  },
  {
    value: '10+', label: 'Technologies',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" /></svg>,
  },
  {
    value: '3+', label: 'Years Experience',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" /></svg>,
  },
];

const featuredSkills = skills.filter((s) =>
  ['React', 'Next.js', 'Node.js', 'Python', 'TensorFlow', 'MongoDB', 'TypeScript', 'NestJS'].includes(s.name)
);

export default function HomePage() {
  const featured = getFeaturedProjects().slice(0, 3);

  return (
    <div className="min-h-screen bg-[#11071F] pt-16">
      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden hero-grid">
        {/* Ambient glows */}
        <div className="pointer-events-none absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full bg-purple-700/10 blur-[120px]" />
        <div className="pointer-events-none absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-blue-700/8 blur-[100px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Left – Text */}
            <div className="flex-1 text-center lg:text-left">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600/15 border border-purple-600/30 rounded-full text-purple-300 text-sm font-medium mb-8"
              >
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                Available for new opportunities
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight"
              >
                Hi, I'm{' '}
                <span className="text-gradient">Abderrahemane</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl md:text-2xl text-purple-300 font-medium mb-6"
              >
                AI Engineer &amp; Full Stack Developer
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-gray-400 text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed mb-10"
              >
                I build intelligent systems and scalable web applications — combining
                machine learning expertise with modern full-stack engineering to
                create meaningful digital experiences.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap gap-4 justify-center lg:justify-start"
              >
                <Link
                  href="/projects"
                  className="btn-primary inline-flex items-center gap-2 px-6 py-3 text-base"
                >
                  View Projects
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-purple-600/50 text-purple-300 hover:bg-purple-600/10 hover:border-purple-500 rounded-lg font-medium transition-all duration-200 text-base"
                >
                  Contact Me
                </Link>
                <a
                  href="/Abderrahmane_Sahki_Resume_ATS.pdf"
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white rounded-lg font-medium transition-all duration-200 text-base"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download CV
                </a>
              </motion.div>
            </div>

            {/* Right – Avatar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative flex-shrink-0"
            >
              <div className="relative w-56 h-56 md:w-72 md:h-72">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-600/40 to-blue-600/20 blur-2xl" />
                <div className="relative w-full h-full rounded-full border-2 border-purple-500/30 overflow-hidden bg-gradient-to-br from-[#2B0B3A] to-[#1a0624] p-1">
                  <Image
                    src="/Me.svg"
                    width={288}
                    height={288}
                    alt="Abderrahemane Sahki"
                    className="w-full h-full object-cover rounded-full float-animation"
                  />
                </div>
                {/* Floating badges */}
                <div className="absolute -bottom-2 -right-4 bg-[#1A0B2E] border border-purple-600/30 rounded-xl px-3 py-2 shadow-xl">
                  <span className="text-xs text-purple-300 font-medium">🤖 AI Engineer</span>
                </div>
                <div className="absolute -top-2 -left-4 bg-[#1A0B2E] border border-blue-600/30 rounded-xl px-3 py-2 shadow-xl">
                  <span className="text-xs text-blue-300 font-medium">💻 Full Stack</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 text-xs"
        >
          <span>Scroll down</span>
          <div className="w-0.5 h-8 bg-gradient-to-b from-purple-500 to-transparent animate-bounce" />
        </motion.div>
      </section>

      {/* ─── STATS ─────────────────────────────────────────────── */}
      <section className="py-16 border-y border-purple-900/20 bg-[#13082A]/40">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={i}
                className="stat-card"
              >
                <div className="w-10 h-10 mb-3 mx-auto rounded-xl bg-gradient-to-br from-purple-600/20 to-blue-600/10 border border-purple-500/20 flex items-center justify-center text-purple-300">{s.icon}</div>
                <div className="text-3xl font-bold text-white mb-1">{s.value}</div>
                <div className="text-gray-400 text-sm">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURED PROJECTS ─────────────────────────────────── */}
      <section className="py-24 max-w-7xl mx-auto px-6">
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
            A selection of projects that showcase my skills across AI, full-stack, and system design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {featured.map((project, i) => (
            <motion.div
              key={project.slug}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={i}
              className="group relative bg-gradient-to-br from-[#1A0B2E] to-[#13082A] rounded-2xl border border-purple-800/20 hover:border-purple-600/40 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-900/30"
            >
              {/* Image */}
              <div className="relative h-44 bg-gradient-to-br from-[#2B0B3A] to-[#1a0624] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A0B2E] via-transparent to-transparent" />
                <div className="absolute top-3 right-3 px-2 py-1 bg-black/40 backdrop-blur-sm rounded-full text-xs text-gray-300 border border-white/10">
                  {project.status}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-purple-400 text-xs font-medium uppercase tracking-wider mb-1">{project.theme}</p>
                <h3 className="text-white font-bold text-xl mb-2 group-hover:text-purple-200 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">{project.description}</p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.technologies.slice(0, 3).map((t) => (
                    <span key={t} className="tag-pill text-[10px]">{t}</span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="tag-pill text-[10px]">+{project.technologies.length - 3}</span>
                  )}
                </div>

                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors duration-200"
                >
                  View Details
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 border border-purple-600/40 text-purple-300 hover:bg-purple-600/10 rounded-xl transition-all duration-200 font-medium"
          >
            See All Projects
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ─── TECH STACK ─────────────────────────────────────────── */}
      <section className="py-20 border-t border-purple-900/15">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Tech <span className="text-gradient">Stack</span>
            </h2>
            <p className="text-gray-400">The tools and technologies I work with daily</p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6">
            {featuredSkills.map((skill, i) => (
              <motion.div
                key={skill.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={i}
                whileHover={{ y: -4, scale: 1.05 }}
                className="flex flex-col items-center gap-3 p-4 w-24 bg-[#1A0B2E]/60 border border-purple-800/20 hover:border-purple-600/40 rounded-xl transition-all duration-200 cursor-default"
              >
                <Image src={skill.icon} width={36} height={36} alt={skill.name} className="object-contain" />
                <span className="text-gray-400 text-xs text-center">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA STRIP ──────────────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl p-12 text-center"
            style={{
              background: 'linear-gradient(135deg, rgba(113,39,186,0.2), rgba(59,130,246,0.1))',
              border: '1px solid rgba(152,87,211,0.25)',
            }}
          >
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-600/5 to-blue-600/5" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Let's Build Something <span className="text-gradient">Together</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
              Whether it's an AI-powered product, a full-stack application, or an ML pipeline — I'm ready to collaborate.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center gap-2 px-8 py-3 text-base"
              >
                Get In Touch
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-8 py-3 border border-purple-600/40 text-purple-300 hover:bg-purple-600/10 rounded-lg font-medium transition-all duration-200 text-base"
              >
                Learn About Me
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}