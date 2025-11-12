"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    // Redireciona para a landing page
    router.push("/landing");
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center mx-auto mb-4 animate-pulse">
          <span className="text-white font-bold text-xl">HB</span>
        </div>
        <p className="text-gray-600">Carregando...</p>
      </div>
    </div>
  );
}
