'use client';

import React from 'react';
import { CardContentProps } from '@/app/types';
import Link from 'next/link';

const CardContent: React.FC<CardContentProps> = ({ title, author, description, slug = '#' }) => {
  return (
    <div className="p-5">
      <Link href={slug}>
        <h5 className="mb-2 text-xl font-semibold text-center tracking-tight text-gray-700">
          {title}
        </h5>
      </Link>
      <div className="text-center">
        <small className="text-gray-400">
          by <Link className="text-gray-600" href={author.nickname}>{author.fullname}</Link>
        </small>
      </div>
      <hr className="w-10 mx-auto my-2 border-gray-300" />
      <p className="mb-3 font-normal text-gray-400">
        {description}
      </p>
    </div>
  );
};

export default CardContent;
