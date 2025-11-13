"use client";

import { Button } from "@/components/ui/button";
import { 
  Home, 
  Calendar, 
  MessageSquare, 
  TrendingUp, 
  Zap,
  Shield,
  BarChart3,
  Check,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">HB</span>
              </div>
              <span className="text-2xl font-bold text-black">HUBNB</span>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-600 hover:text-black transition-colors">
                Recursos
              </a>
              <a href="#pricing" className="text-gray-600 hover:text-black transition-colors">
                Preços
              </a>
              <a href="#about" className="text-gray-600 hover:text-black transition-colors">
                Sobre
              </a>
            </nav>

            {/* CTA */}
            <div className="flex items-center gap-4">
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
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl sm:text-6xl font-bold text-black mb-6">
              Gerencie todos os seus aluguéis em{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                um só lugar
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Integração automática com Airbnb, Booking.com, VRBO e muito mais. 
              Economize tempo e aumente seus lucros com automação inteligente.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/login">
                <Button size="lg" className="bg-black text-white hover:bg-gray-900 h-12 px-8 text-base">
                  Começar Grátis
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="h-12 px-8 text-base border-gray-300">
                Ver Demo
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-black mb-2">10k+</div>
              <div className="text-gray-600">Propriedades Gerenciadas</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-black mb-2">98%</div>
              <div className="text-gray-600">Satisfação dos Clientes</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-black mb-2">24/7</div>
              <div className="text-gray-600">Suporte Disponível</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">
              Tudo que você precisa para crescer
            </h2>
            <p className="text-xl text-gray-600">
              Ferramentas poderosas para gerenciar seu negócio de aluguel por temporada
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Calendário Unificado</h3>
              <p className="text-gray-600">
                Sincronização em tempo real entre todas as plataformas. Nunca mais tenha reservas duplicadas.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Precificação Dinâmica</h3>
              <p className="text-gray-600">
                IA ajusta preços automaticamente baseado em demanda, eventos e concorrência.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Mensagens Centralizadas</h3>
              <p className="text-gray-600">
                Responda todos os hóspedes de um único lugar. Respostas automáticas inteligentes.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Relatórios Avançados</h3>
              <p className="text-gray-600">
                Análises detalhadas de receita, ocupação e performance por propriedade.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Automação Inteligente</h3>
              <p className="text-gray-600">
                Automatize check-in, check-out, limpeza e manutenção com regras personalizadas.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Segurança Total</h3>
              <p className="text-gray-600">
                Dados criptografados, backups automáticos e conformidade com LGPD.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">
              Planos para todos os tamanhos
            </h2>
            <p className="text-xl text-gray-600">
              Comece grátis e escale conforme seu negócio cresce
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Free Plan */}
            <div className="bg-white p-8 rounded-2xl border-2 border-gray-200">
              <h3 className="text-2xl font-bold text-black mb-2">Gratuito</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-black">R$ 0</span>
                <span className="text-gray-600">/mês</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Até 2 propriedades</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Calendário unificado</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Mensagens centralizadas</span>
                </li>
              </ul>
              <Link href="/login" className="block">
                <Button variant="outline" className="w-full h-12 border-gray-300">
                  Começar Grátis
                </Button>
              </Link>
            </div>

            {/* Pro Plan */}
            <div className="bg-black text-white p-8 rounded-2xl border-2 border-black relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                Mais Popular
              </div>
              <h3 className="text-2xl font-bold mb-2">Pro</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">R$ 99</span>
                <span className="text-gray-300">/mês</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-100">Até 10 propriedades</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-100">Precificação dinâmica</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-100">Relatórios avançados</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-100">Automação completa</span>
                </li>
              </ul>
              <Link href="/login" className="block">
                <Button className="w-full h-12 bg-white text-black hover:bg-gray-100">
                  Começar Agora
                </Button>
              </Link>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white p-8 rounded-2xl border-2 border-gray-200">
              <h3 className="text-2xl font-bold text-black mb-2">Enterprise</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-black">Custom</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Propriedades ilimitadas</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">API dedicada</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Suporte prioritário</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Treinamento personalizado</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full h-12 border-gray-300">
                Falar com Vendas
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Pronto para transformar seu negócio?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Junte-se a milhares de anfitriões que já economizam tempo e aumentam lucros com HUBNB
          </p>
          <Link href="/login">
            <Button size="lg" className="bg-white text-black hover:bg-gray-100 h-12 px-8 text-base">
              Começar Grátis Agora
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">HB</span>
                </div>
                <span className="text-xl font-bold text-black">HUBNB</span>
              </div>
              <p className="text-gray-600 text-sm">
                Gerenciamento inteligente de aluguéis por temporada
              </p>
            </div>

            <div>
              <h4 className="font-bold text-black mb-4">Produto</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-black">Recursos</a></li>
                <li><a href="#" className="hover:text-black">Preços</a></li>
                <li><a href="#" className="hover:text-black">Integrações</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-black mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-black">Sobre</a></li>
                <li><a href="#" className="hover:text-black">Blog</a></li>
                <li><a href="#" className="hover:text-black">Carreiras</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-black mb-4">Suporte</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-black">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-black">Contato</a></li>
                <li><a href="#" className="hover:text-black">Status</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-12 pt-8 text-center text-sm text-gray-600">
            <p>&copy; 2024 HUBNB. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
