import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  /** Remove default vertical padding */
  noPadding?: boolean;
}

export function Section({ children, className, id, noPadding = false }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        !noPadding && 'py-20 md:py-28',
        className
      )}
    >
      {children}
    </section>
  );
}
