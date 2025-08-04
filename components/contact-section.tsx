"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function ContactSection() {
  const whatsappLink =
    "https://api.whatsapp.com/send/?phone=5511997854602&text=Ol%C3%A1%21+Gostaria+de+saber+mais+sobre+os+servi%C3%A7os+da+Next+Level.&type=phone_number&app_absent=0"

  const handleButtonClick = () => {
    window.open(whatsappLink, "_blank")
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <section id="contato" className="py-32 bg-white relative overflow-hidden premium-section premium-white-section">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="premium-badge mb-8">
            <p className="text-sm font-medium uppercase tracking-wider text-gray-600">Entre em Contato</p>
          </motion.div>

          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl premium-heading mb-8 text-black">
            Pronto para <span className="text-black">transformar</span> seu negócio?
          </motion.h2>

          <motion.p variants={itemVariants} className="text-xl text-gray-600 mb-16 premium-text max-w-2xl mx-auto">
            Entre em contato conosco hoje mesmo para uma consulta gratuita e descubra como podemos ajudar a impulsionar
            seu negócio com tecnologia de ponta.
          </motion.p>

          <motion.div variants={itemVariants}>
            <Button
              onClick={handleButtonClick}
              className="bg-black hover:bg-gray-800 text-white rounded-full px-12 py-6 text-lg premium-button"
            >
              Faça seu orçamento
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
