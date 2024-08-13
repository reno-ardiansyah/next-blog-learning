import React from "react";

const Container: React.FC<{ children: React.ReactNode, className?: string }> = ({ className, children }) => {
  return <div className={`container mx-auto max-w-6xl ${className}`}>{children}</div>;
};

export default Container;
