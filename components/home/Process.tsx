import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';

const STEPS = [
  { n: '01', title: 'Diagnose', desc: 'We audit your brand, funnel, and data to find the real bottleneck — not just the obvious one.' },
  { n: '02', title: 'Design', desc: 'We build a roadmap and creative direction grounded in your numbers, not trends.' },
  { n: '03', title: 'Deploy', desc: 'Our team ships fast — campaigns, content, and sites go live in weeks, not quarters.' },
  { n: '04', title: 'Scale', desc: 'We double down on what works with weekly reporting that ties straight back to revenue.' },
];

export default function Process() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-wrap mx-auto px-6 md:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="How we work"
            title="A process built for momentum."
            description="No 90-day onboarding. No bloated decks. Just a clear path from problem to proof."
          />
        </Reveal>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-3xl overflow-hidden border border-border">
          {STEPS.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.08} className="bg-bg p-8 md:p-9 h-full">
              <span className="font-display text-sm text-accent">{step.n}</span>
              <h3 className="font-display text-2xl font-medium mt-4">{step.title}</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">{step.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
