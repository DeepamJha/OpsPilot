"use client";

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-violet-400',
  {
    variants: {
      variant: {
        default: 'bg-surface-subtle text-primary hover-surface',
        outline: 'border border-theme bg-transparent text-secondary hover-surface hover:text-primary',
        ghost: 'bg-transparent text-secondary hover-surface hover:text-primary',
        primary: 'bg-gradient-to-r from-indigo-500 to-teal-500 text-white hover:from-indigo-600 hover:to-teal-600 dark:from-violet-500 dark:to-violet-600 dark:hover:from-violet-600 dark:hover:to-violet-500',
        success: 'bg-emerald-500/10 text-emerald-700 hover:bg-emerald-500/15 dark:text-emerald-300',
      },
      size: {
        default: 'h-10 px-3 py-2',
        sm: 'h-9 px-2.5',
        lg: 'h-11 px-4',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return <button ref={ref} className={cn(buttonVariants({ variant, size, className }))} {...props} />;
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
