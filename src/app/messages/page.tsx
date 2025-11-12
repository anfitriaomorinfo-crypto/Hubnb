"use client";

import { useState } from "react";
import { Sidebar } from "@/components/custom/sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  MessageSquare,
  Search,
  Filter,
  Send,
  Clock,
  Zap,
  Edit,
  Plus,
  X
} from "lucide-react";

export default function MessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState<string | null>("1");
  const [messageText, setMessageText] = useState("");
  const [showTemplates, setShowTemplates] = useState(false);

  // Mock conversations
  const conversations = [
    {
      id: "1",
      guestName: "Maria Santos",
      propertyName: "Apartamento Copacabana",
      platform: "Airbnb",
      lastMessage: "Olá! Qual o horário do check-in?",
      time: "há 5 min",
      isRead: false,
      avatar: "MS"
    },
    {
      id: "2",
      guestName: "Carlos Oliveira",
      propertyName: "Casa Ipanema",
      platform: "Booking.com",
      lastMessage: "Obrigado pelas informações!",
      time: "há 1 hora",
      isRead: true,
      avatar: "CO"
    },
    {
      id: "3",
      guestName: "Ana Costa",
      propertyName: "Studio Leblon",
      platform: "Decolar",
      lastMessage: "Tem estacionamento disponível?",
      time: "há 2 horas",
      isRead: false,
      avatar: "AC"
    },
  ];

  // Mock message history
  const messageHistory = [
    {
      id: "1",
      sender: "guest",
      text: "Olá! Gostaria de saber qual o horário do check-in?",
      time: "14:30",
    },
    {
      id: "2",
      sender: "host",
      text: "Olá Maria! O check-in é a partir das 15h. Você pode chegar a qualquer momento após esse horário.",
      time: "14:35",
    },
    {
      id: "3",
      sender: "guest",
      text: "Perfeito! E o check-out?",
      time: "14:36",
    },
  ];

  // Message templates
  const templates = [
    {
      id: "1",
      name: "Boas-vindas",
      type: "automatic",
      trigger: "Após confirmação da reserva",
      content: "Olá {{guest_name}}! Seja bem-vindo(a)! Estamos muito felizes em recebê-lo(a) em {{property_name}}. Qualquer dúvida, estou à disposição!"
    },
    {
      id: "2",
      name: "Instruções Check-in",
      type: "semi-automatic",
      trigger: "2 dias antes do check-in",
      content: "Olá {{guest_name}}! Seu check-in está próximo ({{check_in_date}}). O horário é a partir das 15h. Endereço: {{property_address}}. Código do portão: 1234."
    },
    {
      id: "3",
      name: "Agradecimento",
      type: "automatic",
      trigger: "6 horas após check-out",
      content: "Olá {{guest_name}}! Obrigado por escolher {{property_name}}. Esperamos que tenha aproveitado sua estadia. Ficaríamos muito gratos se pudesse deixar uma avaliação!"
    },
  ];

  const selectedConv = conversations.find(c => c.id === selectedConversation);

  return (
    <div className="min-h-screen flex bg-gray-50">
      <Sidebar />
      
      <main className="flex-1 lg:ml-64">
        <div className="h-screen flex flex-col">
          {/* Header */}
          <div className="p-4 sm:p-6 lg:p-8 border-b border-gray-200 bg-white">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-black">Mensagens</h1>
                <p className="text-gray-600 mt-1">Central unificada de conversas</p>
              </div>
              <Button
                onClick={() => setShowTemplates(!showTemplates)}
                className="bg-black text-white hover:bg-gray-900"
              >
                <Zap className="w-4 h-4 mr-2" />
                Templates
              </Button>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 flex overflow-hidden">
            {/* Conversations List */}
            <div className="w-full md:w-96 border-r border-gray-200 bg-white flex flex-col">
              {/* Search */}
              <div className="p-4 border-b border-gray-200">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    placeholder="Buscar conversas..."
                    className="pl-10 border-gray-300 focus:border-black"
                  />
                </div>
                
                <div className="flex gap-2 mt-3">
                  <Button variant="outline" size="sm" className="flex-1 border-gray-300">
                    <Filter className="w-4 h-4 mr-2" />
                    Filtros
                  </Button>
                </div>
              </div>

              {/* Conversation Items */}
              <div className="flex-1 overflow-y-auto">
                {conversations.map((conv) => (
                  <div
                    key={conv.id}
                    onClick={() => setSelectedConversation(conv.id)}
                    className={`p-4 border-b border-gray-200 cursor-pointer transition-colors ${
                      selectedConversation === conv.id
                        ? "bg-black text-white"
                        : conv.isRead
                        ? "bg-white hover:bg-gray-50"
                        : "bg-gray-50 hover:bg-gray-100"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold flex-shrink-0 ${
                        selectedConversation === conv.id
                          ? "bg-white text-black"
                          : "bg-black text-white"
                      }`}>
                        {conv.avatar}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <h3 className={`font-semibold truncate ${
                            selectedConversation === conv.id ? "text-white" : "text-black"
                          }`}>
                            {conv.guestName}
                          </h3>
                          <span className={`text-xs flex-shrink-0 ${
                            selectedConversation === conv.id ? "text-gray-300" : "text-gray-500"
                          }`}>
                            {conv.time}
                          </span>
                        </div>
                        
                        <p className={`text-sm mb-2 truncate ${
                          selectedConversation === conv.id ? "text-gray-300" : "text-gray-600"
                        }`}>
                          {conv.propertyName}
                        </p>
                        
                        <div className="flex items-center justify-between gap-2">
                          <p className={`text-sm truncate ${
                            selectedConversation === conv.id 
                              ? "text-gray-200" 
                              : conv.isRead 
                              ? "text-gray-500" 
                              : "text-black font-medium"
                          }`}>
                            {conv.lastMessage}
                          </p>
                          <span className={`text-xs px-2 py-0.5 rounded flex-shrink-0 ${
                            selectedConversation === conv.id
                              ? "bg-white/20 text-white"
                              : "bg-gray-200 text-gray-700"
                          }`}>
                            {conv.platform}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Message Thread */}
            {!showTemplates ? (
              <div className="flex-1 flex flex-col bg-white">
                {selectedConv ? (
                  <>
                    {/* Thread Header */}
                    <div className="p-4 border-b border-gray-200">
                      <div className="flex items-center justify-between">
                        <div>
                          <h2 className="text-xl font-bold text-black">{selectedConv.guestName}</h2>
                          <p className="text-sm text-gray-600">{selectedConv.propertyName}</p>
                        </div>
                        <span className="px-3 py-1 bg-black text-white rounded-lg text-sm">
                          {selectedConv.platform}
                        </span>
                      </div>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                      {messageHistory.map((msg) => (
                        <div
                          key={msg.id}
                          className={`flex ${msg.sender === "host" ? "justify-end" : "justify-start"}`}
                        >
                          <div
                            className={`max-w-[70%] rounded-lg p-3 ${
                              msg.sender === "host"
                                ? "bg-black text-white"
                                : "bg-gray-100 text-black"
                            }`}
                          >
                            <p className="text-sm">{msg.text}</p>
                            <span className={`text-xs mt-1 block ${
                              msg.sender === "host" ? "text-gray-300" : "text-gray-500"
                            }`}>
                              {msg.time}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Message Input */}
                    <div className="p-4 border-t border-gray-200">
                      <div className="flex gap-2">
                        <Textarea
                          placeholder="Digite sua mensagem..."
                          value={messageText}
                          onChange={(e) => setMessageText(e.target.value)}
                          className="flex-1 min-h-[60px] max-h-[120px] resize-none border-gray-300 focus:border-black"
                        />
                        <Button
                          className="bg-black text-white hover:bg-gray-900 self-end"
                          size="icon"
                        >
                          <Send className="w-5 h-5" />
                        </Button>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="flex-1 flex items-center justify-center text-gray-400">
                    <div className="text-center">
                      <MessageSquare className="w-16 h-16 mx-auto mb-4" />
                      <p>Selecione uma conversa para começar</p>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              /* Templates Panel */
              <div className="flex-1 bg-white p-6 overflow-y-auto">
                <div className="max-w-4xl mx-auto">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h2 className="text-2xl font-bold text-black">Templates de Mensagens</h2>
                      <p className="text-gray-600 mt-1">Configure mensagens automáticas e semi-automáticas</p>
                    </div>
                    <Button className="bg-black text-white hover:bg-gray-900">
                      <Plus className="w-4 h-4 mr-2" />
                      Novo Template
                    </Button>
                  </div>

                  <div className="space-y-4">
                    {templates.map((template) => (
                      <div
                        key={template.id}
                        className="border border-gray-200 rounded-xl p-6 hover:border-black transition-colors"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="text-lg font-bold text-black">{template.name}</h3>
                              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                template.type === "automatic"
                                  ? "bg-black text-white"
                                  : "bg-gray-200 text-gray-700"
                              }`}>
                                {template.type === "automatic" ? (
                                  <>
                                    <Zap className="w-3 h-3 inline mr-1" />
                                    Automática
                                  </>
                                ) : (
                                  <>
                                    <Edit className="w-3 h-3 inline mr-1" />
                                    Semi-automática
                                  </>
                                )}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <Clock className="w-4 h-4" />
                              <span>{template.trigger}</span>
                            </div>
                          </div>
                          <Button variant="outline" size="sm" className="border-gray-300">
                            Editar
                          </Button>
                        </div>
                        
                        <div className="bg-gray-50 rounded-lg p-4">
                          <p className="text-sm text-gray-700 whitespace-pre-wrap">
                            {template.content}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
