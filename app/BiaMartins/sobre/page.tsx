"use client"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Award, Heart, Users, Globe, Tv, Trophy, Sparkles } from "lucide-react"
import { Beams } from "@/components/ui/ethereal-beams-hero"
import LoadingScreen from "@/components/loading-screen"

export const metadata = {
  title: "Sobre",
  description: "Conheça mais sobre Bia Martins - Empreendedora Social e Forbes Under 30",
  icons: {
    icon: "/bia-martins-logo.png",
  },
}

export default function SobrePage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  const especialidades = [
    {
      icon: Heart,
      title: "Empreendedorismo Social",
      description: "Fundadora do Olhar de Bia, organização que impactou mais de 500 mil pessoas",
    },
    {
      icon: Award,
      title: "Liderança Jovem",
      description: "Reconhecida pela Forbes Under 30 e múltiplas premiações nacionais",
    },
    {
      icon: Users,
      title: "Educação Transformadora",
      description: "Missão de acabar com a miséria através da educação e desenvolvimento social",
    },
    {
      icon: Globe,
      title: "Impacto Global",
      description: "TEDx Speaker e embaixadora de organizações internacionais",
    },
  ]

  const conquistas = [
    {
      icon: Heart,
      numero: "500K+",
      label: "Pessoas Impactadas",
    },
    {
      icon: Award,
      numero: "Forbes",
      label: "Under 30",
    },
    {
      icon: Tv,
      numero: "TEDx",
      label: "Speaker",
    },
    {
      icon: Trophy,
      numero: "10+",
      label: "Prêmios Nacionais",
    },
  ]

  const certificacoes = [
    "Forbes Under 30",
    "TEDx Speaker",
    "Disney Institute - Excellence in Business and Leadership",
    "Link School of Business - Embaixadora",
    "Capitalismo Consciente Brasil - Embaixadora",
    "UNESCO - Click Esperança TV Globo",
    "Red Bull Basement - Campeã Nacional",
    "Tocha Olímpica - Condutora Oficial",
  ]

  return (
    <>
      <AnimatePresence mode="wait">{isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}</AnimatePresence>

      <AnimatePresence>
        {!isLoading && (
          <motion.div
            className="relative min-h-screen w-full overflow-hidden"
            style={{
              background: `linear-gradient(135deg, #92239b 0%, #7e1d85 50%, #92239b 100%)`,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Optimized Animated Particles */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full will-change-transform"
                style={{
                  width: Math.random() * 8 + 4,
                  height: Math.random() * 8 + 4,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  background: `rgba(255, 237, 13, ${Math.random() * 0.4 + 0.2})`,
                  filter: "blur(0.5px)",
                }}
                animate={{
                  x: [0, Math.random() * 60 - 30],
                  y: [0, Math.random() * 60 - 30],
                  opacity: [0.5, 0.1, 0.5],
                  scale: [1, Math.random() * 1.2 + 0.8, 1],
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              />
            ))}

            {/* Optimized Floating Geometric Shapes */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={`shape-${i}`}
                className="absolute will-change-transform"
                style={{
                  width: Math.random() * 10 + 6,
                  height: Math.random() * 10 + 6,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  background: `rgba(255, 237, 13, ${Math.random() * 0.2 + 0.1})`,
                  borderRadius: i % 2 === 0 ? "50%" : "0%",
                  transform: `rotate(${Math.random() * 360}deg)`,
                }}
                animate={{
                  x: [0, Math.random() * 50 - 25],
                  y: [0, Math.random() * 50 - 25],
                  rotate: [0, 360],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: Math.random() * 15 + 15,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              />
            ))}

            {/* Optimized Beams Background */}
            <div className="absolute inset-0 z-0">
              <Beams
                beamWidth={2}
                beamHeight={16}
                beamNumber={10}
                lightColor="#ffed0d"
                speed={1.8}
                noiseIntensity={1.2}
                scale={0.1}
                rotation={43}
              />
            </div>

            {/* Optimized Animated Lines */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={`line-${i}`}
                  className="absolute h-px will-change-transform"
                  style={{
                    width: "100%",
                    left: 0,
                    top: `${(i + 1) * 25}%`,
                    background: `linear-gradient(90deg, transparent 0%, #ffed0d ${50 + i * 10}%, transparent 100%)`,
                    opacity: 0.2,
                  }}
                  animate={{
                    translateX: ["-100%", "100%"],
                    opacity: [0.1, 0.3, 0.1],
                  }}
                  transition={{
                    duration: 12 + i * 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                    delay: i * 2,
                  }}
                />
              ))}
            </div>

            {/* Content */}
            <div className="relative z-10 min-h-screen">
              {/* Header with Back Button */}
              <div className="container mx-auto px-4 sm:px-6 pt-4 sm:pt-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Link
                    href="/BiaMartins"
                    className="inline-flex items-center text-white/70 hover:text-white transition-colors group text-sm sm:text-base"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                    Voltar
                  </Link>
                </motion.div>
              </div>

              {/* Hero Section - Mobile Optimized */}
              <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-12">
                <div className="max-w-6xl mx-auto">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-center">
                    {/* Text Content */}
                    <motion.div
                      className="order-2 lg:order-1"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    >
                      <motion.div
                        className="mb-3 sm:mb-4 inline-flex items-center rounded-full backdrop-blur-xl border px-3 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm"
                        style={{
                          backgroundColor: "rgba(146, 35, 155, 0.3)",
                          borderColor: "rgba(255, 237, 13, 0.5)",
                          color: "#ffffff",
                        }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Sparkles className="mr-2 h-3 w-3 sm:h-4 sm:w-4" style={{ color: "#ffed0d" }} />
                        {"Forbes Under 30 • Empreendedora Social"}
                      </motion.div>

                      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 sm:mb-4 lg:mb-6 leading-tight">
                        Sobre Mim
                      </h1>
                      <p className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed mb-4 sm:mb-6 lg:mb-8">
                        Sou uma empreendedora social apaixonada por transformar vidas através da educação. Aos 6 anos,
                        fundei o Olhar de Bia com a missão de acabar com a miséria através da Educação.
                      </p>
                      <p className="text-sm sm:text-base lg:text-lg text-white/80 leading-relaxed">
                        Hoje, nossa organização já impactou mais de 500 mil pessoas. Fui reconhecida pela Forbes Under
                        30, sou TEDx Speaker, condutora da Tocha Olímpica e embaixadora de diversas organizações que
                        acreditam no poder transformador da educação.
                      </p>
                    </motion.div>

                    {/* Profile Image - Mobile Optimized */}
                    <motion.div
                      className="order-1 lg:order-2 flex justify-center lg:justify-end"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                    >
                      <div className="relative">
                        <div
                          className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-2xl overflow-hidden border-4 backdrop-blur-xl"
                          style={{
                            borderColor: "#ffed0d",
                            backgroundColor: "rgba(146, 35, 155, 0.2)",
                          }}
                        >
                          <Image
                            src="/bia-martins-profile.jpg"
                            alt="Bia Martins"
                            fill
                            className="object-cover object-center"
                            priority
                          />
                        </div>
                        {/* Decorative elements - Responsive */}
                        <div
                          className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 lg:-bottom-6 lg:-right-6 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 xl:w-32 xl:h-32 border-4 rounded-2xl -z-10"
                          style={{ borderColor: "rgba(255, 237, 13, 0.4)" }}
                        ></div>
                        <div
                          className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 lg:-top-6 lg:-left-6 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 rounded-xl -z-10"
                          style={{ backgroundColor: "rgba(255, 237, 13, 0.1)" }}
                        ></div>

                        {/* Floating particles - Responsive */}
                        <motion.div
                          className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 lg:-top-4 lg:-right-4"
                          animate={{
                            y: [-8, 8, -8],
                            opacity: [0.5, 1, 0.5],
                          }}
                          transition={{
                            duration: 4,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                          }}
                        >
                          <Sparkles size={16} className="sm:w-5 sm:h-5 lg:w-6 lg:h-6" style={{ color: "#ffed0d" }} />
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Certificações Carousel - Mobile Optimized */}
              <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
                <div className="max-w-6xl mx-auto">
                  <motion.h2
                    className="text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-6 sm:mb-8"
                    style={{ color: "#ffed0d" }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    Reconhecimentos e Certificações
                  </motion.h2>

                  <motion.div
                    className="overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    <motion.div
                      className="flex space-x-4 sm:space-x-6 will-change-transform"
                      animate={{
                        x: [0, -100 * certificacoes.length],
                      }}
                      transition={{
                        duration: 40,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      }}
                    >
                      {[...certificacoes, ...certificacoes].map((cert, index) => (
                        <motion.div
                          key={index}
                          className="flex-shrink-0 px-4 py-2 sm:px-6 sm:py-3 rounded-full backdrop-blur-xl border text-xs sm:text-sm font-medium whitespace-nowrap"
                          style={{
                            backgroundColor: "rgba(255, 237, 13, 0.1)",
                            borderColor: "rgba(255, 237, 13, 0.3)",
                            color: "#ffed0d",
                          }}
                          whileHover={{ scale: 1.05 }}
                        >
                          {cert}
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>
                </div>
              </div>

              {/* Skills Section - Mobile Optimized */}
              <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
                <div className="max-w-6xl mx-auto">
                  <motion.h2
                    className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center mb-6 sm:mb-12 lg:mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                  >
                    Áreas de Atuação
                  </motion.h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    {especialidades.map((skill, index) => (
                      <motion.div
                        key={index}
                        className="group relative overflow-hidden rounded-xl sm:rounded-2xl backdrop-blur-xl border p-4 sm:p-6 text-center transition-all"
                        style={{
                          backgroundColor: "rgba(146, 35, 155, 0.3)",
                          borderColor: "rgba(255, 237, 13, 0.2)",
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                        whileHover={{
                          y: -3,
                          scale: 1.01,
                          borderColor: "rgba(255, 237, 13, 0.4)",
                          backgroundColor: "rgba(146, 35, 155, 0.4)",
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-300/5 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-800 ease-out" />

                        <div className="relative z-10">
                          <motion.div
                            className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 mx-auto mb-3 sm:mb-4 rounded-full backdrop-blur-xl border flex items-center justify-center"
                            style={{
                              backgroundColor: "rgba(255, 237, 13, 0.1)",
                              borderColor: "rgba(255, 237, 13, 0.3)",
                            }}
                            whileHover={{ rotate: 180 }}
                            transition={{ duration: 0.4 }}
                          >
                            <skill.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8" style={{ color: "#ffed0d" }} />
                          </motion.div>
                          <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-white mb-2 sm:mb-3">
                            {skill.title}
                          </h3>
                          <p className="text-white/80 text-xs sm:text-sm">{skill.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Achievements Section - Mobile Optimized */}
              <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
                <div className="max-w-6xl mx-auto">
                  <motion.h2
                    className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center mb-6 sm:mb-12 lg:mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.6 }}
                  >
                    Impacto e Conquistas
                  </motion.h2>

                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 xl:gap-8">
                    {conquistas.map((achievement, index) => (
                      <motion.div
                        key={index}
                        className="text-center group"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 1.8 + index * 0.1 }}
                        whileHover={{ scale: 1.03, y: -3 }}
                      >
                        <div
                          className="backdrop-blur-xl border rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 transition-all"
                          style={{
                            backgroundColor: "rgba(146, 35, 155, 0.3)",
                            borderColor: "rgba(255, 237, 13, 0.2)",
                          }}
                        >
                          <motion.div
                            className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 mx-auto mb-2 sm:mb-3 lg:mb-4 rounded-full backdrop-blur-xl border flex items-center justify-center"
                            style={{
                              backgroundColor: "rgba(255, 237, 13, 0.1)",
                              borderColor: "rgba(255, 237, 13, 0.3)",
                            }}
                            whileHover={{ rotate: 180 }}
                            transition={{ duration: 0.4 }}
                          >
                            <achievement.icon
                              className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6"
                              style={{ color: "#ffed0d" }}
                            />
                          </motion.div>
                          <div
                            className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-1 sm:mb-2"
                            style={{ color: "#ffed0d" }}
                          >
                            {achievement.numero}
                          </div>
                          <div className="text-white/80 text-xs sm:text-sm">{achievement.label}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA Section - Mobile Optimized */}
            </div>

            {/* Optimized Gradient Overlay */}
            <div
              className="absolute inset-0 z-0"
              style={{
                background: "radial-gradient(circle at center, transparent 0%, rgba(146, 35, 155, 0.2) 100%)",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
