import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center pt-32">
      <div className="text-center px-6">
        <p className="font-display text-7xl font-medium text-accent">404</p>
        <h1 className="font-display text-2xl md:text-3xl font-medium mt-4">This page got lost in the funnel.</h1>
        <Link href="/" className="inline-flex mt-8 rounded-full bg-accent text-bg px-6 py-3 text-sm font-medium hover:bg-ink transition-colors">
          Back to home
        </Link>
      </div>
    </section>
  );
}
