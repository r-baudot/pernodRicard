import { NavigationItem } from '@/types';

export const navigationData: NavigationItem[] = [
  {
    label: 'Our Group',
    href: '/group',
    subItems: [
      { label: 'About Us', href: '/group/about' },
      { label: 'Leadership', href: '/group/leadership' },
      { label: 'History', href: '/group/history' },
      { label: 'Strategy', href: '/group/strategy' },
    ],
  },
  {
    label: 'Global Presence',
    href: '/presence',
    subItems: [
      { label: 'Worldwide', href: '/presence/worldwide' },
      { label: 'Production Sites', href: '/presence/production' },
      { label: 'Innovation', href: '/presence/innovation' },
    ],
  },
  {
    label: 'Brands',
    href: '/brands',
    subItems: [
      { label: 'All Brands', href: '/brands' },
      { label: 'Premium Spirits', href: '/brands/spirits' },
      { label: 'Wines', href: '/brands/wines' },
    ],
    featured: {
      title: 'Discover Our Portfolio',
      description: 'Explore our collection of premium brands',
      imageUrl: '/images/brands-featured.jpg',
    },
  },
  {
    label: 'Commitments',
    href: '/commitments',
    subItems: [
      { label: 'Sustainability', href: '/commitments/sustainability' },
      { label: 'Responsible Consumption', href: '/commitments/responsible' },
      { label: 'Diversity & Inclusion', href: '/commitments/diversity' },
    ],
  },
  {
    label: 'Media',
    href: '/media',
    subItems: [
      { label: 'Press Releases', href: '/media/press' },
      { label: 'News', href: '/media/news' },
      { label: 'Media Kit', href: '/media/kit' },
    ],
  },
  {
    label: 'Investors',
    href: '/investors',
    subItems: [
      { label: 'Financial Information', href: '/investors/financials' },
      { label: 'Annual Reports', href: '/investors/reports' },
      { label: 'Stock Information', href: '/investors/stock' },
    ],
  },
  {
    label: 'Careers',
    href: '/careers',
    subItems: [
      { label: 'Join Us', href: '/careers/jobs' },
      { label: 'Life at Pernod Ricard', href: '/careers/life' },
      { label: 'Benefits', href: '/careers/benefits' },
    ],
  },
];
