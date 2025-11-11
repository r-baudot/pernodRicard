import type { Meta, StoryObj } from '@storybook/nextjs';
import { DownloadLink } from './DownloadLink';

const meta = {
  title: 'Components/DownloadLink',
  component: DownloadLink,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DownloadLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'Télécharger le rapport annuel',
    file: '/pdf/Pernod_Ricard_IAR25_FRENCH.pdf',
  },
};

export const EnglishVersion: Story = {
  args: {
    text: 'Download Annual Report',
    file: '/pdf/Pernod_Ricard_IAR25_ENGLISH.pdf',
  },
};

export const ShortText: Story = {
  args: {
    text: 'Télécharger',
    file: '/pdf/document.pdf',
  },
};

export const LongText: Story = {
  args: {
    text: 'Télécharger le rapport annuel intégré 2024/25',
    file: '/pdf/Pernod_Ricard_IAR25_FRENCH.pdf',
  },
};

export const WithCustomClass: Story = {
  args: {
    text: 'Télécharger le rapport',
    file: '/pdf/report.pdf',
    className: 'text-lg font-semibold',
  },
};
