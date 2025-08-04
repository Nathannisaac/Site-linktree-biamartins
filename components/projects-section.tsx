"use client"

import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { motion } from "framer-motion"

export default function ProjectsSection() {
  const projects = [
    {
      category: "Website",
      name: "Like Kar",
      image: "/projects/like-kar-site.png",
      description: "A melhor loja de som e acessórios automotivos de Guarulhos, próxima ao Shopping Maia.",
      url: "https://www.likekar.com.br/",
    },
    {
      category: "Website",
      name: "Contabilidade Rodello",
      image: "/projects/contabilidade-rodello-site.png",
      description: "Contabilidade humanizada e inovadora com tecnologia para empresas.",
      url: "https://rodellocontabilidade.com/",
    },
    {
      category: "Website",
      name: "Like Seguro",
      image: "/projects/like-security-site.png",
      description: "Segurança para carro e rastreador para proteção contra roubo, furto e incêndio em todo o Brasil.",
      url: "https://www.autorizadoituran.com.br/",
    },
  ]

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
    <section id="projetos" className="py-32 bg-black relative overflow-hidden premium-section">
      <div className="absolute inset-0 bg-[url('/grid-pattern.png')] bg-repeat opacity-5"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-3xl mx-auto mb-24"
        >
          <motion.div variants={itemVariants} className="inline-block px-6 py-2 bg-white/10 rounded-full mb-6">
            <p className="text-sm font-medium uppercase tracking-wider text-white">Nossos Projetos</p>
          </motion.div>

          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl premium-heading mb-8 text-white">
            Nossos Projetos
          </motion.h2>

          <motion.p variants={itemVariants} className="text-lg text-gray-300 premium-text max-w-2xl mx-auto">
            Conheça alguns dos projetos que desenvolvemos para nossos clientes.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="premium-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-black transition-all duration-500 premium-card"
            >
              <div className="relative h-[280px] overflow-hidden rounded-xl mb-8 premium-image">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink className="h-4 w-4 text-white" />
                </div>
              </div>

              <div className="space-y-4 px-2">
                <div>
                  <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-medium text-white mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-semibold text-white premium-heading">{project.name}</h3>
                </div>
                <p className="text-gray-400 text-base premium-text pb-4">{project.description}</p>
              </div>

              <Link
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-10"
                aria-label={`Ver projeto ${project.name}`}
              >
                <span className="sr-only">Ver projeto</span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
