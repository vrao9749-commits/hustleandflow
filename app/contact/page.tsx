import type { Metadata } from 'next';
import { Mail, MapPin, Phone } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import ContactForm from '@/components/contact/ContactForm';
import { CONTACT_INFO } from '@/lib/nav';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Hustle & Flow to talk about your next growth project.',
};

const INFO = [
  { icon: Mail, label: 'Email us', value: CONTACT_INFO.email, href: `mailto:${CONTACT_INFO.email}` },
  { icon: Phone, label: 'Call us', value: CONTACT_INFO.phone, href: `tel:${CONTACT_INFO.phone}` },
  { icon: MapPin, label: 'Studio', value: CONTACT_INFO.address, href: undefined },
];

export default function ContactPage() {
  return (
    <section className="pt-40 pb-24 md:pt-52 md:pb-32">
      <div className="max-w-wrap mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16">
          <div>
            <Reveal>
              <span className="text-xs uppercase tracking-[0.2em] text-muted">Contact</span>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.05] mt-5 text-balance uppercase">
                Tell us where it hurts. We&apos;ll tell you how to fix it.
              </h1>
              <p className="mt-6 text-lg text-muted leading-relaxed max-w-md">
                Whether it&apos;s a brand that needs sharpening or a funnel that&apos;s leaking budget — start with a
                short note and we&apos;ll come back with a point of view, not just a sales call.
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
                      {item.href ? (
                        <a href={item.href} className="font-medium mt-0.5 block hover:text-accent transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-medium mt-0.5">{item.value}</p>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2}>
              <a
                href={CONTACT_INFO.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center gap-2 rounded-full bg-accent text-bg px-7 py-4 text-base font-medium hover:bg-ink transition-colors duration-300"
              >
                Book a meeting
              </a>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
