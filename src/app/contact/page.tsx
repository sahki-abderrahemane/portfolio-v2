'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.55, delay, ease: 'easeOut' as const },
});

interface ContactInfo {
    icon: React.ReactNode;
    label: string;
    value: string;
    href: string;
    cta: string;
    color: string;
}

const contactCards: ContactInfo[] = [
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
        label: 'Email',
        value: 'a_sahki@estin.dz',
        href: 'mailto:a_sahki@estin.dz',
        cta: 'Send Email',
        color: 'from-purple-600 to-purple-800',
    },
    {
        icon: (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
            </svg>
        ),
        label: 'LinkedIn',
        value: 'abderrahemane-sahki',
        href: 'https://www.linkedin.com/in/abderrahemane-sahki-a71a6224b',
        cta: 'Connect',
        color: 'from-blue-600 to-blue-800',
    },
    {
        icon: (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
        ),
        label: 'GitHub',
        value: 'Abdousa23',
        href: 'https://github.com/sahki-abderrahemane',
        cta: 'View Profile',
        color: 'from-gray-700 to-gray-900',
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
        label: 'Location',
        value: 'Béjaïa, Algeria',
        href: 'https://maps.google.com/?q=Bejaia,Algeria',
        cta: 'View on Map',
        color: 'from-emerald-600 to-emerald-800',
    },
];

export default function ContactPage() {
    const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
    const [sent, setSent] = useState(false);

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        const { name, email, subject, message } = formState;
        const body = `Hi Abderrahemane,\n\nMy name is ${name} (${email}).\n\n${message}`;
        const mailto = `mailto:a_sahki@estin.dz?subject=${encodeURIComponent(subject || 'Portfolio Contact')}&body=${encodeURIComponent(body)}`;
        window.open(mailto, '_blank');
        setSent(true);
        setTimeout(() => setSent(false), 4000);
    }

    return (
        <div className="min-h-screen bg-[#11071F] pt-24 pb-20">
            <div className="max-w-6xl mx-auto px-6">

                {/* Header */}
                <motion.div {...fadeUp(0)} className="text-center mb-14">
                    <span className="tag-pill mb-4 inline-block">Get in Touch</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Let&apos;s <span className="text-gradient">Connect</span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Have a project in mind or just want to chat about AI and development? I&apos;m open to new opportunities and collaborations.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Left — Contact Cards */}
                    <div>
                        <motion.div {...fadeUp(0.1)} className="mb-8">
                            <h2 className="text-2xl font-bold text-white mb-2">Reach Out Directly</h2>
                            <p className="text-gray-400">Choose the channel that works best for you.</p>
                        </motion.div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                            {contactCards.map((card, i) => (
                                <motion.a
                                    key={card.label}
                                    href={card.href}
                                    target={card.href.startsWith('mailto') ? undefined : '_blank'}
                                    rel="noopener noreferrer"
                                    {...fadeUp(0.15 + i * 0.07)}
                                    className="group p-5 bg-gradient-to-br from-[#1A0B2E] to-[#13082A] border border-purple-800/20 hover:border-purple-600/40 rounded-2xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-purple-900/20"
                                >
                                    <div className={`w-11 h-11 bg-gradient-to-br ${card.color} rounded-xl flex items-center justify-center text-white mb-3 group-hover:scale-110 transition-transform duration-200`}>
                                        {card.icon}
                                    </div>
                                    <p className="text-gray-400 text-xs mb-0.5">{card.label}</p>
                                    <p className="text-white text-sm font-medium truncate mb-3">{card.value}</p>
                                    <span className="text-purple-400 text-xs font-medium flex items-center gap-1 group-hover:text-purple-300 transition-colors">
                                        {card.cta}
                                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </span>
                                </motion.a>
                            ))}
                        </div>

                        {/* Availability badge */}
                        <motion.div
                            {...fadeUp(0.45)}
                            className="p-5 bg-gradient-to-r from-purple-600/10 to-blue-600/10 border border-purple-600/25 rounded-2xl"
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <div className="relative">
                                    <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full" />
                                    <div className="absolute inset-0 w-2.5 h-2.5 bg-emerald-400 rounded-full animate-ping opacity-60" />
                                </div>
                                <span className="text-white font-semibold text-sm">Available for Opportunities</span>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                I&apos;m actively looking for internships, freelance projects, and full-time positions in AI/ML and full-stack development.
                            </p>
                            <div className="mt-4 flex gap-3">
                                <a
                                    href="/Abderrahmane_Sahki_Resume_ATS.pdf"
                                    download
                                    className="flex items-center gap-2 px-4 py-2 btn-primary text-white rounded-xl text-sm font-medium"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    Download CV
                                </a>
                                <Link
                                    href="/projects"
                                    className="flex items-center gap-2 px-4 py-2 bg-purple-600/15 hover:bg-purple-600/25 border border-purple-600/30 text-purple-300 rounded-xl text-sm font-medium transition-all duration-200"
                                >
                                    View Projects
                                </Link>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right — Contact Form */}
                    <motion.div {...fadeUp(0.2)}>
                        <div className="p-8 bg-gradient-to-br from-[#1A0B2E] to-[#13082A] border border-purple-800/20 rounded-2xl">
                            <h2 className="text-2xl font-bold text-white mb-1">Send a Message</h2>
                            <p className="text-gray-400 text-sm mb-6">Fill out the form — it will open your mail client.</p>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-1.5">Name</label>
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            required
                                            value={formState.name}
                                            onChange={handleChange}
                                            placeholder="Your name"
                                            className="w-full px-4 py-3 bg-[#11071F] border border-purple-800/30 hover:border-purple-600/40 focus:border-purple-500 text-white placeholder-gray-600 rounded-xl outline-none transition-all duration-200 text-sm"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-1.5">Email</label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            required
                                            value={formState.email}
                                            onChange={handleChange}
                                            placeholder="your@email.com"
                                            className="w-full px-4 py-3 bg-[#11071F] border border-purple-800/30 hover:border-purple-600/40 focus:border-purple-500 text-white placeholder-gray-600 rounded-xl outline-none transition-all duration-200 text-sm"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-gray-300 text-sm font-medium mb-1.5">Subject</label>
                                    <input
                                        id="subject"
                                        name="subject"
                                        type="text"
                                        value={formState.subject}
                                        onChange={handleChange}
                                        placeholder="What's it about?"
                                        className="w-full px-4 py-3 bg-[#11071F] border border-purple-800/30 hover:border-purple-600/40 focus:border-purple-500 text-white placeholder-gray-600 rounded-xl outline-none transition-all duration-200 text-sm"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-1.5">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={5}
                                        value={formState.message}
                                        onChange={handleChange}
                                        placeholder="Tell me about your project or opportunity..."
                                        className="w-full px-4 py-3 bg-[#11071F] border border-purple-800/30 hover:border-purple-600/40 focus:border-purple-500 text-white placeholder-gray-600 rounded-xl outline-none transition-all duration-200 text-sm resize-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-3 btn-primary text-white font-semibold rounded-xl transition-all duration-200 flex items-center justify-center gap-2"
                                >
                                    {sent ? (
                                        <>
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            Mail Client Opened!
                                        </>
                                    ) : (
                                        <>
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                            </svg>
                                            Send Message
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
