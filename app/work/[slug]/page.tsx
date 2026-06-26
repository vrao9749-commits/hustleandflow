import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { CASE_STUDIES } from '@/lib/nav';
import Reveal from '@/components/ui/Reveal';
import CTASection from '@/components/home/CTASection';

export function generateStaticParams() {
  return CASE_STUDIES.map((cs) => ({ slug: cs.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const cs = CASE_STUDIES.find((c) => c.slug === params.slug);
  if (!cs) return {};
  return { title: `${cs.client} — Case Study`, description: cs.summary };
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const index = CASE_STUDIES.findIndex((c) => c.slug === params.slug);
  const cs = CASE_STUDIES[index];
  if (!cs) notFound();
  const next = CASE_STUDIES[(index + 1) % CASE_STUDIES.length];

  return (
    <>
      <section className="pt-40 pb-16 md:pt-52 md:pb-20">
        <div className="max-w-wrap mx-auto px-6 md:px-8">
          <Reveal>
            <Link href="/work" className="text-sm text-muted hover:text-accent transition-colors">
              ← All work
            </Link>
            <p className="text-xs uppercase tracking-[0.2em] mt-6" style={{ color: cs.color }}>{cs.category}</p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium leading-[1.05] mt-5 max-w-3xl text-balance">
              {cs.client}: {cs.headline}
            </h1>
            <p className="mt-8 text-lg text-muted max-w-2xl leading-relaxed">{cs.summary}</p>
          </Reveal>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-wrap mx-auto px-6 md:px-8">
          <Reveal>
            <div
              className="rounded-3xl border border-border p-10 md:p-16 grid sm:grid-cols-3 gap-10 relative overflow-hidden"
              style={{ background: `linear-gradient(135deg, ${cs.color}14, transparent)` }}
            >
              <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl opacity-30" style={{ backgroundColor: cs.color }} />
              {cs.metrics.map((m) => (
                <div key={m.label} className="relative z-10">
                  <p className="font-display text-4xl md:text-5xl font-medium" style={{ color: cs.color }}>{m.value}</p>
                  <p className="text-muted mt-2">{m.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="max-w-wrap mx-auto px-6 md:px-8 grid md:grid-cols-3 gap-12">
          <Reveal className="md:col-span-1">
            <h2 className="font-display text-2xl font-medium">The challenge</h2>
          </Reveal>
          <Reveal delay={0.06} className="md:col-span-2">
            <p className="text-muted leading-relaxed text-lg">
              {cs.client} had strong product-market fit but a growth engine that couldn&apos;t keep pace —
              acquisition costs were climbing, brand messaging was inconsistent across channels, and the
              team lacked the bandwidth to test and iterate at the speed the market demanded.
            </p>
          </Reveal>

          <Reveal className="md:col-span-1">
            <h2 className="font-display text-2xl font-medium">What we did</h2>
          </Reveal>
          <Reveal delay={0.06} className="md:col-span-2">
            <p className="text-muted leading-relaxed text-lg">
              We rebuilt the brand narrative, restructured the paid acquisition stack across channels, and
              stood up a creative testing pipeline that shipped new concepts weekly. Within the first quarter,
              we had a clear read on what was driving efficient growth — and doubled down hard.
            </p>
          </Reveal>

          <Reveal className="md:col-span-1">
            <h2 className="font-display text-2xl font-medium">The result</h2>
          </Reveal>
          <Reveal delay={0.06} className="md:col-span-2">
            <p className="text-muted leading-relaxed text-lg">
              {cs.headline} — with a growth system the internal team now runs independently, backed by the
              playbooks and reporting infrastructure we built together.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="max-w-wrap mx-auto px-6 md:px-8">
          <Link
            href={`/work/${next.slug}`}
            className="group flex items-center justify-between rounded-3xl border border-border bg-surface p-8 md:p-10 hover:border-accent/60 transition-colors duration-300"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted mb-2">Next case study</p>
              <h3 className="font-display text-2xl md:text-3xl font-medium">{next.client}</h3>
            </div>
            <ArrowUpRight size={24} className="text-muted transition-all duration-300 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
      </section>

      <CTASection />
    </>
  );
}
