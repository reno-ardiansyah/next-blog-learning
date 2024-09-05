"use client";

import { useSession } from "next-auth/react";

export function useCheckUserSession() {
  const { data: session, status } = useSession();
  return { session, status };
}
