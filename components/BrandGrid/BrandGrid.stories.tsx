import type { Meta, StoryObj } from '@storybook/nextjs';
import { BrandGrid } from './BrandGrid';
import { brandsData } from '@/data/brands';

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
    brands: brandsData,
  },
};

export const FewBrands: Story = {
  args: {
    brands: brandsData.slice(0, 4),
  },
};
