"use client"
import { ExternalLink, User, Play, Award, Heart, Globe, Instagram, Mic } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import Image from "next/image"
import { Beams } from "@/components/ui/ethereal-beams-hero"
import LoadingScreen from "@/components/loading-screen"

export default function BiaClientPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [isContentLoaded, setIsContentLoaded] = useState(false)

  useEffect(() => {
    setIsContentLoaded(true)
  }, [])

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  const links = [
    {
      title: "Contrate minha palestra",
      description: "Palestras e eventos",
      url: "https://polopalestrantes.com.br/palestrantes/bia-martins",
      icon: Mic,
    },
    {
      title: "Sobre mim",
      description: "Conheça minha história",
      url: "/BiaMartins/sobre",
      icon: User,
    },
    {
      title: "Olhar de Bia",
      description: "Organização social",
      url: "https://olhardebia.org.br/",
      icon: Heart,
    },
    {
      title: "LinkedIn",
      description: "Rede profissional",
      url: "https://br.linkedin.com/in/biasmartins",
      icon: Globe,
    },
    {
      title: "Instagram",
      description: "@bia.marrtins",
      url: "https://www.instagram.com/bia.marrtins/",
      icon: Instagram,
    },
  ]

  const achievements = [
    "Forbes Under 30",
    "Condutora da Tocha Olímpica",
    "TEDx Speaker",
    "Campeã Red Bull Basement",
    "Embaixadora Link School",
    "Disney Institute Certified",
  ]

  return (
    <>
      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: 0% 50%;
            filter: drop-shadow(0 0 10px rgba(255, 237, 13, 0.5));
          }
          50% {
            background-position: 100% 50%;
            filter: drop-shadow(0 0 20px rgba(255, 237, 13, 0.8));
          }
          100% {
            background-position: 0% 50%;
            filter: drop-shadow(0 0 10px rgba(255, 237, 13, 0.5));
          }
        }
      `}</style>
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
            {/* Optimized Animated Particles - Reduced quantity */}
            {[...Array(15)].map((_, i) => (
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
                  x: [0, Math.random() * 100 - 50],
                  y: [0, Math.random() * 100 - 50],
                  opacity: [0.6, 0.2, 0.6],
                  scale: [1, Math.random() * 1.3 + 0.7, 1],
                }}
                transition={{
                  duration: Math.random() * 8 + 12,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              />
            ))}

            {/* Optimized Floating Geometric Shapes - Reduced quantity */}
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={`shape-${i}`}
                className="absolute will-change-transform"
                style={{
                  width: Math.random() * 12 + 6,
                  height: Math.random() * 12 + 6,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  background: `rgba(255, 237, 13, ${Math.random() * 0.2 + 0.1})`,
                  borderRadius: i % 2 === 0 ? "50%" : "0%",
                  transform: `rotate(${Math.random() * 360}deg)`,
                }}
                animate={{
                  x: [0, Math.random() * 60 - 30],
                  y: [0, Math.random() * 60 - 30],
                  rotate: [0, 360],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: Math.random() * 20 + 20,
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
                beamNumber={12}
                lightColor="#ffed0d"
                speed={2}
                noiseIntensity={1.5}
                scale={0.12}
                rotation={43}
              />
            </div>

            {/* Optimized Animated Accent Lines - Reduced quantity */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={`line-${i}`}
                  className="absolute h-px will-change-transform"
                  style={{
                    width: "100%",
                    left: 0,
                    top: `${(i + 1) * 20}%`,
                    background: `linear-gradient(90deg, transparent 0%, #ffed0d ${40 + i * 15}%, transparent 100%)`,
                    opacity: 0.3,
                  }}
                  animate={{
                    translateX: ["-100%", "100%"],
                    opacity: [0.1, 0.4, 0.1],
                  }}
                  transition={{
                    duration: 15 + i * 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                    delay: i * 2,
                  }}
                />
              ))}
            </div>

            {/* Optimized Pulsing Background Circles - Reduced quantity */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={`circle-${i}`}
                className="absolute rounded-full will-change-transform"
                style={{
                  width: Math.random() * 200 + 100,
                  height: Math.random() * 200 + 100,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  background: `radial-gradient(circle, rgba(255,237,13,0.08) 0%, transparent 70%)`,
                  transform: "translate(-50%, -50%)",
                }}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                  duration: Math.random() * 6 + 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: i * 3,
                }}
              />
            ))}

            {/* Hero Content */}
            <div className="relative z-10 flex min-h-screen items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 pb-8">
              <div className="w-full max-w-4xl mx-auto">
                <div className="text-center">
                  {/* Profile Image with Optimized Animations */}
                  <motion.div
                    className="mb-6 sm:mb-8 flex justify-center relative"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                  >
                    {/* Optimized Animated Rings - Reduced quantity */}
                    {[...Array(2)].map((_, i) => (
                      <div key={`ring-${i}`} className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          className="rounded-full will-change-transform"
                          style={{
                            width: 180 + i * 40,
                            height: 180 + i * 40,
                            background: `radial-gradient(circle, rgba(255,237,13,${0.3 - i * 0.1}) 0%, rgba(255,237,13,${0.05 - i * 0.02}) 70%)`,
                          }}
                          animate={{
                            scale: [1, 1.1 + i * 0.05, 1],
                            rotate: [0, 360 * (i % 2 === 0 ? 1 : -1)],
                            opacity: [0.2 + i * 0.1, 0.4 + i * 0.1, 0.2 + i * 0.1],
                          }}
                          transition={{
                            duration: 6 + i * 2,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                            delay: i * 0.5,
                          }}
                        />
                      </div>
                    ))}

                    {/* Profile Image Container */}
                    <motion.div
                      className="relative w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 backdrop-blur-xl z-10"
                      style={{ borderColor: "#ffed0d" }}
                      whileHover={{
                        scale: 1.05,
                        borderColor: "rgba(255, 237, 13, 0.8)",
                      }}
                      animate={{
                        boxShadow: [
                          "0 0 30px rgba(255, 237, 13, 0.4), 0 0 60px rgba(255, 237, 13, 0.2)",
                          "0 0 50px rgba(255, 237, 13, 0.7), 0 0 100px rgba(255, 237, 13, 0.3)",
                          "0 0 30px rgba(255, 237, 13, 0.4), 0 0 60px rgba(255, 237, 13, 0.2)",
                        ],
                      }}
                      transition={{
                        boxShadow: {
                          duration: 4,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                        },
                        scale: {
                          duration: 0.3,
                          ease: "easeOut",
                        },
                      }}
                    >
                      <Image
                        src="/bia-martins-profile.jpg"
                        alt="Bia Martins"
                        fill
                        className="object-cover object-center"
                        priority
                      />

                      {/* Single Animated Border Ring */}
                      <motion.div
                        className="absolute rounded-full border-2 will-change-transform"
                        style={{
                          inset: -12,
                          borderColor: "rgba(255, 237, 13, 0.5)",
                          filter: "drop-shadow(0 0 10px rgba(255, 237, 13, 0.3))",
                        }}
                        animate={{
                          rotate: [0, 360],
                          scale: [1, 1.02, 1],
                        }}
                        transition={{
                          rotate: {
                            duration: 10,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                          },
                          scale: {
                            duration: 3,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                          },
                        }}
                      />
                    </motion.div>
                  </motion.div>

                  {/* Badge */}
                  <motion.div
                    className="mb-4 sm:mb-6 inline-flex items-center rounded-full backdrop-blur-xl border px-3 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm"
                    style={{
                      backgroundColor: "rgba(146, 35, 155, 0.3)",
                      borderColor: "rgba(255, 237, 13, 0.5)",
                      color: "#ffffff",
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Award className="mr-2 h-3 w-3 sm:h-4 sm:w-4" style={{ color: "#ffed0d" }} />
                    {"Forbes Under 30 • Empreendedora Social"}
                  </motion.div>

                  {/* Main Heading */}
                  <motion.h1
                    className="mb-3 sm:mb-4 text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    Olá, eu sou{" "}
                    <span
                      className="animate-pulse"
                      style={{
                        background: "linear-gradient(45deg, #ffffff, #ffed0d, #ffffff, #ffed0d)",
                        backgroundSize: "400% 400%",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        animation: "shimmer 3s ease-in-out infinite",
                      }}
                    >
                      Bia
                    </span>
                    <br />
                    Martins
                  </motion.h1>

                  {/* Subtitle */}
                  <motion.p
                    className="mb-6 sm:mb-8 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-white/90 max-w-3xl mx-auto px-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    Empreendedora social, fundadora do Olhar de Bia - organização que criei aos 6 anos e já impactou
                    mais de 500 mil pessoas com a missão de acabar com a miséria através da Educação.
                  </motion.p>

                  {/* Optimized Achievements Carousel */}
                  <motion.div
                    className="mb-6 sm:mb-8 overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                  >
                    <motion.div
                      className="flex space-x-4 sm:space-x-6 will-change-transform"
                      animate={{
                        x: [0, -100 * achievements.length],
                      }}
                      transition={{
                        duration: 30,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      }}
                    >
                      {[...achievements, ...achievements].map((achievement, index) => (
                        <motion.div
                          key={index}
                          className="flex-shrink-0 px-3 py-2 sm:px-4 sm:py-2 rounded-full backdrop-blur-xl border text-xs sm:text-sm font-medium whitespace-nowrap"
                          style={{
                            backgroundColor: "rgba(255, 237, 13, 0.1)",
                            borderColor: "rgba(255, 237, 13, 0.3)",
                            color: "#ffed0d",
                          }}
                          whileHover={{ scale: 1.05 }}
                        >
                          {achievement}
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>

                  {/* Links Grid - Mobile Optimized */}
                  <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-2xl mx-auto mb-6 sm:mb-8"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                  >
                    {links.map((link, index) => (
                      <motion.a
                        key={index}
                        href={link.url}
                        target={link.url.startsWith("http") ? "_blank" : "_self"}
                        rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="group relative overflow-hidden rounded-xl sm:rounded-2xl backdrop-blur-xl p-4 sm:p-6 text-white transition-all"
                        style={{
                          backgroundColor: "rgba(146, 35, 155, 0.4)",
                          border: "1px solid rgba(255, 237, 13, 0.3)",
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.3 + index * 0.1 }}
                        whileHover={{
                          y: -3,
                          scale: 1.01,
                          boxShadow: "0 8px 20px rgba(255, 237, 13, 0.15)",
                          border: "1px solid rgba(255, 237, 13, 0.5)",
                        }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {/* Optimized Shimmer Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-300/10 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />

                        <div className="relative z-10 flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <motion.div
                              className="p-2 rounded-full"
                              style={{ backgroundColor: "rgba(255, 237, 13, 0.2)" }}
                              whileHover={{ rotate: 180, scale: 1.1 }}
                              transition={{ duration: 0.4 }}
                            >
                              <link.icon size={14} className="sm:w-4 sm:h-4" style={{ color: "#ffed0d" }} />
                            </motion.div>
                            <div className="text-left">
                              <div className="font-semibold text-sm sm:text-base" style={{ color: "#ffed0d" }}>
                                {link.title}
                              </div>
                              <div className="text-xs sm:text-sm text-white/80">{link.description}</div>
                            </div>
                          </div>
                          <ExternalLink
                            className="w-3 h-3 sm:w-4 sm:h-4 opacity-50 group-hover:opacity-100 transition-opacity"
                            style={{ color: "#ffed0d" }}
                          />
                        </div>
                      </motion.a>
                    ))}
                  </motion.div>

                  {/* YouTube Video Section - Mobile Optimized */}
                  <motion.div
                    className="max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.7 }}
                  >
                    <motion.h2
                      className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4"
                      style={{ color: "#ffed0d" }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.8 }}
                    >
                      Conheça o Olhar de Bia
                    </motion.h2>

                    <motion.a
                      href="https://www.youtube.com/watch?v=XohTvJ0jvjc"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative block overflow-hidden rounded-xl sm:rounded-2xl backdrop-blur-xl transition-all"
                      style={{
                        backgroundColor: "rgba(146, 35, 155, 0.4)",
                        border: "1px solid rgba(255, 237, 13, 0.3)",
                      }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.9 }}
                      whileHover={{
                        y: -3,
                        scale: 1.01,
                        boxShadow: "0 8px 20px rgba(255, 237, 13, 0.15)",
                        border: "1px solid rgba(255, 237, 13, 0.5)",
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Optimized Shimmer Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-300/10 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />

                      {/* Video Thumbnail */}
                      <div className="relative aspect-video overflow-hidden rounded-t-xl sm:rounded-t-2xl">
                        <Image
                          src="https://img.youtube.com/vi/XohTvJ0jvjc/maxresdefault.jpg"
                          alt="Vídeo do Olhar de Bia"
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />

                        {/* Optimized Play Button Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                          <motion.div
                            className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full shadow-lg"
                            style={{ backgroundColor: "#ffed0d" }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            animate={{
                              boxShadow: ["0 0 0 0 rgba(255, 237, 13, 0.3)", "0 0 0 15px rgba(255, 237, 13, 0)"],
                            }}
                            transition={{
                              boxShadow: {
                                duration: 2.5,
                                repeat: Number.POSITIVE_INFINITY,
                              },
                            }}
                          >
                            <Play
                              className="w-4 h-4 sm:w-6 sm:h-6 ml-1"
                              style={{ color: "#92239b" }}
                              fill="currentColor"
                            />
                          </motion.div>
                        </div>
                      </div>

                      {/* Video Info */}
                      <div className="relative z-10 p-3 sm:p-4">
                        <div className="flex items-center justify-between">
                          <div className="text-left">
                            <div className="font-semibold text-sm sm:text-base mb-1" style={{ color: "#ffed0d" }}>
                              Assista nosso vídeo
                            </div>
                            <div className="text-xs sm:text-sm text-white/80">
                              Transformando vidas através da educação
                            </div>
                          </div>
                          <ExternalLink
                            className="w-3 h-3 sm:w-4 sm:h-4 opacity-50 group-hover:opacity-100 transition-opacity"
                            style={{ color: "#ffed0d" }}
                          />
                        </div>
                      </div>
                    </motion.a>
                  </motion.div>
                </div>
              </div>
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
