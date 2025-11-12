import type { Meta, StoryObj } from '@storybook/nextjs';
import { AnimatedLink } from './AnimatedLink';

const meta = {
  title: 'Components/AnimatedLink',
  component: AnimatedLink,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AnimatedLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: '/commitments',
    text: 'En savoir plus',
  },
};

export const WithArrowRight: Story = {
  args: {
    href: '/commitments',
    text: 'En savoir plus',
    showArrow: true,
    arrowPosition: 'right',
  },
};

export const WithArrowLeft: Story = {
  args: {
    href: '/commitments',
    text: 'En savoir plus',
    showArrow: true,
    arrowPosition: 'left',
  },
};

export const PrimaryVariant: Story = {
  args: {
    href: '/commitments',
    text: 'Découvrir nos engagements',
    showArrow: true,
    arrowPosition: 'right',
    variant: 'primary',
  },
};

export const SecondaryVariant: Story = {
  args: {
    href: '/commitments',
    text: 'Découvrir nos engagements',
    showArrow: true,
    arrowPosition: 'right',
    variant: 'secondary',
  },
};

export const WhiteVariant: Story = {
  args: {
    href: '/commitments',
    text: 'En savoir plus',
    showArrow: true,
    arrowPosition: 'right',
    variant: 'white',
  },
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#333' },
      ],
    },
  },
};

export const NoArrow: Story = {
  args: {
    href: '/commitments',
    text: 'Lire la suite',
    showArrow: false,
  },
};

export const ArrowLeftWhite: Story = {
  args: {
    href: '/brands',
    text: 'Retour',
    showArrow: true,
    arrowPosition: 'left',
    variant: 'white',
  },
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#333' },
      ],
    },
  },
};

export const LongText: Story = {
  args: {
    href: '/sustainability',
    text: 'Découvrez notre rapport de développement durable',
    showArrow: true,
    arrowPosition: 'right',
    variant: 'primary',
  },
};
