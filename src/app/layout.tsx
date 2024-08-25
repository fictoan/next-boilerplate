// EXTERNAL DEPS ===============================================================
import React from "react";

// INTERNAL DEPS ===============================================================
import { ThemeProvider } from "fictoan-react";

// COMPONENTS ==================================================================
import { Header } from "@/components/Header/Header";

// STYLES ======================================================================
import "@/styles/globals.css";

// ASSETS ======================================================================

// TYPES =======================================================================
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Boilerplate for React — Fictoan Framework",
  description: "NextJS boilerplate for React using Fictoan Framework",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider currentTheme="theme-light">
          <Header />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
