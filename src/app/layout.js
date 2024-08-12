import "./globals.css";
import {Inter as FontSans} from "next/font/google"

import {cn} from "@/lib/utils"
import {ClerkProvider} from "@clerk/nextjs";
import {dark} from "@clerk/themes";
import Colors from "@/globals/Colors";
import Provider from "@/app/Provider";

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
});

export const metadata = {
    title: 'DocMingle',
    description: 'Your go-to collaboration editor',
};

function RootLayout({children}) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={cn("min-h-screen font-sans antialiased", fontSans.variable)}>
        <ClerkProvider appearance={{
            baseTheme: dark,
            variables: {
                colorPrimary: Colors.blue["500"],
                fontSize: '16px',
            },
        }}>
            <Provider>
                {children}
            </Provider>
        </ClerkProvider>
        </body>
        </html>
    )
}

export default RootLayout;
