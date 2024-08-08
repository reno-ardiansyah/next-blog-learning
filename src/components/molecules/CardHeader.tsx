"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CardContentProps} from '@/app/types'

const CardHeader: React.FC<CardContentProps> = ({ imageUrl = '', imageAlt = '', slug = '#' }) => {
  return (
    <Link href={slug}>
      <Image
        className={`rounded-t-lg `}
        src={imageUrl}
        alt={imageAlt}
        layout="responsive"
        width={300}
        height={100}
      />
    </Link>
  );
};

export default CardHeader;
