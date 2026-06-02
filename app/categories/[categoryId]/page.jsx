import { categories } from "@/Data";
import Link from "next/link";
import Image from "next/image";
import { IoLogoWhatsapp } from "react-icons/io";

export async function generateMetadata({ params }) {
  const { categoryId } = params;
  const category = categories.find((c) => c.id === categoryId);

  if (!category) {
    return {
      title: "Category Not Found ",
      description: "The requested category does not exist.",
    };
  }

  return {
    title: category.metaTitle,
    description: category.metaDescription,
  };
}

export default function CategoryPage({ params }) {
  const { categoryId } = params;
  const category = categories.find((c) => c.id === categoryId);

  if (!category) {
    return (
      <h2 className="text-center text-red-500 mt-10">Category not found</h2>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section
        style={{ backgroundImage: "url('/parallex.jpg')" }}
        className="w-full bg-cover bg-center h-[50vh]  relative"
      >
        <div className="px-5 absolute inset-0 text-center flex items-center justify-center ">
          <h2 className=" text-[#BE8220] bg-white p-3 text-2xl md:text-6xl font-bold z-10">
            {category.name}
          </h2>
        </div>
      </section>

    

      {/* Products Grid */}
      <div className="p-10  mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {category.products.map((product,index) => (
            <div
    key={product.id}
    className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition flex flex-col"
  >
    {/* PRODUCT IMAGE + CONTENT (CLICKABLE) */}
    <Link href={`/products/${product.id}`} className="block flex-1">
      <Image
        src={product.image[0]?.src || "/placeholder.png"}
        alt={product.image[0]?.alt || product.name}
        width={300}
        height={200}
        title={product.name}
        className="w-full h-80 object-cover"
      />

      <div className="p-3">
        <h2 className="text-lg text-center font-semibold">
          {product.name}
        </h2>

        {product.price && (
          <p className="text-gray-600 text-center">{product.price}</p>
        )}
      </div>
    </Link>

    <div className="px-3 pb-3! mt-auto">
      <a
        href={`https://wa.me/919818544039?text=Hi%20I%20am%20interested%20in%20${encodeURIComponent(
          product.name
        )}%20.%20Please%20share%20the%20price.`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#c8921c] flex justify-center items-center gap-2 text-white px-3 py-2 rounded-md font-medium hover:bg-[#a87412] transition w-full"
      >
        Get Instant Price
        <IoLogoWhatsapp size={22} />
      </a>
    </div>
  </div>
          ))}
        </div>
      </div>
    </>
  );
}
