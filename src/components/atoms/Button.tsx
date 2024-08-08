'use client';

import React from 'react';

interface ButtonProps {
  type: 'button' | 'submit' | 'reset';
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ type, className, children }) => {
  return (
    <button type={type} className={`inline-flex items-center py-2.5 px-3 text-sm font-medium rounded-lg ${className}`}>
      {children}
    </button>
  );
};

export default Button;
