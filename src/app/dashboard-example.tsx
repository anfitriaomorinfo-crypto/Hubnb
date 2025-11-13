/**
 * Exemplo de uso da integração Backend Laravel no Dashboard
 * 
 * Este arquivo demonstra como usar as funções de integração
 * com o backend Laravel nas páginas do HUBNB
 */

"use client";

import { useEffect, useState } from 'react';
import { 
  getUserFromBackend, 
  getProperties, 
  getBookings,
  getDashboardOverview,
  syncUserWithBackend 
} from '@/lib/backend-api';
import { useAuth } from '@/components/providers';

export default function DashboardExample() {
  const { user, loading } = useAuth();
  const [backendUser, setBackendUser] = useState<any>(null);
  const [properties, setProperties] = useState<any[]>([]);
  const [bookings, setBookings] = useState<any[]>([]);
  const [overview, setOverview] = useState<any>(null);
  const [syncing, setSyncing] = useState(false);

  // Sincronizar usuário ao carregar
  useEffect(() => {
    if (user && !loading) {
      syncUser();
    }
  }, [user, loading]);

  // Função para sincronizar usuário
  const syncUser = async () => {
    setSyncing(true);
    
    // 1. Sincronizar com backend
    const { error: syncError } = await syncUserWithBackend();
    
    if (syncError) {
      console.error('Erro ao sincronizar:', syncError);
    }

    // 2. Buscar dados do backend
    const { data: userData, error: userError } = await getUserFromBackend();
    
    if (userData) {
      setBackendUser(userData.user);
    }

    setSyncing(false);
  };

  // Carregar dados do dashboard
  useEffect(() => {
    if (backendUser) {
      loadDashboardData();
    }
  }, [backendUser]);

  const loadDashboardData = async () => {
    // Carregar propriedades
    const { data: propertiesData } = await getProperties();
    if (propertiesData) {
      setProperties(propertiesData.properties || []);
    }

    // Carregar reservas
    const { data: bookingsData } = await getBookings();
    if (bookingsData) {
      setBookings(bookingsData.bookings || []);
    }

    // Carregar overview
    const { data: overviewData } = await getDashboardOverview();
    if (overviewData) {
      setOverview(overviewData);
    }
  };

  if (loading || syncing) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black mx-auto mb-4"></div>
          <p className="text-gray-600">
            {syncing ? 'Sincronizando dados...' : 'Carregando...'}
          </p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-gray-600 mb-4">Você precisa estar logado</p>
          <a href="/login" className="text-black underline">
            Fazer login
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-black mb-2">
            Bem-vindo, {backendUser?.name || user.email}!
          </h1>
          <p className="text-gray-600">
            Plano: <span className="font-semibold">{backendUser?.plan || 'free'}</span>
          </p>
        </div>

        {/* Overview Cards */}
        {overview && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-gray-600 text-sm mb-2">Propriedades</h3>
              <p className="text-3xl font-bold text-black">
                {overview.properties_count || 0}
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-gray-600 text-sm mb-2">Reservas</h3>
              <p className="text-3xl font-bold text-black">
                {overview.bookings_count || 0}
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-gray-600 text-sm mb-2">Receita</h3>
              <p className="text-3xl font-bold text-black">
                R$ {overview.total_revenue?.toFixed(2) || '0.00'}
              </p>
            </div>
          </div>
        )}

        {/* Propriedades */}
        <div className="bg-white rounded-lg shadow mb-8">
          <div className="p-6 border-b">
            <h2 className="text-xl font-bold text-black">Minhas Propriedades</h2>
          </div>
          <div className="p-6">
            {properties.length > 0 ? (
              <div className="space-y-4">
                {properties.map((property) => (
                  <div 
                    key={property.id} 
                    className="border rounded-lg p-4 hover:bg-gray-50 transition"
                  >
                    <h3 className="font-semibold text-black mb-1">
                      {property.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {property.city}, {property.state}
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      Capacidade: {property.capacity} pessoas
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center py-8">
                Nenhuma propriedade cadastrada ainda
              </p>
            )}
          </div>
        </div>

        {/* Próximas Reservas */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b">
            <h2 className="text-xl font-bold text-black">Próximas Reservas</h2>
          </div>
          <div className="p-6">
            {bookings.length > 0 ? (
              <div className="space-y-4">
                {bookings.slice(0, 5).map((booking) => (
                  <div 
                    key={booking.id} 
                    className="border rounded-lg p-4 hover:bg-gray-50 transition"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-black mb-1">
                          {booking.guest_name || 'Hóspede'}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {new Date(booking.check_in).toLocaleDateString('pt-BR')} - {' '}
                          {new Date(booking.check_out).toLocaleDateString('pt-BR')}
                        </p>
                        <p className="text-sm text-gray-500 mt-1">
                          Plataforma: {booking.platform}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-black">
                          R$ {booking.total_price?.toFixed(2) || '0.00'}
                        </p>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          booking.status === 'confirmed' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {booking.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center py-8">
                Nenhuma reserva encontrada
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * EXEMPLO DE USO EM OUTROS COMPONENTES:
 * 
 * 1. Criar Propriedade:
 * 
 * import { createProperty } from '@/lib/backend-api';
 * 
 * const handleCreateProperty = async () => {
 *   const { data, error } = await createProperty({
 *     name: 'Apartamento Centro',
 *     city: 'São Paulo',
 *     capacity: 4,
 *     description: 'Lindo apartamento no centro'
 *   });
 *   
 *   if (error) {
 *     alert('Erro: ' + error);
 *   } else {
 *     alert('Propriedade criada com sucesso!');
 *   }
 * };
 * 
 * 
 * 2. Atualizar Plano:
 * 
 * import { updateUserPlan } from '@/lib/backend-api';
 * 
 * const handleUpgradeToPro = async () => {
 *   const { data, error } = await updateUserPlan('pro');
 *   
 *   if (error) {
 *     alert('Erro: ' + error);
 *   } else {
 *     alert('Plano atualizado para PRO!');
 *   }
 * };
 * 
 * 
 * 3. Obter Sugestão de Preço:
 * 
 * import { getPriceSuggestion } from '@/lib/backend-api';
 * 
 * const handleGetPriceSuggestion = async (propertyId: string, date: string) => {
 *   const { data, error } = await getPriceSuggestion(propertyId, date);
 *   
 *   if (data) {
 *     console.log('Preço sugerido:', data.suggested_price);
 *     console.log('Regra aplicada:', data.rule_applied);
 *   }
 * };
 */
