"use client";

import { Sidebar } from "@/components/custom/sidebar";
import { StatCard, PlatformStatus } from "@/components/custom/dashboard-stats";
import { 
  DollarSign, 
  Home, 
  Calendar, 
  MessageSquare,
  TrendingUp,
  MapPin,
  Users,
} from "lucide-react";

export default function DashboardPage() {
  // Mock data - será substituído por dados reais das APIs
  const stats = {
    totalRevenue: "45.280",
    occupancyRate: 78,
    activeListings: 12,
    unreadMessages: 8,
  };

  const platforms = [
    { name: "Airbnb", isConnected: true, accountName: "João Silva", icon: <Home className="w-5 h-5" /> },
    { name: "Booking.com", isConnected: true, accountName: "João Silva", icon: <Home className="w-5 h-5" /> },
    { name: "VRBO", isConnected: false, icon: <Home className="w-5 h-5" /> },
    { name: "KAYAK", isConnected: false, icon: <Home className="w-5 h-5" /> },
    { name: "Decolar", isConnected: true, accountName: "João Silva", icon: <Home className="w-5 h-5" /> },
  ];

  const upcomingReservations = [
    {
      id: "1",
      guestName: "Maria Santos",
      propertyName: "Apartamento Copacabana",
      checkIn: "2024-01-15",
      checkOut: "2024-01-20",
      guests: 4,
      platform: "Airbnb",
    },
    {
      id: "2",
      guestName: "Carlos Oliveira",
      propertyName: "Casa Ipanema",
      checkIn: "2024-01-16",
      checkOut: "2024-01-23",
      guests: 2,
      platform: "Booking.com",
    },
    {
      id: "3",
      guestName: "Ana Costa",
      propertyName: "Studio Leblon",
      checkIn: "2024-01-18",
      checkOut: "2024-01-22",
      guests: 3,
      platform: "Decolar",
    },
  ];

  const recentMessages = [
    {
      id: "1",
      guestName: "Maria Santos",
      message: "Olá! Qual o horário do check-in?",
      platform: "Airbnb",
      time: "há 5 min",
      isRead: false,
    },
    {
      id: "2",
      guestName: "Carlos Oliveira",
      message: "Obrigado pelas informações!",
      platform: "Booking.com",
      time: "há 1 hora",
      isRead: true,
    },
    {
      id: "3",
      guestName: "Ana Costa",
      message: "Tem estacionamento disponível?",
      platform: "Decolar",
      time: "há 2 horas",
      isRead: false,
    },
  ];

  return (
    <div className="min-h-screen flex bg-gray-50">
      <Sidebar />
      
      {/* Main Content */}
      <main className="flex-1 lg:ml-64">
        <div className="p-4 sm:p-6 lg:p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-black">Dashboard</h1>
            <p className="text-gray-600 mt-1">Visão geral das suas operações</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
            <StatCard
              title="Receita Total"
              value={stats.totalRevenue}
              change={12.5}
              icon={<DollarSign className="w-6 h-6" />}
              format="currency"
            />
            <StatCard
              title="Taxa de Ocupação"
              value={stats.occupancyRate}
              change={5.2}
              icon={<TrendingUp className="w-6 h-6" />}
              format="percentage"
            />
            <StatCard
              title="Anúncios Ativos"
              value={stats.activeListings}
              icon={<Home className="w-6 h-6" />}
            />
            <StatCard
              title="Mensagens Não Lidas"
              value={stats.unreadMessages}
              change={-15}
              icon={<MessageSquare className="w-6 h-6" />}
            />
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Upcoming Reservations */}
            <div className="lg:col-span-2 bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-black">Próximas Reservas</h2>
                <Calendar className="w-5 h-5 text-gray-400" />
              </div>
              
              <div className="space-y-4">
                {upcomingReservations.map((reservation) => (
                  <div
                    key={reservation.id}
                    className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  >
                    <div className="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center flex-shrink-0">
                      <Home className="w-6 h-6" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h3 className="font-semibold text-black truncate">{reservation.guestName}</h3>
                        <span className="text-xs bg-black text-white px-2 py-1 rounded flex-shrink-0">
                          {reservation.platform}
                        </span>
                      </div>
                      
                      <p className="text-sm text-gray-600 mb-2 truncate">
                        <MapPin className="w-3 h-3 inline mr-1" />
                        {reservation.propertyName}
                      </p>
                      
                      <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(reservation.checkIn).toLocaleDateString("pt-BR")} - {new Date(reservation.checkOut).toLocaleDateString("pt-BR")}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          {reservation.guests} hóspedes
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Messages */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-black">Mensagens</h2>
                <MessageSquare className="w-5 h-5 text-gray-400" />
              </div>
              
              <div className="space-y-3">
                {recentMessages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`p-3 rounded-lg border transition-all duration-200 cursor-pointer ${
                      msg.isRead
                        ? "bg-white border-gray-200 hover:bg-gray-50"
                        : "bg-black text-white border-black hover:bg-gray-900"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <p className={`font-medium text-sm truncate ${msg.isRead ? "text-black" : "text-white"}`}>
                        {msg.guestName}
                      </p>
                      <span className={`text-xs flex-shrink-0 ${msg.isRead ? "text-gray-400" : "text-gray-300"}`}>
                        {msg.time}
                      </span>
                    </div>
                    
                    <p className={`text-xs mb-2 truncate ${msg.isRead ? "text-gray-600" : "text-gray-300"}`}>
                      {msg.message}
                    </p>
                    
                    <span className={`text-xs px-2 py-0.5 rounded inline-block ${
                      msg.isRead ? "bg-gray-100 text-gray-600" : "bg-white/20 text-white"
                    }`}>
                      {msg.platform}
                    </span>
                  </div>
                ))}
              </div>
              
              <button className="w-full mt-4 py-2 bg-black text-white rounded-lg hover:bg-gray-900 transition-colors duration-200 text-sm font-medium">
                Ver Todas as Mensagens
              </button>
            </div>
          </div>

          {/* Platform Connections */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-bold text-black">Plataformas Conectadas</h2>
                <p className="text-sm text-gray-600 mt-1">Gerencie suas integrações</p>
              </div>
              <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-900 transition-colors duration-200 text-sm font-medium">
                + Conectar Nova
              </button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {platforms.map((platform) => (
                <PlatformStatus
                  key={platform.name}
                  platform={platform.name}
                  isConnected={platform.isConnected}
                  icon={platform.icon}
                  accountName={platform.accountName}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
