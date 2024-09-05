"use client";

import React from "react";
import { NavbarItem } from "@nextui-org/react";
import useIsActive from "@/utils/useIsActive";
import Link from "next/link";

interface NavLinkProps {
  href: string;
  title: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, title }) => {
  const isActive = useIsActive();
  return (
    <NavbarItem isActive={isActive === href}>
      <Link prefetch={false} color="foreground" href={href}>
        {title}
      </Link>
    </NavbarItem>
  );
};

export default NavLink;
