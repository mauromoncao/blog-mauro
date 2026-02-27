import { createTRPCReact } from "@trpc/react-query";

// Tipos mínimos necessários para o blog público
// O painel admin (blog-painel-admin) é a fonte dos dados
export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  subtitle?: string | null;
  excerpt?: string | null;
  content?: string | null;
  coverImage?: string | null;
  coverImageAlt?: string | null;
  videoUrl?: string | null;
  authorName?: string | null;
  category?: string | null;
  tags?: string | null;
  metaTitle?: string | null;
  metaDescription?: string | null;
  metaKeywords?: string | null;
  ogImage?: string | null;
  ctaText?: string | null;
  ctaUrl?: string | null;
  status: string;
  isFeatured: boolean;
  isPublished: boolean;
  publishedAt?: string | Date | null;
  createdAt: string | Date;
  updatedAt: string | Date;
}

export interface BlogCategory {
  id: number;
  slug: string;
  name: string;
  description?: string | null;
  sortOrder: number;
}

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
  category?: string | null;
  isPublished: boolean;
  sortOrder: number;
}

export interface SiteSetting {
  settingKey: string;
  settingValue?: string | null;
}
