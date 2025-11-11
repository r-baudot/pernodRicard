import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { BrandGrid } from '@/components/BrandGrid';
import { Footer } from '@/components/Footer';
import { heroSlides } from '@/data/hero';
import { brandsData } from '@/data/brands';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <Hero slides={heroSlides} />

      {/* Annual Report Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-serif font-bold mb-4">
                Annual Report 2024/2025
              </h2>
              <p className="text-gray-600 mb-6">
                Discover our latest integrated annual report, highlighting our performance,
                strategy, and commitment to creating sustainable value.
              </p>
              <a
                href="/investors/reports"
                className="inline-block bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-light transition-colors"
              >
                View Report
              </a>
            </div>
            <div className="lg:w-1/2">
              <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-400">Annual Report Preview</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-16 bg-gradient-to-br from-accent-burgundy to-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold mb-4">
            Join our S&R Journey
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Our commitment to sustainability and responsibility drives everything we do.
            Discover how we're building a better future for all.
          </p>
          <a
            href="/commitments"
            className="inline-block bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Learn About Our Commitments
          </a>
        </div>
      </section>

      {/* Brands Section */}
      <BrandGrid brands={brandsData} />

      {/* Media Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-center mb-12">
            Latest News
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <article key={item} className="bg-secondary rounded-lg overflow-hidden">
                <div className="aspect-video bg-gray-300" />
                <div className="p-6">
                  <span className="text-sm text-gray-500">March {item}, 2024</span>
                  <h3 className="text-xl font-semibold mt-2 mb-3">
                    Latest Update from Pernod Ricard
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Stay informed about our latest news, announcements, and initiatives.
                  </p>
                  <a href="/media/news" className="text-primary font-semibold hover:underline">
                    Read More →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
