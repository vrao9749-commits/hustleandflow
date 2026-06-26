import type { Metadata } from 'next';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import CTASection from '@/components/home/CTASection';
import { TEAM } from '@/lib/nav';
import { Target, Hammer, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About',
  description: 'Hustle & Flow is built by humans, powered by hustle — an ownership-mentality performance marketing team.',
};

const VALUES = [
  { icon: Target, title: 'Truth over Trends', desc: 'We chase what actually moves revenue, not whatever is trending on ad platforms this week.' },
  { icon: Hammer, title: 'Craft over Comfort', desc: 'We stay in the weeds — creative, copy, tracking, bids — because the details are where campaigns win or lose.' },
  { icon: TrendingUp, title: 'Long Games Win', desc: 'We build systems and relationships built for years, not a single campaign cycle.' },
];

export default function AboutPage() {
  return (
    <>
      <section className="pt-40 pb-20 md:pt-52 md:pb-28">
        <div className="max-w-wrap mx-auto px-6 md:px-8">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.2em] text-muted">About us</span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-semibold leading-[1.02] mt-5 max-w-4xl text-balance uppercase">
              Built by Humans, Powered by Hustle.
            </h1>
            <p className="mt-8 text-lg md:text-xl text-muted max-w-2xl leading-relaxed">
              We went from chaos to clarity by running ad spend like operators, not agency lifers chasing retainers.
              Every account we touch runs on an ownership mentality — we treat your account like it&apos;s our own.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 border-y border-border bg-surface/30">
        <div className="max-w-wrap mx-auto px-6 md:px-8 grid md:grid-cols-3 gap-10">
          {[
            { value: '10+', label: 'Years of founder experience' },
            { value: '60+', label: 'Brands worked with' },
            { value: `${TEAM.length}`, label: 'People on the team' },
          ].map((s) => (
            <Reveal key={s.label}>
              <p className="font-display text-5xl font-semibold text-accent">{s.value}</p>
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
          <div className="mt-16 grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {TEAM.map((member, i) => (
              <Reveal key={member.name} delay={i * 0.06}>
                <div className="rounded-3xl border border-border bg-surface p-6">
                  <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-surface2 to-bg mb-5 flex items-center justify-center">
                    <span className="font-display text-3xl text-muted/40">
                      {member.name.split(' ').map((n) => n[0]).join('')}
                    </span>
                  </div>
                  <p className="font-medium">{member.name}</p>
                  <p className="text-sm text-accent">{member.role}</p>
                  <p className="text-xs text-muted mt-1">{member.exp}</p>
                  <p className="text-sm text-muted mt-3 leading-relaxed">{member.bio}</p>
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
