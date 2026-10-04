'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { aiFocusAreas, ragDiagram, fineTuningDiagram, multimodalDiagram } from '@/data/ai-projects';
import { projects } from '@/data/projects';
import { certifications } from '@/data/certifications';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

const aiTools = [
  { name: 'Python', icon: '/python.svg', desc: 'Core ML & pipeline development' },
  { name: 'PyTorch', icon: '/pytorch.svg', desc: 'Deep learning & fine-tuning' },
  { name: 'HuggingFace', icon: '/huggingface.svg', desc: 'Transformers, PEFT, TRL' },
  { name: 'FAISS', icon: '/faiss.svg', desc: 'Dense vector retrieval' },
  { name: 'LangChain', icon: '/langchain.svg', desc: 'RAG pipelines & LLM orchestration' },
  { name: 'MLflow', icon: '/mlflow.svg', desc: 'Experiment tracking & model registry' },
  { name: 'Scikit-learn', icon: '/scikit-learn.svg', desc: 'Classical ML & feature engineering' },
  { name: 'Pandas', icon: '/pandas.svg', desc: 'Data manipulation & analysis' },
  { name: 'NumPy', icon: '/numpy.svg', desc: 'High-performance vector operations' },
  { name: 'Kafka', icon: '/kafka.svg', desc: 'Event streaming pipeline' },
  { name: 'Airflow', icon: '/airflow.svg', desc: 'Workflow orchestration & scheduling' },
  { name: 'Docker', icon: '/docker.svg', desc: 'Containerized deployment' },
];

