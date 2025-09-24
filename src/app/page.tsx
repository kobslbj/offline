import { HeroSection } from "@/components/common/hero-section";
import { CategoryShowcase } from "@/components/common/category-showcase";
import { FeaturedProducts } from "@/components/product/featured-products";
import { MissionSection } from "@/components/common/mission-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CategoryShowcase />
      <FeaturedProducts />
      <MissionSection />
    </>
  );
}
