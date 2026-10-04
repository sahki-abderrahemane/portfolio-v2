import React from 'react';
import { cn } from '@/lib/utils';

interface TechTagProps {
  children: React.ReactNode;
  className?: string;
  size?: 'xs' | 'sm';
}

export function TechTag({ children, className, size = 'sm' }: TechTagProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full font-medium',
        'bg-purple-500/10 text-purple-300 border border-purple-500/20',
        size === 'xs' ? 'text-[10px]' : 'text-xs',
        className
      )}
    >
      {children}
    </span>
  );
}
