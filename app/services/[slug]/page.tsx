import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Check, ArrowUpRight } from 'lucide-react';
import { SERVICES } from '@/lib/nav';
import Reveal from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';
import CTASection from '@/components/home/CTASection';

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = SERVICES.find((s) => s.slug === params.slug);
  if (!service) return {};
  return { title: service.title, description: service.short };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const index = SERVICES.findIndex((s) => s.slug === params.slug);
  const service = SERVICES[index];
  if (!service) notFound();

  const next = SERVICES[(index + 1) % SERVICES.length];

  return (
    <>
      <section className="pt-40 pb-20 md:pt-52 md:pb-24">
        <div className="max-w-wrap mx-auto px-6 md:px-8">
          <Reveal>
            <Link href="/services" className="text-sm text-muted hover:text-accent transition-colors">
              ← All services
            </Link>
            <p className="text-xs uppercase tracking-[0.2em] text-muted mt-6">
              Service {String(index + 1).padStart(2, '0')}
            </p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium leading-[1.05] mt-5 max-w-3xl text-balance">
              {service.title}
            </h1>
            <p className="mt-8 text-lg md:text-xl text-muted max-w-2xl leading-relaxed">{service.description}</p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="max-w-wrap mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-12">
          <Reveal>
            <h2 className="font-display text-2xl font-medium mb-6">What's included</h2>
            <ul className="space-y-4">
              {service.deliverables.map((d) => (
                <li key={d} className="flex items-start gap-3 text-ink/90">
                  <Check size={18} className="text-accent mt-0.5 shrink-0" />
                  {d}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-border bg-surface p-8 md:p-10">
              <h2 className="font-display text-2xl font-medium mb-4">Is this right for you?</h2>
              <p className="text-muted leading-relaxed mb-6">
                If you&apos;re trying to solve this with internal bandwidth alone and it&apos;s not moving fast
                enough, this is exactly where we step in — with a senior team and a clear plan from week one.
              </p>
              <Button href="/contact" variant="primary">Talk to us</Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="max-w-wrap mx-auto px-6 md:px-8">
          <Link
            href={`/services/${next.slug}`}
            className="group flex items-center justify-between rounded-3xl border border-border bg-surface p-8 md:p-10 hover:border-accent/60 transition-colors duration-300"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted mb-2">Next service</p>
              <h3 className="font-display text-2xl md:text-3xl font-medium">{next.title}</h3>
            </div>
            <ArrowUpRight
              size={24}
              className="text-muted transition-all duration-300 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>
      </section>

      <CTASection />
    </>
  );
}
