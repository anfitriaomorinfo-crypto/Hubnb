"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Home, 
  Calendar, 
  MessageSquare, 
  Building2,
  Settings,
  LogOut,
  Menu,
  X,
  Users
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function Sidebar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { icon: Home, label: "Dashboard", href: "/dashboard" },
    { icon: Calendar, label: "Calendário", href: "/calendar" },
    { icon: MessageSquare, label: "Mensagens", href: "/messages" },
    { icon: Building2, label: "Propriedades", href: "/properties" },
    { icon: Users, label: "Equipe", href: "/team" },
    { icon: Settings, label: "Configurações", href: "/settings" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-black text-white rounded-lg"
      >
        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white border-r border-gray-200 z-40 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-gray-200">
            <Link href="/dashboard" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">HB</span>
              </div>
              <span className="text-xl font-bold text-black">HUBNB</span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 overflow-y-auto">
            <ul className="space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.href);
                
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                        active
                          ? "bg-black text-white"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* User Section */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-semibold">
                JS
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-black truncate">João Silva</p>
                <p className="text-sm text-gray-600 truncate">joao@email.com</p>
              </div>
            </div>
            
            <Link href="/landing">
              <Button
                variant="outline"
                className="w-full border-gray-300 hover:bg-gray-50"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Sair
              </Button>
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}
