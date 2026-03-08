'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { skills } from '@/data/skills';

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, delay: i * 0.08, ease: 'easeOut' as const },
    }),
};

const aiSkills = [
    {
        title: 'Machine Learning',
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" /></svg>,
        desc: 'Supervised & unsupervised learning, regression, classification, clustering, ensemble methods, model evaluation and optimization.',
        items: ['Linear/Logistic Regression', 'Random Forest', 'XGBoost', 'SVM', 'K-Means'],
    },
    {
        title: 'Deep Learning',
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" /></svg>,
        desc: 'Neural network architectures including CNNs, RNNs, LSTMs, and Transformers for complex pattern recognition tasks.',
        items: ['CNNs', 'RNNs / LSTMs', 'Transformers', 'Autoencoders', 'GANs'],
    },
    {
        title: 'Natural Language Processing',
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" /></svg>,
        desc: 'Text classification, sentiment analysis, named entity recognition, and working with large language models.',
        items: ['Text Classification', 'Sentiment Analysis', 'NER', 'LLMs', 'HuggingFace'],
    },
    {
        title: 'Computer Vision',
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.964-7.178z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
        desc: 'Image classification, object detection, segmentation, and feature extraction using deep learning models.',
        items: ['Image Classification', 'Object Detection', 'Segmentation', 'Feature Extraction'],
    },
];

const tools = [
    { name: 'Python', icon: '/python.svg', desc: 'Primary language for all ML work' },
    { name: 'TensorFlow', icon: '/tensorflow.svg', desc: 'Deep learning framework' },
    { name: 'Scikit-learn', icon: '/scikit-learn.svg', desc: 'Classical ML algorithms' },
    { name: 'Pandas', icon: '/pandas.svg', desc: 'Data manipulation & analysis' },
    { name: 'NumPy', icon: '/numpy.svg', desc: 'Numerical computing' },
    { name: 'Matplotlib', icon: '/matplotlib.svg', desc: 'Data visualization' },
];

const pipelineSteps = [
    {
        step: '01',
        title: 'Data Collection',
        desc: 'Gathering and sourcing relevant data from APIs, databases, web scraping, or public datasets.',
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" /></svg>,
        color: 'from-blue-600 to-blue-700',
    },
    {
        step: '02',
        title: 'Data Cleaning',
        desc: 'Handling missing values, removing duplicates, fixing inconsistencies, and dealing with outliers.',
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" /></svg>,
        color: 'from-cyan-600 to-cyan-700',
    },
    {
        step: '03',
        title: 'Feature Engineering',
        desc: 'Creating new informative features, encoding categorical variables, scaling, and dimensionality reduction.',
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
        color: 'from-purple-600 to-purple-700',
    },
    {
        step: '04',
        title: 'Model Training',
        desc: 'Selecting algorithms, splitting data, training models, and tuning hyperparameters with cross-validation.',
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" /></svg>,
        color: 'from-pink-600 to-pink-700',
    },
    {
        step: '05',
        title: 'Evaluation',
        desc: 'Measuring performance with appropriate metrics (accuracy, F1, AUC-ROC, MSE) and avoiding overfitting.',
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" /></svg>,
        color: 'from-orange-600 to-orange-700',
    },
    {
        step: '06',
        title: 'Deployment',
        desc: 'Serving models via REST APIs (FastAPI), containerization (Docker), and continuous monitoring in production.',
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" /></svg>,
        color: 'from-green-600 to-green-700',
    },
];

const certifications = [
    'Machine Learning Specialization – Stanford/Coursera',
    'Advanced Learning Algorithms – DeepLearning.AI',
    'Supervised Machine Learning – Stanford/Coursera',
    'Data Science Associate – DataCamp',
    'AI Engineer Associate – DataCamp',
];

