import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sobre",
  description: "Conheça mais sobre Bia Martins - Empreendedora Social e Forbes Under 30",
  icons: {
    icon: "/bia-martins-logo.png",
  },
}

export default function SobreLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 