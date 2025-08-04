"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useEffect } from "react"

interface LoadingScreenProps {
  onComplete: () => void
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  useEffect(() => {
    // Garantir que a tela de carregamento saia após 2 segundos
    const timer = setTimeout(() => {
      onComplete()
    }, 2000)

    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#92239b]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {/* Animated Background Gradient */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "linear-gradient(45deg, #92239b, #a855f7, #92239b)",
            "linear-gradient(45deg, #a855f7, #92239b, #a855f7)",
            "linear-gradient(45deg, #92239b, #a855f7, #92239b)",
          ],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Animated Particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/10 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0, 0.5, 0],
            scale: [0, 1, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Floating Flaticon */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-8 h-8 opacity-20"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, -10, 0],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 0.5,
        }}
      >
        <Image
          src="/flaticon-group-1.png"
          alt="Decorative Icon"
          width={32}
          height={32}
          className="w-full h-full object-contain filter brightness-0 invert"
        />
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 left-1/5 w-6 h-6 opacity-15"
        animate={{
          y: [0, 15, 0],
          rotate: [0, -15, 15, 0],
          opacity: [0.05, 0.25, 0.05],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1.2,
        }}
      >
        <Image
          src="/flaticon-group-1.png"
          alt="Decorative Icon"
          width={24}
          height={24}
          className="w-full h-full object-contain filter brightness-0 invert"
        />
      </motion.div>

      {/* Logo Container */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Animated Rings Around Logo */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="w-32 h-32 rounded-full border border-white/10"
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, 360],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="w-48 h-48 rounded-full border border-white/5"
            animate={{
              scale: [1.3, 1, 1.3],
              rotate: [360, 0],
              opacity: [0.05, 0.2, 0.05],
            }}
            transition={{
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </div>

        {/* Main Logo */}
        <motion.div
          className="relative w-20 h-20 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.3, rotate: -180 }}
          animate={{
            opacity: 1,
            scale: 1,
            rotate: 0,
          }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.3,
          }}
        >
          {/* Subtle Glow Effect */}
          <motion.div
            className="absolute inset-0 bg-white/15 rounded-full blur-xl"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: 2.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />

          {/* Logo Image */}
          <motion.div
            className="relative z-10 w-full h-full flex items-center justify-center"
            animate={{
              y: [0, -3, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <Image
              src="/bia-martins-logo.png"
              alt="Bia Martins"
              width={80}
              height={80}
              className="w-full h-full object-contain"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}
