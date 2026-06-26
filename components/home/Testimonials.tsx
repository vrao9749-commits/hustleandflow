import { TESTIMONIALS } from '@/lib/nav';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-surface/30 border-y border-border">
      <div className="max-w-wrap mx-auto px-6 md:px-8">
        <Reveal>
          <SectionHeading eyebrow="Client voices" title="Don't take our word for it." align="center" className="mx-auto" />
        </Reveal>

        <div className="mt-16 grid md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <div className="rounded-3xl border border-border bg-surface p-8 h-full flex flex-col">
                <Quote size={28} className="text-accent mb-5" />
                <p className="text-ink/90 leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-6 pt-5 border-t border-border">
                  <p className="font-medium">{t.name}</p>
                  <p className="text-sm text-muted">{t.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
