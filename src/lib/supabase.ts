import { createClient } from '@supabase/supabase-js';

// Configuração temporária para desenvolvimento (sem variáveis de ambiente)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Tipos para o banco de dados
export interface User {
  id: string;
  email: string;
  name: string;
  created_at: string;
  updated_at: string;
}

export interface Property {
  id: string;
  user_id: string;
  name: string;
  address: string;
  type: string;
  max_guests: number;
  created_at: string;
  updated_at: string;
}

export interface Reservation {
  id: string;
  property_id: string;
  guest_name: string;
  guest_email: string;
  check_in: string;
  check_out: string;
  guests_count: number;
  platform: string;
  status: string;
  total_price: number;
  created_at: string;
}
