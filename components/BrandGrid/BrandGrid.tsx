'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Brand } from '@/types/brand';
import { useState } from 'react';

interface BrandGridProps {
  brands: Brand[];
}

export function BrandGrid({ brands }: BrandGridProps) {
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set());
  return (
    <section className="py-16 bg-secondary">
      <div className="w-full px-4 lg:px-8">
        <h2 className="text-4xl font-serif font-bold text-center mb-4">
          Nos Marques
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Découvrez notre portfolio de spiritueux et vins premium
        </p>

        {brands.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              Aucune marque disponible pour le moment.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {brands.map((brand) => (
              <Link
                key={brand.id}
                href={`/brands/${brand.slug}`}
                className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64 overflow-hidden bg-gray-200 flex items-center justify-center">
                  {!failedImages.has(brand.id) ? (
                    <Image
                      src={brand.image_url}
                      alt={brand.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={() => {
                        setFailedImages(prev => new Set(prev).add(brand.id));
                      }}
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center h-full w-full">
                      <span className="text-gray-400 text-lg font-medium">
                        {brand.title}
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1">{brand.title}</h3>
                  {brand.category && (
                    <p className="text-sm text-gray-500 mb-2">{brand.category}</p>
                  )}
                  {brand.description && (
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {brand.description}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
