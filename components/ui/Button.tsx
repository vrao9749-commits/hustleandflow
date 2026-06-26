import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
  icon?: boolean;
};

export default function Button({ href, children, variant = 'primary', className, icon = true }: ButtonProps) {
  const base =
    'group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 ease-out';

  const styles = {
    primary: 'bg-accent text-bg hover:bg-ink hover:scale-[1.03]',
    secondary: 'bg-surface2 text-ink border border-border hover:border-accent hover:text-accent',
    ghost: 'bg-transparent text-ink border border-border hover:bg-surface2',
  };

  return (
    <Link href={href} className={cn(base, styles[variant], className)}>
      {children}
      {icon && (
        <ArrowUpRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </Link>
  );
}
