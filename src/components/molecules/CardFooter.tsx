"use client";

import React from "react";
import Link from "next/link";

interface CardFooterProps {
  slug: string;
}

const CardFooter: React.FC<CardFooterProps> = ({ slug }) => {
  return (
    <Link
      href={slug}
      className="inline-flex items-center px-3 py-2 text-sm font-medium rounded-lg text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
    >
      Read more
      <svg
        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 10"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M1 5h12m0 0L9 1m4 4L9 9"
        />
      </svg>
    </Link>
  );
};

export default CardFooter;
