import Button from '@/components/ui/Button';
import Reveal from '@/components/ui/Reveal';

export default function CTASection() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-wrap mx-auto px-6 md:px-8">
        <Reveal>
          <div className="relative rounded-[2.5rem] border border-border bg-surface overflow-hidden px-8 md:px-16 py-16 md:py-24 text-center">
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-accent/10 blur-[120px]" />
            <p className="text-xs uppercase tracking-[0.2em] text-muted mb-5 relative z-10">Ready when you are</p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium leading-[1.05] max-w-3xl mx-auto text-balance relative z-10">
              Your growth bottleneck isn&apos;t a mystery. Let&apos;s go find it.
            </h2>
            <p className="mt-6 text-muted text-lg max-w-xl mx-auto relative z-10">
              Book a free 30-minute audit call. No pitch deck, no pressure — just a clear read on where the biggest opportunity is.
            </p>
            <div className="mt-10 flex justify-center relative z-10">
              <Button href="/contact" className="px-8 py-4 text-base">
                Book your audit call
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
