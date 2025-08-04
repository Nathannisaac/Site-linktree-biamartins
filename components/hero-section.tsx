"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function HeroSection() {
  const whatsappLink =
    "https://api.whatsapp.com/send/?phone=5511997854602&text=Ol%C3%A1%21+Gostaria+de+saber+mais+sobre+os+servi%C3%A7os+da+Next+Level.&type=phone_number&app_absent=0"

  const handleButtonClick = () => {
    window.open(whatsappLink, "_blank")
  }

  const handleLearnMoreClick = () => {
    window.open(whatsappLink, "_blank")
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <section className="min-h-[90vh] flex items-center justify-center pt-16 pb-12">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl premium-heading text-white leading-tight tracking-tight"
            style={{ letterSpacing: "-0.03em" }}
          >
            IA para negócios visionários
          </motion.h1>

          <motion.p variants={itemVariants} className="mt-8 text-xl text-gray-300 max-w-3xl mx-auto premium-text">
            Transforme sua empresa com soluções de inteligência artificial personalizadas que impulsionam a inovação e
            aceleram o crescimento.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-12 flex flex-wrap justify-center gap-6">
            <Button
              onClick={handleButtonClick}
              className="bg-white hover:bg-gray-200 text-black rounded-full px-10 py-7 text-lg premium-button"
            >
              Comece agora
            </Button>
            <Button
              variant="outline"
              onClick={handleLearnMoreClick}
              className="border-white text-white hover:bg-white/10 rounded-full px-10 py-7 text-lg premium-button"
            >
              Saiba mais <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
