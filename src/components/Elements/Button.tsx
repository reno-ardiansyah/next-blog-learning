"use client";

import React from "react";
import { ButtonProps } from "@/app/types";

const Button: React.FC<ButtonProps> = ({ type, className, children, onClick }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`inline-flex items-center py-2.5 px-3 text-sm font-medium rounded-lg ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
