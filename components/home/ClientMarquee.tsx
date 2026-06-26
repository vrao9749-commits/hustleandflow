import { CLIENT_LOGOS } from '@/lib/nav';

export default function ClientMarquee() {
  const items = [...CLIENT_LOGOS, ...CLIENT_LOGOS];
  return (
    <section className="border-y border-border bg-surface/40 py-10 overflow-hidden">
      <div className="max-w-wrap mx-auto px-6 md:px-8 mb-6">
        <p className="text-xs uppercase tracking-[0.2em] text-muted text-center">Trusted by ambitious teams</p>
      </div>
      <div className="relative flex overflow-hidden">
        <div className="flex animate-marquee gap-16 whitespace-nowrap pr-16">
          {items.map((logo, i) => (
            <span key={i} className="text-xl md:text-2xl font-display font-medium text-muted/50">
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
