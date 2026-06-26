import type { Metadata } from 'next';
import { Mail, MapPin, Clock } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import ContactForm from '@/components/contact/ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Hustle & Flow to talk about your next growth project.',
};

const INFO = [
  { icon: Mail, label: 'Email us', value: 'hello@hustleandflow.in' },
  { icon: MapPin, label: 'Studio', value: 'Mumbai, India' },
  { icon: Clock, label: 'Response time', value: 'Within 1 business day' },
];

export default function ContactPage() {
  return (
    <section className="pt-40 pb-24 md:pt-52 md:pb-32">
      <div className="max-w-wrap mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16">
          <div>
            <Reveal>
              <span className="text-xs uppercase tracking-[0.2em] text-muted">Contact</span>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium leading-[1.05] mt-5 text-balance">
                Tell us where it hurts. We'll tell you how to fix it.
              </h1>
              <p className="mt-6 text-lg text-muted leading-relaxed max-w-md">
                Whether it's a brand that needs sharpening or a funnel that's leaking budget — start with a
                short note and we'll come back with a point of view, not just a sales call.
              </p>
            </Reveal>

            <div className="mt-12 space-y-6">
              {INFO.map((item, i) => (
                <Reveal key={item.label} delay={i * 0.06}>
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-surface2 border border-border flex items-center justify-center shrink-0">
                      <item.icon size={18} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-muted uppercase tracking-[0.15em]">{item.label}</p>
                      <p className="font-medium mt-0.5">{item.value}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
