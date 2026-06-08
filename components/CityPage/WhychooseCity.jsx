
import {
  FaShieldAlt,
  FaBoxes,
  FaTruck,
  FaTags,
  FaUsers,
} from "react-icons/fa";

const data = [
  {
    title: "Quality Assurance",
    icon: FaShieldAlt,
    desc: "We maintain strict quality control standards to ensure every Titanium Dioxide product delivers superior purity, consistency, and performance for industrial applications.",
  },
  {
    title: "Wide Product Range",
    icon: FaBoxes,
    desc: "Our portfolio includes Rutile and Anatase Titanium Dioxide grades suitable for paints, coatings, plastics, inks, paper, rubber, and other industries.",
  },
  {
    title: "Reliable Supply Network",
    icon: FaTruck,
    desc: "With a strong sourcing network and efficient logistics, we ensure timely deliveries and uninterrupted product availability for our customers.",
  },
  {
    title: "Competitive Pricing",
    icon: FaTags,
    desc: "We offer premium-quality Titanium Dioxide products at competitive prices, helping businesses optimize costs without compromising quality.",
  },
  // {
  //   title: "Customer-Focused Approach",
  //   icon: FaUsers,
  //   desc: "Our experienced team works closely with clients to understand their needs and provide the most suitable Titanium Dioxide solutions.",
  // },
];

export default function WhychooseCity({ city }) {
  return (
    <section className="py-7 md:py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-2 rounded-full bg-[#C8921C]/10 text-[#C8921C] font-semibold text-sm uppercase tracking-wider">
            Why Choose Corechem Corporation
          </span>

          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-[#062347] leading-tight">
            Why Corechem Corporation is the Leading
            <span className="text-[#C8921C]">
              {" "}Titanium Dioxide Supplier{" "}
            </span>
            in {city}?
          </h2>

          <p className="max-w-3xl mx-auto mt-5 text-gray-600 text-lg">
            Trusted by manufacturers and industrial businesses for premium
            Titanium Dioxide products, reliable supply, and exceptional service.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {data.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group bg-white rounded-3xl border border-gray-100 shadow-md hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 p-6 relative overflow-hidden"
              >
                {/* Hover Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#C8921C]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-[#062347] text-white flex items-center justify-center mb-5 group-hover:bg-[#C8921C] transition-all duration-300">
                    <Icon size={28} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#062347] mb-3">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom Border Animation */}
                <span className="absolute bottom-0 left-0 h-1 w-0 bg-[#C8921C] group-hover:w-full transition-all duration-500"></span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

