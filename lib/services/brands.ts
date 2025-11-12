import { supabase } from '../supabase/client';
import { Brand, BrandInsert } from '@/types/brand';

/**
 * Fetch all brands from Supabase, ordered by display_order
 * Returns empty array if connection fails (graceful degradation)
 */
export async function getBrands(): Promise<Brand[]> {
  try {
    const { data, error } = await supabase
      .from('brands')
      .select('*')
      .order('display_order', { ascending: true });

    if (error) {
      console.error('Error fetching brands:', error);
      return []; // Return empty array instead of throwing
    }

    return data || [];
  } catch (error) {
    console.error('Supabase connection error:', error);
    return []; // Graceful fallback if Supabase is down
  }
}

/**
 * Fetch a single brand by slug
 * Returns null if not found or connection fails
 */
export async function getBrandBySlug(slug: string): Promise<Brand | null> {
  try {
    const { data, error } = await supabase
      .from('brands')
      .select('*')
      .eq('slug', slug)
      .single();

    if (error) {
      console.error('Error fetching brand:', error);
      return null;
    }

    return data;
  } catch (error) {
    console.error('Supabase connection error:', error);
    return null;
  }
}

/**
 * Fetch brands by category
 * Returns empty array if connection fails (graceful degradation)
 */
export async function getBrandsByCategory(category: string): Promise<Brand[]> {
  try {
    const { data, error } = await supabase
      .from('brands')
      .select('*')
      .eq('category', category)
      .order('display_order', { ascending: true });

    if (error) {
      console.error('Error fetching brands by category:', error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error('Supabase connection error:', error);
    return [];
  }
}

/**
 * Insert a new brand
 */
export async function insertBrand(brand: BrandInsert): Promise<Brand | null> {
  const { data, error } = await supabase
    .from('brands')
    .insert(brand)
    .select()
    .single();

  if (error) {
    console.error('Error inserting brand:', error);
    throw error;
  }

  return data;
}

/**
 * Update an existing brand
 */
export async function updateBrand(id: string, updates: Partial<BrandInsert>): Promise<Brand | null> {
  const { data, error } = await supabase
    .from('brands')
    .update({ ...updates, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error('Error updating brand:', error);
    throw error;
  }

  return data;
}

/**
 * Delete a brand
 */
export async function deleteBrand(id: string): Promise<boolean> {
  const { error } = await supabase
    .from('brands')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error deleting brand:', error);
    return false;
  }

  return true;
}
