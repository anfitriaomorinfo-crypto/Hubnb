"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Lock, ArrowLeft, Loader2 } from "lucide-react";
import Link from "next/link";
import { signUp, signIn, signInWithGoogle } from "@/lib/auth";
import { toast } from "sonner";

export default function LoginPage() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isLogin) {
        // Login
        const { data, error } = await signIn({ email, password });
        
        if (error) {
          toast.error(error);
          return;
        }

        toast.success("Login realizado com sucesso!");
        router.push("/dashboard");
      } else {
        // Criar conta
        const { data, error } = await signUp({ email, password, name });
        
        if (error) {
          toast.error(error);
          return;
        }

        toast.success("Conta criada com sucesso! Verifique seu e-mail.");
        setIsLogin(true);
      }
    } catch (error: any) {
      toast.error("Erro ao processar solicitação");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      const { error } = await signInWithGoogle();
      
      if (error) {
        toast.error(error);
      }
    } catch (error: any) {
      toast.error("Erro ao fazer login com Google");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md">
          {/* Back to Home */}
          <Link 
            href="/landing" 
            className="inline-flex items-center gap-2 text-gray-600 hover:text-black transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Voltar para home</span>
          </Link>

          {/* Logo */}
          <div className="flex items-center gap-2 mb-8">
            <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">HB</span>
            </div>
            <span className="text-2xl font-bold text-black">HUBNB</span>
          </div>

          {/* Title */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-black mb-2">
              {isLogin ? "Bem-vindo de volta" : "Crie sua conta"}
            </h1>
            <p className="text-gray-600">
              {isLogin 
                ? "Entre para acessar seu dashboard" 
                : "Comece a gerenciar seus aluguéis hoje"}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {!isLogin && (
              <div className="space-y-2">
                <Label htmlFor="name" className="text-black font-medium">
                  Nome completo
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="João Silva"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="h-12 border-gray-300 focus:border-black"
                  required
                  disabled={loading}
                />
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="email" className="text-black font-medium">
                E-mail
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 pl-10 border-gray-300 focus:border-black"
                  required
                  disabled={loading}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-black font-medium">
                Senha
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-12 pl-10 border-gray-300 focus:border-black"
                  required
                  disabled={loading}
                  minLength={6}
                />
              </div>
              {!isLogin && (
                <p className="text-xs text-gray-500">Mínimo de 6 caracteres</p>
              )}
            </div>

            {isLogin && (
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="w-4 h-4 rounded border-gray-300 text-black focus:ring-black"
                  />
                  <span className="text-sm text-gray-600">Lembrar de mim</span>
                </label>
                <a href="#" className="text-sm text-black hover:underline">
                  Esqueceu a senha?
                </a>
              </div>
            )}

            <Button 
              type="submit" 
              className="w-full h-12 bg-black text-white hover:bg-gray-900 text-base font-medium"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Processando...
                </>
              ) : (
                isLogin ? "Entrar" : "Criar conta gratuita"
              )}
            </Button>
          </form>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">ou continue com</span>
            </div>
          </div>

          {/* Social Login */}
          <div className="space-y-3">
            <Button 
              type="button"
              variant="outline" 
              className="w-full h-12 border-gray-300 hover:bg-gray-50"
              onClick={handleGoogleLogin}
              disabled={loading}
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Google
            </Button>

            <Button 
              type="button"
              variant="outline" 
              className="w-full h-12 border-gray-300 hover:bg-gray-50"
              disabled
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z"/>
              </svg>
              Airbnb (em breve)
            </Button>
          </div>

          {/* Toggle Login/Signup */}
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              {isLogin ? "Não tem uma conta?" : "Já tem uma conta?"}{" "}
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="text-black font-medium hover:underline"
                disabled={loading}
              >
                {isLogin ? "Criar conta gratuita" : "Entrar"}
              </button>
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Image/Info */}
      <div className="hidden lg:flex flex-1 bg-black text-white p-12 items-center justify-center">
        <div className="max-w-md">
          <h2 className="text-4xl font-bold mb-6">
            Gerencie todos os seus aluguéis em um só lugar
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Integração automática com Airbnb, Booking.com, VRBO e muito mais. 
            Economize tempo e aumente seus lucros com automação inteligente.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Calendário Unificado</h3>
                <p className="text-gray-400 text-sm">Sincronização em tempo real entre todas as plataformas</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Precificação Dinâmica</h3>
                <p className="text-gray-400 text-sm">IA ajusta preços automaticamente para maximizar lucros</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Mensagens Centralizadas</h3>
                <p className="text-gray-400 text-sm">Responda todos os hóspedes de um único lugar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
