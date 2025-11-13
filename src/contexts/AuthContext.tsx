'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/lib/supabase';
import { syncUserWithBackend, getUserFromBackend } from '@/lib/backend-api';

interface AuthContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
  backendUser: any | null;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  session: null,
  loading: true,
  signInWithGoogle: async () => {},
  signOut: async () => {},
  backendUser: null,
});

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de AuthProvider');
  }
  return context;
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [backendUser, setBackendUser] = useState<any | null>(null);

  useEffect(() => {
    // Verificar sessão inicial
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      
      // Se tem sessão, sincronizar com backend
      if (session?.user) {
        syncWithBackend();
      }
      
      setLoading(false);
    });

    // Escutar mudanças de autenticação
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_event, session) => {
      setSession(session);
      setUser(session?.user ?? null);
      
      // Sincronizar com backend quando usuário faz login
      if (session?.user && _event === 'SIGNED_IN') {
        await syncWithBackend();
      }
      
      // Limpar dados do backend quando usuário faz logout
      if (_event === 'SIGNED_OUT') {
        setBackendUser(null);
      }
      
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const syncWithBackend = async () => {
    try {
      // Sincronizar usuário
      const { error: syncError } = await syncUserWithBackend();
      
      if (syncError) {
        console.error('Erro ao sincronizar com backend:', syncError);
      }

      // Buscar dados do usuário do backend
      const { data: userData, error: userError } = await getUserFromBackend();
      
      if (!userError && userData) {
        setBackendUser(userData);
      }
    } catch (error) {
      console.error('Erro na sincronização:', error);
    }
  };

  const signInWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
        queryParams: {
          access_type: 'offline',
          prompt: 'consent',
        },
      },
    });

    if (error) {
      throw error;
    }
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      throw error;
    }
    setBackendUser(null);
  };

  const value = {
    user,
    session,
    loading,
    signInWithGoogle,
    signOut,
    backendUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
