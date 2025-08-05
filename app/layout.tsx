import type React from "react"
import "./globals.css"
import { Inter, Montserrat } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: "Next Level - Desenvolvimento de Sistemas, Sites e Automações",
  description:
    "Desenvolvimento de sistemas, sites, aplicativos, automações e integrações com IA. Soluções personalizadas para sua empresa.",
  icons: {
    icon: "/bia-martins-logo.png",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.className} ${montserrat.variable} font-montserrat`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
