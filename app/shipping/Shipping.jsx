import Image from "next/image";
import React from "react";

const Shipping = () => {
  return (
    <div className="bg-gray-80 min-h-screen ">

       <div
  className="relative w-full h-[400px] bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: "url('/aboutimg.webp')",
  }}
>
  {/* White Overlay */}
  <div className="absolute inset-0 bg-white/50"></div>

  {/* Content */}
  <div className="relative z-10 flex items-center justify-center h-full">
    <h1 className="text-4xl text-center md:text-6xl font-bold text-[#062347]">
      Shipping Policy
    </h1>
  </div>
</div>
      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        

        <div className="bg-white rounded-3xl  p-8 md:p-12 space-y-10">
          {/* Order Processing */}
          <section>
            <h2 className="text-2xl font-bold text-[#062347] mb-4">
              1. Order Processing
            </h2>
            <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-7">
              <li>
                All orders are processed after confirmation of payment and
                order details.
              </li>
              <li>
                Standard processing time is{" "}
                <strong>2–5 business days</strong>, depending on product
                availability and customization requirements.
              </li>
              <li>
                Processing time for bulk or customized machinery may vary and
                will be communicated in advance.
              </li>
            </ul>
          </section>

          {/* Shipping */}
          <section>
            <h2 className="text-2xl font-bold text-[#062347] mb-4">
              2. Shipping & Delivery Time
            </h2>

            <p className="text-gray-700 mb-4">
              Delivery timelines depend on your location and the type of
              product ordered.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="border rounded-2xl p-6 bg-gray-50">
                <h3 className="font-semibold text-lg mb-2">Metro Cities</h3>
                <p className="text-3xl font-bold text-[#062347]">
                  5–7 Days
                </p>
              </div>

              <div className="border rounded-2xl p-6 bg-gray-50">
                <h3 className="font-semibold text-lg mb-2">
                  Other Locations
                </h3>
                <p className="text-3xl font-bold text-[#062347]">
                  7–14 Days
                </p>
              </div>
            </div>

            <p className="text-gray-700 mt-5">
              Remote or rural areas may require additional delivery time.
            </p>
          </section>

          {/* Shipping Charges */}
          <section>
            <h2 className="text-2xl font-bold text-[#062347] mb-4">
              3. Shipping Charges
            </h2>

            <p className="text-gray-700 mb-3">
              Shipping charges are calculated based on:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Product weight and Packaging</li>
              <li>Delivery location</li>
              <li>Mode of transport</li>
            </ul>

            <p className="text-gray-700 mt-4">
              Final shipping charges will be shared during order confirmation.
            </p>
          </section>

          {/* Delivery Method */}
          <section>
            <h2 className="text-2xl font-bold text-[#062347] mb-4">
              4. Delivery Method
            </h2>

            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                We work with trusted logistics partners for safe and reliable
                delivery.
              </li>
              <li>
                Heavy machinery may be transported using specialized carriers.
              </li>
            </ul>
          </section>

          {/* Tracking */}
          <section>
            <h2 className="text-2xl font-bold text-[#062347] mb-4">
              5. Order Tracking
            </h2>

            <p className="text-gray-700">
              Once your order is dispatched, tracking details or transport
              information will be shared via phone or email.
            </p>
          </section>

          {/* Delivery Guidelines */}
          <section>
            <h2 className="text-2xl font-bold text-[#062347] mb-4">
              6. Delivery Guidelines
            </h2>

            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li>
                The customer or an authorized representative must be available
                at the delivery location.
              </li>
              <li>
                Customers should arrange unloading equipment such as cranes or
                forklifts if required.
              </li>
              <li>
                Please inspect the product carefully upon delivery for any
                visible damage.
              </li>
            </ul>
          </section>

          {/* Damage */}
          <section>
            <h2 className="text-2xl font-bold text-[#062347] mb-4">
              7. Damaged or Delayed Shipments
            </h2>

            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li>
                Report damaged products within <strong>24 hours</strong> along
                with photos or videos for verification.
              </li>

              <li>
                Delivery delays caused by weather conditions, transportation
                issues, strikes, or other unforeseen events may occur.
              </li>
            </ul>
          </section>

          {/* Service */}
          <section>
            <h2 className="text-2xl font-bold text-[#062347] mb-4">
              8. Service Availability
            </h2>

            <p className="text-gray-700">
              We currently ship across India. For international orders, please
              contact us directly to discuss availability and shipping options.
            </p>
          </section>

          {/* Contact */}
          <section className="bg-gray-100 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-[#062347] mb-6">
              9. Contact Us
            </h2>

            <div className="space-y-4 text-gray-700">
              <p>
                <strong>Company:</strong> Corechem Corporation
              </p>

              <p>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:info@corechemcorp.com"
                  className="text-[#c8921c] hover:underline"
                >
                 info@corechemcorp.com
                </a> , {" "}
                <a
                  href="mailto:sales@corechemcorp.com"
                  className="text-[#c8921c] hover:underline"
                >
                 sales@corechemcorp.com
                </a>
              </p>

              <p>
                <strong>Phone:</strong>{" "}
                <a
                  href="tel:+919818544039"
                  className="text-[#c8921c] hover:underline"
                >
                  +91 98185 44039

                </a>
                {" "}
                <a
                  href="tel:+919818544039"
                  className="text-[#c8921c] hover:underline"
                >
                  +91 98185 44039

                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Shipping;