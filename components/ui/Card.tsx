import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-xl p-6 bg-white dark:bg-gray-800 shadow-lg',
        hover && 'transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl',
        className
      )}
    >
      {children}
    </div>
  );
}
