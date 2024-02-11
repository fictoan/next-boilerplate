// EXTERNAL DEPS ===============================================================
import React from "react";

// INTERNAL DEPS ===============================================================

// COMPONENTS ==================================================================
import { RootClientSideLayout } from "@/components/RootClientSideLayout/RootClientSideLayout";

// STYLES ======================================================================
import "@/styles/globals.css";

// ASSETS ======================================================================

// TYPES =======================================================================
import type { Metadata } from "next";




export const metadata: Metadata = {
    title: "Boilerplate for React — Fictoan Framework",
    description: "NextJS boilerplate for React using Fictoan Framework",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <RootClientSideLayout children={children} />
            </body>
        </html>
    );
}
