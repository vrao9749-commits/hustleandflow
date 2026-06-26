import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { SERVICES } from '@/lib/nav';
import Reveal from '@/components/ui/Reveal';
import CTASection from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Brand strategy, performance marketing, web design & development, content, and growth consulting.',
};

export default function ServicesPage() {
  return (
    <>
      <section className="pt-40 pb-20 md:pt-52 md:pb-24">
        <div className="max-w-wrap mx-auto px-6 md:px-8">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.2em] text-muted">Services</span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-medium leading-[1.02] mt-5 max-w-4xl text-balance">
              Everything you need to grow, under one roof.
            </h1>
            <p className="mt-8 text-lg md:text-xl text-muted max-w-2xl leading-relaxed">
              No vendor juggling. No conflicting strategies. One team that owns brand, performance, and the
              digital experiences that tie them together.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="max-w-wrap mx-auto px-6 md:px-8 flex flex-col gap-5">
          {SERVICES.map((service, i) => (
            <Reveal key={service.slug} delay={i * 0.05}>
              <Link
                href={`/services/${service.slug}`}
                className="group flex flex-col md:flex-row md:items-center gap-6 md:gap-10 rounded-3xl border border-border bg-surface p-8 md:p-10 hover:border-accent/60 hover:bg-surface2 transition-all duration-300"
              >
                <span className="font-display text-4xl md:text-5xl text-muted/30 group-hover:text-accent/40 transition-colors shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="flex-1">
                  <h2 className="font-display text-2xl md:text-3xl font-medium">{service.title}</h2>
                  <p className="mt-2 text-muted leading-relaxed max-w-xl">{service.short}</p>
                </div>
                <ArrowUpRight
                  size={24}
                  className="text-muted shrink-0 transition-all duration-300 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
