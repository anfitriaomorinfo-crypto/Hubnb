/**
 * Serviço de integração com Backend Laravel
 * Sincroniza autenticação do Supabase com API Laravel
 */

import { supabase } from './supabase';

const LARAVEL_API_URL = process.env.NEXT_PUBLIC_LARAVEL_API_URL || 'http://localhost:8000/api';

/**
 * Obter token de autenticação atual
 */
async function getAuthToken(): Promise<string | null> {
  const { data: { session } } = await supabase.auth.getSession();
  return session?.access_token || null;
}

/**
 * Fazer requisição autenticada para API Laravel
 */
async function authenticatedRequest(
  endpoint: string,
  options: RequestInit = {}
): Promise<Response> {
  const token = await getAuthToken();

  if (!token) {
    throw new Error('Usuário não autenticado');
  }

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
    ...options.headers,
  };

  return fetch(`${LARAVEL_API_URL}${endpoint}`, {
    ...options,
    headers,
  });
}

/**
 * Sincronizar usuário do Supabase com backend Laravel
 */
export async function syncUserWithBackend() {
  try {
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      throw new Error('Usuário não encontrado');
    }

    const response = await authenticatedRequest('/auth/sync', {
      method: 'POST',
      body: JSON.stringify({
        user_id: user.id,
        email: user.email,
        name: user.user_metadata?.full_name || 
              user.user_metadata?.name || 
              user.email?.split('@')[0] || 
              'Usuário',
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Erro ao sincronizar usuário');
    }

    const data = await response.json();
    return { data, error: null };
  } catch (error: any) {
    return { data: null, error: error.message };
  }
}

/**
 * Obter dados do usuário do backend
 */
export async function getUserFromBackend() {
  try {
    const response = await authenticatedRequest('/auth/me');

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Erro ao buscar usuário');
    }

    const data = await response.json();
    return { data, error: null };
  } catch (error: any) {
    return { data: null, error: error.message };
  }
}

/**
 * Atualizar plano do usuário
 */
export async function updateUserPlan(plan: 'free' | 'pro' | 'enterprise') {
  try {
    const response = await authenticatedRequest('/auth/plan', {
      method: 'PUT',
      body: JSON.stringify({ plan }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Erro ao atualizar plano');
    }

    const data = await response.json();
    return { data, error: null };
  } catch (error: any) {
    return { data: null, error: error.message };
  }
}

/**
 * Listar propriedades do usuário
 */
export async function getProperties() {
  try {
    const response = await authenticatedRequest('/properties');

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Erro ao buscar propriedades');
    }

    const data = await response.json();
    return { data, error: null };
  } catch (error: any) {
    return { data: null, error: error.message };
  }
}

/**
 * Criar nova propriedade
 */
export async function createProperty(propertyData: {
  name: string;
  address?: string;
  city?: string;
  capacity: number;
  description?: string;
}) {
  try {
    const response = await authenticatedRequest('/properties', {
      method: 'POST',
      body: JSON.stringify(propertyData),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Erro ao criar propriedade');
    }

    const data = await response.json();
    return { data, error: null };
  } catch (error: any) {
    return { data: null, error: error.message };
  }
}

/**
 * Obter reservas
 */
export async function getBookings(propertyId?: string) {
  try {
    const endpoint = propertyId 
      ? `/bookings/property/${propertyId}` 
      : '/bookings';
    
    const response = await authenticatedRequest(endpoint);

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Erro ao buscar reservas');
    }

    const data = await response.json();
    return { data, error: null };
  } catch (error: any) {
    return { data: null, error: error.message };
  }
}

/**
 * Obter configurações de precificação
 */
export async function getPricingSettings() {
  try {
    const response = await authenticatedRequest('/pricing/settings');

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Erro ao buscar configurações');
    }

    const data = await response.json();
    return { data, error: null };
  } catch (error: any) {
    return { data: null, error: error.message };
  }
}

/**
 * Atualizar configurações de precificação
 */
export async function updatePricingSettings(settings: {
  min_price?: number;
  max_price?: number;
  dynamic_pricing_enabled?: boolean;
  last_7_days_discount?: number;
}) {
  try {
    const response = await authenticatedRequest('/pricing/settings', {
      method: 'PUT',
      body: JSON.stringify(settings),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Erro ao atualizar configurações');
    }

    const data = await response.json();
    return { data, error: null };
  } catch (error: any) {
    return { data: null, error: error.message };
  }
}

/**
 * Obter sugestão de preço para uma data
 */
export async function getPriceSuggestion(propertyId: string, date: string) {
  try {
    const response = await authenticatedRequest('/pricing/suggestion', {
      method: 'POST',
      body: JSON.stringify({ property_id: propertyId, date }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Erro ao obter sugestão de preço');
    }

    const data = await response.json();
    return { data, error: null };
  } catch (error: any) {
    return { data: null, error: error.message };
  }
}

/**
 * Obter mensagens
 */
export async function getMessages() {
  try {
    const response = await authenticatedRequest('/messages');

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Erro ao buscar mensagens');
    }

    const data = await response.json();
    return { data, error: null };
  } catch (error: any) {
    return { data: null, error: error.message };
  }
}

/**
 * Enviar mensagem
 */
export async function sendMessage(messageData: {
  conversation_id: string;
  platform: string;
  content: string;
}) {
  try {
    const response = await authenticatedRequest('/messages', {
      method: 'POST',
      body: JSON.stringify(messageData),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Erro ao enviar mensagem');
    }

    const data = await response.json();
    return { data, error: null };
  } catch (error: any) {
    return { data: null, error: error.message };
  }
}

/**
 * Obter overview do dashboard
 */
export async function getDashboardOverview() {
  try {
    const response = await authenticatedRequest('/dashboard/overview');

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Erro ao buscar overview');
    }

    const data = await response.json();
    return { data, error: null };
  } catch (error: any) {
    return { data: null, error: error.message };
  }
}

/**
 * Hook para sincronização automática após login
 * Use no componente de callback ou após login bem-sucedido
 */
export async function handlePostLoginSync() {
  try {
    // 1. Sincronizar usuário com backend
    const { error: syncError } = await syncUserWithBackend();
    
    if (syncError) {
      console.error('Erro ao sincronizar usuário:', syncError);
      // Não bloqueia o login, apenas loga o erro
    }

    // 2. Buscar dados do usuário do backend
    const { data: userData, error: userError } = await getUserFromBackend();
    
    if (userError) {
      console.error('Erro ao buscar dados do usuário:', userError);
    }

    return { userData, error: null };
  } catch (error: any) {
    return { userData: null, error: error.message };
  }
}
