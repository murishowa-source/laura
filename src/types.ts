export interface Testimonial {
  id: string;
  name: string;
  age: number;
  city: string;
  role: string;
  text: string;
  avatarUrl: string;
  rating: number;
}

export interface BentoItem {
  id: string;
  title: string;
  subtitle?: string;
  icon: string; // Name of Lucide icon
  description: string;
  size: "large" | "medium" | "small" | "wide";
  badge?: string;
  colorClass?: string;
}

export interface ReflectionCard {
  id: string;
  label: string; // The button label (e.g., "Busca por Sentido")
  emoji: string;
  title: string;
  text: string;
  quote: string;
  author: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface BookingRequest {
  id: string;
  name: string;
  email: string;
  phone: string;
  ageGroup: string;
  message: string;
  preferredPeriod: string;
  createdAt: string;
}
