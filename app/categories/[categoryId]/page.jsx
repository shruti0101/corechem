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
      <div className="p-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {category.products.map((product,index) => (
            <div key={index} className="rounded-lg  transition">
  {/* Product Link */}
  <Link href={`/products/${product.id}`}>
    <div className="w-full border h-75 relative rounded-md overflow-hidden">
      <Image
        src={product.image[0]?.src || "/placeholder.png"}
        alt={product.image[0]?.alt || product.name}
        title={product.name}
        fill
        className="object-cover"
        unoptimized
      />
      
    </div>

     <div className="flex justify-center items-center">       
    <p className="text-[10px] text-center  p-1 w-fit rounded-4xl text-gray-700 mt-1">
      {category.name}
    </p>
    </div>

    <h2 className="mt-0 font-semibold text-lg text-center py-0.5">
      {product.name}
    </h2>
  </Link>

  {/* WhatsApp Button */}
  <div className="flex justify-center items-center mt-0.5">
    <a
      href={`https://wa.me/919818544039?text=Hi%20I%20am%20interested%20in%20${encodeURIComponent(
        product.name
      )}%20.%20Please%20share%20the%20price.`}
     
    
      className="bg-[#c8921c] flex  text-white px-2.5 py-2 rounded-md font-medium hover:bg-[#a87412] transition justify-between items-center gap-1 "
    >
      Get Instant Price <IoLogoWhatsapp size={22}/>
    </a>
  </div>
</div>
          ))}
        </div>
      </div>
    </>
  );
}
