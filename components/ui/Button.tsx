import { ButtonHTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        'rounded-lg font-semibold transition-all duration-200',
        'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black',
        {
          // Variant styles
          'bg-white text-[#1E40AF] hover:bg-gray-100 focus:ring-white':
            variant === 'primary',
          'bg-[#F5C842] text-black hover:bg-[#f5c842]/90 focus:ring-[#F5C842]':
            variant === 'secondary',
          'bg-transparent border-2 border-white text-white hover:bg-white/10 focus:ring-white':
            variant === 'outline',

          // Size styles
          'px-4 py-2 text-sm': size === 'sm',
          'px-6 py-3 text-base': size === 'md',
          'px-8 py-4 text-lg': size === 'lg',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
