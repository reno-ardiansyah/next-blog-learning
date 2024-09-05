"use client";

import { usePathname } from "next/navigation";

const useIsActive = () => {
  const pathname = usePathname();
  return pathname;
};

export default useIsActive;
