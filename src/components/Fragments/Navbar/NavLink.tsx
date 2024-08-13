"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { LinksProps } from "@/app/types";
import Links from "@/components/Elements/Links";

const NavLink: React.FC<LinksProps> = ({
  href,
  children,
  className,
  prefetch = false,
}) => {
  const pathname = usePathname();
  return (
    <Links href={href} className={`${className} ${href && pathname === href ? 'font-bold text-black text-md text-medium' : 'text-slate-400 text-sm'}`} prefetch={prefetch}>
      {children}
    </Links>
  );
};

export default NavLink;
