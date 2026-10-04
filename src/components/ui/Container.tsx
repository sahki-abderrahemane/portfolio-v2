import React from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  narrow?: boolean;
}

export function Container({ children, className, narrow = false }: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto px-4 sm:px-6',
        narrow ? 'max-w-5xl' : 'max-w-7xl',
        className
      )}
    >
      {children}
    </div>
  );
}
