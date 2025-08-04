"use client"

import { useState, useEffect } from "react"
import { Phone } from "lucide-react"

export default function PhoneCallButton() {
  const [isVisible, setIsVisible] = useState(false)
  const phoneNumber = "+13415879611"

  useEffect(() => {
    // Mostrar o botão após 4 segundos
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 4000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  const handlePhoneClick = () => {
    window.location.href = `tel:${phoneNumber}`
  }

  return (
    <div
      className={`fixed bottom-6 left-6 z-50 transition-all duration-1000 ease-out ${
        isVisible
          ? "translate-x-0 translate-y-0 opacity-100 scale-100"
          : "-translate-x-20 translate-y-10 opacity-0 scale-75"
      }`}
    >
      <div className="relative">
        {/* Tooltip - apenas em desktop */}
        <div className="hidden md:block absolute left-full ml-3 bottom-3 bg-white text-gray-800 px-4 py-3 rounded-lg shadow-lg whitespace-nowrap transform transition-all duration-300 hover:scale-105">
          <div className="font-bold text-sm">Fale com nosso Agente IA</div>
          <div className="text-xs text-gray-600 mt-1">Atendimento inteligente 24/7</div>
          <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45 w-2 h-2 bg-white"></div>
        </div>

        {/* Tooltip mobile - posicionado acima */}
        <div className="md:hidden absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-white text-gray-800 px-3 py-2 rounded-lg shadow-lg whitespace-nowrap text-xs">
          <div className="font-bold">Agente IA</div>
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45 w-2 h-2 bg-white"></div>
        </div>

        {/* Pulse rings */}
        <div className="absolute -inset-4 rounded-full border-2 border-blue-600 opacity-20 animate-ping"></div>
        <div
          className="absolute -inset-2 rounded-full border border-blue-600 opacity-30 animate-ping"
          style={{ animationDelay: "0.3s" }}
        ></div>

        {/* Phone Button */}
        <button
          onClick={handlePhoneClick}
          className="bg-blue-600 hover:bg-blue-700 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden transform hover:scale-110"
          aria-label="Ligar para nosso agente IA"
        >
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full bg-blue-400 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>

          <Phone className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300 relative z-10" />

          {/* Additional pulse effect */}
          <span className="absolute -inset-1 rounded-full border-4 border-blue-600 animate-ping opacity-75"></span>

          {/* Floating animation */}
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 opacity-20 animate-pulse"></div>
        </button>
      </div>
    </div>
  )
}
