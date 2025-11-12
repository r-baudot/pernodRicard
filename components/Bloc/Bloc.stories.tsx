import type { Meta, StoryObj } from '@storybook/nextjs';
import { Bloc } from './Bloc';

const meta = {
  title: 'Components/Bloc',
  component: Bloc,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Bloc>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultText =
  "La convivialité est au cœur de tout ce que nous faisons, de nos vignobles à nos distilleries, en passant par nos sites de production ainsi qu'au sein de nos bureaux présents à travers le monde. Nous nous engageons à offrir à nos consommateurs des produits et des expériences à la pointe de l'innovation, tout en veillant à garantir un avenir durable, respectueux de notre environnement et riche de nos relations humaines.";

export const Default: Story = {
  args: {
    text: defaultText,
  },
};

export const PrimaryBackground: Story = {
  args: {
    text: defaultText,
    backgroundColor: '#EA4E14',
    textColor: '#FFFFFF',
  },
};

export const BurgundyBackground: Story = {
  args: {
    text: defaultText,
    backgroundColor: '#800020',
    textColor: '#FFFFFF',
  },
};

export const GoldBackground: Story = {
  args: {
    text: defaultText,
    backgroundColor: '#d4af37',
    textColor: '#000000',
  },
};

export const BlueBackground: Story = {
  args: {
    text: defaultText,
    backgroundColor: '#5fa4d0',
    textColor: '#FFFFFF',
  },
};

export const DarkBackground: Story = {
  args: {
    text: defaultText,
    backgroundColor: '#1a1a1a',
    textColor: '#FFFFFF',
  },
};

export const LightGrayBackground: Story = {
  args: {
    text: defaultText,
    backgroundColor: '#f5f5f5',
    textColor: '#333333',
  },
};

export const ShortText: Story = {
  args: {
    text: "Créateurs de Convivialité depuis 1975.",
    backgroundColor: '#EA4E14',
    textColor: '#FFFFFF',
  },
};

export const CustomPadding: Story = {
  args: {
    text: defaultText,
    backgroundColor: '#800020',
    textColor: '#FFFFFF',
    classNameTxt: 'text-xl p-12',
  },
};

export const WithMaxWidth800: Story = {
  args: {
    text: defaultText,
    backgroundColor: '#EA4E14',
    textColor: '#FFFFFF',
    maxWidth: '800px',
  },
};

export const WithMaxWidth1024: Story = {
  args: {
    text: defaultText,
    backgroundColor: '#5fa4d0',
    textColor: '#FFFFFF',
    maxWidth: '1024px',
  },
};

export const WithMaxWidth600: Story = {
  args: {
    text: defaultText,
    backgroundColor: '#d4af37',
    textColor: '#000000',
    maxWidth: '600px',
  },
};
