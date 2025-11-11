import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { BrandGrid } from "@/components/BrandGrid";
import { Footer } from "@/components/Footer";
import { heroSlides } from "@/data/hero";
import { brandsData } from "@/data/brands";
import { Bloc } from "@/components/Bloc/Bloc";
import { Bloc2Columns } from "@/components/Bloc2Columns/Bloc2Columns";
import { DownloadLink } from "@/components/DownloadLink/DownloadLink";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero slides={heroSlides} />
      <Bloc
        text="La convivialité est au cœur de tout ce que nous faisons, de nos vignobles à nos distilleries, en passant par nos sites de production ainsi qu’au sein de nos bureaux présents à travers le monde. Nous nous engageons à offrir à nos consommateurs des produits et des expériences à la pointe de l’innovation, tout en veillant à garantir un avenir durable, respectueux de notre environnement et riche de nos relations humaines."
        backgroundColor="#222D38"
        maxWidth="960px"
        textColor="#FFFFFF"
        classNameTxt="my-8 text-lg md:text-xl"
      />

      <Bloc2Columns
        imageSrc="/images/homepage/13.jpg.avif"
        imageAlt="Pernod Ricard"
        backgroundColor="#FBF4E7"
        textColor="#222d38"
        maxWidth="1200px"
        firstColumnWidth={70}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
          Célébrons notre esprit intemporel
        </h2>
        <p className="text-base md:text-lg leading-relaxed mb-4">
          Le rapport annuel intégré 2024/25 de Pernod Ricard est maintenant
          disponible. Il présente des illustrations personnalisées, réalisées
          par trois diplômés de l&apos;École des Arts Décoratifs – PSL.
        </p>
        <DownloadLink
          text="Télécharger le rapport annuel"
          file="/pdf/Pernod_Ricard_IAR25_FRENCH.pdf"
        />
      </Bloc2Columns>
      <Bloc2Columns
        imageSrc="/images/homepage/web_image-kahlua-coffee_2.jpg.avif"
        imageAlt="Pernod Ricard"
        backgroundColor="#FFFFFF"
        textColor="#222d38"
        maxWidth="1200px"
        imagePosition="left"
        imageWidth={30}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
          Un nouveau chapitre RSE
        </h2>
        <p className="text-base md:text-lg leading-relaxed mb-4">
          Chaque bouteille de Pernod Ricard raconte une histoire, pas seulement
          celle de son contenu, mais aussi celle de notre engagement envers
          notre planète et nos communautés. Découvrez notre nouvelle feuille de
          route.
        </p>
        <DownloadLink
          text="Télécharger le rapport annuel"
          file="/pdf/Pernod_Ricard_IAR25_FRENCH.pdf"
        />
      </Bloc2Columns>

      <section className="py-16 bg-gradient-to-br from-accent-burgundy to-primary text-white">
        <div className="w-full px-4 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-bold mb-4">
            Join our S&R Journey
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Our commitment to sustainability and responsibility drives
            everything we do. Discover how we&apos;re building a better future
            for all.
          </p>
          <a
            href="/commitments"
            className="inline-block bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Learn About Our Commitments
          </a>
        </div>
      </section>

      <BrandGrid brands={brandsData} />
      <section className="py-16 bg-white">
        <div className="w-full px-4 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-center mb-12">
            Latest News
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <article
                key={item}
                className="bg-secondary rounded-lg overflow-hidden"
              >
                <div className="aspect-video bg-gray-300" />
                <div className="p-6">
                  <span className="text-sm text-gray-500">
                    March {item}, 2024
                  </span>
                  <h3 className="text-xl font-semibold mt-2 mb-3">
                    Latest Update from Pernod Ricard
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Stay informed about our latest news, announcements, and
                    initiatives.
                  </p>
                  <a
                    href="/media/news"
                    className="text-primary font-semibold hover:underline"
                  >
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
