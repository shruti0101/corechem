// app/about/page.tsx

import Link from "next/link";

import {
  ShieldCheck,
  Globe2,
  PackageCheck,
  Handshake,
  BadgeCheck,
  Truck,
  Phone,
  ArrowRight,
  Factory,
  FlaskConical,
  Boxes,
} from "lucide-react";

const products = [
  {
    title: "Titanium Dioxide for Coatings & Paints",
    desc: "High-performance TiO₂ solutions designed for durability, opacity, and superior finish quality.",
    icon: <Factory className="w-8 h-8" />,
  },
  {
    title: "Titanium Dioxide for Plastics",
    desc: "Reliable pigment solutions for plastic manufacturing with excellent brightness and stability.",
    icon: <Boxes className="w-8 h-8" />,
  },
  {
    title: "Industrial Chemical Solutions",
    desc: "Custom sourcing and dependable supply services tailored for industrial applications.",
    icon: <FlaskConical className="w-8 h-8" />,
  },
];

const whyChoose = [
  {
    title: "Premium Product Quality",
    desc: "We supply high-performance Titanium Dioxide products that meet industry standards for consistency and reliability.",
    icon: <BadgeCheck className="w-7 h-7" />,
  },
  {
    title: "Reliable Supply Network",
    desc: "Our efficient sourcing and logistics capabilities help ensure timely deliveries and uninterrupted product availability.",
    icon: <Truck className="w-7 h-7" />,
  },
  {
    title: "Competitive Pricing",
    desc: "We provide cost-effective Titanium Dioxide solutions tailored to customer requirements and supply volumes.",
    icon: <PackageCheck className="w-7 h-7" />,
  },
  {
    title: "Industry Experience",
    desc: "With extensive industry knowledge, we understand the specific needs of various industrial applications.",
    icon: <Globe2 className="w-7 h-7" />,
  },
  {
    title: "Customer-Focused Support",
    desc: "Our team is dedicated to responsive communication, technical assistance, and long-term customer relationships.",
    icon: <Handshake className="w-7 h-7" />,
  },
  {
    title: "Flexible Supply Solutions",
    desc: "We offer bulk supply, customized packaging, and tailored sourcing solutions for different business requirements.",
    icon: <ShieldCheck className="w-7 h-7" />,
  },
];

