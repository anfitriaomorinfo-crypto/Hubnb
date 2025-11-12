"use client";

import { Sidebar } from "@/components/custom/sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Users,
  Plus,
  Mail,
  Shield,
  Edit,
  Trash2,
  Search,
  Home
} from "lucide-react";

export default function TeamPage() {
  // Mock team members
  const teamMembers = [
    {
      id: "1",
      name: "João Silva",
      email: "joao@email.com",
      role: "Proprietário",
      permissions: "Acesso Total",
      properties: ["Todas"],
      status: "active",
      avatar: "JS"
    },
    {
      id: "2",
      name: "Maria Santos",
      email: "maria@email.com",
      role: "Gerente",
      permissions: "Gerenciar Reservas e Mensagens",
      properties: ["Apartamento Copacabana", "Casa Ipanema"],
      status: "active",
      avatar: "MS"
    },
    {
      id: "3",
      name: "Carlos Oliveira",
      email: "carlos@email.com",
      role: "Assistente",
      permissions: "Apenas Visualizar",
      properties: ["Studio Leblon"],
      status: "active",
      avatar: "CO"
    },
  ];

  const roleOptions = [
    {
      name: "Proprietário",
      description: "Acesso total a todas as funcionalidades e configurações",
      permissions: ["Gerenciar propriedades", "Gerenciar equipe", "Configurações", "Relatórios financeiros"]
    },
    {
      name: "Gerente",
      description: "Gerenciar reservas, mensagens e calendário",
      permissions: ["Ver propriedades", "Gerenciar reservas", "Responder mensagens", "Ajustar preços"]
    },
    {
      name: "Assistente",
      description: "Acesso limitado apenas para visualização",
      permissions: ["Ver propriedades", "Ver reservas", "Ver mensagens"]
    },
  ];

  return (
    <div className="min-h-screen flex bg-gray-50">
      <Sidebar />
      
      <main className="flex-1 lg:ml-64">
        <div className="p-4 sm:p-6 lg:p-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-3xl font-bold text-black">Equipe</h1>
                <p className="text-gray-600 mt-1">Gerencie membros e permissões</p>
              </div>
              <Button className="bg-black text-white hover:bg-gray-900">
                <Plus className="w-4 h-4 mr-2" />
                Adicionar Membro
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white border border-gray-200 rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Total de Membros</p>
                    <p className="text-2xl font-bold text-black">{teamMembers.length}</p>
                  </div>
                  <div className="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6" />
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Proprietários</p>
                    <p className="text-2xl font-bold text-black">1</p>
                  </div>
                  <div className="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6" />
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Gerentes/Assistentes</p>
                    <p className="text-2xl font-bold text-black">2</p>
                  </div>
                  <div className="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Search */}
          <div className="bg-white border border-gray-200 rounded-xl p-4 mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                placeholder="Buscar membros..."
                className="pl-10 border-gray-300 focus:border-black"
              />
            </div>
          </div>

          {/* Team Members List */}
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-8">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-black">Membro</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-black">Função</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-black">Permissões</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-black">Propriedades</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-black">Status</th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-black">Ações</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {teamMembers.map((member) => (
                    <tr key={member.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-semibold">
                            {member.avatar}
                          </div>
                          <div>
                            <p className="font-medium text-black">{member.name}</p>
                            <p className="text-sm text-gray-600 flex items-center gap-1">
                              <Mail className="w-3 h-3" />
                              {member.email}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 bg-black text-white rounded-full text-xs font-medium">
                          {member.role}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm text-gray-700">{member.permissions}</p>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-wrap gap-1">
                          {member.properties.map((property, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                            >
                              {property}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                          Ativo
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-end gap-2">
                          <Button variant="ghost" size="icon" className="hover:bg-gray-100">
                            <Edit className="w-4 h-4" />
                          </Button>
                          {member.role !== "Proprietário" && (
                            <Button variant="ghost" size="icon" className="hover:bg-red-50 hover:text-red-600">
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Roles Information */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h2 className="text-xl font-bold text-black mb-4">Níveis de Permissão</h2>
            <p className="text-gray-600 mb-6">
              Entenda os diferentes níveis de acesso disponíveis para sua equipe
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {roleOptions.map((role) => (
                <div
                  key={role.name}
                  className="border border-gray-200 rounded-xl p-6 hover:border-black transition-colors"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-black text-white rounded-lg flex items-center justify-center">
                      <Shield className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-black">{role.name}</h3>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-4">{role.description}</p>
                  
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-gray-700 uppercase">Permissões:</p>
                    <ul className="space-y-1">
                      {role.permissions.map((permission, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                          <span className="text-black mt-1">•</span>
                          <span>{permission}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
