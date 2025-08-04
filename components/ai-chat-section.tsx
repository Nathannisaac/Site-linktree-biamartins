"use client"
import { Button } from "@/components/ui/button"
import { Send, Bot, User } from "lucide-react"
import { useChat } from "ai/react"

export default function AIChatSection() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: "/api/chat",
  })

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid-pattern.png')] bg-repeat opacity-5"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-6 py-2 bg-white/5 rounded-full mb-6 border border-white/10">
              <p className="text-sm font-medium uppercase tracking-wider text-gray-300">Chat com IA</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              Converse com nossa <span className="text-white">IA Assistente</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Teste agora mesmo nossa inteligência artificial. Faça perguntas sobre nossos serviços, tire dúvidas ou
              solicite um orçamento personalizado.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Chat Interface */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden">
              <div className="bg-white/10 backdrop-blur-sm p-6 border-b border-white/10">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium text-lg">Assistente Next Level</h3>
                    <p className="text-gray-300 text-sm">Online agora</p>
                  </div>
                </div>
              </div>

              <div className="h-96 overflow-y-auto p-6 space-y-6">
                {messages.length === 0 && (
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Bot className="w-5 h-5 text-white" />
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 max-w-xs border border-white/10">
                      <p className="text-white text-sm">
                        Olá! 👋 Sou o assistente da Next Level. Como posso ajudá-lo hoje?
                      </p>
                    </div>
                  </div>
                )}

                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex items-start space-x-4 ${
                      message.role === "user" ? "flex-row-reverse space-x-reverse" : ""
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                        message.role === "user" ? "bg-white text-black" : "bg-white/20"
                      }`}
                    >
                      {message.role === "user" ? <User className="w-5 h-5" /> : <Bot className="w-5 h-5 text-white" />}
                    </div>
                    <div
                      className={`rounded-2xl p-4 max-w-xs ${
                        message.role === "user"
                          ? "bg-white text-black"
                          : "bg-white/10 backdrop-blur-sm text-white border border-white/10"
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{message.content}</p>
                    </div>
                  </div>
                ))}

                {isLoading && (
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Bot className="w-5 h-5 text-white" />
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 max-w-xs border border-white/10">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-white/60 rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-white/60 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <form onSubmit={handleSubmit} className="p-6 border-t border-white/10">
                <div className="flex space-x-3">
                  <input
                    value={input}
                    onChange={handleInputChange}
                    placeholder="Digite sua mensagem..."
                    className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/30 text-white placeholder-white/60"
                    disabled={isLoading}
                  />
                  <Button
                    type="submit"
                    disabled={isLoading || !input.trim()}
                    className="bg-white hover:bg-gray-200 text-black px-6 py-3 rounded-2xl transition-all duration-300"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </form>
            </div>

            {/* Features */}
            <div className="space-y-10">
              <div>
                <h3 className="text-3xl font-bold text-white mb-8">O que nossa IA pode fazer por você:</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-medium text-white text-lg mb-2">Responder dúvidas sobre serviços</h4>
                      <p className="text-gray-300 leading-relaxed">
                        Explicações detalhadas sobre desenvolvimento, IA e automação
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-medium text-white text-lg mb-2">Gerar orçamentos personalizados</h4>
                      <p className="text-gray-300 leading-relaxed">
                        Estimativas baseadas nas suas necessidades específicas
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-medium text-white text-lg mb-2">Agendar reuniões</h4>
                      <p className="text-gray-300 leading-relaxed">Conectar você diretamente com nossa equipe</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-medium text-white text-lg mb-2">Sugerir soluções</h4>
                      <p className="text-gray-300 leading-relaxed">Recomendações personalizadas para seu negócio</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h4 className="font-medium text-white mb-3 text-lg">💡 Dica</h4>
                <p className="text-gray-300 leading-relaxed">
                  Experimente perguntar: "Quanto custa desenvolver um app?" ou "Como a IA pode ajudar minha empresa?"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
