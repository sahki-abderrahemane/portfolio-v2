import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getProjectBySlug, projects, Project } from '@/data/projects';
import CaseStudyProgress, { ProgressSection } from '@/components/projects/CaseStudyProgress';

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) {
    return {
      title: 'Project Not Found | Abderrahemane Sahki',
    };
  }

  return {
    title: `${project.title} — Case Study | Abderrahemane Sahki`,
    description: project.problem || project.description,
    openGraph: {
      title: `${project.title} — Case Study | Abderrahemane Sahki`,
      description: project.problem || project.description,
      images: [{ url: project.image }],
    },
  };
}

const statusColor: Record<string, string> = {
  Live: 'bg-green-500/15 text-green-400 border-green-500/30',
  Completed: 'bg-blue-500/15 text-blue-400 border-blue-500/30',
  Private: 'bg-gray-500/15 text-gray-400 border-gray-500/30',
  'In Progress': 'bg-yellow-500/15 text-yellow-400 border-yellow-500/30',
};

function calculateReadTime(project: Project): string {
  const totalWords = (
    project.longDescription +
    (project.problem || '') +
    (project.solution || '') +
    (project.architecture || '') +
    (project.highlights?.join(' ') || '') +
    (project.challenges?.join(' ') || '') +
    (project.results?.join(' ') || '')
  ).split(/\s+/).length;

  const minutes = Math.max(2, Math.ceil(totalWords / 150));
  return `${minutes} min read`;
}

