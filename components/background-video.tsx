"use client"

import { useEffect, useRef } from "react"

export default function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Tenta iniciar o vídeo assim que o componente montar
    const video = videoRef.current
    if (video) {
      video.play().catch((error) => {
        console.error("Erro ao reproduzir vídeo:", error)
      })
    }
  }, [])

  return (
    <div className="fixed inset-0 z-0 bg-black">
      {/* Vídeo de fundo */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fundo%20site%20Next%20Level-a18lMR1ImHLearcensmslrvzpnpiFr.mp4" type="video/mp4" />
      </video>

      {/* Overlay para melhorar a legibilidade do texto */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
    </div>
  )
}
