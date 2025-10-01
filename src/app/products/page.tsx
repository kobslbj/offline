import type { Metadata } from "next";
import { Suspense } from "react";
import { ProductCatalog } from "@/components/product/product-catalog";

export const metadata: Metadata = {
  title: "商品 - Offline",
  description: "探索 Offline 商品系列，簡約設計與品質工藝的完美結合",
};

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>
}) {
  const params = await searchParams;
  const category = params.category || 'mens';

  return (
    <div className="min-h-screen bg-white">
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center">載入中...</div>}>
        <ProductCatalog category={category} />
      </Suspense>
    </div>
  );
}