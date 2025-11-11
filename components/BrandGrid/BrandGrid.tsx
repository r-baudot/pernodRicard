import Image from 'next/image';
import Link from 'next/link';
import { Brand } from '@/types';

interface BrandGridProps {
  brands: Brand[];
}

export function BrandGrid({ brands }: BrandGridProps) {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif font-bold text-center mb-4">
          Our Brands
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Discover our portfolio of premium spirits and wines
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {brands.map((brand) => (
            <Link
              key={brand.id}
              href={`/brands/${brand.id}`}
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={brand.imageUrl}
                  alt={brand.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">{brand.name}</h3>
                <p className="text-sm text-gray-500 mb-2">{brand.country}</p>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {brand.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
