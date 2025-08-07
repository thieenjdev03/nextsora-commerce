import React from 'react';
import { Button as UIButton } from '@nextsora/ui';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'secondary' | 'ghost';
  size?: 'sm' | 'lg';
  className?: string;
  onClick?: () => void;
  href?: string;
  target?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'default',
  size = 'lg',
  className = '',
  onClick,
  href,
  target
}) => {
  const baseClasses = 'transition-all duration-200 hover:scale-105 hover:shadow-lg';
  const combinedClasses = `${baseClasses} ${className}`;

  if (href) {
    return (
      <a href={href} target={target} className={combinedClasses}>
        <UIButton variant={variant} size={size} className="w-full">
          {children}
        </UIButton>
      </a>
    );
  }

  return (
    <UIButton 
      variant={variant} 
      size={size} 
      className={combinedClasses}
      onClick={onClick}
    >
      {children}
    </UIButton>
  );
}; 