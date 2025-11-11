export interface Brand {
  id: string;
  name: string;
  description: string;
  country: string;
  imageUrl: string;
  category: string;
}

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
