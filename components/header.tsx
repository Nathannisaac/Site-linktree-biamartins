"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const whatsappLink =
    "https://api.whatsapp.com/send/?phone=5511997854602&text=Ol%C3%A1%21+Gostaria+de+saber+mais+sobre+os+servi%C3%A7os+da+Next+Level.&type=phone_number&app_absent=0"

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false)
    const section = document.getElementById(sectionId)
    if (section) {
      const yOffset = -80
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: "smooth" })
    }
  }

  const handleContactClick = () => {
    window.open(whatsappLink, "_blank")
  }

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 flex justify-center"
        initial="hidden"
        animate="visible"
        variants={navVariants}
      >
        <div
          className={`backdrop-blur-md rounded-full py-3 px-4 md:px-8 flex items-center justify-between border border-gray-800/20 max-w-5xl w-[95%] md:w-full mx-auto my-4 transition-all duration-500 ${
            isScrolled ? "bg-black/80 shadow-lg" : "bg-[#3a3a3a]/40"
          }`}
        >
          <Link href="/" className="flex items-center -my-6">
            <Image
              src="/logo-next-level.png"
              alt="Next Level"
              width={200}
              height={200}
              className="h-24 md:h-32 w-auto"
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center">
            <motion.button
              variants={navItemVariants}
              onClick={() => scrollToSection("home")}
              className="text-white px-6 py-2 text-base font-medium hover:text-gray-300 transition-colors"
            >
              Home
            </motion.button>
            <motion.button
              variants={navItemVariants}
              onClick={() => scrollToSection("servicos")}
              className="text-white px-6 py-2 text-base font-medium hover:text-gray-300 transition-colors"
            >
              Serviços
            </motion.button>
            <motion.button
              variants={navItemVariants}
              onClick={() => scrollToSection("projetos")}
              className="text-white px-6 py-2 text-base font-medium hover:text-gray-300 transition-colors"
            >
              Projetos
            </motion.button>
            <motion.button
              variants={navItemVariants}
              onClick={() => scrollToSection("contato")}
              className="text-white px-6 py-2 text-base font-medium hover:text-gray-300 transition-colors"
            >
              Contato
            </motion.button>
          </nav>

          <motion.div variants={navItemVariants} className="hidden md:block">
            <Button
              onClick={handleContactClick}
              className="bg-white hover:bg-gray-100 text-black rounded-full px-6 py-2 font-medium premium-button"
            >
              Fale Conosco
            </Button>
          </motion.div>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      <div className="h-24 md:h-32"></div>

      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 md:hidden">
          <div className="flex flex-col h-full pt-32 px-8">
            <nav className="flex flex-col space-y-6 items-center">
              <button
                onClick={() => scrollToSection("home")}
                className="text-white text-2xl font-medium hover:text-gray-300 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("servicos")}
                className="text-white text-2xl font-medium hover:text-gray-300 transition-colors"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("projetos")}
                className="text-white text-2xl font-medium hover:text-gray-300 transition-colors"
              >
                Projetos
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="text-white text-2xl font-medium hover:text-gray-300 transition-colors"
              >
                Contato
              </button>
            </nav>

            <div className="mt-12">
              <Button
                onClick={handleContactClick}
                className="w-full bg-white hover:bg-gray-100 text-black rounded-full px-6 py-6 text-lg font-medium premium-button"
              >
                Fale Conosco
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
