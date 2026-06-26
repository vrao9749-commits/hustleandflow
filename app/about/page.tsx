import type { Metadata } from 'next';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import CTASection from '@/components/home/CTASection';
import { Target, Heart, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About',
  description: 'Hustle & Flow is a growth and creative agency built by operators, not just marketers.',
};

const VALUES = [
  { icon: Target, title: 'Outcomes over output', desc: 'We measure ourselves by revenue, retention, and CAC — not deliverables shipped.' },
  { icon: Zap, title: 'Speed is a feature', desc: 'Slow agencies lose to fast competitors. We move in weeks, not quarters.' },
  { icon: Heart, title: 'Brutal honesty', desc: 'We tell you when something is not working before you have to ask.' },
];

const TEAM = [
  { name: 'Aarav Shah', role: 'Founder & Strategy Lead' },
  { name: 'Ishita Rao', role: 'Head of Performance Marketing' },
  { name: 'Devika Menon', role: 'Creative Director' },
  { name: 'Karan Bedi', role: 'Lead Engineer' },
];

export default function AboutPage() {
  return (
    <>
      <section className="pt-40 pb-20 md:pt-52 md:pb-28">
        <div className="max-w-wrap mx-auto px-6 md:px-8">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.2em] text-muted">About us</span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-medium leading-[1.02] mt-5 max-w-4xl text-balance">
              We started as operators. We still think like operators.
            </h1>
            <p className="mt-8 text-lg md:text-xl text-muted max-w-2xl leading-relaxed">
              Hustle &amp; Flow was founded by people who ran growth and brand teams inside fast-scaling startups —
              not by agency lifers chasing retainers. That shows up in everything we do: the way we report,
              the way we prioritise, and the way we get fired up about a single percentage point of CAC.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 border-y border-border bg-surface/30">
        <div className="max-w-wrap mx-auto px-6 md:px-8 grid md:grid-cols-3 gap-10">
          {[
            { value: '2017', label: 'Founded' },
            { value: '60+', label: 'Brands worked with' },
            { value: '14', label: 'People on the team' },
          ].map((s) => (
            <Reveal key={s.label}>
              <p className="font-display text-5xl font-medium text-accent">{s.value}</p>
              <p className="text-muted mt-2">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="max-w-wrap mx-auto px-6 md:px-8">
          <Reveal>
            <SectionHeading eyebrow="What drives us" title="Three things we won't compromise on." />
          </Reveal>
          <div className="mt-16 grid md:grid-cols-3 gap-5">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="rounded-3xl border border-border bg-surface p-8 h-full">
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                    <v.icon size={22} className="text-accent" />
                  </div>
                  <h3 className="font-display text-xl font-medium">{v.title}</h3>
                  <p className="mt-3 text-muted leading-relaxed">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-surface/30 border-y border-border">
        <div className="max-w-wrap mx-auto px-6 md:px-8">
          <Reveal>
            <SectionHeading eyebrow="The team" title="Small team, senior people, no bench warmers." />
          </Reveal>
          <div className="mt-16 grid sm:grid-cols-2 md:grid-cols-4 gap-5">
            {TEAM.map((member, i) => (
              <Reveal key={member.name} delay={i * 0.06}>
                <div className="rounded-3xl border border-border bg-surface p-6">
                  <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-surface2 to-bg mb-5 flex items-center justify-center">
                    <span className="font-display text-3xl text-muted/40">
                      {member.name.split(' ').map((n) => n[0]).join('')}
                    </span>
                  </div>
                  <p className="font-medium">{member.name}</p>
                  <p className="text-sm text-muted">{member.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
