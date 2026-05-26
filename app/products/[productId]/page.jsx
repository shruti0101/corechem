// app/products/[productId]/page.jsx

import { categories } from "@/Data";

import ProductPageClient from "./ProductPageClient";

// ✅ Dynamic metadata for each product
export async function generateMetadata({ params }) {
  // ✅ await params
  const { productId } = await params;

  const allProducts = categories.flatMap((c) => c.products);

  const product = allProducts.find((p) => p.id === productId);

  if (!product) {
    return {
      title: "Product Not Found",
      description: "The requested product could not be found.",
    };
  }

  return {
    title: product.metaTitle || product.name,

    description: product.metaDescription || product.name,

    openGraph: {
      title: product.metaTitle || product.name,

      description: product.metaDescription || product.name,

      images: [
        {
          url: product.image?.[0]?.src || "/og-image.jpg",
        },
      ],
    },
  };
}

// ✅ Render client component
export default async function Page({ params }) {
  // ✅ await params
  const resolvedParams = await params;

  return <ProductPageClient params={resolvedParams} />;
}