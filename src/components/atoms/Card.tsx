'use client';

import React from 'react';

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ className, children }) => {
  return (
    <div className={`max-w-sm mx-5 bg-white border border-gray-300 rounded-lg shadow ${className}`}>
      {children}
    </div>
  );
};

export default Card;
