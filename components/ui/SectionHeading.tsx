import { cn } from '@/lib/utils';

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}) {
  return (
    <div className={cn('max-w-2xl', align === 'center' && 'mx-auto text-center', className)}>
      {eyebrow && (
        <div className="flex items-center gap-2 mb-4" style={{ justifyContent: align === 'center' ? 'center' : 'flex-start' }}>
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          <span className="text-xs uppercase tracking-[0.2em] text-muted font-medium">{eyebrow}</span>
        </div>
      )}
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.1] text-balance">{title}</h2>
      {description && <p className="mt-5 text-muted text-base md:text-lg leading-relaxed">{description}</p>}
    </div>
  );
}
