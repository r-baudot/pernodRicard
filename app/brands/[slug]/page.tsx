import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getBrandBySlug, getBrands } from "@/lib/services/brands";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AnimatedLink } from "@/components/AnimatedLink/AnimatedLink";

interface BrandPageProps {
  params: {
    slug: string;
  };
}

// Generate static params for all brands (optional, for static generation)
export async function generateStaticParams() {
  const brands = await getBrands();
  return brands.map((brand) => ({
    slug: brand.slug,
  }));
}

export async function generateMetadata({ params }: BrandPageProps) {
  const brand = await getBrandBySlug(params.slug);
  console.log("Generating metadata for brand:", brand);

  if (!brand) {
    return {
      title: "Marque non trouvée - Pernod Ricard",
    };
  }

  return {
    title: `${brand.title} - Pernod Ricard`,
    description:
      brand.description ||
      `Découvrez ${brand.title}, une marque du groupe Pernod Ricard`,
  };
}

export default async function BrandPage({ params }: BrandPageProps) {
  const brand = await getBrandBySlug(params.slug);

  if (!brand) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="relative h-[60vh] bg-gray-900">
          <Image
            src={brand.image_url}
            alt={brand.title}
            fill
            className="object-cover opacity-50"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-5xl md:text-7xl font-bold mb-4">
                {brand.title}
              </h1>
              {brand.category && (
                <p className="text-xl md:text-2xl text-gray-200">
                  {brand.category}
                </p>
              )}
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-white">
          <div className="w-full px-4 lg:px-8 max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="mb-8 text-sm">
              <Link href="/" className="text-gray-500 hover:text-primary">
                Accueil
              </Link>
              <span className="mx-2 text-gray-400">/</span>
              <Link
                href="/#brands"
                className="text-gray-500 hover:text-primary"
              >
                Nos Marques
              </Link>
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-gray-900">{brand.title}</span>
            </nav>

            {/* Description */}
            {brand.description && (
              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-xl leading-relaxed text-gray-700">
                  {brand.description}
                </p>
              </div>
            )}

            {/* Image Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src={brand.image_url}
                  alt={brand.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Notre Histoire</h2>
                  <p className="text-gray-600">
                    {brand.title} fait partie du riche portfolio de marques
                    premium du groupe Pernod Ricard. Chaque marque raconte une
                    histoire unique d&apos;excellence et de savoir-faire.
                  </p>
                </div>
                {brand.category && (
                  <div>
                    <h3 className="text-xl font-bold mb-2">Catégorie</h3>
                    <p className="text-gray-600">{brand.category}</p>
                  </div>
                )}
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-secondary rounded-lg p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">
                Découvrez toutes nos marques
              </h2>
              <p className="text-gray-600 mb-6">
                Explorez notre portfolio de spiritueux et vins premium
              </p>
              <AnimatedLink
                href="/#brands"
                text="Voir toutes les marques"
                showArrow={true}
                arrowPosition="right"
                variant="primary"
              />
            </div>
          </div>
        </section>

        {/* Related Brands */}
        <RelatedBrands currentBrandId={brand.id} category={brand.category} />
      </main>
      <Footer />
    </>
  );
}

// Related Brands Component
async function RelatedBrands({
  currentBrandId,
  category,
}: {
  currentBrandId: string;
  category: string | null;
}) {
  const allBrands = await getBrands();

  // Filter related brands (same category, exclude current)
  const relatedBrands = allBrands
    .filter(
      (b) => b.id !== currentBrandId && (!category || b.category === category)
    )
    .slice(0, 3);

  if (relatedBrands.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="w-full px-4 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Marques similaires
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {relatedBrands.map((brand) => (
            <Link
              key={brand.id}
              href={`/brands/${brand.slug}`}
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64 overflow-hidden bg-gray-200">
                <Image
                  src={brand.image_url}
                  alt={brand.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">{brand.title}</h3>
                {brand.category && (
                  <p className="text-sm text-gray-500">{brand.category}</p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
