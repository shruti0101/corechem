// app/about/page.tsx

import Link from "next/link";
import Otherpro from "@/components/Landingpage/Otherpro"
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

  <div className="relative mx-auto flex min-h-[500px] max-w-7xl items-center justify-center px-6 py-10">
    
    <div className="max-w-6xl text-center">
      <span className="inline-flex items-center rounded-full border border-orange-200 bg-white/90 px-5 py-2 text-sm font-semibold text-[#BE8220] shadow-md backdrop-blur-md">
        Trusted Titanium Dioxide Supplier
      </span>

      <h2 className="mt-3 text-5xl font-extrabold leading-tight text-[#1e293b]">
        About{" "}
        <span className="bg-gradient-to-r from-[#BE8220] to-orange-500 bg-clip-text text-transparent">
          Corechem
        </span>{" "}
        Corporation
      </h2>

      <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
        Reputable Supplier of Titanium Dioxide for Various Industries
      </h2>

      <p className="mx-auto mt-8 max-w-5xl text-lg leading-8 text-black md:text-xl">
        Corechem Corporation is a reputable Titanium Dioxide Supplier whose
        main objective is to offer customers the best chemical solutions
        available on the market. Focusing on product quality and reliability,
        our company is able to meet any needs of companies that require
        Titanium Dioxide as part of their operations. Our products find
        application in a variety of sectors, including coatings and paints,
        plastics, inks, paper manufacturing, rubber and cosmetics. By working
        directly with our manufacturers and suppliers, we can ensure that we
        deliver products of high quality.
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/contact"
          className="group inline-flex items-center gap-2 rounded-xl bg-[#BE8220] px-7 py-4 font-semibold text-white shadow-xl transition hover:bg-[#9e880b]"
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
        <section className="mx-auto px-25 py-15">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <span className="font-semibold uppercase tracking-wide text-[#BE8220]">
                Who We Are
              </span>

           
              <p className="mt-6 text-lg leading-8 text-black">
              At Corechem Corporation, we know that quality products and services are the basis for successful partnerships in the corporate world. We understand how important product availability is for a continuous manufacturing process. This is why, as an experienced Titanium Dioxide Supplier, our main objective is to assist our clients in maintaining smooth manufacturing procedures.
We provide our clients with custom-made supply services according to their needs and requirements.
We work hard to establish successful relationships within various industries by providing a customer-oriented approach and supply capacity.

              </p>

              <p className="mt-6 text-lg leading-8 text-black">
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


          <Otherpro></Otherpro>
         

        <section className="mx-auto  px-20 py-18">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="rounded-[30px] border border-orange-100 bg-gradient-to-br from-orange-50 to-white p-10 shadow-sm">
              <h2 className="text-4xl font-bold">Our Mission</h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
               The mission of Corechem Corporation is to deliver high-quality Titanium Dioxide materials and reliable chemical supplies, addressing the changing demands of the industry. As Titanium Dioxide Supplier, our objective is to provide quality products, reliable services, competitive pricing, and customer-oriented assistance for manufacturers in different industries.
Our objective is to create long-lasting partnerships through integrity, professionalism, and prompt customer service, assisting manufacturers to ensure smooth operation process through our quality products and professional services.

              </p>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                We are committed to providing quality products, dependable
                services, competitive pricing, and customer-oriented support.
              </p>
            </div>

            <div className="rounded-[30px] border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-10 shadow-sm">
              <h2 className="text-4xl font-bold">Our Vision</h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
               The vision of Corechem Corporation is to become a well-known Titanium Dioxide Supplier, providing quality, reliable services and having excellent customer relations, which will ensure our success in the market.
We are a supplier committed to sustainable development and excellence. The company strives to maintain the same level of quality in its services, ensuring the successful functioning of the business.

              </p>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                We are committed to sustainable growth and operational
                excellence.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-14">
          <div className="mx-auto  px-20">
            <div className="mx-auto max-w-6xl text-center">
              <span className="font-semibold uppercase tracking-wide text-[#BE8220]">
                Why Choose Us
              </span>

              <h2 className="mt-2 text-4xl font-bold md:text-5xl">
                Reliable Titanium Dioxide Supplier for Your Business Needs
              </h2>

              <p className="mt-3 text-lg leading-8 text-slate-600">
             Corechem Corporation is committed to delivering high-quality Titanium Dioxide products backed by reliable service, consistent supply, and industry expertise. As a trusted Titanium Dioxide Supplier, we focus on helping businesses maintain efficient manufacturing operations with dependable chemical solutions.
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
