import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { CASE_STUDIES } from '@/lib/nav';
import Reveal from '@/components/ui/Reveal';
import CTASection from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'Our Work',
  description: 'Case studies and results from brands we have helped build, launch, and scale.',
};

export default function WorkPage() {
  return (
    <>
      <section className="pt-40 pb-20 md:pt-52 md:pb-24">
        <div className="max-w-wrap mx-auto px-6 md:px-8">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.2em] text-muted">Our work</span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-medium leading-[1.02] mt-5 max-w-4xl text-balance">
              Proof, not promises.
            </h1>
            <p className="mt-8 text-lg md:text-xl text-muted max-w-2xl leading-relaxed">
              Every engagement starts with a number we're trying to move. Here's what moving it looked like.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="max-w-wrap mx-auto px-6 md:px-8 flex flex-col gap-6">
          {CASE_STUDIES.map((cs, i) => (
            <Reveal key={cs.slug} delay={i * 0.06}>
              <Link
                href={`/work/${cs.slug}`}
                className="group grid md:grid-cols-[1.2fr_1fr] gap-8 rounded-3xl border border-border bg-surface overflow-hidden hover:border-accent/50 transition-colors duration-300"
              >
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <span className="text-xs uppercase tracking-[0.2em] text-muted">{cs.category}</span>
                  <h2 className="font-display text-3xl md:text-4xl font-medium mt-4 leading-tight">{cs.headline}</h2>
                  <p className="mt-4 text-muted leading-relaxed max-w-md">{cs.summary}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent">
                    Read case study
                    <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
                <div
                  className="relative min-h-[220px] flex flex-wrap items-center justify-center gap-8 p-8"
                  style={{ background: `linear-gradient(135deg, ${cs.color}1A, transparent)` }}
                >
                  <div
                    className="absolute -top-16 -right-16 w-56 h-56 rounded-full blur-3xl opacity-40"
                    style={{ backgroundColor: cs.color }}
                  />
                  {cs.metrics.map((m) => (
                    <div key={m.label} className="text-center relative z-10">
                      <p className="font-display text-3xl md:text-4xl font-medium" style={{ color: cs.color }}>{m.value}</p>
                      <p className="text-xs text-muted mt-1">{m.label}</p>
                    </div>
                  ))}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
