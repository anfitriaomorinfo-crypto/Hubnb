"use client";

import { Sidebar } from "@/components/custom/sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Settings as SettingsIcon,
  User,
  Bell,
  CreditCard,
  Globe,
  Shield,
  Key,
  Zap,
  Save
} from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="min-h-screen flex bg-gray-50">
      <Sidebar />
      
      <main className="flex-1 lg:ml-64">
        <div className="p-4 sm:p-6 lg:p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-black">Configurações</h1>
            <p className="text-gray-600 mt-1">Gerencie suas preferências e integrações</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Settings Navigation */}
            <div className="lg:col-span-1">
              <div className="bg-white border border-gray-200 rounded-xl p-4 sticky top-6">
                <nav className="space-y-1">
                  {[
                    { icon: User, label: "Perfil", id: "profile" },
                    { icon: Bell, label: "Notificações", id: "notifications" },
                    { icon: CreditCard, label: "Plano e Pagamento", id: "billing" },
                    { icon: Globe, label: "Integrações", id: "integrations" },
                    { icon: Shield, label: "Segurança", id: "security" },
                    { icon: Key, label: "API", id: "api" },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.id}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
                      >
                        <Icon className="w-5 h-5" />
                        <span className="font-medium">{item.label}</span>
                      </button>
                    );
                  })}
                </nav>
              </div>
            </div>

            {/* Settings Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Profile Section */}
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-black text-white rounded-lg flex items-center justify-center">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-black">Perfil</h2>
                    <p className="text-sm text-gray-600">Atualize suas informações pessoais</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold">
                      JS
                    </div>
                    <div>
                      <Button variant="outline" className="border-gray-300 hover:bg-gray-50">
                        Alterar Foto
                      </Button>
                      <p className="text-xs text-gray-500 mt-2">JPG, PNG ou GIF. Máx 2MB.</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Nome</Label>
                      <Input id="firstName" defaultValue="João" className="border-gray-300" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Sobrenome</Label>
                      <Input id="lastName" defaultValue="Silva" className="border-gray-300" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input id="email" type="email" defaultValue="joao@email.com" className="border-gray-300" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone</Label>
                    <Input id="phone" defaultValue="+55 21 99999-9999" className="border-gray-300" />
                  </div>

                  <Button className="bg-black text-white hover:bg-gray-900">
                    <Save className="w-4 h-4 mr-2" />
                    Salvar Alterações
                  </Button>
                </div>
              </div>

              {/* Notifications Section */}
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-black text-white rounded-lg flex items-center justify-center">
                    <Bell className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-black">Notificações</h2>
                    <p className="text-sm text-gray-600">Configure como deseja receber atualizações</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    { label: "Novas reservas", description: "Receba notificação quando houver uma nova reserva" },
                    { label: "Mensagens de hóspedes", description: "Alertas quando receber mensagens" },
                    { label: "Check-in/Check-out", description: "Lembretes de entrada e saída de hóspedes" },
                    { label: "Atualizações de preços", description: "Quando a IA ajustar preços automaticamente" },
                    { label: "Relatórios semanais", description: "Resumo semanal de performance" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start justify-between py-3 border-b border-gray-200 last:border-0">
                      <div className="flex-1">
                        <p className="font-medium text-black">{item.label}</p>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer ml-4">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-black"></div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Billing Section */}
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-black text-white rounded-lg flex items-center justify-center">
                    <CreditCard className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-black">Plano e Pagamento</h2>
                    <p className="text-sm text-gray-600">Gerencie sua assinatura e forma de pagamento</p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <p className="font-semibold text-black">Plano Pro</p>
                      <p className="text-sm text-gray-600">3 a 10 propriedades</p>
                    </div>
                    <span className="px-3 py-1 bg-black text-white rounded-full text-sm font-medium">
                      Ativo
                    </span>
                  </div>
                  <p className="text-2xl font-bold text-black mb-1">R$ 199/mês</p>
                  <p className="text-sm text-gray-600">Próxima cobrança: 15/02/2024</p>
                </div>

                <div className="space-y-3">
                  <Button variant="outline" className="w-full border-gray-300 hover:bg-gray-50">
                    Alterar Plano
                  </Button>
                  <Button variant="outline" className="w-full border-gray-300 hover:bg-gray-50">
                    Atualizar Forma de Pagamento
                  </Button>
                  <Button variant="outline" className="w-full border-gray-300 hover:bg-gray-50">
                    Ver Histórico de Faturas
                  </Button>
                </div>
              </div>

              {/* Integrations Section */}
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-black text-white rounded-lg flex items-center justify-center">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-black">Integrações</h2>
                    <p className="text-sm text-gray-600">Conecte suas contas de plataformas</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    { name: "Airbnb", connected: true },
                    { name: "Booking.com", connected: true },
                    { name: "VRBO", connected: false },
                    { name: "KAYAK", connected: false },
                    { name: "Decolar", connected: true },
                  ].map((platform) => (
                    <div
                      key={platform.name}
                      className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                          <Globe className="w-5 h-5 text-gray-600" />
                        </div>
                        <div>
                          <p className="font-medium text-black">{platform.name}</p>
                          <p className="text-sm text-gray-600">
                            {platform.connected ? "Conectado" : "Não conectado"}
                          </p>
                        </div>
                      </div>
                      <Button
                        variant={platform.connected ? "outline" : "default"}
                        className={platform.connected ? "border-gray-300" : "bg-black text-white"}
                      >
                        {platform.connected ? "Desconectar" : "Conectar"}
                      </Button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Security Section */}
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-black text-white rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-black">Segurança</h2>
                    <p className="text-sm text-gray-600">Proteja sua conta</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="currentPassword">Senha Atual</Label>
                    <Input id="currentPassword" type="password" className="border-gray-300" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="newPassword">Nova Senha</Label>
                    <Input id="newPassword" type="password" className="border-gray-300" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirmar Nova Senha</Label>
                    <Input id="confirmPassword" type="password" className="border-gray-300" />
                  </div>

                  <Button className="bg-black text-white hover:bg-gray-900">
                    Atualizar Senha
                  </Button>

                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-medium text-black">Autenticação de Dois Fatores</p>
                        <p className="text-sm text-gray-600">Adicione uma camada extra de segurança</p>
                      </div>
                      <Button variant="outline" className="border-gray-300 hover:bg-gray-50">
                        Ativar
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
