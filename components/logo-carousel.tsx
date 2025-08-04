"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export default function LogoCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    let scrollAmount = 0
    const speed = 0.5
    const gap = 60
    const logos = carousel.querySelectorAll(".logo-item")

    // Clone logos to create infinite scroll effect
    logos.forEach((logo) => {
      const clone = logo.cloneNode(true)
      carousel.appendChild(clone)
    })

    const scroll = () => {
      if (!carousel) return

      scrollAmount += speed
      carousel.style.transform = `translateX(-${scrollAmount}px)`

      // Reset position when first set of logos is scrolled past
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

    return () => cancelAnimationFrame(animation)
  }, [])

  return (
    <div className="overflow-hidden w-full">
      <div ref={carouselRef} className="flex items-center space-x-16 py-8" style={{ whiteSpace: "nowrap" }}>
        <div className="logo-item flex-shrink-0">
          <Image
            src="/logos/anthropic-logo.png"
            alt="Anthropic"
            width={200}
            height={60}
            className="h-12 w-auto object-contain brightness-0 invert"
          />
        </div>
        <div className="logo-item flex-shrink-0">
          <Image
            src="/logos/openai-logo.png"
            alt="OpenAI"
            width={200}
            height={60}
            className="h-12 w-auto object-contain brightness-0 invert"
          />
        </div>
        <div className="logo-item flex-shrink-0">
          <Image
            src="/logos/aws-logo.png"
            alt="AWS"
            width={200}
            height={60}
            className="h-12 w-auto object-contain brightness-0 invert"
          />
        </div>
        <div className="logo-item flex-shrink-0">
          <Image
            src="/logos/gemini-logo.png"
            alt="Gemini"
            width={200}
            height={60}
            className="h-12 w-auto object-contain brightness-0 invert"
          />
        </div>
        <div className="logo-item flex-shrink-0">
          <Image
            src="/logos/perplexity-logo.png"
            alt="Perplexity"
            width={200}
            height={60}
            className="h-12 w-auto object-contain brightness-0 invert"
          />
        </div>
        <div className="logo-item flex-shrink-0">
          <Image
            src="/logos/azure-logo.png"
            alt="Azure"
            width={200}
            height={60}
            className="h-12 w-auto object-contain brightness-0 invert"
          />
        </div>
      </div>
    </div>
  )
}
