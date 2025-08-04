"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { AISphereAnimation } from "./ai-sphere-animation"

export default function CreateAISection() {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  }

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid-pattern.png')] bg-repeat opacity-5"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="flex flex-col items-center justify-center text-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-12 leading-tight text-black max-w-4xl mx-auto"
          >
            Crie agora{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
              sua própria IA
            </span>{" "}
            para sua empresa
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="w-full max-w-md mx-auto mb-12"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.5 }}
          >
            <AISphereAnimation />
          </motion.div>

          <motion.div variants={itemVariants}>
            <Button className="relative text-xl font-medium py-6 px-12 rounded-full bg-transparent border-0 overflow-hidden group">
              <span className="relative z-10 text-white">Criar minha IA</span>
              <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 opacity-90"></span>
              </span>
              <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-white"></span>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
