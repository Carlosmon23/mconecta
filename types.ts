export type UserRole = 'guest' | 'client' | 'artist' | 'representative';

export interface User {
  id: string;
  name: string;
  role: UserRole;
  avatarUrl: string;
  followedArtistIds?: string[]; // New: Bookmarks
  subscriptionStatus?: 'active' | 'inactive' | 'trial';
}

export type ArtistType = 'solo' | 'duo' | 'trio' | 'band' | 'autoral' | 'cover' | 'instrumentalist';

export type ArtistFormation = 'solo' | 'duo' | 'trio' | 'band' | 'orchestra';

export interface Artist {
  id: string;
  name: string;
  artistType?: ArtistType;
  formation?: ArtistFormation; // New
  representativeId?: string;
  category: string;
  location: string;
  eventTypes: string[]; // e.g. 'wedding', 'corporate'
  projectTypes: string[]; // e.g. 'authorial', 'cover'
  priceRange?: { min: number; max: number };
  availability: string; // e.g. 'weekends', 'flexible'
  price: string;
  rating: number;
  reviewCount: number;
  imageUrl: string;
  verified: boolean;
  description: string;
  equipment: string[];
  reviews: Review[];
}

export interface Representative {
  id: string;
  name: string;
  companyName?: string;
  artistsManaged: string[];
  verified: boolean;
}

export interface Review {
  id: string;
  author: string;
  date: string;
  text: string;
  avatarUrl: string;
}

export type ActivityType = 'new_artist' | 'new_video' | 'open_project' | 'artist_update';

export interface ActivityItem {
  id: string;
  artistId?: string;
  type: ActivityType;
  title: string;
  description: string;
  timestamp: string;
  imageUrl?: string;
  location?: string; // For searching matches
}

export interface Booking {
  id: string;
  artistName: string;
  artistImage: string;
  date: string;
  status: 'confirmed' | 'pending' | 'completed' | 'cancelled';
  price: string;
  eventName: string;
}

export interface ToastNotification {
  id: string;
  message: string;
  type: 'success' | 'info';
}

export type ChatContextType = 'event' | 'project' | 'collab';

export interface ChatMessage {
  id: string;
  senderId: string;
  text: string;
  timestamp: string;
  isSystem?: boolean;
}

export interface ChatSession {
  id: string;
  participants: string[]; // [userId, artistId]
  context: {
    type: ChatContextType;
    date?: string;
    location?: string;
    notes?: string;
    budget?: string;
  };
  messages: ChatMessage[];
  lastMessageAt: string;
  status: 'active' | 'archived';
}