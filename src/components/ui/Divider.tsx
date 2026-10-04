import React from 'react';
import { cn } from '@/lib/utils';

interface DividerProps {
  className?: string;
  orientation?: 'horizontal' | 'vertical';
}

export function Divider({ className, orientation = 'horizontal' }: DividerProps) {
  if (orientation === 'vertical') {
    return (
      <div
        className={cn('w-px self-stretch', className)}
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(152, 87, 211, 0.4), transparent)' }}
      />
    );
  }

  return (
    <div
      className={cn('h-px w-full', className)}
      style={{ background: 'linear-gradient(to right, transparent, rgba(152, 87, 211, 0.4), transparent)' }}
    />
  );
}
