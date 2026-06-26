import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { NAV_LINKS, SERVICES, CONTACT_INFO } from '@/lib/nav';

export default function Footer() {
  return (
    <footer className="relative border-t border-border bg-bg pt-20 pb-10">
      <div className="max-w-wrap mx-auto px-6 md:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 pb-16 border-b border-border">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted mb-4">Have a project in mind?</p>
            <h3 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium leading-[1.05] max-w-xl">
              Let&apos;s build something worth talking about.
            </h3>
          </div>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 rounded-full bg-accent text-bg px-7 py-4 text-base font-medium hover:bg-ink transition-colors duration-300 whitespace-nowrap"
          >
            Start a project
            <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-14">
          <div className="col-span-2">
            <Link href="/" className="font-display text-xl font-bold">
              Hustle<span className="text-accent">&</span>Flow
            </Link>
            <p className="mt-4 text-sm text-muted max-w-xs leading-relaxed">
              A performance marketing and growth agency helping D2C and e-commerce brands generate more revenue.
            </p>
            <p className="mt-4 text-sm text-muted max-w-xs leading-relaxed">{CONTACT_INFO.address}</p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted mb-4">Navigate</p>
            <ul className="space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-ink/80 hover:text-accent transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted mb-4">Services</p>
            <ul className="space-y-3">
              {SERVICES.slice(0, 4).map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-sm text-ink/80 hover:text-accent transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-muted">
          <p>© {new Date().getFullYear()} Hustle &amp; Flow. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-accent transition-colors">{CONTACT_INFO.email}</a>
            <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-accent transition-colors">{CONTACT_INFO.phone}</a>
            <a href="#" className="hover:text-accent transition-colors">Instagram</a>
            <a href="#" className="hover:text-accent transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
