-- Create brands table
CREATE TABLE IF NOT EXISTS brands (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  image_url TEXT NOT NULL,
  category TEXT,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index on slug for faster lookups
CREATE INDEX IF NOT EXISTS brands_slug_idx ON brands(slug);

-- Create index on display_order for sorting
CREATE INDEX IF NOT EXISTS brands_display_order_idx ON brands(display_order);

-- Enable Row Level Security (RLS)
ALTER TABLE brands ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access
CREATE POLICY "Allow public read access" ON brands
  FOR SELECT
  USING (true);

-- Create policy to allow authenticated users to insert (optional - for admin panel later)
CREATE POLICY "Allow authenticated insert" ON brands
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Create policy to allow authenticated users to update (optional - for admin panel later)
CREATE POLICY "Allow authenticated update" ON brands
  FOR UPDATE
  TO authenticated
  USING (true);

-- Create policy to allow authenticated users to delete (optional - for admin panel later)
CREATE POLICY "Allow authenticated delete" ON brands
  FOR DELETE
  TO authenticated
  USING (true);

-- Insert sample brands data based on Pernod Ricard website
INSERT INTO brands (title, slug, description, image_url, category, display_order) VALUES
  ('Absolut', 'absolut', 'Absolut Vodka est une marque de vodka suédoise premium, produite depuis 1879.', '/images/brands/absolut.jpg', 'Vodka', 1),
  ('Ballantine''s', 'ballantines', 'Ballantine''s est une marque écossaise de whisky, créée en 1827.', '/images/brands/ballantines.jpg', 'Whisky', 2),
  ('Chivas Regal', 'chivas-regal', 'Chivas Regal est un whisky écossais de renommée mondiale.', '/images/brands/chivas.jpg', 'Whisky', 3),
  ('Jameson', 'jameson', 'Jameson est la marque de whiskey irlandais la plus vendue au monde.', '/images/brands/jameson.jpg', 'Whiskey', 4),
  ('Martell', 'martell', 'Martell est l''une des plus anciennes maisons de cognac, fondée en 1715.', '/images/brands/martell.jpg', 'Cognac', 5),
  ('The Glenlivet', 'the-glenlivet', 'The Glenlivet est un single malt scotch whisky des Highlands.', '/images/brands/glenlivet.jpg', 'Whisky', 6),
  ('Perrier-Jouët', 'perrier-jouet', 'Perrier-Jouët est une maison de champagne prestigieuse fondée en 1811.', '/images/brands/perrier-jouet.jpg', 'Champagne', 7),
  ('Ricard', 'ricard', 'Ricard est la marque française d''anisé la plus connue au monde.', '/images/brands/ricard.jpg', 'Spiritueux', 8),
  ('Malibu', 'malibu', 'Malibu est une liqueur de rhum à la noix de coco d''origine caribéenne.', '/images/brands/malibu.jpg', 'Rhum', 9),
  ('Beefeater', 'beefeater', 'Beefeater est un gin londonien premium créé en 1820.', '/images/brands/beefeater.jpg', 'Gin', 10)
ON CONFLICT (slug) DO NOTHING;
