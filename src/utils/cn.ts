import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';

/**
 * Combines class names using `clsx` and merges them with Tailwind classes using `twMerge`.
 * @param {string} defaultClass - The default class names.
 * @param {string} [className] - Additional class names.
 * @returns {string} - The combined class names.
 */
const cn = (defaultClass: string, className?: string): string => {
  return twMerge(clsx(defaultClass, className));
};

export default cn;
