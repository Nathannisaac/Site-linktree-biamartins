"use client"

import { BarChart2, Smartphone, Zap, Brain, Globe, Layout, ShoppingCart, BarChart } from "lucide-react"
import { motion } from "framer-motion"

export default function ServicesListSection() {
  const services = [
    {
      icon: <BarChart2 className="h-5 w-5" />,
      title: "Desenvolvimento de Sistemas",
      description:
        "Desenvolvemos softwares personalizados para tornar sua operação mais eficiente, escalável e integrada.",
    },
    {
      icon: <Smartphone className="h-5 w-5" />,
      title: "Desenvolvimento de Aplicativos",
      description: "Seu app, do seu jeito. Desenvolvemos aplicativos personalizados, intuitivos e escaláveis.",
    },
    {
      icon: <Zap className="h-5 w-5" />,
      title: "Automações de Processos",
      description: "Menos tarefas manuais, mais resultado. Automatizamos seus processos para reduzir custos.",
    },
    {
      icon: <Brain className="h-5 w-5" />,
      title: "Integrações com Inteligência Artificial",
      description: "Conecte seu negócio à inteligência do futuro. Integramos IA aos seus sistemas.",
    },
    {
      icon: <Globe className="h-5 w-5" />,
      title: "Desenvolvimento de Sites",
      description: "Seu site, sua identidade. Criamos sites personalizados, rápidos e responsivos.",
    },
    {
      icon: <Layout className="h-5 w-5" />,
      title: "Desenvolvimento de Landing Pages",
      description: "Landing pages que convertem. Criamos páginas rápidas, estratégicas e otimizadas.",
    },
    {
      icon: <ShoppingCart className="h-5 w-5" />,
      title: "Desenvolvimento de E-commerces",
      description: "Seu e-commerce, do seu jeito. Criamos lojas virtuais personalizadas, seguras e escaláveis.",
    },
    {
      icon: <BarChart className="h-5 w-5" />,
      title: "Marketing Digital",
      description: "Estratégia certa, resultados reais. Atraímos, engajamos e transformamos visitantes em clientes.",
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

  return (
    <section
      id="nossos-servicos"
      className="py-32 bg-white relative overflow-hidden premium-section premium-white-section"
    >
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-3xl mx-auto mb-24"
        >
          <motion.div variants={itemVariants} className="premium-badge mb-6">
            <p className="text-sm font-medium uppercase tracking-wider text-gray-600">Nossos Serviços</p>
          </motion.div>

          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl premium-heading mb-8 text-black">
            Soluções Completas para seu Negócio
          </motion.h2>

          <motion.p variants={itemVariants} className="text-lg text-gray-600 premium-text max-w-2xl mx-auto">
            Oferecemos soluções tecnológicas completas para impulsionar seu negócio e mantê-lo à frente da concorrência.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="premium-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-white p-8 premium-card premium-subtle-hover"
            >
              <div className="w-14 h-14 bg-black rounded-xl premium-icon-container mb-8 group-hover:scale-110 transition-transform duration-500">
                <div className="text-white">{service.icon}</div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-black premium-heading">{service.title}</h3>
              <p className="text-gray-600 text-base premium-text">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
