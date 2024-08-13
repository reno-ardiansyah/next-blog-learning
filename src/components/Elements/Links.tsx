import React from "react";
import Link from "next/link";
import { LinksProps } from "@/app/types";

const Links: React.FC<LinksProps> = ({
  href,
  children,
  className,
  prefetch = false,
}) => {
  return (
    <Link
      href={href}
      className={`${className} inline-flex items-center px-3  transition-colors`}
      prefetch={prefetch}
    >
      {children} 
    </Link>
  );
};

export default Links;
