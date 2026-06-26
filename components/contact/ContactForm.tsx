'use client';

import { useState } from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

const BUDGETS = ['< ₹2L / mo', '₹2L – ₹5L / mo', '₹5L – ₹10L / mo', '₹10L+ / mo'];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-3xl border border-border bg-surface p-10 md:p-14 text-center">
        <CheckCircle2 size={40} className="text-accent mx-auto mb-5" />
        <h3 className="font-display text-2xl font-medium">Got it. We're on it.</h3>
        <p className="mt-3 text-muted">We reply to every inquiry within one business day. Talk soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-border bg-surface p-8 md:p-10 space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label className="text-sm font-medium text-muted">Name</label>
          <input
            required
            type="text"
            className="mt-2 w-full rounded-xl bg-surface2 border border-border px-4 py-3 text-ink outline-none focus:border-accent transition-colors"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-muted">Email</label>
          <input
            required
            type="email"
            className="mt-2 w-full rounded-xl bg-surface2 border border-border px-4 py-3 text-ink outline-none focus:border-accent transition-colors"
            placeholder="you@company.com"
          />
        </div>
      </div>

      <div>
        <label className="text-sm font-medium text-muted">Company</label>
        <input
          type="text"
          className="mt-2 w-full rounded-xl bg-surface2 border border-border px-4 py-3 text-ink outline-none focus:border-accent transition-colors"
          placeholder="Company name"
        />
      </div>

      <div>
        <label className="text-sm font-medium text-muted">Monthly budget</label>
        <div className="mt-2 grid grid-cols-2 gap-3">
          {BUDGETS.map((b) => (
            <label
              key={b}
              className="flex items-center justify-center text-sm rounded-xl border border-border bg-surface2 px-3 py-3 cursor-pointer hover:border-accent/60 transition-colors [&:has(:checked)]:border-accent [&:has(:checked)]:text-accent"
            >
              <input type="radio" name="budget" value={b} className="hidden" />
              {b}
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="text-sm font-medium text-muted">Tell us about your project</label>
        <textarea
          required
          rows={4}
          className="mt-2 w-full rounded-xl bg-surface2 border border-border px-4 py-3 text-ink outline-none focus:border-accent transition-colors resize-none"
          placeholder="What are you trying to grow, fix, or launch?"
        />
      </div>

      <button
        type="submit"
        className="group w-full inline-flex items-center justify-center gap-2 rounded-full bg-accent text-bg px-7 py-4 text-base font-medium hover:bg-ink transition-colors duration-300"
      >
        Send inquiry
        <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </button>
    </form>
  );
}
