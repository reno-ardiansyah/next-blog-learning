import React from "react";

interface ContainerProps {
  children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({children}) => {
  return <div className="container mx-auto max-w-6xl mt-16">{children}</div>;
};

export default Container;
