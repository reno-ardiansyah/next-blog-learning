"use client";

import React, { useState } from "react";
import NavIcon from "../atoms/NavIcon";
import NavLink from "../atoms/NavLink";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full shadow-md">
      <div className="container max-w-6xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <NavLink
          href="/"
          className="flex text-black items-center gap-2 text-lg font-bold "
        >
          <NavIcon name="mountain" className="h-6 w-6" />
          <span className="justify-center pt-1 font-semibold text-lg">
            BlogKu
          </span>
        </NavLink>
        <button className="md:hidden" onClick={toggleMenu}>
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
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
          <NavLink
            href="/login"
            className="inline-flex items-center rounded-md bg-blue-950 px-3 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border-lg"
          >
            Login
          </NavLink>
        </nav>
      </div>
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
  );
};

export default Navbar;
