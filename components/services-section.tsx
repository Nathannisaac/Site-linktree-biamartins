"use client"

import { Phone, BarChart3, PieChart } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function ServicesSection() {
  const services = [
    {
      icon: <Phone className="text-black h-6 w-6" />,
      title: "IA Vendedora por Telefone",
      description: "Automatize suas vendas com IA que realiza ligações e converte leads em clientes.",
    },
    {
      icon: <BarChart3 className="text-black h-6 w-6" />,
      title: "Análise de Conversas",
      description: "Insights detalhados sobre cada interação para otimizar suas taxas de conversão.",
    },
    {
      icon: <PieChart className="text-black h-6 w-6" />,
      title: "Performance em Tempo Real",
      description: "Acompanhe resultados e métricas de vendas em um dashboard intuitivo.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const phoneVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <section id="servicos" className="bg-white py-32 relative overflow-hidden premium-section premium-white-section">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            className="lg:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="premium-badge mb-6">
              <p className="text-sm font-medium uppercase tracking-wider text-gray-600">IA de Vendas</p>
            </motion.div>

            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl premium-heading mb-8 text-black">
              Cansado de Perder Vendas? <span className="text-black">Deixe a IA</span> Vender{" "}
              <span className="text-black">por Você!</span>
            </motion.h2>

            <motion.p variants={itemVariants} className="text-gray-600 text-lg mb-16 premium-text">
              Chega de desperdiçar leads e oportunidades. Nossa IA Vendedora faz ligações, conversa com seus clientes,
              identifica quem está pronto para comprar — e converte. Tudo isso automaticamente, enquanto sua equipe foca
              no que realmente importa.
            </motion.p>

            <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gray-100 rounded-xl p-6 premium-card premium-subtle-hover"
                >
                  <div className="bg-white w-12 h-12 rounded-lg premium-icon-container flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-black premium-heading">{service.title}</h3>
                  <p className="text-gray-600 text-base premium-text">{service.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="lg:w-1/2 flex justify-center items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={phoneVariants}
          >
            <div className="w-[350px] h-[600px] bg-[#111] rounded-3xl overflow-hidden shadow-2xl border border-white/10 premium-image">
              <div className="flex flex-col h-full">
                <div className="pt-12 pb-6 text-center">
                  <div className="w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden relative">
                    <Image
                      src="/professional-sales-agent.png"
                      alt="Agente de vendas"
                      width={96}
                      height={96}
                      className="object-cover w-full h-full rounded-full"
                    />
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-1">Agente de vendas</h2>
                  <p className="text-gray-400 text-sm mb-3">Next Level</p>
                  <div className="text-sm font-medium text-white">Em chamada: 02:34</div>
                </div>

                <div className="flex-1 px-6 py-4">
                  <div className="h-32 bg-[#1a1a1a] rounded-xl p-4 mb-6">
                    <div className="flex items-center justify-center h-full space-x-1">
                      {Array.from({ length: 30 }, (_, i) => (
                        <div
                          key={i}
                          className="w-1 bg-white/50 rounded-full"
                          style={{ height: `${Math.random() * 50 + 10}%` }}
                        ></div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-[#1a1a1a] rounded-xl p-6 mb-6">
                    <h3 className="text-white text-sm font-medium mb-2">Transcrição em tempo real:</h3>
                    <p className="text-gray-300 italic">"Nossa IA pode aumentar suas conversões em até 40%."</p>
                  </div>

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

                <div className="bg-[#1a1a1a] px-6 py-8 flex justify-around items-center">
                  <button className="w-16 h-16 rounded-full bg-[#333] flex items-center justify-center text-white">
                    <Phone size={24} />
                  </button>
                  <button className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-black">
                    <Phone size={28} />
                  </button>
                  <button className="w-16 h-16 rounded-full bg-[#333] flex items-center justify-center text-white">
                    <Phone size={24} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
