"use client";

import { Sidebar } from "@/components/custom/sidebar";
import { Button } from "@/components/ui/button";
import { 
  Home,
  MapPin,
  DollarSign,
  Users,
  Calendar,
  Plus,
  Edit,
  Trash2,
  ExternalLink,
  TrendingUp
} from "lucide-react";

export default function PropertiesPage() {
  // Mock properties data
  const properties = [
    {
      id: "1",
      name: "Apartamento Copacabana",
      address: "Av. Atlântica, 1234 - Copacabana, Rio de Janeiro",
      type: "Apartamento",
      bedrooms: 2,
      bathrooms: 1,
      maxGuests: 4,
      platforms: ["Airbnb", "Booking.com"],
      status: "active",
      occupancyRate: 85,
      avgPrice: 350,
      monthlyRevenue: 8500,
      nextReservation: "15/01/2024"
    },
    {
      id: "2",
      name: "Casa Ipanema",
      address: "Rua Visconde de Pirajá, 567 - Ipanema, Rio de Janeiro",
      type: "Casa",
      bedrooms: 3,
      bathrooms: 2,
      maxGuests: 6,
      platforms: ["Airbnb", "Booking.com", "VRBO"],
      status: "active",
      occupancyRate: 92,
      avgPrice: 550,
      monthlyRevenue: 15200,
      nextReservation: "16/01/2024"
    },
    {
      id: "3",
      name: "Studio Leblon",
      address: "Rua Dias Ferreira, 890 - Leblon, Rio de Janeiro",
      type: "Studio",
      bedrooms: 1,
      bathrooms: 1,
      maxGuests: 2,
      platforms: ["Airbnb", "Decolar"],
      status: "active",
      occupancyRate: 78,
      avgPrice: 280,
      monthlyRevenue: 6500,
      nextReservation: "18/01/2024"
    },
  ];

  const totalRevenue = properties.reduce((sum, prop) => sum + prop.monthlyRevenue, 0);
  const avgOccupancy = Math.round(
    properties.reduce((sum, prop) => sum + prop.occupancyRate, 0) / properties.length
  );

  return (
    <div className="min-h-screen flex bg-gray-50">
      <Sidebar />
      
      <main className="flex-1 lg:ml-64">
        <div className="p-4 sm:p-6 lg:p-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-3xl font-bold text-black">Propriedades</h1>
                <p className="text-gray-600 mt-1">Gerencie seus imóveis e anúncios</p>
              </div>
              <Button className="bg-black text-white hover:bg-gray-900">
                <Plus className="w-4 h-4 mr-2" />
                Nova Propriedade
              </Button>
            </div>

            {/* Summary Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white border border-gray-200 rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Total de Propriedades</p>
                    <p className="text-2xl font-bold text-black">{properties.length}</p>
                  </div>
                  <div className="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center">
                    <Home className="w-6 h-6" />
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Receita Total</p>
                    <p className="text-2xl font-bold text-black">R$ {totalRevenue.toLocaleString()}</p>
                  </div>
                  <div className="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center">
                    <DollarSign className="w-6 h-6" />
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Ocupação Média</p>
                    <p className="text-2xl font-bold text-black">{avgOccupancy}%</p>
                  </div>
                  <div className="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Properties Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {properties.map((property) => (
              <div
                key={property.id}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-black transition-all duration-300 hover:shadow-lg"
              >
                {/* Property Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <Home className="w-16 h-16 text-gray-400" />
                </div>

                {/* Property Info */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-black mb-1">{property.name}</h3>
                      <p className="text-sm text-gray-600 flex items-start gap-1">
                        <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                        <span>{property.address}</span>
                      </p>
                    </div>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium flex-shrink-0">
                      Ativo
                    </span>
                  </div>

                  {/* Property Details */}
                  <div className="grid grid-cols-3 gap-4 mb-4 pb-4 border-b border-gray-200">
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Quartos</p>
                      <p className="font-semibold text-black">{property.bedrooms}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Banheiros</p>
                      <p className="font-semibold text-black">{property.bathrooms}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Hóspedes</p>
                      <p className="font-semibold text-black">{property.maxGuests}</p>
                    </div>
                  </div>

                  {/* Performance Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Ocupação</p>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-black rounded-full"
                            style={{ width: `${property.occupancyRate}%` }}
                          />
                        </div>
                        <span className="text-sm font-semibold text-black">{property.occupancyRate}%</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Receita Mensal</p>
                      <p className="text-sm font-semibold text-black">R$ {property.monthlyRevenue.toLocaleString()}</p>
                    </div>
                  </div>

                  {/* Platforms */}
                  <div className="mb-4">
                    <p className="text-xs text-gray-600 mb-2">Plataformas Conectadas</p>
                    <div className="flex flex-wrap gap-2">
                      {property.platforms.map((platform) => (
                        <span
                          key={platform}
                          className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                        >
                          {platform}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Next Reservation */}
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>Próxima reserva: {property.nextReservation}</span>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1 border-gray-300 hover:bg-gray-50">
                      <Edit className="w-4 h-4 mr-2" />
                      Editar
                    </Button>
                    <Button variant="outline" className="flex-1 border-gray-300 hover:bg-gray-50">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Ver Anúncios
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
