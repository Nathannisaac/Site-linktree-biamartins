"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

const projects = [
  {
    id: 1,
    title: "Sistema de Automação Inteligente",
    description: "Plataforma de automação de processos com IA para uma empresa de logística.",
    image: "/placeholder-fvwr0.png",
    category: "Automação",
  },
  {
    id: 2,
    title: "Aplicativo de Análise de Dados",
    description: "App mobile para visualização e análise de dados em tempo real.",
    image: "/placeholder-00gz4.png",
    category: "Aplicativo",
  },
  {
    id: 3,
    title: "Chatbot para Atendimento",
    description: "Chatbot inteligente para atendimento ao cliente com processamento de linguagem natural.",
    image: "/ai-chatbot-interface.png",
    category: "IA",
  },
  {
    id: 4,
    title: "Plataforma de E-commerce",
    description: "Loja virtual com recomendações personalizadas baseadas em IA.",
    image: "/placeholder-yg81x.png",
    category: "E-commerce",
  },
]

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("Todos")
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

  const categories = ["Todos", "Automação", "Aplicativo", "IA", "E-commerce"]

  const filteredProjects =
    activeCategory === "Todos" ? projects : projects.filter((project) => project.category === activeCategory)

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

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-b from-black to-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Nossos Projetos
          </motion.h2>

          <motion.p variants={itemVariants} className="text-gray-300 text-lg">
            Conheça alguns dos projetos que desenvolvemos para nossos clientes, demonstrando nossa expertise em
            diferentes áreas da tecnologia.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-2 mt-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category ? "bg-white text-black" : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-xl"
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <div className="relative h-[300px] overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium text-white mb-3">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 rounded-full px-4 py-2 text-sm transition-all duration-300"
                >
                  Ver detalhes <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} initial="hidden" animate={controls} className="text-center mt-12">
          <Button className="bg-white hover:bg-gray-200 text-black rounded-full px-6 py-2 font-medium transition-all duration-300 hover:shadow-glow">
            Ver todos os projetos
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
