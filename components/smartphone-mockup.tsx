"use client"

import { useEffect, useRef } from "react"
import { BotIcon as Robot, GitBranch, BarChart2 } from "lucide-react"

export default function SmartphoneMockup() {
  const phoneRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!phoneRef.current) return

      const { left, top, width, height } = phoneRef.current.getBoundingClientRect()
      const centerX = left + width / 2
      const centerY = top + height / 2

      const moveX = (e.clientX - centerX) / 25
      const moveY = (e.clientY - centerY) / 25

      phoneRef.current.style.transform = `perspective(1000px) rotateY(${moveX}deg) rotateX(${-moveY}deg)`
    }

    document.addEventListener("mousemove", handleMouseMove)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  // Current time for the phone display
  const currentTime = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: false })

  return (
    <div ref={phoneRef} className="relative w-[320px] h-[640px] mx-auto transition-transform duration-200">
      {/* Phone frame */}
      <div className="absolute inset-0 bg-black rounded-[40px] shadow-2xl overflow-hidden border-[8px] border-[#222] z-10">
        {/* Status bar */}
        <div className="relative h-full w-full bg-black overflow-hidden">
          <div className="flex justify-between items-center px-6 py-2 text-white text-sm">
            <div>{currentTime}</div>
            <div className="flex items-center space-x-1">
              <div className="w-4 h-4 relative">
                <div className="absolute bottom-0 left-0 w-1 h-1 bg-white rounded-sm"></div>
                <div className="absolute bottom-0 left-1.5 w-1 h-2 bg-white rounded-sm"></div>
                <div className="absolute bottom-0 left-3 w-1 h-3 bg-white rounded-sm"></div>
              </div>
              <div className="w-4 h-4 relative">
                <div className="absolute top-1 left-0 w-1 h-3 bg-white rounded-sm transform rotate-45"></div>
                <div className="absolute top-1 left-1 w-1 h-3 bg-white rounded-sm"></div>
                <div className="absolute top-1 left-2 w-1 h-3 bg-white rounded-sm transform -rotate-45"></div>
              </div>
              <div className="w-6 h-3 border border-white rounded-sm relative">
                <div className="absolute inset-0.5 bg-white"></div>
                <div className="absolute -right-1 top-0.5 bottom-0.5 w-0.5 bg-white rounded-sm"></div>
              </div>
            </div>
          </div>

          {/* App content */}
          <div className="px-6 pt-4 pb-6 h-full flex flex-col">
            <div className="text-white text-xl font-light mb-2">Explorar</div>

            {/* Next Level Logo */}
            <div className="flex items-center mb-4">
              <div className="bg-white text-black w-10 h-10 flex items-center justify-center rounded-lg font-bold text-xl">
                N
              </div>
              <div className="text-white text-2xl font-bold ml-2">ext Level»</div>
            </div>

            {/* Main Heading */}
            <h1 className="text-white text-4xl font-bold leading-tight mb-8">Transforme Seu Negócio com IA</h1>

            {/* Stats Cards */}
            <div className="space-y-4 flex-1">
              {/* Bot Performance Card */}
              <div className="bg-[#111] rounded-xl p-4 flex items-start">
                <div className="bg-[#222] p-2 rounded-lg mr-3">
                  <Robot className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-gray-400 text-sm">Desempenho do Bot</div>
                  <div className="flex items-end justify-between">
                    <div className="text-white text-3xl font-bold">4.530</div>
                    <div className="h-8 w-16 relative">
                      <svg viewBox="0 0 100 30" className="text-white h-full w-full">
                        <path
                          d="M0,30 L10,25 L20,28 L30,20 L40,22 L50,15 L60,18 L70,10 L80,12 L90,5 L100,0"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="animate-pulse"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="text-gray-500 text-sm">Sessões</div>
                </div>
              </div>

              {/* Tasks Automation Card */}
              <div className="bg-[#111] rounded-xl p-4 flex items-start">
                <div className="bg-[#222] p-2 rounded-lg mr-3">
                  <GitBranch className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-gray-400 text-sm">Automação de Tarefas</div>
                  <div className="flex items-end justify-between">
                    <div className="text-white text-3xl font-bold">1.280</div>
                    <div className="h-6 w-6 bg-[#222] rounded-md flex items-center justify-center">
                      <svg viewBox="0 0 24 24" width="16" height="16" className="text-white">
                        <polyline
                          points="20 6 9 17 4 12"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="text-gray-500 text-sm">Concluídas hoje</div>
                </div>
              </div>

              {/* Analytics Card */}
              <div className="bg-[#111] rounded-xl p-4 flex items-start">
                <div className="bg-[#222] p-2 rounded-lg mr-3">
                  <BarChart2 className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-gray-400 text-sm">Análises</div>
                  <div className="flex items-end justify-between">
                    <div className="text-white text-3xl font-bold">
                      98,7<span className="text-xl">%</span>
                    </div>
                    <div className="h-8 w-16 relative flex items-end space-x-1">
                      <div className="w-2 h-3 bg-white/30 rounded-sm"></div>
                      <div className="w-2 h-5 bg-white/50 rounded-sm"></div>
                      <div className="w-2 h-8 bg-white rounded-sm animate-pulse"></div>
                    </div>
                  </div>
                  <div className="text-gray-500 text-sm">Precisão</div>
                </div>
              </div>
            </div>

            {/* Home Indicator */}
            <div className="mt-auto pt-4 flex justify-center">
              <div className="w-32 h-1 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Phone details */}
      <div className="absolute top-[24px] left-1/2 transform -translate-x-1/2 w-[120px] h-[25px] bg-black rounded-b-xl z-20"></div>

      {/* Phone buttons */}
      <div className="absolute top-[120px] right-[-5px] w-[5px] h-[60px] bg-[#222] rounded-l-lg z-20"></div>
      <div className="absolute top-[200px] left-[-5px] w-[5px] h-[60px] bg-[#222] rounded-r-lg z-20"></div>
      <div className="absolute top-[280px] left-[-5px] w-[5px] h-[60px] bg-[#222] rounded-r-lg z-20"></div>

      {/* Reflections */}
      <div className="absolute top-0 left-0 right-0 h-[30%] bg-gradient-to-b from-white/5 to-transparent z-10 pointer-events-none"></div>

      {/* Glow effect */}
      <div className="absolute -inset-4 bg-white/5 rounded-full blur-xl z-0 animate-pulse"></div>

      {/* Premium effect: subtle shadow ring */}
      <div className="absolute -inset-1 border border-white/10 rounded-[45px] z-0 blur-sm"></div>
      <div className="absolute -inset-2 border border-white/5 rounded-[50px] z-0 blur-md"></div>
    </div>
  )
}
