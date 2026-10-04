import type { Metadata } from 'next';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://abderrahemane-sahki.vercel.app'),
  title: {
    default: 'Abderrahemane Sahki — AI Engineer & Full Stack Developer',
    template: '%s | Abderrahemane Sahki',
  },
  description:
    'Portfolio of Abderrahemane Sahki — AI Engineer specialising in LLMs, RAG systems, multimodal AI, and machine learning. Full Stack Developer building production-grade web applications.',
  keywords: [
    'AI Engineer',
    'Full Stack Developer',
    'LLM',
    'RAG',
    'Machine Learning',
    'Next.js',
    'Python',
    'FastAPI',
    'Algeria',
  ],
  authors: [{ name: 'Abderrahemane Sahki' }],
  creator: 'Abderrahemane Sahki',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://abderrahemane-sahki.vercel.app',
    siteName: 'Abderrahemane Sahki',
    title: 'Abderrahemane Sahki — AI Engineer & Full Stack Developer',
    description:
      'Building AI-powered systems and scalable web applications — LLMs, RAG, multimodal AI, and modern full-stack engineering.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Abderrahemane Sahki — AI Engineer & Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abderrahemane Sahki — AI Engineer & Full Stack Developer',
    description:
      'Building AI-powered systems and scalable web applications — LLMs, RAG, multimodal AI, and modern full-stack engineering.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Abderrahemane Sahki',
  url: 'https://abderrahemane-sahki.vercel.app',
  jobTitle: 'AI Engineer & Full Stack Developer',
  worksFor: { '@type': 'Organization', name: 'Primaria Tech' },
  alumniOf: {
    '@type': 'EducationalOrganization',
    name: "École Supérieure en Sciences et Technologies de l'Informatique et du Numérique (ESTIN)",
  },
  address: { '@type': 'PostalAddress', addressLocality: 'Béjaïa', addressCountry: 'DZ' },
  email: 'a_sahki@estin.dz',
  sameAs: [
    'https://www.linkedin.com/in/abderrahemane-sahki-a71a6224b',
    'https://github.com/sahki-abderrahemane',
  ],
  knowsAbout: [
    'Artificial Intelligence',
    'Machine Learning',
    'Large Language Models',
    'RAG Systems',
    'Multimodal AI',
    'Full Stack Development',
    'Next.js',
    'FastAPI',
    'Python',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Preahvihear&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background text-white antialiased font-sans">
        <Navbar />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
