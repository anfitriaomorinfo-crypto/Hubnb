import { createClient } from '@supabase/supabase-js';

// Configuração do Supabase com variáveis de ambiente
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Tipos para o banco de dados
export interface User {
  id: string;
  email: string;
  name: string;
  plan: 'free' | 'pro' | 'enterprise';
  created_at: string;
  updated_at: string;
}

export interface Property {
  id: string;
  user_id: string;
  name: string;
  address?: string;
  city?: string;
  capacity: number;
  description?: string;
  created_at: string;
  updated_at: string;
}

export interface Reservation {
  id: string;
  property_id: string;
  guest_name: string;
  guest_email?: string;
  check_in: string;
  check_out: string;
  guests_count: number;
  platform: string;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  total_price?: number;
  created_at: string;
  updated_at?: string;
}

export interface Message {
  id: string;
  user_id: string;
  conversation_id: string;
  platform: string;
  sender: string;
  content: string;
  is_read: boolean;
  created_at: string;
}

export interface PricingSetting {
  id: string;
  user_id: string;
  property_id?: string;
  min_price: number;
  max_price: number;
  dynamic_pricing_enabled: boolean;
  last_7_days_discount: number;
  last_15_days_discount: number;
  created_at: string;
  updated_at: string;
}