export default function ProjectDetailPage({ params }: PageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) return notFound();

  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 2);
  const readTime = calculateReadTime(project);

  const sections: ProgressSection[] = [
    { id: 'overview', label: 'Overview' },
    { id: 'problem-solution', label: 'Problem & Solution' },
    ...(project.architecture ? [{ id: 'architecture', label: 'Architecture' }] : []),
    ...(project.stack ? [{ id: 'stack', label: 'Technical Stack' }] : []),
    ...(project.challenges && project.challenges.length > 0 ? [{ id: 'challenges', label: 'Challenges' }] : []),
    ...(project.results && project.results.length > 0 ? [{ id: 'results', label: 'Results' }] : []),
  ];

  return (
    <div className="min-h-screen bg-background pt-24 pb-24 text-white">
      {/* Floating/Sticky Progress Tracker */}
      <CaseStudyProgress sections={sections} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">

        {/* Back navigation */}
        <div className="mb-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-purple-300 text-sm transition-colors duration-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to All Projects
          </Link>
        </div>

        {/* ─── HERO HEADER ────────────────────────────────────── */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-xs px-3 py-1 rounded-full bg-purple-600/20 text-purple-200 border border-purple-500/40 font-medium">
              {project.category}
            </span>
            <span className={`text-xs px-3 py-1 rounded-full border font-medium ${statusColor[project.status]}`}>
              {project.status}
            </span>
            <span className="text-xs text-gray-400 font-mono">
              {readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            {project.title}
          </h1>
          <p className="text-xl text-purple-300/90 font-medium mb-6">
            {project.theme}
          </p>

          {/* Quick links & buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            {project.links.link && (
              <a
                href={project.links.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 px-5 py-2.5 text-sm"
              >
                Live Preview
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}

            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white rounded-lg text-sm font-medium transition-all duration-200"
              >
                <Image src="/github.svg" width={16} height={16} alt="" aria-hidden="true" />
                Source Code
              </a>
            )}
          </div>
        </header>

        {/* ─── HERO VISUAL / BANNER ──────────────────────────── */}
        <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden mb-16 border border-purple-800/30 bg-gradient-to-br from-[#2B0B3A] to-[#1a0624]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover opacity-85"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        {/* ─── CASE STUDY CONTENT SECTIONS ──────────────────── */}
        <div className="space-y-16">

          {/* Section 1: Overview */}
          <section id="overview" className="scroll-mt-28">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full" />
              Overview
            </h2>
            <div className="p-6 bg-surface/50 border border-purple-800/20 rounded-2xl">
              <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                {project.longDescription}
              </p>
            </div>
          </section>

          {/* Section 2: Problem & Solution */}
          <section id="problem-solution" className="scroll-mt-28">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full" />
              Problem &amp; Solution
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-red-950/20 border border-red-800/30 rounded-2xl">
                <div className="flex items-center gap-2 text-red-400 font-semibold text-sm mb-3 uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-red-400" />
                  The Problem
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {project.problem || project.description}
                </p>
              </div>

              <div className="p-6 bg-emerald-950/20 border border-emerald-800/30 rounded-2xl">
                <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm mb-3 uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  The Solution
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {project.solution || project.longDescription}
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Architecture Diagram */}
          {project.architecture && (
            <section id="architecture" className="scroll-mt-28">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full" />
                Architecture &amp; Dataflow
              </h2>
              <div className="p-6 bg-surface/60 border border-purple-800/25 rounded-2xl">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono uppercase text-purple-400 tracking-wider">
                    Pipeline Architecture
                  </span>
                </div>
                <div className="p-4 bg-background/80 rounded-xl border border-purple-900/30 font-mono text-sm text-purple-200 leading-relaxed overflow-x-auto">
                  {project.architecture}
                </div>
              </div>
            </section>
          )}

          {/* Section 4: Domain Stack */}
          {project.stack && (
            <section id="stack" className="scroll-mt-28">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full" />
                Technical Stack &amp; Implementation
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {project.stack.aiml && (
                  <div className="p-5 bg-surface/50 border border-purple-800/20 rounded-xl">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-purple-400 mb-3">AI / ML &amp; Models</h3>
                    <ul className="space-y-1.5 text-sm text-gray-300 font-mono">
                      {project.stack.aiml.map((t) => (
                        <li key={t} className="flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-purple-400" />
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.stack.backend && (
                  <div className="p-5 bg-surface/50 border border-purple-800/20 rounded-xl">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-3">Backend &amp; APIs</h3>
                    <ul className="space-y-1.5 text-sm text-gray-300 font-mono">
                      {project.stack.backend.map((t) => (
                        <li key={t} className="flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-blue-400" />
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.stack.frontend && (
                  <div className="p-5 bg-surface/50 border border-purple-800/20 rounded-xl">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-3">Frontend &amp; UI</h3>
                    <ul className="space-y-1.5 text-sm text-gray-300 font-mono">
                      {project.stack.frontend.map((t) => (
                        <li key={t} className="flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-cyan-400" />
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.stack.data && (
                  <div className="p-5 bg-surface/50 border border-purple-800/20 rounded-xl">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-3">Data &amp; Storage</h3>
                    <ul className="space-y-1.5 text-sm text-gray-300 font-mono">
                      {project.stack.data.map((t) => (
                        <li key={t} className="flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-amber-400" />
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.stack.infra && (
                  <div className="p-5 bg-surface/50 border border-purple-800/20 rounded-xl">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-3">DevOps &amp; Infra</h3>
                    <ul className="space-y-1.5 text-sm text-gray-300 font-mono">
                      {project.stack.infra.map((t) => (
                        <li key={t} className="flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-emerald-400" />
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* Section 5: Challenges */}
          {project.challenges && project.challenges.length > 0 && (
            <section id="challenges" className="scroll-mt-28">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full" />
                Technical Challenges &amp; Solutions
              </h2>
              <div className="space-y-4">
                {project.challenges.map((c, i) => (
                  <div key={i} className="p-5 bg-surface/40 border border-purple-800/20 rounded-xl flex items-start gap-4">
                    <span className="w-7 h-7 rounded-lg bg-purple-600/20 text-purple-300 border border-purple-500/30 flex items-center justify-center text-xs font-bold font-mono flex-shrink-0">
                      0{i + 1}
                    </span>
                    <p className="text-gray-300 text-sm leading-relaxed">{c}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Section 6: Results & Highlights */}
          <section id="results" className="scroll-mt-28">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full" />
              Key Highlights &amp; Results
            </h2>

            {project.results && project.results.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                {project.results.map((r, i) => (
                  <div key={i} className="p-5 bg-gradient-to-br from-purple-900/15 to-blue-900/10 border border-purple-700/30 rounded-xl">
                    <p className="text-sm font-medium text-purple-200">{r}</p>
                  </div>
                ))}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.highlights.map((h, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3.5 bg-surface/50 border border-purple-800/20 rounded-xl"
                >
                  <svg className="w-4 h-4 text-purple-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300 text-sm">{h}</span>
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* ─── RELATED PROJECTS ──────────────────────────────── */}
        {others.length > 0 && (
          <footer className="mt-24 pt-12 border-t border-purple-900/20">
            <h2 className="text-2xl font-bold text-white mb-8">Related Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {others.map((p) => (
                <Link
                  key={p.slug}
                  href={`/projects/${p.slug}`}
                  className="group flex gap-4 p-5 bg-surface/60 border border-purple-800/20 hover:border-purple-600/40 rounded-2xl transition-all duration-200 hover:-translate-y-1"
                >
                  <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-[#2B0B3A]">
                    <Image src={p.image} alt={p.title} fill className="object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-purple-400 text-xs font-medium mb-0.5">{p.theme}</p>
                    <h3 className="text-white font-semibold group-hover:text-purple-200 transition-colors duration-200 truncate">
                      {p.title}
                    </h3>
                    <p className="text-gray-500 text-xs mt-1 line-clamp-2">{p.problem || p.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </footer>
        )}

      </div>
    </div>
  );
}
