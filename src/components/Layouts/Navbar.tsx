"use client";
import React from "react";
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import Link from "next/link";
import NavLink from "@/components/Fragments/NavLink";
import { MountainIcon } from "@/components/Elements/Iconts";
import { signIn } from "next-auth/react";

const _Navbar: React.FC = () => {
  return (
    <Navbar
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "ml-5",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
        ],
      }}
    >
      <NavbarBrand>
        <MountainIcon className="h-8 w-8" />
        <p className="font-bold text-inherit ms-2">ACME</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavLink href="/" title="Home" />
        <NavLink href="/blog" title="Blog" />
        <NavLink href="/author" title="Author" />
        <NavLink href="/category" title="Category" />
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
        <Link href="#" onClick={() => signIn()}>Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default _Navbar;
