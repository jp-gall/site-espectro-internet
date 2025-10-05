"use client"

import { Wifi, Zap, Shield, Users, Phone, Mail, MapPin, Clock, CheckCircle, Star, ArrowRight, Menu, X, Tv, ChevronDown, ChevronUp, Facebook, Instagram } from 'lucide-react'
import { useState } from 'react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleFaq = (index: number) => setOpenFaq(openFaq === index ? null : index)

  // Função para gerar link do WhatsApp com mensagem específica do plano
  const getWhatsAppLink = (planName: string, price: string) => {
    const message = `Olá! Tenho interesse no plano ${planName} por ${price}. Gostaria de mais informações.`
    return `https://wa.me/5542930352575?text=${encodeURIComponent(message)}`
  }

  const faqData = [
    {
      question: "Como proceder em casos de problema com a conexão?",
      answer: "Oferecemos Suporte Técnico Online gratuito, disponível 24 horas por dia, 7 dias por semana. Entre em contato pelo telefone (42) 9 9957-8888."
    },
    {
      question: "Quais as formas de pagamento de mensalidades?",
      answer: "Os pagamentos podem ser feitos através de boleto bancário e PIX na área do assinante."
    },
    {
      question: "O tempo pode prejudicar o sinal da internet via rádio, como em dias de chuva, por exemplo?",
      answer: "As tempestades geralmente provocam prejuízos, como quedas de árvores e interrupção de energia elétrica. Da mesma forma, o mau tempo também pode danificar equipamentos de transmissão do sinal de internet localizados em regiões vulneráveis às condições climáticas."
    },
    {
      question: "Minha internet vai ter velocidade reduzida quando atingir o limite do pacote/plano?",
      answer: "Não. Nossos serviços não funcionam como um pacote de dados. Oferecemos uma conexão estável e com uso ilimitado, onde a velocidade vai ser constante 24 horas por dia, 7 dias por semana e sem limite de download/upload."
    },
    {
      question: "O que posso fazer se minha internet não está funcionando?",
      answer: "Se ocorrer lentidão, ou alguma outra dificuldade relacionada à conexão, desligue o equipamento da energia elétrica por cerca de 2 minutos. Se o problema persistir, entre em contato com o suporte técnico. Estamos disponíveis com profissionais capacitados para auxiliá-lo. Mantenha suas faturas sempre em dia."
    },
    {
      question: "Existe fibra óptica em todas as ruas?",
      answer: "Não. Porém, nossa rede de fibra óptica está em plena expansão. Caso tenha interesse neste serviço, preencha o formulário de contato e aguarde o contato da nossa equipe comercial."
    },
    {
      question: "Não recebi a fatura desse mês, como faço para pagá-la?",
      answer: "A 2ª via da fatura está disponível na Central do Assinante. Você também pode pagar via PIX na Central do assinante, solicitar por WhatsApp, e-mail, redes sociais ou retirá-la na unidade da sua região. Não esqueça de manter seu cadastro sempre atualizado."
    }
  ]

  // Depoimentos de clientes
  const testimonials = [
    {
      name: "Maria Silva",
      rating: 5,
      comment: "Excelente internet! Velocidade constante e suporte técnico muito eficiente. Recomendo a todos!",
      date: "há 2 semanas"
    },
    {
      name: "João Santos",
      rating: 5,
      comment: "Melhor provedor de Guarapuava! Internet estável, preço justo e atendimento nota 10. Muito satisfeito!",
      date: "há 1 mês"
    },
    {
      name: "Ana Costa",
      rating: 5,
      comment: "Instalação rápida e profissional. Internet funciona perfeitamente, sem quedas. Equipe muito atenciosa!",
      date: "há 3 semanas"
    },
    {
      name: "Carlos Oliveira",
      rating: 5,
      comment: "Uso para trabalho home office e nunca tive problemas. Velocidade real conforme contratado. Parabéns!",
      date: "há 1 semana"
    },
    {
      name: "Fernanda Lima",
      rating: 5,
      comment: "Suporte 24h é diferencial! Sempre que preciso, sou atendida rapidamente. Internet de qualidade!",
      date: "há 2 meses"
    },
    {
      name: "Roberto Mendes",
      rating: 5,
      comment: "Migrei de outro provedor e a diferença é notável. Internet mais rápida e estável. Muito bom!",
      date: "há 1 mês"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
                <Wifi className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  ESPECTRO
                </h1>
                <p className="text-xs text-gray-600">Internet Fibra Óptica</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#inicio" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Início</a>
              <a href="#empresa" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Empresa</a>
              <a href="#planos" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Planos</a>
              <a href="#depoimentos" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Depoimentos</a>
              <a href="#cobertura" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Cobertura</a>
              <a href="#faq" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Dúvidas</a>
              <a href="#contato" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Contato</a>
            </nav>

            {/* CTA Button Desktop */}
            <div className="hidden md:flex">
              <a 
                href="https://177.84.72.18/central_assinante_web/login" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-medium"
              >
                Central do Assinante
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-4">
                <a href="#inicio" className="text-gray-700 hover:text-blue-600 transition-colors font-medium" onClick={toggleMenu}>Início</a>
                <a href="#empresa" className="text-gray-700 hover:text-blue-600 transition-colors font-medium" onClick={toggleMenu}>Empresa</a>
                <a href="#planos" className="text-gray-700 hover:text-blue-600 transition-colors font-medium" onClick={toggleMenu}>Planos</a>
                <a href="#depoimentos" className="text-gray-700 hover:text-blue-600 transition-colors font-medium" onClick={toggleMenu}>Depoimentos</a>
                <a href="#cobertura" className="text-gray-700 hover:text-blue-600 transition-colors font-medium" onClick={toggleMenu}>Cobertura</a>
                <a href="#faq" className="text-gray-700 hover:text-blue-600 transition-colors font-medium" onClick={toggleMenu}>Dúvidas</a>
                <a href="#contato" className="text-gray-700 hover:text-blue-600 transition-colors font-medium" onClick={toggleMenu}>Contato</a>
                <a 
                  href="https://177.84.72.18/central_assinante_web/login" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-medium w-full text-center"
                >
                  Central do Assinante
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="bg-gradient-to-br from-blue-50 to-cyan-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Internet
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"> Fibra Óptica</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Conecte-se ao futuro com a ESPECTRO. Internet banda larga de alta qualidade, 
                estável e com suporte técnico especializado para sua casa e empresa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#planos" className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-lg hover:shadow-xl transition-all duration-300 font-semibold text-lg flex items-center justify-center">
                  Ver Planos
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a href="https://wa.me/5542930352575?text=Olá! Gostaria de mais informações sobre os planos de internet." target="_blank" className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 font-semibold text-lg text-center">
                  WhatsApp
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-8 text-white">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <Zap className="w-12 h-12 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold">700MB</h3>
                    <p className="text-blue-100">Velocidade</p>
                  </div>
                  <div className="text-center">
                    <Shield className="w-12 h-12 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold">24/7</h3>
                    <p className="text-blue-100">Suporte</p>
                  </div>
                  <div className="text-center">
                    <Users className="w-12 h-12 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold">Guarapuava</h3>
                    <p className="text-blue-100">Região</p>
                  </div>
                  <div className="text-center">
                    <CheckCircle className="w-12 h-12 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold">Grátis</h3>
                    <p className="text-blue-100">Instalação</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="planos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossos Planos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Todos os planos possuem acesso ilimitado, valor fixo, roteador grátis e garantia de qualidade. 
              Instalação grátis (consulte condições).
            </p>
            
            {/* TV Box Highlight */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-2xl mb-12 max-w-md mx-auto">
              <Tv className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">TV BOX</h3>
              <p className="mb-2">+ de 110 canais</p>
              <p className="mb-2">Filmes, Séries, Infantil</p>
              <p className="text-2xl font-bold mb-4">+ R$ 29,90/mês</p>
              <a 
                href={getWhatsAppLink("TV BOX", "R$ 29,90/mês")}
                target="_blank"
                className="bg-white text-purple-600 px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
              >
                Contratar
              </a>
            </div>
          </div>

          {/* Fibra Premium Plans */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">FIBRA PREMIUM</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
                <div className="text-center">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">100 Mega</h4>
                  <div className="text-3xl font-bold text-blue-600 mb-4">
                    R$ 71,90
                    <span className="text-lg text-gray-600 font-normal">/mês</span>
                  </div>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-sm text-gray-700">Roteador grátis</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-sm text-gray-700">Instalação grátis*</span>
                    </div>
                  </div>
                  <a 
                    href={getWhatsAppLink("Fibra Premium 100 Mega", "R$ 71,90/mês")}
                    target="_blank"
                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold block text-center"
                  >
                    Contratar
                  </a>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
                <div className="text-center">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">300 Mega</h4>
                  <div className="text-3xl font-bold text-blue-600 mb-4">
                    R$ 89,90
                    <span className="text-lg text-gray-600 font-normal">/mês</span>
                  </div>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-sm text-gray-700">Roteador grátis</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-sm text-gray-700">Instalação grátis*</span>
                    </div>
                  </div>
                  <a 
                    href={getWhatsAppLink("Fibra Premium 300 Mega", "R$ 89,90/mês")}
                    target="_blank"
                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold block text-center"
                  >
                    Contratar
                  </a>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-xl border-2 border-blue-500 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Popular
                  </span>
                </div>
                <div className="text-center">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">500 Mega</h4>
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-4">
                    R$ 99,90
                    <span className="text-lg text-gray-600 font-normal">/mês</span>
                  </div>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-sm text-gray-700">Roteador grátis</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-sm text-gray-700">Instalação grátis*</span>
                    </div>
                  </div>
                  <a 
                    href={getWhatsAppLink("Fibra Premium 500 Mega", "R$ 99,90/mês")}
                    target="_blank"
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold block text-center"
                  >
                    Contratar
                  </a>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
                <div className="text-center">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">600 Mega PRO</h4>
                  <div className="text-3xl font-bold text-blue-600 mb-4">
                    R$ 119,90
                    <span className="text-lg text-gray-600 font-normal">/mês</span>
                  </div>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-sm text-gray-700">Roteador grátis</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-sm text-gray-700">Instalação grátis*</span>
                    </div>
                  </div>
                  <a 
                    href={getWhatsAppLink("Fibra Premium 600 Mega PRO", "R$ 119,90/mês")}
                    target="_blank"
                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold block text-center"
                  >
                    Contratar
                  </a>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
                <div className="text-center">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">700 Mega PRO</h4>
                  <div className="text-3xl font-bold text-blue-600 mb-4">
                    R$ 129,90
                    <span className="text-lg text-gray-600 font-normal">/mês</span>
                  </div>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-sm text-gray-700">Roteador grátis</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-sm text-gray-700">Instalação grátis*</span>
                    </div>
                  </div>
                  <a 
                    href={getWhatsAppLink("Fibra Premium 700 Mega PRO", "R$ 129,90/mês")}
                    target="_blank"
                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold block text-center"
                  >
                    Contratar
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Wi-Fi Premium Plans */}
          <div>
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">WI-FI PREMIUM</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
                <div className="text-center">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">10 Mega</h4>
                  <div className="text-3xl font-bold text-blue-600 mb-4">
                    R$ 49,90
                    <span className="text-lg text-gray-600 font-normal">/mês</span>
                  </div>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-sm text-gray-700">Roteador grátis</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-sm text-gray-700">Instalação grátis*</span>
                    </div>
                  </div>
                  <a 
                    href={getWhatsAppLink("Wi-Fi Premium 10 Mega", "R$ 49,90/mês")}
                    target="_blank"
                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold block text-center"
                  >
                    Contratar
                  </a>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
                <div className="text-center">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">20 Mega</h4>
                  <div className="text-3xl font-bold text-blue-600 mb-4">
                    R$ 62,90
                    <span className="text-lg text-gray-600 font-normal">/mês</span>
                  </div>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-sm text-gray-700">Roteador grátis</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-sm text-gray-700">Instalação grátis*</span>
                    </div>
                  </div>
                  <a 
                    href={getWhatsAppLink("Wi-Fi Premium 20 Mega", "R$ 62,90/mês")}
                    target="_blank"
                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold block text-center"
                  >
                    Contratar
                  </a>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
                <div className="text-center">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">30 Mega</h4>
                  <div className="text-3xl font-bold text-blue-600 mb-4">
                    R$ 65,90
                    <span className="text-lg text-gray-600 font-normal">/mês</span>
                  </div>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-sm text-gray-700">Roteador grátis</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-sm text-gray-700">Instalação grátis*</span>
                    </div>
                  </div>
                  <a 
                    href={getWhatsAppLink("Wi-Fi Premium 30 Mega", "R$ 65,90/mês")}
                    target="_blank"
                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold block text-center"
                  >
                    Contratar
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Installation Info */}
          <div className="mt-12 bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Instalação</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div>
                <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-2" />
                <p className="font-semibold">Grátis*</p>
              </div>
              <div>
                <Users className="w-12 h-12 text-blue-500 mx-auto mb-2" />
                <p className="font-semibold">Profissionais treinados</p>
              </div>
              <div>
                <Shield className="w-12 h-12 text-blue-500 mx-auto mb-2" />
                <p className="font-semibold">Materiais premium</p>
              </div>
              <div>
                <Zap className="w-12 h-12 text-blue-500 mx-auto mb-2" />
                <p className="font-semibold">Agilidade e qualidade</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-4">*Consulte condições</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="empresa" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Sobre a ESPECTRO
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quem Somos</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Desde o início estivemos em busca de melhorias tanto em tecnologia como em qualificação da nossa equipe. 
                Todas as decisões sempre foram tomadas com o objetivo de sermos reconhecidos regionalmente por oferecer 
                serviços de qualidade.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Atualmente nossa empresa se encontra em expansão, pois ampliamos nossa área de cobertura e agregamos 
                novos serviços, sempre preocupados com nosso foco principal que é a satisfação dos nossos clientes.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Tecnologia Avançada</h4>
                    <p className="text-gray-600">Fibra óptica de última geração para máxima velocidade e estabilidade.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Qualidade Garantida</h4>
                    <p className="text-gray-600">Compromisso com a excelência em todos os nossos serviços.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Foco no Cliente</h4>
                    <p className="text-gray-600">Satisfação do cliente como nossa prioridade número um.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mission, Vision, Values */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Missão</h3>
              <p className="text-gray-600 leading-relaxed">
                Prover aos clientes acesso à internet com qualidade. Estar em constante aprimoramento e comercializar 
                soluções tecnológicas. Contribuir para o sucesso de pessoas e empresas por meio do nosso trabalho e 
                a partir disso ser referência na área em que atuamos.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Visão</h3>
              <p className="text-gray-600 leading-relaxed">
                A partir do nosso serviço, buscamos destacar nossa marca no mercado e sermos considerados sinônimo 
                de qualidade pelos nossos clientes. Temos como filosofia principal o respeito e a transparência para 
                com as pessoas, fornecendo produtos e serviços de qualidade.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Valores</h3>
              <ul className="text-gray-600 space-y-2 text-left">
                <li>• Ética</li>
                <li>• Comprometimento e Credibilidade</li>
                <li>• Valorização Humana</li>
                <li>• Sustentabilidade</li>
                <li>• Qualidade e agilidade</li>
                <li>• Integridade com todos os públicos</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              O que nossos clientes dizem
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Depoimentos reais de clientes satisfeitos com nossos serviços de internet fibra óptica
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <div className="flex items-center">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                      <span className="text-sm text-gray-500 ml-2">{testimonial.date}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed italic">
                  "{testimonial.comment}"
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white p-8 rounded-2xl max-w-2xl mx-auto">
              <div className="flex items-center justify-center mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-8 h-8 text-yellow-300 fill-current" />
                  ))}
                </div>
                <span className="text-2xl font-bold ml-4">5.0</span>
              </div>
              <p className="text-xl font-semibold mb-2">Avaliação média dos nossos clientes</p>
              <p className="text-blue-100">Baseado em centenas de avaliações no Google</p>
              <a 
                href="https://wa.me/5542930352575?text=Olá! Vi os depoimentos dos clientes e gostaria de conhecer os planos de internet."
                target="_blank"
                className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold mt-6"
              >
                Seja nosso próximo cliente satisfeito!
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Section */}
      <section id="cobertura" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cobertura
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Uma cobertura cada vez maior e melhor para você. Estamos expandindo nossa cobertura cada vez mais, 
              para melhor atender nossos clientes.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Guarapuava - PR</h3>
            <p className="text-lg text-gray-600 mb-6">
              Atendemos toda a região de Guarapuava com internet de alta qualidade
            </p>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl max-w-md mx-auto">
              <h4 className="font-semibold text-gray-900 mb-2">Nossa Sede</h4>
              <p className="text-gray-600 text-sm">
                Rua Dezessete de Julho, 1482, Sala 1<br />
                Trianon, Guarapuava - PR<br />
                CEP: 85012-040
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Dúvidas Frequentes
            </h2>
            <p className="text-xl text-gray-600">
              Encontre respostas para as perguntas mais comuns dos nossos clientes
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl shadow-lg overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-white/50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-blue-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-blue-600" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Fale Conosco
            </h2>
            <p className="text-xl text-gray-600">
              Estamos prontos para atender você. Entre em contato conosco!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Telefones</h3>
                  <p className="text-gray-600 mb-1">WhatsApp: (42) 3035-2575</p>
                  <p className="text-gray-600 mb-1">Suporte: (42) 9 9957-8888</p>
                  <p className="text-sm text-blue-600 mt-2">Suporte Telefônico: 24 horas por dia, 7 dias por semana</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">E-mail</h3>
                  <p className="text-gray-600 mb-1">sac@espectro.com.br</p>
                  <p className="text-sm text-blue-600 mt-2">Resposta em até 24 horas</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Endereço</h3>
                  <p className="text-gray-600 mb-1">Rua Dezessete de Julho, 1482, Sala 1</p>
                  <p className="text-gray-600 mb-1">Trianon, Guarapuava - PR</p>
                  <p className="text-gray-600">CEP: 85012-040</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Horário de Atendimento Presencial</h3>
                  <p className="text-gray-600 mb-1">Segunda a Sexta: 13:30 às 18h</p>
                  <p className="text-gray-600 text-sm">Não atendemos presencialmente aos sábados, domingos e feriados</p>
                  <p className="text-sm text-blue-600 mt-2">Suporte telefônico disponível 24/7</p>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Redes Sociais</h3>
                  <div className="space-y-2">
                    <a href="https://www.facebook.com/EspectroNet" target="_blank" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                      <Facebook className="w-4 h-4 mr-2" />
                      Facebook: EspectroNet
                    </a>
                    <a href="https://www.instagram.com/espectronet" target="_blank" className="flex items-center text-pink-600 hover:text-pink-800 transition-colors">
                      <Instagram className="w-4 h-4 mr-2" />
                      Instagram: @espectronet
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Solicite um Orçamento</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Seu nome completo"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="(42) 99999-9999"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Plano de Interesse
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors">
                    <option>Selecione um plano</option>
                    <option>Fibra Premium - 100 Mega</option>
                    <option>Fibra Premium - 300 Mega</option>
                    <option>Fibra Premium - 500 Mega</option>
                    <option>Fibra Premium - 600 Mega PRO</option>
                    <option>Fibra Premium - 700 Mega PRO</option>
                    <option>Wi-Fi Premium - 10 Mega</option>
                    <option>Wi-Fi Premium - 20 Mega</option>
                    <option>Wi-Fi Premium - 30 Mega</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Conte-nos mais sobre suas necessidades..."
                  ></textarea>
                </div>
                
                <a
                  href="https://wa.me/5542930352575?text=Olá! Gostaria de solicitar um orçamento para internet."
                  target="_blank"
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg block text-center"
                >
                  Enviar via WhatsApp
                </a>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
                  <Wifi className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    ESPECTRO
                  </h1>
                  <p className="text-xs text-gray-400">Internet Fibra Óptica</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Conectando Guarapuava ao futuro com internet de alta velocidade, 
                estabilidade garantida e suporte técnico especializado.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/EspectroNet" target="_blank" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="https://www.instagram.com/espectronet" target="_blank" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-colors cursor-pointer">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="https://wa.me/5542930352575" target="_blank" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                <li><a href="#inicio" className="text-gray-400 hover:text-white transition-colors">Início</a></li>
                <li><a href="#empresa" className="text-gray-400 hover:text-white transition-colors">Empresa</a></li>
                <li><a href="#planos" className="text-gray-400 hover:text-white transition-colors">Planos</a></li>
                <li><a href="#depoimentos" className="text-gray-400 hover:text-white transition-colors">Depoimentos</a></li>
                <li><a href="#cobertura" className="text-gray-400 hover:text-white transition-colors">Cobertura</a></li>
                <li><a href="#faq" className="text-gray-400 hover:text-white transition-colors">Dúvidas</a></li>
                <li><a href="#contato" className="text-gray-400 hover:text-white transition-colors">Contato</a></li>
                <li>
                  <a 
                    href="https://177.84.72.18/central_assinante_web/login" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Central do Assinante
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contato</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  (42) 3035-2575
                </li>
                <li className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  (42) 9 9957-8888
                </li>
                <li className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  sac@espectro.com.br
                </li>
                <li className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  Guarapuava, PR
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 ESPECTRO - Internet Fibra Óptica. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}