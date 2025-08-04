"use client"

import { useEffect, useRef, useState } from "react"
import { Mic, PhoneOff, Volume2 } from "lucide-react"
import Image from "next/image"

export default function PhoneCallMockup() {
  const phoneRef = useRef<HTMLDivElement>(null)
  const [callDuration, setCallDuration] = useState(0)
  const [currentPhrase, setCurrentPhrase] = useState("")
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [audioLevel, setAudioLevel] = useState<number[]>([])

  // Frases que a agente de vendas está falando
  const phrases = [
    "Olá, sou Mariana da Next Level. Como vai?",
    "Estou ligando para falar sobre nossa solução de IA para vendas.",
    "Nossa IA pode aumentar suas conversões em até 40%.",
    "Ela realiza centenas de ligações simultâneas e qualifica leads automaticamente.",
    "Quando seria um bom momento para uma demonstração?",
    "Ótimo! Vou agendar para quinta-feira às 14h.",
    "Enviarei um e-mail com a confirmação e o link da reunião.",
    "Obrigada pelo seu tempo. Tenha um ótimo dia!",
  ]

  useEffect(() => {
    // Efeito 3D ao mover o mouse
    const handleMouseMove = (e: MouseEvent) => {
      if (!phoneRef.current) return

      const { left, top, width, height } = phoneRef.current.getBoundingClientRect()
      const centerX = left + width / 2
      const centerY = top + height / 2

      const moveX = (e.clientX - centerX) / 30
      const moveY = (e.clientY - centerY) / 30

      phoneRef.current.style.transform = `perspective(1000px) rotateY(${moveX}deg) rotateX(${-moveY}deg)`
    }

    document.addEventListener("mousemove", handleMouseMove)

    // Iniciar o contador de duração da chamada
    const durationInterval = setInterval(() => {
      setCallDuration((prev) => prev + 1)
    }, 1000)

    // Simular ondas de áudio
    const audioInterval = setInterval(() => {
      const newLevels = Array.from({ length: 30 }, () => Math.random() * 50 + 10)
      setAudioLevel(newLevels)
    }, 150)

    // Alternar entre as frases
    const phraseInterval = setInterval(() => {
      setPhraseIndex((prev) => {
        if (prev >= phrases.length - 1) {
          return 0
        }
        return prev + 1
      })
    }, 5000)

    setCurrentPhrase(phrases[0])

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      clearInterval(durationInterval)
      clearInterval(audioInterval)
      clearInterval(phraseInterval)
    }
  }, [phrases])

  // Atualizar a frase atual quando o índice mudar
  useEffect(() => {
    setCurrentPhrase(phrases[phraseIndex])
  }, [phraseIndex, phrases])

  // Formatar duração da chamada
  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  return (
    <div ref={phoneRef} className="relative w-[350px] h-[600px] mx-auto transition-transform duration-200">
      {/* Simplified call interface without phone frame */}
      <div className="relative h-full w-full bg-[#111] rounded-3xl overflow-hidden shadow-2xl">
        {/* Call interface */}
        <div className="flex flex-col h-full">
          {/* Call info header */}
          <div className="pt-12 pb-6 text-center">
            <div className="w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden relative">
              <Image
                src="/professional-sales-agent.png"
                alt="Agente de vendas"
                width={96}
                height={96}
                className="object-cover w-full h-full"
              />
            </div>
            <h2 className="text-2xl font-bold text-white mb-1">Agente de vendas</h2>
            <p className="text-gray-400 text-sm mb-3">Next Level</p>
            <div className="text-sm font-medium text-white">Em chamada: {formatDuration(callDuration)}</div>
          </div>

          {/* Call visualization */}
          <div className="flex-1 px-6 py-4 flex flex-col justify-between">
            {/* Audio visualization */}
            <div className="h-32 bg-[#1a1a1a] rounded-xl p-4 mb-6">
              <div className="flex items-center justify-center h-full space-x-1">
                {audioLevel.map((level, index) => (
                  <div
                    key={index}
                    className="w-1 rounded-full"
                    style={{
                      height: `${level}%`,
                      opacity: 1,
                      transition: "height 0.1s ease-in-out",
                      background: `rgba(255, 255, 255, ${0.3 + level / 100})`,
                    }}
                  ></div>
                ))}
              </div>
            </div>

            {/* Current phrase */}
            <div className="bg-[#1a1a1a] rounded-xl p-6 mb-6">
              <h3 className="text-white text-sm font-medium mb-2">Transcrição em tempo real:</h3>
              <p className="text-gray-300 italic">"{currentPhrase}"</p>
            </div>

            {/* Call stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-[#1a1a1a] rounded-xl p-4 text-center">
                <p className="text-gray-400 text-xs mb-1">Taxa de conversão</p>
                <p className="text-white text-xl font-bold">42%</p>
              </div>
              <div className="bg-[#1a1a1a] rounded-xl p-4 text-center">
                <p className="text-gray-400 text-xs mb-1">Sentimento</p>
                <p className="text-white text-xl font-bold">Positivo</p>
              </div>
            </div>
          </div>

          {/* Call actions */}
          <div className="bg-[#1a1a1a] px-6 py-8 flex justify-around items-center">
            <button className="w-16 h-16 rounded-full bg-[#333] flex items-center justify-center text-white">
              <Mic size={24} />
            </button>
            <button className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-black">
              <PhoneOff size={28} />
            </button>
            <button className="w-16 h-16 rounded-full bg-[#333] flex items-center justify-center text-white">
              <Volume2 size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Glow effect */}
      <div className="absolute -inset-4 bg-white/5 rounded-full blur-xl z-0 animate-pulse"></div>
    </div>
  )
}
