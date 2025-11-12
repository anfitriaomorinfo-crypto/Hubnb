import type { Metadata } from "next";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "./globals.css";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "HUBNB - Channel Manager para Aluguéis",
  description: "Gerencie todos os seus aluguéis de curta temporada em um só lugar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="font-inter antialiased">
        {children}
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
