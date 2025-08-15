import { Header } from "@/components/Header";
import { HeroCarousel } from "@/components/HeroCarousel";
import { CategoriesSection } from "@/components/CategoriesSection";
import { FeaturedSection } from "@/components/FeaturedSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroCarousel />
      <FeaturedSection />
      <CategoriesSection />
      <Footer />
    </div>
  );
};

export default Index;
