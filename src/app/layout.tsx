import React from 'react';
import type {Metadata} from 'next'
import {Analytics} from '@vercel/analytics/react';
import {JetBrains_Mono} from "next/font/google";
import './globals.css'
import {clsx} from "clsx";

//region Font

const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });

//endregion

//region Metadata

// TODO: Update metadata
export const metadata: Metadata = {
  title: 'Maximilian Hvesser-Lewis',
  description: 'Senior Android Developer',
}
// TODO: Update metadata

//endregion

//region Entry

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark scroll-smooth no-scrollbar">
      <body id="home" className={clsx(jetBrainsMono.className, "antialiased dark:bg-cinder")}>
        {/* Content */}
        {children}

        {/* Analytics */}
        <Analytics/>
      </body>
    </html>
  )
}

//endregion
