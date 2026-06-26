import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';
import { BLOG_POSTS } from '@/lib/nav';
import Reveal from '@/components/ui/Reveal';
import CTASection from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'Blogs',
  description: 'Insights on performance marketing, growth, and design from the Hustle & Flow team.',
};

export default function BlogsPage() {
  return (
    <>
      <section className="pt-40 pb-20 md:pt-52 md:pb-24">
        <div className="max-w-wrap mx-auto px-6 md:px-8">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.2em] text-muted">Blogs</span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-semibold leading-[1.02] mt-5 max-w-4xl text-balance uppercase">
              Ideas worth stealing.
            </h1>
            <p className="mt-8 text-lg md:text-xl text-muted max-w-2xl leading-relaxed">
              Notes on tracking, creative, design, and scaling — from the campaigns we run every day.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="max-w-wrap mx-auto px-6 md:px-8 grid sm:grid-cols-2 gap-6">
          {BLOG_POSTS.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.06}>
              <div className="group rounded-3xl border border-border bg-surface p-8 h-full hover:border-accent/50 transition-colors duration-300">
                <span className="text-xs uppercase tracking-[0.2em] text-accent">{post.category}</span>
                <h2 className="font-display text-2xl md:text-3xl font-medium mt-4 leading-tight">{post.title}</h2>
                <p className="mt-4 text-muted leading-relaxed">{post.excerpt}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent">
                  Read more
                  <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
