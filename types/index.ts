// Brand type moved to types/brand.ts - import from there instead
export type { Brand, BrandInsert } from './brand';

export interface NavigationItem {
  label: string;
  href: string;
  subItems?: NavigationItem[];
  featured?: {
    title: string;
    description: string;
    imageUrl: string;
  };
}

export interface HeroSlide {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  ctaText?: string;
  ctaLink?: string;
}

export interface ContentSection {
  id: string;
  type: 'hero' | 'brands' | 'report' | 'roadmap' | 'media';
  title: string;
  content: any;
}
