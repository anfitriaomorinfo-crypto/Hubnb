"use client";

import { TrendingUp, TrendingDown } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  change?: number;
  icon: React.ReactNode;
  format?: "currency" | "percentage" | "number";
}

export function StatCard({ title, value, change, icon, format = "number" }: StatCardProps) {
  const isPositive = change && change > 0;
  const isNegative = change && change < 0;

  const formatValue = () => {
    if (format === "currency") return `R$ ${value}`;
    if (format === "percentage") return `${value}%`;
    return value;
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm text-gray-600 font-medium">{title}</p>
          <p className="text-3xl font-bold text-black mt-2">{formatValue()}</p>
          
          {change !== undefined && (
            <div className="flex items-center gap-1 mt-2">
              {isPositive && <TrendingUp className="w-4 h-4 text-green-600" />}
              {isNegative && <TrendingDown className="w-4 h-4 text-red-600" />}
              <span
                className={`text-sm font-medium ${
                  isPositive ? "text-green-600" : isNegative ? "text-red-600" : "text-gray-600"
                }`}
              >
                {isPositive ? "+" : ""}{change}% vs mês anterior
              </span>
            </div>
          )}
        </div>
        
        <div className="bg-black text-white p-3 rounded-lg">
          {icon}
        </div>
      </div>
    </div>
  );
}

interface PlatformStatusProps {
  platform: string;
  isConnected: boolean;
  icon: React.ReactNode;
  accountName?: string;
}

export function PlatformStatus({ platform, isConnected, icon, accountName }: PlatformStatusProps) {
  return (
    <div className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow duration-200">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-black text-white rounded-lg flex items-center justify-center">
          {icon}
        </div>
        <div>
          <p className="font-medium text-black">{platform}</p>
          {accountName && <p className="text-xs text-gray-500">{accountName}</p>}
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        <div
          className={`w-2 h-2 rounded-full ${
            isConnected ? "bg-green-500" : "bg-gray-300"
          }`}
        />
        <span className="text-sm text-gray-600">
          {isConnected ? "Conectado" : "Desconectado"}
        </span>
      </div>
    </div>
  );
}
