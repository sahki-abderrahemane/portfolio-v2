import type { Metadata } from 'next';
import { Preahvihear } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const preahvihear = Preahvihear({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Abderrahemane Sahki — AI Engineer & Full Stack Developer',
  description:
    'Portfolio of Abderrahemane Sahki — AI Engineer, Machine Learning Developer, and Full Stack Web Developer based in Algeria.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${preahvihear.className} bg-[#11071F] text-white antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
