import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { CASE_STUDIES } from '@/lib/nav';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';

export default function CaseStudiesShowcase() {
  return (
    <section className="py-24 md:py-32 bg-surface/30 border-y border-border">
      <div className="max-w-wrap mx-auto px-6 md:px-8">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <SectionHeading
              eyebrow="Selected work"
              title="Results we'd put on a billboard."
              description="A few of the brands we've helped build, launch, and scale — across beauty, fintech, and wellness."
            />
            <Button href="/work" variant="secondary" className="shrink-0">
              View all work
            </Button>
          </div>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-3 gap-5">
          {CASE_STUDIES.map((cs, i) => (
            <Reveal key={cs.slug} delay={i * 0.08}>
              <Link
                href={`/work/${cs.slug}`}
                className="group block rounded-3xl border border-border bg-surface overflow-hidden h-full hover:border-accent/50 transition-colors duration-300"
              >
                <div
                  className="h-44 relative flex items-end p-6"
                  style={{
                    background: `linear-gradient(135deg, ${cs.color}22, transparent)`,
                  }}
                >
                  <div
                    className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-2xl opacity-40"
                    style={{ backgroundColor: cs.color }}
                  />
                  <span className="text-xs uppercase tracking-[0.2em] text-muted relative z-10">{cs.category}</span>
                </div>
                <div className="p-6 md:p-8">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-xl md:text-2xl font-medium leading-tight">{cs.headline}</h3>
                    <ArrowUpRight
                      size={20}
                      className="text-muted shrink-0 mt-1 transition-all duration-300 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>
                  <p className="mt-3 text-sm text-muted leading-relaxed">{cs.summary}</p>
                  <div className="mt-6 flex gap-6 border-t border-border pt-5">
                    {cs.metrics.map((m) => (
                      <div key={m.label}>
                        <p className="font-display text-lg font-medium" style={{ color: cs.color }}>{m.value}</p>
                        <p className="text-xs text-muted mt-0.5">{m.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
