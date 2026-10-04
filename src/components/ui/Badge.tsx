import React from 'react';
import { cn } from '@/lib/utils';

type BadgeVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'gray' | 'cyan';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
  dot?: boolean;
}

const variantStyles: Record<BadgeVariant, string> = {
  primary: 'bg-purple-500/15 text-purple-300 border-purple-500/30',
  secondary: 'bg-blue-500/15 text-blue-300 border-blue-500/30',
  success: 'bg-green-500/15 text-green-400 border-green-500/30',
  warning: 'bg-yellow-500/15 text-yellow-400 border-yellow-500/30',
  gray: 'bg-gray-500/15 text-gray-400 border-gray-500/30',
  cyan: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30',
};

const dotStyles: Record<BadgeVariant, string> = {
  primary: 'bg-purple-400',
  secondary: 'bg-blue-400',
  success: 'bg-green-400',
  warning: 'bg-yellow-400',
  gray: 'bg-gray-400',
  cyan: 'bg-cyan-400',
};

export function Badge({ children, variant = 'primary', className, dot }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-full border',
        variantStyles[variant],
        className
      )}
    >
      {dot && <span className={cn('w-1.5 h-1.5 rounded-full', dotStyles[variant])} />}
      {children}
    </span>
  );
}
