import type { Meta, StoryObj } from '@storybook/nextjs';
import { Bloc2Columns } from './Bloc2Columns';

const meta = {
  title: 'Components/Bloc2Columns',
  component: Bloc2Columns,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Bloc2Columns>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultContent = (
  <div>
    <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
      Créateurs de Convivialité
    </h2>
    <p className="text-base md:text-lg leading-relaxed mb-4">
      La convivialité est au cœur de tout ce que nous faisons, de nos vignobles
      à nos distilleries, en passant par nos sites de production ainsi qu&apos;au
      sein de nos bureaux présents à travers le monde.
    </p>
    <p className="text-base md:text-lg leading-relaxed">
      Nous nous engageons à offrir à nos consommateurs des produits et des
      expériences à la pointe de l&apos;innovation, tout en veillant à garantir un
      avenir durable, respectueux de notre environnement et riche de nos
      relations humaines.
    </p>
  </div>
);

export const Default: Story = {
  args: {
    children: defaultContent,
    imageSrc: '/images/homepage/13.jpg.avif',
    imageAlt: 'Pernod Ricard',
  },
};

export const ImageOnLeft: Story = {
  args: {
    children: defaultContent,
    imageSrc: '/images/homepage/13.jpg.avif',
    imageAlt: 'Pernod Ricard',
    imagePosition: 'left',
  },
};

export const PrimaryBackground: Story = {
  args: {
    children: (
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
          Notre Engagement
        </h2>
        <p className="text-base md:text-lg leading-relaxed">
          Depuis 1975, nous créons des moments de convivialité à travers nos
          marques emblématiques et nos expériences uniques.
        </p>
      </div>
    ),
    imageSrc: '/images/homepage/13.jpg.avif',
    imageAlt: 'Pernod Ricard',
    backgroundColor: '#EA4E14',
    textColor: '#FFFFFF',
  },
};

export const BurgundyBackground: Story = {
  args: {
    children: defaultContent,
    imageSrc: '/images/homepage/13.jpg.avif',
    imageAlt: 'Pernod Ricard',
    backgroundColor: '#800020',
    textColor: '#FFFFFF',
    imagePosition: 'left',
  },
};

export const WithMaxWidth1024: Story = {
  args: {
    children: defaultContent,
    imageSrc: '/images/homepage/13.jpg.avif',
    imageAlt: 'Pernod Ricard',
    backgroundColor: '#5fa4d0',
    textColor: '#FFFFFF',
    maxWidth: '1024px',
  },
};

export const WithMaxWidth800: Story = {
  args: {
    children: (
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
          Innovation et Tradition
        </h2>
        <p className="text-base md:text-lg leading-relaxed">
          Nos marques allient savoir-faire traditionnel et innovation pour
          créer des expériences exceptionnelles.
        </p>
      </div>
    ),
    imageSrc: '/images/homepage/13.jpg.avif',
    imageAlt: 'Pernod Ricard',
    backgroundColor: '#d4af37',
    textColor: '#000000',
    maxWidth: '800px',
    imagePosition: 'left',
  },
};

export const DarkBackground: Story = {
  args: {
    children: defaultContent,
    imageSrc: '/images/homepage/13.jpg.avif',
    imageAlt: 'Pernod Ricard',
    backgroundColor: '#1a1a1a',
    textColor: '#FFFFFF',
  },
};

export const LightBackground: Story = {
  args: {
    children: (
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight text-gray-900">
          Un Héritage d&apos;Excellence
        </h2>
        <p className="text-base md:text-lg leading-relaxed text-gray-700">
          Depuis près de 50 ans, Pernod Ricard cultive l&apos;art de la convivialité
          et du partage à travers ses marques premium et prestige.
        </p>
      </div>
    ),
    imageSrc: '/images/homepage/13.jpg.avif',
    imageAlt: 'Pernod Ricard',
    backgroundColor: '#f5f5f5',
    imagePosition: 'left',
  },
};

export const TextColumn60Percent: Story = {
  args: {
    children: defaultContent,
    imageSrc: '/images/homepage/13.jpg.avif',
    imageAlt: 'Pernod Ricard',
    backgroundColor: '#EA4E14',
    textColor: '#FFFFFF',
    firstColumnWidth: 60,
  },
};

export const TextColumn40Percent: Story = {
  args: {
    children: defaultContent,
    imageSrc: '/images/homepage/13.jpg.avif',
    imageAlt: 'Pernod Ricard',
    backgroundColor: '#5fa4d0',
    textColor: '#FFFFFF',
    firstColumnWidth: 40,
  },
};

export const TextColumn70Percent: Story = {
  args: {
    children: defaultContent,
    imageSrc: '/images/homepage/13.jpg.avif',
    imageAlt: 'Pernod Ricard',
    backgroundColor: '#800020',
    textColor: '#FFFFFF',
    firstColumnWidth: 70,
    imagePosition: 'left',
  },
};
