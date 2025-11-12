// Types do Sistema HUBNB

export interface Property {
  id: string;
  name: string;
  address: string;
  type: 'apartment' | 'house' | 'studio' | 'condo';
  maxGuests: number;
  bedrooms: number;
  bathrooms: number;
  imageUrl: string;
  status: 'active' | 'paused' | 'pending';
}

export interface Reservation {
  id: string;
  propertyId: string;
  propertyName: string;
  guestName: string;
  guestCount: number;
  checkIn: string;
  checkOut: string;
  platform: Platform;
  status: 'confirmed' | 'pending' | 'cancelled';
  totalPrice: number;
}

export interface Message {
  id: string;
  propertyId: string;
  guestName: string;
  platform: Platform;
  content: string;
  timestamp: string;
  isRead: boolean;
  isFromHost: boolean;
}

export type Platform = 'airbnb' | 'booking' | 'vrbo' | 'kayak' | 'decolar';

export interface PlatformConnection {
  platform: Platform;
  isConnected: boolean;
  accountName?: string;
  lastSync?: string;
}

export interface PerformanceMetrics {
  occupancyRate: number;
  averageDailyRate: number;
  totalRevenue: number;
  totalReservations: number;
  activeListings: number;
  unreadMessages: number;
}

export interface PriceRule {
  id: string;
  propertyId: string;
  basePrice: number;
  isAutomated: boolean;
  lastUpdated: string;
}
