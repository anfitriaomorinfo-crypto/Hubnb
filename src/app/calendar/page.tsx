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
  X
} from "lucide-react";

export default function CalendarPage() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedProperty, setSelectedProperty] = useState<string>("all");

  // Mock properties
  const properties = [
    { id: "all", name: "Todas as Propriedades" },
    { id: "1", name: "Apartamento Copacabana" },
    { id: "2", name: "Casa Ipanema" },
    { id: "3", name: "Studio Leblon" },
  ];

  // Mock reservations
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
                    {monthName}
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
                <Button className="flex-1 sm:flex-none bg-black text-white hover:bg-gray-900">
                  <Plus className="w-4 h-4 mr-2" />
                  Bloquear Datas
                </Button>
              </div>
            </div>
          </div>

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

                return (
                  <div
                    key={day}
                    className={`aspect-square border rounded-lg p-2 cursor-pointer transition-all duration-200 ${
                      isToday
                        ? "border-black bg-black text-white"
                        : reservation
                        ? "border-black bg-gray-50 hover:bg-gray-100"
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
                          <div className={`text-xs mt-1 px-1 py-0.5 rounded text-center ${
                            isToday 
                              ? "bg-white/20 text-white" 
                              : "bg-black text-white"
                          }`}>
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
            <h3 className="font-semibold text-black mb-3">Legenda</h3>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-black bg-black rounded"></div>
                <span className="text-sm text-gray-600">Dia Atual</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-black bg-gray-50 rounded"></div>
                <span className="text-sm text-gray-600">Reservado</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-gray-200 rounded"></div>
                <span className="text-sm text-gray-600">Disponível</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