export default function AboutPage() {
  return (
    <>
      <section
        style={{ backgroundImage: "url(/parallex.jpg)" }}
        className="relative overflow-hidden bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-white/30" />

        <div className="absolute inset-0 bg-gradient-to-br from-orange-100/70 via-white/40 to-blue-100/60" />

        <div className="absolute top-0 left-0 h-[400px] w-[400px] rounded-full bg-orange-200/30 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-blue-200/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-28 ">
          <div className="max-w-4xl">
            <span className="inline-flex items-center rounded-full border border-orange-200 bg-white/90 px-5 py-2 text-sm font-semibold text-[#BE8220] shadow-md backdrop-blur-md">
              Trusted Titanium Dioxide Supplier
            </span>

            <h1 className="mt-8 text-5xl font-extrabold leading-tight text-[#1e293b] ">
              About{" "}
              <span className="bg-gradient-to-r from-[#BE8220] to-orange-500 bg-clip-text text-transparent">
                Corechem
              </span>{" "}
              Corporation
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-black md:text-xl">
              Corechem Corporation is a reputable Titanium Dioxide Supplier
              focused on delivering premium-quality chemical solutions for
              manufacturers across multiple industries.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-xl bg-[#BE8220] px-7 py-4 font-semibold text-white shadow-xl transition hover:bg-[#e55312]"
              >
                Request a Quote
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contact"
                className="rounded-xl border border-slate-200 bg-white/90 px-7 py-4 font-semibold text-slate-700 shadow-md backdrop-blur-sm transition hover:border-[#BE8220] hover:text-[#BE8220]"
              >
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      <main className="overflow-hidden bg-[#f8fafc] text-[#1e293b]">
        <section className="mx-auto max-w-7xl px-6 py-15">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <span className="font-semibold uppercase tracking-wide text-[#BE8220]">
                Who We Are
              </span>

              <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
                Reputable Supplier of Titanium Dioxide for Various Industries
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                At Corechem Corporation, we understand that quality products and
                reliable services are essential for successful industrial
                partnerships.
              </p>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Our products are widely used across coatings and paints,
                plastics, inks, paper manufacturing, rubber, and cosmetics
                industries.
              </p>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-orange-200/30 to-blue-200/30 blur-2xl" />

              <div className="relative rounded-[32px] border border-white bg-white/90 p-10 shadow-[0_20px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    ["10+", "Industries Served"],
                    ["100%", "Quality Commitment"],
                    ["24/7", "Customer Support"],
                    ["Global", "Supply Network"],
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="rounded-2xl border border-slate-100 bg-slate-50 p-6"
                    >
                      <h3 className="text-4xl font-bold text-[#BE8220]">
                        {item[0]}
                      </h3>

                      <p className="mt-2 text-slate-600">{item[1]}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-15">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <span className="font-semibold uppercase tracking-wide text-[#BE8220]">
                What We Offer
              </span>

              <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                Titanium Dioxide Solutions for Industrial Applications
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Corechem Corporation supplies a wide range of Titanium Dioxide
                products designed for different industrial applications.
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {products.map((item, index) => (
                <div
                  key={index}
                  className="group rounded-[30px] border border-slate-200 bg-[#fcfcfd] p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#BE8220]/30 hover:shadow-xl"
                >
                  <div className="inline-flex rounded-2xl bg-orange-100 p-4 text-[#BE8220]">
                    {item.icon}
                  </div>

                  <h3 className="mt-6 text-2xl font-bold">{item.title}</h3>

                  <p className="mt-4 leading-7 text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-18">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="rounded-[30px] border border-orange-100 bg-gradient-to-br from-orange-50 to-white p-10 shadow-sm">
              <h2 className="text-4xl font-bold">Our Mission</h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Our mission is to deliver high-quality Titanium Dioxide
                materials and reliable chemical supply solutions that address
                the changing demands of the industry.
              </p>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                We are committed to providing quality products, dependable
                services, competitive pricing, and customer-oriented support.
              </p>
            </div>

            <div className="rounded-[30px] border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-10 shadow-sm">
              <h2 className="text-4xl font-bold">Our Vision</h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Our vision is to become a recognized Titanium Dioxide Supplier
                known for quality, reliability, and excellent customer
                relationships across global industries.
              </p>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                We are committed to sustainable growth and operational
                excellence.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-14">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <span className="font-semibold uppercase tracking-wide text-[#BE8220]">
                Why Choose Us
              </span>

              <h2 className="mt-2 text-4xl font-bold md:text-5xl">
                Reliable Titanium Dioxide Supplier for Your Business Needs
              </h2>

              <p className="mt-3 text-lg leading-8 text-slate-600">
                We focus on delivering premium product quality, reliable supply,
                competitive pricing, and customer-focused support.
              </p>
            </div>

            <div className="mt-10  grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {whyChoose.map((item, index) => (
                <div
                  key={index}
                  className="rounded-[30px] border border-slate-200 bg-[#fcfcfd] p-8 shadow-sm transition hover:-translate-y-1 hover:border-[#BE8220]/30 hover:shadow-xl"
                >
                  <div className="inline-flex rounded-2xl bg-orange-100 p-4 text-[#BE8220]">
                    {item.icon}
                  </div>

                  <h3 className="mt-6 text-2xl font-bold">{item.title}</h3>

                  <p className="mt-4 leading-7 text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          style={{ backgroundImage: "url('/formaboutbg.webp')" }}
          className="relative overflow-hidden bg-cover bg-center py-18"
        >
          <div className="absolute top-0 left-0 h-[300px] w-[300px] rounded-full bg-orange-200/40 blur-3xl" />

          <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-blue-200/40 blur-3xl" />

          <div className="relative mx-auto max-w-5xl px-6">
            <div className="rounded-[36px] border border-white/70 bg-white/85 p-10 text-center shadow-[0_20px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl md:p-16">
              <h2 className="text-4xl font-bold leading-tight text-[#1e293b] md:text-5xl">
                Looking for a Reliable Titanium Dioxide Supplier?
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                Corechem Corporation is committed to providing dependable
                Titanium Dioxide products, reliable supply solutions, and
                responsive customer support tailored to your business needs.
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="rounded-xl bg-[#BE8220] px-6 py-4 font-semibold text-white shadow-lg transition hover:bg-[#e55312]"
                >
                  Request a Quote
                </Link>

                <Link
                  href="/products"
                  className="rounded-xl border border-slate-200 bg-white px-6 py-4 font-semibold text-slate-700 shadow-sm transition hover:border-[#BE8220] hover:text-[#BE8220]"
                >
                  Get Product Information
                </Link>

                <a
                  href="tel:+919818544039"
                  className="inline-flex items-center gap-2 rounded-xl border border-orange-200 bg-orange-50 px-6 py-4 font-semibold text-[#BE8220] transition hover:bg-orange-100"
                >
                  <Phone className="h-5 w-5" />
                  Speak with Our Experts
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
