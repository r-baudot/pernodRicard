export interface Brand {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  image_url: string;
  category: string | null;
  display_order: number;
  created_at: string;
  updated_at: string;
}

export interface BrandInsert {
  title: string;
  slug: string;
  description?: string;
  image_url: string;
  category?: string;
  display_order?: number;
}
