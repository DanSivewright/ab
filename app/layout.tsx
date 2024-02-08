import type { Metadata } from "next"
import { SpeedInsights } from "@vercel/speed-insights/next"

import "./globals.css"

import { GeistMono } from "geist/font/mono"
import { GeistSans } from "geist/font/sans"

import { Toaster } from "@/components/ui/sonner"
import { Providers } from "@/components/providers"
import { TailwindIndicator } from "@/components/tailwind-indicator"

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${GeistMono.className} ${GeistSans.className}`}>
        <Providers>{children}</Providers>
        <Toaster />
        <TailwindIndicator />
        <SpeedInsights />
      </body>
    </html>
  )
}
