import { supabase } from './supabase';

export interface SignUpData {
  email: string;
  password: string;
  name: string;
}

export interface SignInData {
  email: string;
  password: string;
}

// Verificar se Supabase está configurado
const isSupabaseConfigured = () => {
  return process.env.NEXT_PUBLIC_SUPABASE_URL && 
         process.env.NEXT_PUBLIC_SUPABASE_URL !== 'https://placeholder.supabase.co';
};

// Criar conta
export async function signUp({ email, password, name }: SignUpData) {
  try {
    if (!isSupabaseConfigured()) {
      return { 
        data: null, 
        error: 'Supabase não configurado. Conecte sua conta Supabase nas configurações do projeto.' 
      };
    }

    // 1. Criar usuário no Supabase Auth
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name,
        },
      },
    });

    if (authError) throw authError;

    // 2. Criar perfil na tabela users
    if (authData.user) {
      const { error: profileError } = await supabase
        .from('users')
        .insert([
          {
            id: authData.user.id,
            email,
            name,
          },
        ]);

      if (profileError) throw profileError;
    }

    return { data: authData, error: null };
  } catch (error: any) {
    return { data: null, error: error.message };
  }
}

// Login
export async function signIn({ email, password }: SignInData) {
  try {
    if (!isSupabaseConfigured()) {
      return { 
        data: null, 
        error: 'Supabase não configurado. Conecte sua conta Supabase nas configurações do projeto.' 
      };
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;

    return { data, error: null };
  } catch (error: any) {
    return { data: null, error: error.message };
  }
}

// Logout
export async function signOut() {
  try {
    if (!isSupabaseConfigured()) {
      return { error: 'Supabase não configurado' };
    }

    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    return { error: null };
  } catch (error: any) {
    return { error: error.message };
  }
}

// Verificar sessão atual
export async function getCurrentUser() {
  try {
    if (!isSupabaseConfigured()) {
      return { user: null, error: null };
    }

    const { data: { user }, error } = await supabase.auth.getUser();
    
    if (error) throw error;
    
    if (user) {
      // Buscar dados completos do perfil
      const { data: profile, error: profileError } = await supabase
        .from('users')
        .select('*')
        .eq('id', user.id)
        .single();

      if (profileError) throw profileError;

      return { user: profile, error: null };
    }

    return { user: null, error: null };
  } catch (error: any) {
    return { user: null, error: error.message };
  }
}

// Login com Google
export async function signInWithGoogle() {
  try {
    if (!isSupabaseConfigured()) {
      return { 
        data: null, 
        error: 'Supabase não configurado. Conecte sua conta Supabase nas configurações do projeto.' 
      };
    }

    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/dashboard`,
      },
    });

    if (error) throw error;

    return { data, error: null };
  } catch (error: any) {
    return { data: null, error: error.message };
  }
}

// Resetar senha
export async function resetPassword(email: string) {
  try {
    if (!isSupabaseConfigured()) {
      return { error: 'Supabase não configurado' };
    }

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });

    if (error) throw error;

    return { error: null };
  } catch (error: any) {
    return { error: error.message };
  }
}
