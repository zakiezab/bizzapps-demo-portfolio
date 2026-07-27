import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "MOBI | Business Applications Demo Portal",
    template: "%s | MOBI Demo Portal",
  },
  description:
    "Browse Dynamics 365 Finance & Operations and CRM/Power Platform demo applications across industries.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
      lang="en"
    >
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground antialiased">
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <Navbar />
          <main className="flex-1">{children}</main>
          <footer className="border-t border-separator py-6">
            <div className="mx-auto max-w-[1400px] px-6 text-center text-xs text-muted">
              MOBI Business Applications Demo Portal — built with Next.js and HeroUI
            </div>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
