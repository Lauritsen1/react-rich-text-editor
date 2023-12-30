import type { Metadata } from "next"
import { Inter as FontSans } from "next/font/google"

import { ModeToggle } from "@/components/mode-toggle"

import "@/styles/globals.css"

import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Text Editor",
  description: "A text editor built with TipTap and Shadcn/ui",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header className="container flex justify-end py-4">
            <ModeToggle />
          </header>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
