import type { Metadata } from 'next';
import { Inter, Archivo } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const display = Archivo({ subsets: ['latin'], variable: '--font-display', weight: ['500', '600', '700', '800'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://hustleandflow.in'),
  title: {
    default: 'Hustle & Flow — Performance Marketing & Growth Agency',
    template: '%s | Hustle & Flow',
  },
  description:
    'Hustle & Flow helps D2C and e-commerce brands generate more revenue through Meta Ads, Google Ads, SEO, Amazon, and full-funnel growth marketing.',
  openGraph: {
    title: 'Hustle & Flow — Performance Marketing & Growth Agency',
    description:
      'Hustle & Flow helps D2C and e-commerce brands generate more revenue through Meta Ads, Google Ads, SEO, Amazon, and full-funnel growth marketing.',
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
