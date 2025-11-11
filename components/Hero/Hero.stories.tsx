import type { Meta, StoryObj } from '@storybook/nextjs';
import { Hero } from './Hero';

const meta = {
  title: 'Components/Hero',
  component: Hero,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockSlides = [
  {
    id: '1',
    title: 'Créateurs de Convivialité',
    subtitle: 'Building a more sustainable and responsible future together',
    imageUrl: '/images/homepage/slider/1.jpg',
    ctaText: 'Discover Our Story',
    ctaLink: '/about',
  },
  {
    id: '2',
    title: 'Premium Spirits & Wines',
    subtitle: 'A portfolio of exceptional brands from around the world',
    imageUrl: '/images/homepage/slider/2.jpg',
    ctaText: 'Explore Our Brands',
    ctaLink: '/brands',
  },
  {
    id: '3',
    title: 'Sustainability Commitment',
    subtitle: 'Preserving resources for future generations',
    imageUrl: '/images/homepage/slider/1.jpg',
    ctaText: 'Learn More',
    ctaLink: '/commitments',
  },
];

export const Default: Story = {
  args: {
    slides: mockSlides,
    autoPlayInterval: 5000,
    showProgressBar: true,
    showControls: true,
    controlsPosition: 'right',
  },
};

export const FastAutoplay: Story = {
  args: {
    slides: mockSlides,
    autoPlayInterval: 2000,
    showProgressBar: true,
    showControls: true,
    controlsPosition: 'right',
  },
};

export const SlowAutoplay: Story = {
  args: {
    slides: mockSlides,
    autoPlayInterval: 8000,
    showProgressBar: true,
    showControls: true,
    controlsPosition: 'right',
  },
};

export const WithoutProgressBar: Story = {
  args: {
    slides: mockSlides,
    autoPlayInterval: 5000,
    showProgressBar: false,
    showControls: true,
    controlsPosition: 'right',
  },
};

export const WithoutControls: Story = {
  args: {
    slides: mockSlides,
    autoPlayInterval: 5000,
    showProgressBar: true,
    showControls: false,
    controlsPosition: 'right',
  },
};

export const ControlsOnLeft: Story = {
  args: {
    slides: mockSlides,
    autoPlayInterval: 5000,
    showProgressBar: true,
    showControls: true,
    controlsPosition: 'left',
  },
};

export const MinimalSlider: Story = {
  args: {
    slides: mockSlides,
    autoPlayInterval: 5000,
    showProgressBar: false,
    showControls: false,
    controlsPosition: 'right',
  },
};

export const SingleSlide: Story = {
  args: {
    slides: [mockSlides[0]],
    autoPlayInterval: 5000,
    showProgressBar: true,
    showControls: true,
    controlsPosition: 'right',
  },
};

export const TwoSlides: Story = {
  args: {
    slides: [mockSlides[0], mockSlides[1]],
    autoPlayInterval: 5000,
    showProgressBar: true,
    showControls: true,
    controlsPosition: 'right',
  },
};
