'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-40 pb-24 md:pt-52 md:pb-32 overflow-hidden">
      <div className="absolute -top-40 right-[-10%] w-[600px] h-[600px] rounded-full bg-accent/10 blur-[120px]" />
      <div className="absolute top-20 left-[-15%] w-[500px] h-[500px] rounded-full bg-accent2/10 blur-[120px]" />

      <div className="max-w-wrap mx-auto px-6 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 mb-8"
        >
          <Sparkles size={14} className="text-accent" />
          <span className="text-xs font-medium text-muted">Ignite Your Hustle, Find Your Flow</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] font-semibold leading-[0.98] tracking-tight max-w-5xl text-balance uppercase"
        >
          We help you generate <span className="text-accent">more revenue.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 text-lg md:text-xl text-muted max-w-xl leading-relaxed"
        >
          Performance marketing, growth systems, and creative built for D2C and e-commerce brands that want measurable revenue, not vanity metrics.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-accent text-bg px-7 py-4 text-base font-medium hover:bg-ink hover:scale-[1.03] transition-all duration-300"
          >
            Start a project
            <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-4 text-base font-medium hover:border-accent hover:text-accent transition-colors duration-300"
          >
            See our work
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid grid-cols-3 sm:grid-cols-3 gap-8 max-w-2xl border-t border-border pt-10"
        >
          {[
            { value: '60+', label: 'Brands grown' },
            { value: '170%', label: 'Best ROAS lift' },
            { value: '10+ yrs', label: 'Founder experience' },
          ].map((s) => (
            <div key={s.label}>
              <p className="font-display text-3xl md:text-4xl font-medium text-accent">{s.value}</p>
              <p className="text-sm text-muted mt-1">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
