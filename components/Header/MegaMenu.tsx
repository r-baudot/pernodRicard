"use client";

import Link from 'next/link';
import Image from 'next/image';
import { NavigationItem } from '@/types';

interface MegaMenuProps {
  items: NavigationItem[];
  featured?: {
    title: string;
    description: string;
    imageUrl: string;
  };
}

export function MegaMenu({ items, featured }: MegaMenuProps) {
  return (
    <div className="absolute top-full left-0 mt-2 w-screen max-w-md bg-white shadow-lg rounded-lg p-6 animate-fadeIn">
      <div className="grid grid-cols-1 gap-4">
        {items.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="block p-3 rounded-md hover:bg-gray-50 transition-colors"
          >
            <div className="font-medium text-gray-900">{item.label}</div>
          </Link>
        ))}

        {featured && (
          <div className="mt-4 pt-4 border-t">
            <div className="relative h-32 mb-2 rounded-md overflow-hidden">
              <Image
                src={featured.imageUrl}
                alt={featured.title}
                fill
                className="object-cover"
              />
            </div>
            <h4 className="font-medium text-gray-900">{featured.title}</h4>
            <p className="text-sm text-gray-600">{featured.description}</p>
          </div>
        )}
      </div>
    </div>
  );
}
