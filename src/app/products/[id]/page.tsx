import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetail } from "@/components/product/product-detail";
import { SAMPLE_PRODUCTS } from "@/data/products";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = SAMPLE_PRODUCTS.find(p => p.id === id);

  if (!product) {
    return {
      title: "商品未找到 - Offline",
    };
  }

  return {
    title: `${product.name} - Offline`,
    description: product.description,
  };
}

export async function generateStaticParams() {
  return SAMPLE_PRODUCTS.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = SAMPLE_PRODUCTS.find(p => p.id === id);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <ProductDetail product={product} />
    </div>
  );
}
