"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ArrowLeft, ArrowRight, Quote } from "lucide-react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

const testimonials = [
  {
    id: 1,
    name: "Ana Silva",
    role: "CEO, TechSolutions",
    content:
      "A Next Level transformou completamente nossos processos internos com soluções de IA que aumentaram nossa produtividade em mais de 40%. O atendimento e suporte foram excepcionais durante todo o projeto.",
    image: "/professional-woman-portrait.png",
  },
  {
    id: 2,
    name: "Carlos Mendes",
    role: "Diretor de Inovação, Global Retail",
    content:
      "O aplicativo desenvolvido pela equipe da Next Level superou todas as nossas expectativas. A interface intuitiva e os recursos de IA para recomendações personalizadas aumentaram significativamente nossas vendas online.",
    image: "/professional-man-portrait.png",
  },
  {
    id: 3,
    name: "Mariana Costa",
    role: "CTO, FinanceApp",
    content:
      "Implementamos o sistema de automação da Next Level há 6 meses e já observamos uma redução de 30% nos custos operacionais. A equipe técnica é extremamente competente e atenciosa.",
    image: "/professional-woman-tech-leader.png",
  },
]

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
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

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial()
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  }

  return (
    <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-[30%] left-[10%] w-[300px] h-[300px] rounded-full bg-white opacity-[0.02] blur-[100px]"></div>
          <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-white opacity-[0.02] blur-[120px]"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-white">O que nossos clientes dizem</h2>

          <div className="relative">
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 text-white/10">
              <Quote size={120} />
            </div>

            <div className="relative z-10">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: index === activeIndex ? 1 : 0,
                    y: index === activeIndex ? 0 : 20,
                  }}
                  transition={{ duration: 0.5 }}
                  className={`transition-all duration-500 ${index === activeIndex ? "block" : "hidden"}`}
                >
                  <p className="text-xl text-gray-300 italic mb-8">{testimonial.content}</p>
                  <div className="flex items-center justify-center">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white/20">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="ml-4 text-left">
                      <h4 className="text-lg font-bold text-white">{testimonial.name}</h4>
                      <p className="text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex justify-center mt-12 space-x-4">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors"
                aria-label="Depoimento anterior"
              >
                <ArrowLeft size={20} />
              </button>
              <div className="flex items-center space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === activeIndex ? "bg-white" : "bg-white/30 hover:bg-white/50"
                    }`}
                    aria-label={`Ir para depoimento ${index + 1}`}
                  ></button>
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors"
                aria-label="Próximo depoimento"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
