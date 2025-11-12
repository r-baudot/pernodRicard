# Supabase Setup for Pernod Ricard

## ✅ What's Been Configured

1. **Supabase Client** - Installed and configured in `lib/supabase/client.ts`
2. **Environment Variables** - Created `.env.local` with your credentials
3. **Database Schema** - SQL schema ready in `supabase/brands_schema.sql`
4. **TypeScript Types** - Brand types defined in `types/brand.ts`
5. **API Service** - Brand CRUD operations in `lib/services/brands.ts`
6. **Updated Components** - BrandGrid and page.tsx now use Supabase data

## 🔧 Next Steps

### 1. Run the SQL Schema in Supabase

1. Go to your Supabase dashboard: https://supabase.com/dashboard/project/frnibsbqopcaheohuhiu
2. Click on "SQL Editor" in the left sidebar
3. Click "New query"
4. Copy and paste the contents of `supabase/brands_schema.sql`
5. Click "Run" to execute the SQL

This will:
- Create the `brands` table
- Add 10 sample brands (Absolut, Ballantine's, Chivas, etc.)
- Set up Row Level Security (RLS) policies
- Create indexes for better performance

### 2. Add Brand Images

The SQL schema references these image paths. You need to add images to `/public/images/brands/`:

```
/images/brands/absolut.jpg
/images/brands/ballantines.jpg
/images/brands/chivas.jpg
/images/brands/jameson.jpg
/images/brands/martell.jpg
/images/brands/glenlivet.jpg
/images/brands/perrier-jouet.jpg
/images/brands/ricard.jpg
/images/brands/malibu.jpg
/images/brands/beefeater.jpg
```

You can:
- Download brand logos from the Pernod Ricard website
- Use placeholder images temporarily
- Update the `image_url` in the database after running the SQL

### 3. Test the Connection

After running the SQL:

```bash
npm run dev
```

Visit http://localhost:3000 and you should see the brands section populated with data from Supabase!

## 📝 Database Schema

```sql
brands (
  id UUID PRIMARY KEY
  title TEXT NOT NULL
  slug TEXT NOT NULL UNIQUE
  description TEXT
  image_url TEXT NOT NULL
  category TEXT
  display_order INTEGER
  created_at TIMESTAMP
  updated_at TIMESTAMP
)
```

## 🔐 Security

- **Row Level Security (RLS)** is enabled
- **Public read access** is allowed (anyone can view brands)
- **Authenticated users** can insert/update/delete (for future admin panel)

## 📚 Available API Functions

In `lib/services/brands.ts`:

- `getBrands()` - Fetch all brands ordered by display_order
- `getBrandBySlug(slug)` - Fetch single brand by slug
- `getBrandsByCategory(category)` - Fetch brands by category
- `insertBrand(brand)` - Add new brand
- `updateBrand(id, updates)` - Update existing brand
- `deleteBrand(id)` - Delete brand

## 🎯 Using in Components

```typescript
// Server Component (recommended)
import { getBrands } from '@/lib/services/brands';

export default async function Page() {
  const brands = await getBrands();
  return <BrandGrid brands={brands} />;
}

// Client Component
'use client';
import { useEffect, useState } from 'react';
import { getBrands } from '@/lib/services/brands';

export default function Page() {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    getBrands().then(setBrands);
  }, []);

  return <BrandGrid brands={brands} />;
}
```

## 🚀 Benefits of This Setup

1. **No RTK Query complexity** - Direct Supabase client is simpler
2. **Server-side rendering** - Brands load on the server for better SEO
3. **Automatic caching** - Next.js caches server component data
4. **Real-time ready** - Can easily add Supabase real-time subscriptions
5. **TypeScript safety** - Full type checking for brand data
6. **Row Level Security** - Built-in security at the database level

## 📊 Sample Data

The schema includes 10 popular Pernod Ricard brands:
- Absolut (Vodka)
- Ballantine's (Whisky)
- Chivas Regal (Whisky)
- Jameson (Whiskey)
- Martell (Cognac)
- The Glenlivet (Whisky)
- Perrier-Jouët (Champagne)
- Ricard (Spiritueux)
- Malibu (Rhum)
- Beefeater (Gin)

## 🔄 Updating Brand Data

You can update brands directly in Supabase:
1. Go to Table Editor in your dashboard
2. Click on the `brands` table
3. Edit any row directly
4. Changes will reflect immediately on your website!

## 🛠️ Future Enhancements

- Add admin panel to manage brands
- Add real-time subscriptions for live updates
- Add image upload to Supabase Storage
- Add search and filter functionality
- Add brand detail pages
