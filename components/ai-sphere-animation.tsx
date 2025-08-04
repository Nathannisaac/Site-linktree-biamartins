"use client"

import { SplineScene } from "@/components/ui/spline"
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"

export function AISphereAnimation() {
  return (
    <div className="w-full max-w-md mx-auto relative">
      <Card className="w-full aspect-square bg-transparent border-0 relative overflow-hidden">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="purple" />

        <div className="h-full">
          <div className="relative h-full">
            {/* Fallback glow effect similar to the original image */}
            <div className="absolute -inset-4 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse"></div>

            {/* Spline 3D scene */}
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
      </Card>
    </div>
  )
}
