"use client";

import { UserProvider } from '@auth0/nextjs-auth0/client';
import { ThemeProvider } from "next-themes";
import { useState, useEffect } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { WebContainerIndicator } from "@/components/WebContainerIndicator";

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <UserProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
        {mounted && <WebContainerIndicator />}
        <Toaster />
      </ThemeProvider>
    </UserProvider>
  );
}