"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export default function TechCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null)
  const logoRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    let scrollAmount = 0
    const speed = 0.3
    const gap = 60
    const logos = carousel.querySelectorAll(".logo-item")

    logos.forEach((logo) => {
      const clone = logo.cloneNode(true)
      carousel.appendChild(clone)
    })

    const scroll = () => {
      if (!carousel) return

      scrollAmount += speed
      carousel.style.transform = `translateX(-${scrollAmount}px)`

      const firstSetWidth = Array.from(logos).reduce(
        (width, logo) => width + (logo as HTMLElement).offsetWidth + gap,
        0,
      )

      if (scrollAmount >= firstSetWidth) {
        scrollAmount = 0
        carousel.style.transform = `translateX(0)`
      }

      requestAnimationFrame(scroll)
    }

    const animation = requestAnimationFrame(scroll)

    const handleMouseEnter = () => {
      carousel.style.animationPlayState = "paused"
    }

    const handleMouseLeave = () => {
      carousel.style.animationPlayState = "running"
    }

    logoRefs.current.forEach((logo) => {
      if (logo) {
        logo.addEventListener("mouseenter", handleMouseEnter)
        logo.addEventListener("mouseleave", handleMouseLeave)
      }
    })

    return () => {
      cancelAnimationFrame(animation)
      logoRefs.current.forEach((logo) => {
        if (logo) {
          logo.removeEventListener("mouseenter", handleMouseEnter)
          logo.removeEventListener("mouseleave", handleMouseLeave)
        }
      })
    }
  }, [])

  return (
    <section className="relative bg-black py-20 border-t border-gray-800" id="tecnologias">
      <div className="container mx-auto px-4 mb-12 relative z-10">
        <div className="text-center">
          <div className="inline-block px-6 py-2 bg-white/5 rounded-full mb-6 border border-white/10">
            <p className="text-sm font-medium uppercase tracking-wider text-gray-300">Tecnologias</p>
          </div>
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
            Trabalhamos com as <span className="text-white">melhores tecnologias</span>
          </h2>
          <p className="text-gray-300 text-lg">Utilizamos as ferramentas mais avançadas do mercado</p>
        </div>
      </div>

      <div className="overflow-hidden w-full relative z-10">
        <div ref={carouselRef} className="flex items-center space-x-20 py-12" style={{ whiteSpace: "nowrap" }}>
          <div
            ref={(el) => (logoRefs.current[0] = el)}
            className="logo-item flex-shrink-0 transition-all duration-500 hover:scale-110"
          >
            <Image
              src="/logos/anthropic-logo.png"
              alt="Anthropic"
              width={200}
              height={60}
              className="h-10 w-auto object-contain brightness-0 invert opacity-40 hover:opacity-100 transition-opacity duration-500"
            />
          </div>
          <div
            ref={(el) => (logoRefs.current[1] = el)}
            className="logo-item flex-shrink-0 transition-all duration-500 hover:scale-110"
          >
            <Image
              src="/logos/openai-logo.png"
              alt="OpenAI"
              width={200}
              height={60}
              className="h-10 w-auto object-contain brightness-0 invert opacity-40 hover:opacity-100 transition-opacity duration-500"
            />
          </div>
          <div
            ref={(el) => (logoRefs.current[2] = el)}
            className="logo-item flex-shrink-0 transition-all duration-500 hover:scale-110"
          >
            <Image
              src="/logos/aws-logo.png"
              alt="AWS"
              width={200}
              height={60}
              className="h-10 w-auto object-contain brightness-0 invert opacity-40 hover:opacity-100 transition-opacity duration-500"
            />
          </div>
          <div
            ref={(el) => (logoRefs.current[3] = el)}
            className="logo-item flex-shrink-0 transition-all duration-500 hover:scale-110"
          >
            <Image
              src="/logos/gemini-logo.png"
              alt="Gemini"
              width={200}
              height={60}
              className="h-10 w-auto object-contain brightness-0 invert opacity-40 hover:opacity-100 transition-opacity duration-500"
            />
          </div>
          <div
            ref={(el) => (logoRefs.current[4] = el)}
            className="logo-item flex-shrink-0 transition-all duration-500 hover:scale-110"
          >
            <Image
              src="/logos/perplexity-logo.png"
              alt="Perplexity"
              width={200}
              height={60}
              className="h-10 w-auto object-contain brightness-0 invert opacity-40 hover:opacity-100 transition-opacity duration-500"
            />
          </div>
          <div
            ref={(el) => (logoRefs.current[5] = el)}
            className="logo-item flex-shrink-0 transition-all duration-500 hover:scale-110"
          >
            <Image
              src="/logos/azure-logo.png"
              alt="Azure"
              width={200}
              height={60}
              className="h-10 w-auto object-contain brightness-0 invert opacity-40 hover:opacity-100 transition-opacity duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
