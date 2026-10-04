import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export function Card({ children, className, hover = false, glow = false }: CardProps) {
  return (
    <div
      className={cn(
        'bg-gradient-to-br from-surface to-background-alt',
        'rounded-2xl border border-card-border',
        hover && 'card-hover cursor-pointer hover:border-purple-600/40',
        glow && 'hover:shadow-[0_0_30px_rgba(152,87,211,0.15)]',
        className
      )}
    >
      {children}
    </div>
  );
}
