"use client";

import React, { useState } from "react";
import NavLink from "../Fragments/Navbar/NavLink";
import Links from "../Elements/Links";
import Container from "../Fragments/Container";
import { MountainIcon, ToggleIcon } from "../Elements/Iconts";
import Button from "../Elements/Button";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="w-full shadow-md">
        <Container className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <Links
            href="/"
            className="flex text-black items-center gap-2 text-lg font-bold "
          >
            <MountainIcon className="h-6 w-6" />
          </Links>
          <Button type="button" onClick={toggleMenu}>
            <ToggleIcon />
          </Button>
          <nav className={`md:flex hidden space-x-4`}>
            <NavLink href="/" className="font-medium navlink">
              Home
            </NavLink>
            <NavLink href="/blog" className="font-medium navlink">
              Blog
            </NavLink>
            <NavLink href="/category" className="font-medium navlink">
              Category
            </NavLink>
            <NavLink href="/author" className="font-medium navlink">
              Author
            </NavLink>
            <Links
              href="/login"
              className="inline-flex items-center rounded-md bg-blue-950 px-3 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border-lg"
            >
              Login
            </Links>
          </nav>
        </Container>
        {isOpen && (
          <div className="md:hidden">
            <nav className="flex flex-col space-y-2 p-4">
              <NavLink
                href="#"
                className="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
              >
                Home
              </NavLink>
              <NavLink
                href="#"
                className="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
              >
                Category
              </NavLink>
              <NavLink
                href="#"
                className="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
              >
                Author
              </NavLink>
              <NavLink
                href="#"
                className="bg-slate-800 text-white shadow hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Login
              </NavLink>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
