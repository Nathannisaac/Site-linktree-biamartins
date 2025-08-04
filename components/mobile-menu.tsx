"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="text-white focus:outline-none"
        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/95 z-50 flex flex-col pt-20 px-6">
          <button onClick={closeMenu} className="absolute top-6 right-6 text-white" aria-label="Fechar menu">
            <X size={24} />
          </button>

          <nav className="flex flex-col space-y-6 items-center">
            <Link
              href="/"
              className="text-white text-2xl font-medium hover:text-gray-300 transition-colors"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              href="#sobre"
              className="text-white text-2xl font-medium hover:text-gray-300 transition-colors"
              onClick={closeMenu}
            >
              Sobre
            </Link>
            <Link
              href="#servicos"
              className="text-white text-2xl font-medium hover:text-gray-300 transition-colors"
              onClick={closeMenu}
            >
              Serviços
            </Link>
            <Link
              href="#portfolio"
              className="text-white text-2xl font-medium hover:text-gray-300 transition-colors"
              onClick={closeMenu}
            >
              Portfólio
            </Link>
            <Link
              href="#contato"
              className="text-white text-2xl font-medium hover:text-gray-300 transition-colors"
              onClick={closeMenu}
            >
              Contato
            </Link>
          </nav>

          <div className="mt-12">
            <Button className="w-full bg-white hover:bg-gray-100 text-black rounded-full px-6 py-6 text-lg font-medium">
              Fale Conosco
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
