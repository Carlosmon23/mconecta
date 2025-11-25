export type UserRole = 'guest' | 'client' | 'artist';

export interface User {
  id: string;
  name: string;
  role: UserRole;
  avatarUrl: string;
}

export interface Artist {
  id: string;
  name: string;
  category: string;
  location: string;
  price: string;
  rating: number;
  reviewCount: number;
  imageUrl: string;
  verified: boolean;
  description: string;
  equipment: string[];
  reviews: Review[];
}

export interface Review {
  id: string;
  author: string;
  date: string;
  text: string;
  avatarUrl: string;
}

export interface SocialPost {
  id: string;
  artistId: string; // Linked for navigation
  userHandle: string;
  userName: string;
  userAvatar: string;
  content: string;
  imageUrl: string;
  likes: number;
  comments: number;
  type: 'video' | 'image';
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