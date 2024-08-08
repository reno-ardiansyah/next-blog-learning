"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CardHeaderProps {
  imageSrc: string;
  imageAlt: string;
  slug?: string;
}

const CardHeader: React.FC<CardHeaderProps> = ({ imageSrc, imageAlt, slug = '#' }) => {
  return (
    <Link href={slug}>
      <Image
        className={`rounded-t-lg `}
        src={imageSrc}
        alt={imageAlt}
        layout="responsive"
        width={300}
        height={100}
      />
    </Link>
  );
};

export default CardHeader;
