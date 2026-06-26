import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const display = Space_Grotesk({ subsets: ['latin'], variable: '--font-display', weight: ['500', '700'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://hustleandflow.in'),
  title: {
    default: 'Hustle & Flow — Growth & Creative Agency',
    template: '%s | Hustle & Flow',
  },
  description:
    'Hustle & Flow is a growth and creative agency that builds brands, runs performance marketing, and designs digital experiences that convert.',
  openGraph: {
    title: 'Hustle & Flow — Growth & Creative Agency',
    description:
      'Hustle & Flow is a growth and creative agency that builds brands, runs performance marketing, and designs digital experiences that convert.',
    url: 'https://hustleandflow.in',
    siteName: 'Hustle & Flow',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${display.variable}`}>
      <body className="font-sans antialiased bg-bg text-ink">
        <div className="fixed inset-0 noise z-[1] pointer-events-none" />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
