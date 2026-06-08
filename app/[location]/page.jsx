import Location from "./Location";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
    const { location } = await params;

    const rawCity = location.split("in-").pop();

    const city = rawCity
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");

    return {
        title: `Titanium Dioxide Supplier in ${city} | Corechem Corporation`,
        description: `Looking for a reliable Titanium Dioxide Supplier in ${city} Corechem Corporation offers premium-quality Titanium Dioxide for paints, coatings, plastics, inks, and more. Trusted supplier with competitive pricing and timely delivery across ${city}.`,
    };
}

const Page = async ({ params }) => {
    const { location } = await params;

    // 🔥 Must contain "-in-"
    if (!location.includes("in-")) {
        notFound();
    }

    // 🔥 Extract city part after "in-"
    const city = location.split("in-")[1];

    // 🔥 If city is empty or invalid → redirect to Home
    if (!city || city.trim().length === 0) {
        notFound();
    }

    return <Location city={location} />;
};

export default Page;
