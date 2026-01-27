import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'accent' | 'outline';
  className?: string;
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  const variants = {
    default: 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200',
    primary: 'bg-primary/10 text-primary dark:bg-primary/20',
    accent: 'bg-accent/10 text-accent dark:bg-accent/20',
    outline: 'border border-gray-200 text-gray-600 dark:border-gray-700 dark:text-gray-300',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