export default function AIPage() {
    return (
        <div className="min-h-screen bg-[#11071F] pt-24 pb-20">
            <div className="max-w-6xl mx-auto px-6">

                {/* ─── HEADER ─────────────────────────────────────────── */}
                <section className="mb-20 text-center">
                    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                        <span className="tag-pill mb-4 inline-block">Specialization</span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5">
                            AI &amp; <span className="text-gradient">Machine Learning</span>
                        </h1>
                        <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
                            From raw data to production-ready intelligent systems — I design, train, and deploy
                            machine learning models that solve real-world problems across NLP, computer vision,
                            and classical ML domains.
                        </p>
                    </motion.div>
                </section>

                {/* ─── AI SKILLS GRID ─────────────────────────────────── */}
                <section className="mb-20">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-10">
                        <span className="tag-pill mb-3 inline-block">Skills</span>
                        <h2 className="text-3xl font-bold text-white">
                            AI <span className="text-gradient">Capabilities</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {aiSkills.map((skill, i) => (
                            <motion.div
                                key={skill.title}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                custom={i}
                                className="p-7 bg-[#1A0B2E]/60 border border-purple-800/20 hover:border-purple-600/40 rounded-2xl transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-900/20"
                            >
                                <div className="w-12 h-12 mb-3 rounded-xl bg-gradient-to-br from-purple-600/25 to-blue-600/15 border border-purple-500/25 flex items-center justify-center text-purple-300">{skill.icon}</div>
                                <h3 className="text-white font-bold text-xl mb-2">{skill.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-4">{skill.desc}</p>
                                <div className="flex flex-wrap gap-2">
                                    {skill.items.map((item) => (
                                        <span key={item} className="tag-pill text-[11px]">{item}</span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* ─── TOOLS ──────────────────────────────────────────── */}
                <section className="mb-20 py-14 border-y border-purple-900/20">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-10 text-center">
                        <span className="tag-pill mb-3 inline-block">Toolbox</span>
                        <h2 className="text-3xl font-bold text-white">
                            ML <span className="text-gradient">Tools &amp; Libraries</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
                        {tools.map((tool, i) => (
                            <motion.div
                                key={tool.name}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                custom={i}
                                whileHover={{ y: -5, scale: 1.05 }}
                                className="flex flex-col items-center gap-3 p-5 bg-[#1A0B2E]/60 border border-purple-800/20 hover:border-purple-600/40 rounded-2xl text-center transition-all duration-200 cursor-default"
                            >
                                <Image src={tool.icon} width={44} height={44} alt={tool.name} className="object-contain" />
                                <div>
                                    <p className="text-white font-medium text-sm">{tool.name}</p>
                                    <p className="text-gray-500 text-[10px] mt-0.5 leading-snug">{tool.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* ─── ML PIPELINE ────────────────────────────────────── */}
                <section className="mb-20">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-12 text-center">
                        <span className="tag-pill mb-3 inline-block">Process</span>
                        <h2 className="text-3xl font-bold text-white">
                            ML <span className="text-gradient">Pipeline Experience</span>
                        </h2>
                        <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
                            End-to-end machine learning workflow — from problem definition and data collection to model deployment and monitoring.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {pipelineSteps.map((step, i) => (
                            <motion.div
                                key={step.step}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                custom={i}
                                className="relative p-6 bg-[#1A0B2E]/60 border border-purple-800/20 hover:border-purple-600/40 rounded-2xl transition-all duration-200 hover:-translate-y-1 group"
                            >
                                <div className="flex items-start gap-4">
                                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-200`}>
                                        {step.icon}
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-gray-600 text-xs font-mono">{step.step}</span>
                                        </div>
                                        <h3 className="text-white font-semibold mb-2">{step.title}</h3>
                                        <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                                    </div>
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
                                <h3 className="text-white font-bold text-xl mb-1">AI/ML Certifications</h3>
                                <p className="text-gray-400 text-sm">
                                    Validated expertise through industry-recognized programs
                                </p>
                                <ul className="mt-4 space-y-2">
                                    {certifications.map((cert) => (
                                        <li key={cert} className="flex items-center gap-2 text-gray-300 text-sm">
                                            <svg className="w-3.5 h-3.5 text-purple-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            {cert}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <Link
                                href="/certifications"
                                className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-purple-600/20 hover:bg-purple-600/30 border border-purple-600/40 text-purple-300 rounded-xl text-sm font-medium transition-all duration-200"
                            >
                                View All Certificates
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
