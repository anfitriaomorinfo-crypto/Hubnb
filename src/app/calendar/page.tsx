"use client";

import { useState } from "react";
import { Sidebar } from "@/components/custom/sidebar";
import { Button } from "@/components/ui/button";
import { 
  ChevronLeft, 
  ChevronRight,
  Calendar as CalendarIcon,
  Home,
  Filter,
  Plus,
  X,
  DollarSign,
  ZoomIn,
  ZoomOut
} from "lucide-react";
import { getPlatformColor } from "@/lib/platform-colors";

export default function CalendarPage() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedProperty, setSelectedProperty] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"month" | "year">("month");
  const [showPricingModal, setShowPricingModal] = useState(false);

  // Mock properties
  const properties = [
    { id: "all", name: "Todas as Propriedades" },
    { id: "1", name: "Apartamento Copacabana" },
    { id: "2", name: "Casa Ipanema" },
    { id: "3", name: "Studio Leblon" },
  ];

  // Mock reservations com cores por plataforma
  const reservations = [
    { id: "1", propertyId: "1", startDate: 15, endDate: 20, guestName: "Maria Santos", platform: "Airbnb" },
    { id: "2", propertyId: "2", startDate: 16, endDate: 23, guestName: "Carlos Oliveira", platform: "Booking.com" },
    { id: "3", propertyId: "3", startDate: 18, endDate: 22, guestName: "Ana Costa", platform: "Decolar" },
  ];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    return { daysInMonth, startingDayOfWeek };
  };

  const { daysInMonth, startingDayOfWeek } = getDaysInMonth(currentMonth);

  const previousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const monthName = currentMonth.toLocaleDateString("pt-BR", { month: "long", year: "numeric" });

  const hasReservation = (day: number) => {
    return reservations.find(
      (res) => day >= res.startDate && day <= res.endDate
    );
  };

  // Year view - 12 months grid
  const renderYearView = () => {
    const year = currentMonth.getFullYear();
    const months = Array.from({ length: 12 }, (_, i) => new Date(year, i, 1));

    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {months.map((month, index) => {
          const monthReservations = reservations.filter(res => {
            // Simplificado: mostra se tem reservas no mês
            return true; // Mock: sempre mostra algumas reservas
          });

          return (
            <div
              key={index}
              onClick={() => {
                setCurrentMonth(month);
                setViewMode("month");
              }}
              className="bg-white border border-gray-200 rounded-lg p-4 cursor-pointer hover:border-black transition-all duration-200 hover:shadow-lg group"
            >
              <h3 className="font-semibold text-black mb-3 capitalize">
                {month.toLocaleDateString("pt-BR", { month: "long" })}
              </h3>
              
              {/* Mini calendar preview */}
              <div className="space-y-1">
                {monthReservations.slice(0, 3).map((res, idx) => {
                  const colors = getPlatformColor(res.platform);
                  return (
                    <div
                      key={idx}
                      className={`h-2 rounded-full ${colors.bg}`}
                      title={res.platform}
                    />
                  );
                })}
                {monthReservations.length === 0 && (
                  <p className="text-xs text-gray-400">Sem reservas</p>
                )}
              </div>

              <div className="mt-3 flex items-center justify-between">
                <span className="text-xs text-gray-500">
                  {monthReservations.length} reservas
                </span>
                <ZoomIn className="w-4 h-4 text-gray-400 group-hover:text-black transition-colors" />
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="min-h-screen flex bg-gray-50">
      <Sidebar />
      
      <main className="flex-1 lg:ml-64">
        <div className="p-4 sm:p-6 lg:p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-black">Calendário</h1>
            <p className="text-gray-600 mt-1">Visualize e gerencie suas reservas</p>
          </div>

          {/* Controls */}
          <div className="bg-white border border-gray-200 rounded-xl p-4 mb-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              {/* Property Filter */}
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <Filter className="w-5 h-5 text-gray-400" />
                <select
                  value={selectedProperty}
                  onChange={(e) => setSelectedProperty(e.target.value)}
                  className="flex-1 sm:flex-none px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                >
                  {properties.map((property) => (
                    <option key={property.id} value={property.id}>
                      {property.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Month Navigation */}
              <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-start">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={previousMonth}
                  className="border-gray-300 hover:bg-gray-50"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                
                <div className="flex items-center gap-2 min-w-[200px] justify-center">
                  <CalendarIcon className="w-5 h-5 text-gray-400" />
                  <span className="font-semibold text-black capitalize">
                    {viewMode === "year" ? currentMonth.getFullYear() : monthName}
                  </span>
                </div>

                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextMonth}
                  className="border-gray-300 hover:bg-gray-50"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>

              {/* Actions */}
              <div className="flex gap-2 w-full sm:w-auto">
                <Button
                  variant="outline"
                  onClick={() => setViewMode(viewMode === "month" ? "year" : "month")}
                  className="flex-1 sm:flex-none border-gray-300 hover:bg-gray-50"
                >
                  {viewMode === "month" ? (
                    <>
                      <ZoomOut className="w-4 h-4 mr-2" />
                      Visão Anual
                    </>
                  ) : (
                    <>
                      <ZoomIn className="w-4 h-4 mr-2" />
                      Visão Mensal
                    </>
                  )}
                </Button>
                <Button
                  onClick={() => setShowPricingModal(true)}
                  className="flex-1 sm:flex-none bg-black text-white hover:bg-gray-900"
                >
                  <DollarSign className="w-4 h-4 mr-2" />
                  Preço Dinâmico
                </Button>
              </div>
            </div>
          </div>

          {/* Calendar Content */}
          {viewMode === "year" ? (
            renderYearView()
          ) : (
            <>
              {/* Calendar Grid */}
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                {/* Weekday Headers */}
                <div className="grid grid-cols-7 gap-2 mb-4">
                  {["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"].map((day) => (
                    <div
                      key={day}
                      className="text-center text-sm font-semibold text-gray-600 py-2"
                    >
                      {day}
                    </div>
                  ))}
                </div>

                {/* Calendar Days */}
                <div className="grid grid-cols-7 gap-2">
                  {/* Empty cells for days before month starts */}
                  {Array.from({ length: startingDayOfWeek }).map((_, index) => (
                    <div key={`empty-${index}`} className="aspect-square" />
                  ))}

                  {/* Days of the month */}
                  {Array.from({ length: daysInMonth }).map((_, index) => {
                    const day = index + 1;
                    const reservation = hasReservation(day);
                    const isToday = 
                      day === new Date().getDate() &&
                      currentMonth.getMonth() === new Date().getMonth() &&
                      currentMonth.getFullYear() === new Date().getFullYear();

                    const platformColors = reservation ? getPlatformColor(reservation.platform) : null;

                    return (
                      <div
                        key={day}
                        className={`aspect-square border rounded-lg p-2 cursor-pointer transition-all duration-200 ${
                          isToday
                            ? "border-black bg-black text-white"
                            : reservation
                            ? `border-2 ${platformColors?.border} ${platformColors?.bgLight} hover:shadow-lg`
                            : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                        }`}
                      >
                        <div className="flex flex-col h-full">
                          <span
                            className={`text-sm font-medium ${
                              isToday ? "text-white" : "text-black"
                            }`}
                          >
                            {day}
                          </span>
                          
                          {reservation && (
                            <div className="mt-auto">
                              <div className={`text-xs truncate ${isToday ? "text-gray-200" : "text-gray-600"}`}>
                                {reservation.guestName}
                              </div>
                              <div
                                className={`text-xs mt-1 px-1 py-0.5 rounded text-center text-white ${platformColors?.bg}`}
                              >
                                {reservation.platform}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Legend */}
              <div className="mt-6 bg-white border border-gray-200 rounded-xl p-4">
                <h3 className="font-semibold text-black mb-3">Legenda de Plataformas</h3>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-black bg-black rounded"></div>
                    <span className="text-sm text-gray-600">Dia Atual</span>
                  </div>
                  {["Airbnb", "Booking.com", "Decolar", "VRBO", "KAYAK"].map((platform) => {
                    const colors = getPlatformColor(platform);
                    return (
                      <div key={platform} className="flex items-center gap-2">
                        <div className={`w-4 h-4 ${colors.bg} rounded`}></div>
                        <span className="text-sm text-gray-600">{platform}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </>
          )}
        </div>
      </main>

      {/* Pricing Modal */}
      {showPricingModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-black">Precificação Dinâmica</h2>
                <p className="text-gray-600 mt-1">Configure os parâmetros de preço automático</p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowPricingModal(false)}
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            <div className="p-6 space-y-6">
              {/* Preço Mínimo e Máximo */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Preço Mínimo (R$)
                  </label>
                  <input
                    type="number"
                    placeholder="150"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Preço Máximo (R$)
                  </label>
                  <input
                    type="number"
                    placeholder="500"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
              </div>

              {/* Regras de Precificação */}
              <div className="space-y-4">
                <h3 className="font-semibold text-black">Regras Automáticas</h3>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-black text-white rounded-lg flex items-center justify-center flex-shrink-0 font-bold">
                      1
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-black mb-1">Posicionamento Competitivo</h4>
                      <p className="text-sm text-gray-600">
                        Mantém seu preço entre os 3 mais caros da categoria similar
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-black text-white rounded-lg flex items-center justify-center flex-shrink-0 font-bold">
                      2
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-black mb-1">Última Hora (15 dias)</h4>
                      <p className="text-sm text-gray-600">
                        Ajusta para o valor mais baixo da categoria quando faltam menos de 15 dias
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-black text-white rounded-lg flex items-center justify-center flex-shrink-0 font-bold">
                      3
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-black mb-1">Desconto Agressivo (7 dias)</h4>
                      <p className="text-sm text-gray-600">
                        Reduz 30% sobre o valor mínimo quando faltam 7 dias ou menos
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-black text-white rounded-lg flex items-center justify-center flex-shrink-0 font-bold">
                      4
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-black mb-1">Estadias Longas</h4>
                      <p className="text-sm text-gray-600">
                        Ajusta mínimo de noites por dia da semana (ex: 3 noites em finais de semana)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-4 border-t border-gray-200">
                <Button
                  variant="outline"
                  className="flex-1 border-gray-300"
                  onClick={() => setShowPricingModal(false)}
                >
                  Cancelar
                </Button>
                <Button
                  className="flex-1 bg-black text-white hover:bg-gray-900"
                  onClick={() => {
                    setShowPricingModal(false);
                    // Aqui seria implementada a lógica de salvar
                  }}
                >
                  Ativar Precificação Dinâmica
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
