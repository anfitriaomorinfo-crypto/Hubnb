import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get('code');

  if (code) {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    try {
      // Trocar o code por uma sessão
      const { data, error } = await supabase.auth.exchangeCodeForSession(code);

      if (error) {
        console.error('Erro ao trocar código por sessão:', error);
        return NextResponse.redirect(new URL('/login?error=auth_failed', requestUrl.origin));
      }

      if (data.user) {
        // Verificar se perfil existe, se não criar
        const { data: profile, error: profileError } = await supabase
          .from('users')
          .select('*')
          .eq('id', data.user.id)
          .single();

        if (profileError || !profile) {
          // Criar perfil para usuário do Google
          const { error: insertError } = await supabase.from('users').insert([
            {
              id: data.user.id,
              email: data.user.email!,
              name: data.user.user_metadata?.full_name || 
                    data.user.user_metadata?.name || 
                    data.user.email?.split('@')[0] || 
                    'Usuário',
            },
          ]);

          if (insertError) {
            console.error('Erro ao criar perfil:', insertError);
          }
        }

        // Sincronizar com backend Laravel (se configurado)
        const laravelApiUrl = process.env.NEXT_PUBLIC_LARAVEL_API_URL;
        
        if (laravelApiUrl && data.session) {
          try {
            const syncResponse = await fetch(`${laravelApiUrl}/auth/sync`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${data.session.access_token}`,
              },
              body: JSON.stringify({
                user_id: data.user.id,
                email: data.user.email,
                name: data.user.user_metadata?.full_name || 
                      data.user.user_metadata?.name || 
                      data.user.email?.split('@')[0] || 
                      'Usuário',
              }),
            });

            if (!syncResponse.ok) {
              console.error('Erro ao sincronizar com backend:', await syncResponse.text());
            }
          } catch (error) {
            // Não bloqueia o login se backend falhar
            console.error('Erro ao sincronizar com backend:', error);
          }
        }

        // Redirecionar para dashboard com sucesso
        return NextResponse.redirect(new URL('/dashboard?login=success', requestUrl.origin));
      }
    } catch (error) {
      console.error('Erro no callback:', error);
      return NextResponse.redirect(new URL('/login?error=callback_failed', requestUrl.origin));
    }
  }

  // Se não houver código, redirecionar para login
  return NextResponse.redirect(new URL('/login?error=no_code', requestUrl.origin));
}
