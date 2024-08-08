"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavLinkProps } from "@/app/types";

const NavLink: React.FC<NavLinkProps> = ({
  href,
  children,
  className,
  prefetch = false,
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`${className} inline-flex items-center px-3 text-sm font-medium transition-colors ${
        isActive ? "font-bold text-black" : "text-gray-400"
      } `}
      prefetch={prefetch}
    >
      {children}
    </Link>
  );
};

export default NavLink;
