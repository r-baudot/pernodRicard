import type { Meta, StoryObj } from '@storybook/nextjs';
import { BrandGrid } from './BrandGrid';
import { Brand } from '@/types/brand';

const mockBrands: Brand[] = [
  {
    id: '1',
    title: 'Absolut',
    slug: 'absolut',
    description: 'Absolut Vodka est une marque de vodka suédoise premium, produite depuis 1879.',
    image_url: '/images/brands/absolut.jpg',
    category: 'Vodka',
    display_order: 1,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '2',
    title: 'Ballantine\'s',
    slug: 'ballantines',
    description: 'Ballantine\'s est une marque écossaise de whisky, créée en 1827.',
    image_url: '/images/brands/ballantines.jpg',
    category: 'Whisky',
    display_order: 2,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '3',
    title: 'Chivas Regal',
    slug: 'chivas-regal',
    description: 'Chivas Regal est un whisky écossais de renommée mondiale.',
    image_url: '/images/brands/chivas.jpg',
    category: 'Whisky',
    display_order: 3,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '4',
    title: 'Jameson',
    slug: 'jameson',
    description: 'Jameson est la marque de whiskey irlandais la plus vendue au monde.',
    image_url: '/images/brands/jameson.jpg',
    category: 'Whiskey',
    display_order: 4,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
];

const meta = {
  title: 'Components/BrandGrid',
  component: BrandGrid,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BrandGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    brands: mockBrands,
  },
};

export const FewBrands: Story = {
  args: {
    brands: mockBrands.slice(0, 2),
  },
};
