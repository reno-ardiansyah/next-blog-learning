'use client';

import React from 'react';

interface InputProps {
  type: string;
  id: string;
  className?: string;
  placeholder?: string;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({ type, id, className, placeholder, required, ...param }) => {
  return (
    <input
      type={type}
      id={id}
      className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 ${className}`}
      placeholder={placeholder}
      required={required}
      {...param}
    />
  );
};

export default Input;
