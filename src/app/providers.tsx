"use client";

import * as React from "react";
import { SessionProvider } from "next-auth/react";
import { NextUIProvider } from "@nextui-org/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}
