import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { SERVICES } from '@/lib/nav';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';

export default function ServicesGrid() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-wrap mx-auto px-6 md:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="What we do"
            title="One team. Every growth lever."
            description="From brand foundation to paid acquisition to the websites that hold it all together — we cover the full stack so nothing gets lost in translation between vendors."
          />
        </Reveal>

        <div className="mt-16 grid md:grid-cols-2 gap-5">
          {SERVICES.map((service, i) => (
            <Reveal key={service.slug} delay={i * 0.06}>
              <Link
                href={`/services/${service.slug}`}
                className="group relative block rounded-3xl border border-border bg-surface p-8 md:p-10 h-full transition-all duration-300 hover:border-accent/60 hover:bg-surface2"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="font-display text-5xl text-muted/30 group-hover:text-accent/40 transition-colors">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <ArrowUpRight
                    size={22}
                    className="text-muted transition-all duration-300 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-medium mt-6">{service.title}</h3>
                <p className="mt-3 text-muted leading-relaxed">{service.short}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
