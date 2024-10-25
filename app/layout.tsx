"use client";

import './globals.css';
import { Providers } from './providers';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { LoadingHeader } from '@/components/LoadingHeader';
import Script from 'next/script';

// Dynamically import components that depend on client-side features
const Header = dynamic(() => import('@/components/Header'), {
  ssr: false,
  loading: () => <LoadingHeader />
});

const Footer = dynamic(() => import('@/components/Footer'), { ssr: false });
const MobileNavigation = dynamic(() => import('@/components/MobileNavigation').then(mod => mod.MobileNavigation), { ssr: false });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
      </head>
      <body>
        <Script
          id="facebook-jssdk"
          strategy="afterInteractive"
          src="https://connect.facebook.net/en_US/sdk.js"
        />
        
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Suspense fallback={<LoadingHeader />}>
              <Header />
            </Suspense>
            <main className="flex-1">
              {children}
            </main>
            <Footer />
            <MobileNavigation />
          </div>
        </Providers>
      </body>
    </html>
  );
}