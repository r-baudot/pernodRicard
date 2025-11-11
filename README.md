# Pernod Ricard Website Clone

A modern Next.js recreation of the Pernod Ricard website built with TypeScript, React Query, Zustand, Supabase, and Storybook.

## Tech Stack https://rdv-notaire.fr/wp-content/themes/notaire/assets/images/icons8-administrator-male.svg

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Zustand** - Lightweight state management
- **React Query (@tanstack/react-query)** - Data fetching and caching
- **Supabase** - Backend as a Service (BaaS)
- **Storybook** - Component development and documentation

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- A Supabase account (optional, for backend features)

### Installation

1. Clone the repository:

```bash
cd pernod-ricard
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables:

```bash
cp .env.example .env.local
```

Edit `.env.local` and add your Supabase credentials:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Storybook

Run Storybook for component development:

```bash
npm run storybook
```

Open [http://localhost:6006](http://localhost:6006) in your browser.

Build Storybook for production:

```bash
npm run build-storybook
```

## Project Structure

```
pernod-ricard/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── providers.tsx      # React Query provider
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Header/           # Header with navigation
│   ├── Footer/           # Footer component
│   ├── Hero/             # Hero carousel
│   └── BrandGrid/        # Brand showcase grid
├── store/                # Zustand stores
│   ├── useNavigationStore.ts
│   └── useUIStore.ts
├── lib/                  # Utility libraries
│   └── supabase/        # Supabase client
├── types/               # TypeScript type definitions
├── data/                # Static data and mock data
├── .storybook/          # Storybook configuration
└── public/              # Static assets

```

## Features Implemented

### Core Features

- ✅ Responsive navigation with mega menu
- ✅ Hero carousel with multiple slides
- ✅ Brand portfolio grid
- ✅ Dark/Light theme toggle
- ✅ Multi-language support (EN/FR)
- ✅ Mobile-responsive design

### State Management

- ✅ Zustand for UI state (theme, language, navigation)
- ✅ React Query for data fetching and caching

### Development Tools

- ✅ Storybook for component development
- ✅ TypeScript for type safety
- ✅ ESLint for code quality

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run storybook` - Start Storybook
- `npm run build-storybook` - Build Storybook

## Customization

### Adding New Brands

Edit `data/brands.ts` to add or modify brands:

```typescript
export const brandsData: Brand[] = [
  {
    id: "brand-id",
    name: "Brand Name",
    description: "Brand description",
    country: "Country",
    imageUrl: "/images/brands/brand.jpg",
    category: "category",
  },
  // Add more brands...
];
```

### Adding Navigation Items

Edit `data/navigation.ts` to modify the navigation structure.

### Supabase Integration

To use Supabase for dynamic content:

1. Set up your Supabase project
2. Create tables for brands, content, etc.
3. Use the Supabase client in `lib/supabase/client.ts`
4. Implement queries with React Query

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in Vercel
3. Add environment variables
4. Deploy

### Other Platforms

Build the project:

```bash
npm run build
```

The output will be in the `.next` folder.

## TODO / Future Enhancements

- [ ] Add placeholder images for brands and hero
- [ ] Implement full Supabase integration
- [ ] Add more pages (About, Brands detail, etc.)
- [ ] Add animations with Framer Motion
- [ ] Implement search functionality
- [ ] Add blog/news section with CMS
- [ ] Add analytics
- [ ] Add tests (Jest, React Testing Library)
- [ ] Add accessibility improvements (ARIA labels, keyboard navigation)

## Contributing

This is a portfolio project. Feel free to fork and customize for your own use!

## License

This project is for educational and portfolio purposes only. Pernod Ricard and all brand names are trademarks of their respective owners.

## Author

Created as a portfolio project to demonstrate Next.js, React, TypeScript, and modern web development skills.