export default function AIPage() {
  const aiProjects = projects.filter((p) => p.category === 'AI / ML' || p.category === 'Data / Graph');

  return (
    <div className="min-h-screen bg-background pt-24 pb-24 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* ─── HEADER ─────────────────────────────────────────── */}
        <section className="mb-20 text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="tag-pill mb-4 inline-block">
              AI / ML Specialization
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5">
              AI Systems &amp; <span className="text-gradient">Machine Learning</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
              Designing, training, and deploying end-to-end intelligent systems — from LLM fine-tuning and RAG pipelines to multimodal CLIP search and graph representation learning.
            </p>
          </motion.div>
        </section>

        {/* ─── AI FOCUS AREAS ─────────────────────────────────── */}
        <section className="mb-24">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-10 text-center sm:text-left">
            <span className="tag-pill mb-3 inline-block">Specializations</span>
            <h2 className="text-3xl font-bold text-white">
              Core <span className="text-gradient">Focus Areas</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiFocusAreas.map((area, i) => (
              <motion.div
                key={area.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={i}
                className="p-7 bg-surface/60 border border-purple-800/20 hover:border-purple-600/50 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-950/30 flex flex-col"
              >
                <div className="text-3xl mb-3">{area.icon}</div>
                <h3 className="text-white font-bold text-xl mb-2">{area.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">{area.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {area.tags.map((t) => (
                    <span key={t} className="tag-pill text-[11px]">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ─── PIPELINE VISUALIZATIONS ────────────────────────── */}
        <section className="mb-24">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-12 text-center sm:text-left">
            <span className="tag-pill mb-3 inline-block">Architecture</span>
            <h2 className="text-3xl font-bold text-white">
              AI System <span className="text-gradient">Pipelines</span>
            </h2>
            <p className="text-gray-400 mt-2 max-w-2xl">
              Concrete architectural patterns used across production AI and ML projects.
            </p>
          </motion.div>

          <div className="space-y-8">
            {/* RAG Pipeline */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="p-7 bg-surface/60 border border-purple-800/30 rounded-2xl">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-purple-400" />
                <h3 className="text-lg font-bold text-white">{ragDiagram.title} (MentorAI)</h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
                {ragDiagram.steps.map((s, idx) => (
                  <div key={idx} className="p-3 bg-background/80 rounded-xl border border-purple-900/30 text-center flex flex-col justify-center">
                    <span className="text-[10px] font-mono text-purple-400 mb-1">0{idx + 1}</span>
                    <p className="text-xs font-bold text-white mb-0.5">{s.label}</p>
                    <p className="text-[10px] text-gray-400">{s.detail}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Fine-Tuning Pipeline */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="p-7 bg-surface/60 border border-purple-800/30 rounded-2xl">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-blue-400" />
                <h3 className="text-lg font-bold text-white">{fineTuningDiagram.title} (LLM Fine-Tuning Framework)</h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
                {fineTuningDiagram.steps.map((s, idx) => (
                  <div key={idx} className="p-3 bg-background/80 rounded-xl border border-purple-900/30 text-center flex flex-col justify-center">
                    <span className="text-[10px] font-mono text-blue-400 mb-1">0{idx + 1}</span>
                    <p className="text-xs font-bold text-white mb-0.5">{s.label}</p>
                    <p className="text-[10px] text-gray-400">{s.detail}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Multimodal Retrieval */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="p-7 bg-surface/60 border border-purple-800/30 rounded-2xl">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-purple-400" />
                <h3 className="text-lg font-bold text-white">{multimodalDiagram.title} (VisualMind)</h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
                {multimodalDiagram.steps.map((s, idx) => (
                  <div key={idx} className="p-3 bg-background/80 rounded-xl border border-purple-900/30 text-center flex flex-col justify-center">
                    <span className="text-[10px] font-mono text-purple-400 mb-1">0{idx + 1}</span>
                    <p className="text-xs font-bold text-white mb-0.5">{s.label}</p>
                    <p className="text-[10px] text-gray-400">{s.detail}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ─── SELECTED AI PROJECTS ───────────────────────────── */}
        <section className="mb-24">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-10 text-center sm:text-left">
            <span className="tag-pill mb-3 inline-block">Selected Work</span>
            <h2 className="text-3xl font-bold text-white">
              Featured <span className="text-gradient">AI Projects</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aiProjects.map((p, i) => (
              <motion.div
                key={p.slug}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={i}
                className="p-7 bg-surface/60 border border-purple-800/20 hover:border-purple-600/40 rounded-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-purple-400">{p.theme}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full border font-medium border-purple-500/30 text-purple-300">
                    {p.status}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{p.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">{p.problem || p.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.technologies.slice(0, 5).map((t) => (
                    <span key={t} className="tag-pill text-[10px]">
                      {t}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/projects/${p.slug}`}
                  className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors duration-200"
                >
                  Explore Case Study
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ─── TOOLS ──────────────────────────────────────────── */}
        <section className="mb-24 py-14 border-y border-purple-900/20">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-10 text-center">
            <span className="tag-pill mb-3 inline-block">Toolbox</span>
            <h2 className="text-3xl font-bold text-white">
              AI &amp; ML <span className="text-gradient">Toolchain</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {aiTools.map((tool, i) => (
              <motion.div
                key={tool.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={i}
                whileHover={{ y: -4, scale: 1.05 }}
                className="flex flex-col items-center gap-3 p-5 bg-surface/60 border border-purple-800/20 hover:border-purple-600/40 rounded-2xl text-center transition-all duration-200 cursor-default"
              >
                <Image src={tool.icon} width={40} height={40} alt={tool.name} className="object-contain" />
                <div>
                  <p className="text-white font-medium text-sm">{tool.name}</p>
                  <p className="text-gray-500 text-[10px] mt-0.5 leading-snug">{tool.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ─── CERTIFICATIONS STRIP ────────────────────────────── */}
        <section className="mb-12">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="p-8 bg-gradient-to-br from-purple-900/20 to-blue-900/10 border border-purple-800/20 rounded-2xl"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h3 className="text-white font-bold text-xl mb-1">06 Certified AI/ML Specializations</h3>
                <p className="text-gray-400 text-sm">
                  Stanford University, DeepLearning.AI, and DataCamp verified credentials.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {certifications.slice(0, 3).map((c) => (
                    <span key={c.id} className="text-xs px-3 py-1 bg-purple-600/15 text-purple-300 border border-purple-600/30 rounded-full">
                      {c.title}
                    </span>
                  ))}
                </div>
              </div>
              <Link
                href="/certifications"
                className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-purple-600/20 hover:bg-purple-600/30 border border-purple-600/40 text-purple-300 rounded-xl text-sm font-medium transition-all duration-200"
              >
                View All Credentials
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </section>

      </div>
    </div>
  );
}
