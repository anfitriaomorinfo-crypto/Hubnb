"use client";

import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  MessageSquare, 
  TrendingUp, 
  Zap, 
  Globe, 
  Users,
  Check,
  ArrowRight,
  BarChart3,
  Clock,
  Shield
} from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  const features = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Integração Automática",
      description: "Conecte-se com Airbnb, Booking.com, VRBO, KAYAK e Decolar em poucos cliques."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Cópia Inteligente de Anúncios",
      description: "Migração automática entre plataformas com IA adaptando títulos e descrições."
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Gestão Unificada de Calendários",
      description: "Sincronização em tempo real evitando overbookings e conflitos de reservas."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Precificação Dinâmica",
      description: "Atualização contínua de preços com IA analisando mercado e concorrência."
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Central de Mensagens",
      description: "Todas as conversas de todas as plataformas em um único lugar."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Gestão de Equipe",
      description: "Adicione funcionários com permissões específicas para cada propriedade."
    }
  ];

  const plans = [
    {
      name: "Beginner",
      price: "80",
      description: "Perfeito para começar",
      features: [
        "Até 2 propriedades",
        "Integrações principais",
        "Calendário unificado",
        "Central de mensagens",
        "Suporte por e-mail"
      ],
      highlighted: false
    },
    {
      name: "Pro",
      price: "Sob consulta",
      description: "Para anfitriões profissionais",
      features: [
        "3 a 10 propriedades",
        "Todas as integrações",
        "Precificação dinâmica com IA",
        "Automações avançadas",
        "Gestão de equipe",
        "Suporte prioritário"
      ],
      highlighted: true
    },
    {
      name: "Enterprise",
      price: "Personalizado",
      description: "Soluções sob medida",
      features: [
        "Propriedades ilimitadas",
        "Integrações customizadas",
        "API dedicada",
        "Suporte técnico 24/7",
        "Treinamento da equipe",
        "Gerente de conta dedicado"
      ],
      highlighted: false
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">HB</span>
              </div>
              <span className="text-xl font-bold text-black">HUBNB</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-600 hover:text-black transition-colors">
                Recursos
              </a>
              <a href="#pricing" className="text-gray-600 hover:text-black transition-colors">
                Planos
              </a>
              <a href="#contact" className="text-gray-600 hover:text-black transition-colors">
                Contato
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Link href="/login">
                <Button variant="ghost" className="text-black hover:bg-gray-100">
                  Entrar
                </Button>
              </Link>
              <Link href="/login">
                <Button className="bg-black text-white hover:bg-gray-900">
                  Começar Grátis
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Zap className="w-4 h-4" />
                <span>Channel Manager Brasileiro</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl font-bold text-black mb-6 leading-tight">
                Maximize seus lucros com automação inteligente
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Gerencie todos os seus aluguéis de temporada em um único lugar. 
                Integração com Airbnb, Booking.com, VRBO e muito mais.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/login">
                  <Button size="lg" className="bg-black text-white hover:bg-gray-900 w-full sm:w-auto">
                    Crie sua conta gratuita
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="border-black text-black hover:bg-gray-50 w-full sm:w-auto">
                  Ver demonstração
                </Button>
              </div>

              <div className="flex items-center gap-8 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-black" />
                  <span>Sem cartão de crédito</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-black" />
                  <span>Configuração em 5 minutos</span>
                </div>
              </div>
            </div>

            {/* Right Content - Dashboard Preview */}
            <div className="relative">
              <div className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-6 shadow-2xl">
                {/* Mini Dashboard Preview */}
                <div className="bg-white rounded-lg p-4 mb-4 border border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-black">Dashboard</h3>
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-black text-white p-3 rounded-lg">
                      <div className="text-2xl font-bold">R$ 45k</div>
                      <div className="text-xs text-gray-300">Receita Mensal</div>
                    </div>
                    <div className="bg-gray-100 p-3 rounded-lg">
                      <div className="text-2xl font-bold text-black">78%</div>
                      <div className="text-xs text-gray-600">Ocupação</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 bg-gray-50 p-2 rounded">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span className="text-xs text-gray-600">3 reservas hoje</span>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-50 p-2 rounded">
                      <MessageSquare className="w-4 h-4 text-gray-400" />
                      <span className="text-xs text-gray-600">8 mensagens não lidas</span>
                    </div>
                  </div>
                </div>

                {/* Platform Icons */}
                <div className="flex items-center justify-center gap-3 flex-wrap">
                  <div className="bg-white px-3 py-2 rounded-lg border border-gray-200 text-xs font-medium">
                    Airbnb
                  </div>
                  <div className="bg-white px-3 py-2 rounded-lg border border-gray-200 text-xs font-medium">
                    Booking.com
                  </div>
                  <div className="bg-white px-3 py-2 rounded-lg border border-gray-200 text-xs font-medium">
                    VRBO
                  </div>
                  <div className="bg-white px-3 py-2 rounded-lg border border-gray-200 text-xs font-medium">
                    Decolar
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-black text-white px-4 py-2 rounded-lg shadow-lg">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-sm font-medium">+25% lucro</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">
              Por que escolher o HUBNB?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              O único channel manager brasileiro de baixo custo e alta performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-black transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-black mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Additional Benefits */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-2">70%</h3>
              <p className="text-gray-600">Redução no tempo de gestão diária</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-2">+35%</h3>
              <p className="text-gray-600">Aumento médio na receita mensal</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-2">100%</h3>
              <p className="text-gray-600">Segurança e proteção de dados</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">
              Planos para todos os tamanhos
            </h2>
            <p className="text-xl text-gray-600">
              Escolha o plano ideal para o seu negócio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div 
                key={index}
                className={`rounded-2xl p-8 border-2 transition-all duration-300 ${
                  plan.highlighted 
                    ? "bg-black text-white border-black shadow-2xl scale-105" 
                    : "bg-white border-gray-200 hover:border-black hover:shadow-lg"
                }`}
              >
                <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? "text-white" : "text-black"}`}>
                  {plan.name}
                </h3>
                <p className={`mb-6 ${plan.highlighted ? "text-gray-300" : "text-gray-600"}`}>
                  {plan.description}
                </p>
                
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    {plan.price === "Sob consulta" || plan.price === "Personalizado" ? (
                      <span className={`text-3xl font-bold ${plan.highlighted ? "text-white" : "text-black"}`}>
                        {plan.price}
                      </span>
                    ) : (
                      <>
                        <span className={`text-4xl font-bold ${plan.highlighted ? "text-white" : "text-black"}`}>
                          R$ {plan.price}
                        </span>
                        <span className={plan.highlighted ? "text-gray-300" : "text-gray-600"}>
                          /mês
                        </span>
                      </>
                    )}
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        plan.highlighted ? "text-white" : "text-black"
                      }`} />
                      <span className={plan.highlighted ? "text-gray-200" : "text-gray-600"}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link href="/login">
                  <Button 
                    className={`w-full ${
                      plan.highlighted 
                        ? "bg-white text-black hover:bg-gray-100" 
                        : "bg-black text-white hover:bg-gray-900"
                    }`}
                    size="lg"
                  >
                    Comece agora
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Pronto para transformar seu negócio?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Junte-se a centenas de anfitriões que já aumentaram seus lucros com o HUBNB
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/login">
              <Button size="lg" className="bg-white text-black hover:bg-gray-100 w-full sm:w-auto">
                Criar conta gratuita
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">
              Falar com especialista
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-50 border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">HB</span>
                </div>
                <span className="text-xl font-bold text-black">HUBNB</span>
              </div>
              <p className="text-gray-600 text-sm">
                O channel manager brasileiro que revoluciona a gestão de aluguéis por temporada.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-black mb-4">Produto</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#features" className="hover:text-black transition-colors">Recursos</a></li>
                <li><a href="#pricing" className="hover:text-black transition-colors">Planos</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Integrações</a></li>
                <li><a href="#" className="hover:text-black transition-colors">API</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-black mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-black transition-colors">Sobre nós</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Carreiras</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Contato</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-black mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-black transition-colors">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Política de Privacidade</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Cookies</a></li>
                <li><a href="#" className="hover:text-black transition-colors">LGPD</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-600">
              © 2025 HUBNB. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-600 hover:text-black transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
