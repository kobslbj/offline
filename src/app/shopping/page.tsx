import type { Metadata } from "next";
import { HeroSection } from "@/components/common/hero-section";
import { ShoppingSideMenu } from "@/components/common/shopping-side-menu";

export const metadata: Metadata = {
  title: "Shopping",
};

export default function ShoppingPage() {
  return (
    <div className="relative">
      <HeroSection />
      <div className="absolute inset-y-0 right-0 z-20 hidden md:block">
        <ShoppingSideMenu className="h-full" />
      </div>
    </div>
  );
}
