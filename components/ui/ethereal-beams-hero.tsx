"use client"
import { useEffect, useRef } from "react"

interface BeamsProps {
  beamWidth?: number
  beamHeight?: number
  beamNumber?: number
  lightColor?: string
  speed?: number
  noiseIntensity?: number
  scale?: number
  rotation?: number
}

export function Beams({
  beamWidth = 2.5,
  beamHeight = 18,
  beamNumber = 15,
  lightColor = "#ffffff",
  speed = 2.5,
  noiseIntensity = 2,
  scale = 0.15,
  rotation = 43,
}: BeamsProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const beams: HTMLDivElement[] = []

    // Create beams
    for (let i = 0; i < beamNumber; i++) {
      const beam = document.createElement("div")
      beam.className = "absolute opacity-20"
      beam.style.width = `${beamWidth}px`
      beam.style.height = `${beamHeight}vh`
      beam.style.background = `linear-gradient(to bottom, transparent, ${lightColor}40, transparent)`
      beam.style.transform = `rotate(${rotation}deg) scale(${scale})`
      beam.style.left = `${(i / beamNumber) * 100}%`
      beam.style.top = "0"
      beam.style.transformOrigin = "center"

      // Add animation
      beam.style.animation = `beamMove ${speed + i * 0.2}s linear infinite`

      container.appendChild(beam)
      beams.push(beam)
    }

    // Add CSS animation keyframes
    const style = document.createElement("style")
    style.textContent = `
      @keyframes beamMove {
        0% {
          transform: translateY(-100vh) rotate(${rotation}deg) scale(${scale});
          opacity: 0;
        }
        10% {
          opacity: 0.2;
        }
        90% {
          opacity: 0.2;
        }
        100% {
          transform: translateY(100vh) rotate(${rotation}deg) scale(${scale});
          opacity: 0;
        }
      }
    `
    document.head.appendChild(style)

    // Cleanup
    return () => {
      beams.forEach((beam) => beam.remove())
      style.remove()
    }
  }, [beamWidth, beamHeight, beamNumber, lightColor, speed, noiseIntensity, scale, rotation])

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ filter: `blur(${noiseIntensity}px)` }}
    />
  )
}
