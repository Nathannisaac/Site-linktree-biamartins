import Link from "next/link"
import Image from "next/image"
import { Instagram, Mail, Phone, Smartphone } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const whatsappLink =
    "https://api.whatsapp.com/send/?phone=5511997854602&text=Ol%C3%A1%21+Gostaria+de+saber+mais+sobre+os+servi%C3%A7os+da+Next+Level.&type=phone_number&app_absent=0"

  const socialLinks = [
    { icon: <Mail size={18} />, label: "Email", href: "mailto:contato@nextlevel.com.br" },
    { icon: <Instagram size={18} />, label: "Instagram", href: "https://www.instagram.com/digitalnextlvl/" },
    { icon: <Smartphone size={18} />, label: "TikTok", href: "https://tiktok.com/@nextlevel" },
  ]

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Serviços", href: "#servicos" },
    { label: "Nossos Serviços", href: "#nossos-servicos" },
    { label: "Contato", href: "#contato" },
  ]

  const serviceLinks = [
    { label: "Desenvolvimento de Sistemas", href: "#nossos-servicos" },
    { label: "Desenvolvimento de Aplicativos", href: "#nossos-servicos" },
    { label: "Automações de Processos", href: "#nossos-servicos" },
    { label: "Integrações com IA", href: "#nossos-servicos" },
    { label: "Desenvolvimento de Sites", href: "#nossos-servicos" },
  ]

  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/logo-next-level-minimal.png"
                alt="Next Level"
                width={60}
                height={60}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-gray-400 mb-6">
              Transformando negócios através da inovação digital e soluções de inteligência artificial personalizadas.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors p-2 bg-white/5 rounded-full hover:bg-white/10"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Navegação</h3>
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Serviços</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                <span className="block">R. Abata, 13 - Jardim Flor da Montanha</span>
                <span className="block">Guarulhos, SP</span>
              </li>
              <li className="text-gray-400">
                <span className="block">CNPJ: 57.923.761/0001-32</span>
              </li>
              <li className="text-gray-400">
                <a
                  href="mailto:contato@nextlevel.com.br"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <Mail size={14} /> contato@nextlevel.com.br
                </a>
              </li>
              <li className="text-gray-400">
                <a href={whatsappLink} className="hover:text-white transition-colors flex items-center gap-2">
                  <Phone size={14} /> +55 (11) 99785-4602
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© {currentYear} Next Level. Todos os direitos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/politica-privacidade" className="text-gray-400 hover:text-white transition-colors text-sm">
              Política de Privacidade
            </Link>
            <Link href="/termos-de-uso" className="text-gray-400 hover:text-white transition-colors text-sm">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
