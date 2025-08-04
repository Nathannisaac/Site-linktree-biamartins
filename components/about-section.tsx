"use client"

import { useEffect } from "react"
import Image from "next/image"
import { CheckCircle } from "lucide-react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function AboutSection() {
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
    hidden: {},
    visible: {
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
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  }

  const benefits = [
    {
      title: "Equipe especializada",
      description: "com profissionais altamente qualificados em IA e desenvolvimento.",
    },
    {
      title: "Metodologia ágil",
      description: "que garante entregas rápidas e resultados consistentes.",
    },
    {
      title: "Tecnologia de ponta",
      description: "utilizando as ferramentas mais avançadas do mercado.",
    },
    {
      title: "Foco em resultados",
      description: "com soluções que geram valor real para o seu negócio.",
    },
  ]

  const stats = [
    { value: "50+", label: "Projetos entregues" },
    { value: "98%", label: "Clientes satisfeitos" },
    { value: "15+", label: "Especialistas" },
    { value: "5+", label: "Anos de experiência" },
  ]

  return (
    <section id="sobre" className="py-24 bg-black relative">
      <div className="absolute inset-0 bg-[url('/grid-pattern.png')] bg-repeat opacity-5"></div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div ref={ref} variants={imageVariants} initial="hidden" animate={controls} className="relative">
            <div className="relative z-10">
              <Image
                src="/modern-office-team-meeting.png"
                alt="Nossa equipe"
                width={600}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 border-4 border-white rounded-2xl z-0"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-white/5 rounded-xl z-0"></div>
          </motion.div>

          <motion.div variants={containerVariants} initial="hidden" animate={controls}>
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Sobre nós
            </motion.h2>

            <motion.p variants={itemVariants} className="text-gray-300 text-lg mb-8">
              Somos uma empresa especializada em desenvolvimento de soluções tecnológicas com foco em inteligência
              artificial. Nossa missão é transformar negócios através da inovação digital, criando ferramentas que
              impulsionam a eficiência e o crescimento.
            </motion.p>

            <motion.div variants={containerVariants} className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div key={index} variants={itemVariants} className="flex items-start">
                  <CheckCircle className="text-white mr-3 mt-1 h-5 w-5 flex-shrink-0" />
                  <p className="text-gray-300">
                    <span className="font-semibold text-white">{benefit.title}</span> {benefit.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={containerVariants} className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {stats.map((stat, index) => (
                <motion.div key={index} variants={itemVariants} className="text-center">
                  <p className="text-4xl font-bold text-white mb-2">{stat.value}</p>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
