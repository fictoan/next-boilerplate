// FRAMEWORK ===========================================================================================================
import { ReactNode } from "react";

// OTHER ===============================================================================================================
import { RootLayoutClient } from "./layout.client";

export const metadata = {
    title        : {
        template : "%s — Fictoan",
        default  : "Fictoan — A designer-friendly React UI framework",
    },
    description  : "NextJS Boilerplate for Fictoan: A designer-friendly React UI framework",
    icons        : {
        icon     : [
            {
                url  : "/favicon.ico",
                type : "image/svg+xml",
            },
        ],
        shortcut : "/favicon.ico",
    },
    metadataBase : new URL("https://fictoan.io"),
    robots       : {
        index  : true,
        follow : true,
    },
};

export default function RootLayout({children} : { children : ReactNode }) {
    return <RootLayoutClient>{children}</RootLayoutClient>;
}
