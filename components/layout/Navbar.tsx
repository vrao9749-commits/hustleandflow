'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { NAV_LINKS } from '@/lib/nav';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-300',
        scrolled ? 'bg-bg/80 backdrop-blur-lg border-b border-border' : 'bg-transparent'
      )}
    >
      <div className="max-w-wrap mx-auto px-6 md:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="font-display text-lg font-bold tracking-tight">
          Hustle<span className="text-accent">&</span>Flow
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-accent',
                pathname === link.href ? 'text-ink' : 'text-muted'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="hidden md:inline-flex items-center rounded-full bg-accent text-bg px-5 py-2.5 text-sm font-medium hover:bg-ink transition-colors duration-300"
        >
          Start a project
        </Link>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-ink p-2 -mr-2"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden bg-bg border-t border-border overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base font-medium text-ink py-3 border-b border-border/60 last:border-0"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-accent text-bg px-5 py-3.5 text-sm font-medium mt-5"
              >
                Start a project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
