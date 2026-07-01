import React from 'react'

export default function ReturnRefund() {
  return (
    <div className="bg-gray-80 min-h-screen ">

       <div
  className="relative w-full h-[400px] bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: "url('/about.png')",
  }}
>
  {/* White Overlay */}
  <div className="absolute inset-0 bg-white/50"></div>

  {/* Content */}
  <div className="relative z-10 flex items-center justify-center h-full">
    <h1 className="text-4xl text-center md:text-6xl font-bold text-[#062347]">
      Return & Refund Policy
    </h1>
  </div>
</div>
      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-6">
  <div className="bg-white rounded-2xl  p-6 md:p-10">
    

    <p className="text-gray-700 leading-8 mb-8">
      At <strong className='text-[#062347]'>Corechem Corporation</strong>, we are committed to
      providing high-quality chemical products and ensuring customer
      satisfaction. Due to the nature of chemical products and industrial
      materials, our Return & Refund Policy is designed to maintain product
      quality, safety, and regulatory compliance.
    </p>

    {/* Return Eligibility */}
    <div className="mb-8">
      <h3 className="text-2xl font-semibold text-[#062347] mb-4">
        1. Return Eligibility
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li>Product received is damaged during transit.</li>
        <li>Incorrect product or quantity is delivered.</li>
        <li>Product does not match the confirmed order specifications.</li>
        <li>
          Return requests must be submitted within{" "}
          <strong>24–48 hours</strong> of delivery.
        </li>
      </ul>
    </div>

    {/* Non Returnable */}
    <div className="mb-8">
      <h3 className="text-2xl font-semibold text-[#062347] mb-4">
        2. Non-Returnable Items
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li>Opened or partially used products.</li>
        <li>Chemicals stored improperly after delivery.</li>
        <li>Customized or made-to-order products.</li>
        <li>Products damaged due to customer mishandling.</li>
      </ul>
    </div>

    {/* Return Process */}
    <div className="mb-8">
      <h3 className="text-2xl font-semibold text-[#062347] mb-4">
        3. Return Process
      </h3>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700">
        <li>Contact our support team within the eligible return period.</li>
        <li>
          Share your order details along with clear photos/videos of the
          issue.
        </li>
        <li>Our quality team will review your request.</li>
        <li>If approved, return instructions will be provided.</li>
      </ol>
    </div>

    {/* Refund Policy */}
    <div className="mb-8">
      <h3 className="text-2xl font-semibold text-[#062347] mb-4">
        4. Refund Policy
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li>
          Refunds are processed only after inspection and approval of the
          returned goods.
        </li>
        <li>
          Approved refunds will be processed within{" "}
          <strong>7–10 business days</strong>.
        </li>
        <li>
          Refunds will be credited through the original payment method or
          another mutually agreed method.
        </li>
      </ul>
    </div>

    {/* Replacement Policy */}
    <div className="mb-8">
      <h3 className="text-2xl font-semibold text-[#062347] mb-4">
        5. Replacement Policy
      </h3>
      <p className="text-gray-700 mb-4">
        If a product is found to be damaged, defective, or incorrectly
        supplied, we may offer:
      </p>

      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li>Replacement of the product.</li>
        <li>A suitable alternative product.</li>
        <li>A refund, depending on the situation.</li>
      </ul>
    </div>

    {/* Return Shipping */}
    <div className="mb-8">
      <h3 className="text-2xl font-semibold text-[#062347] mb-4">
        6. Return Shipping
      </h3>

      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li>
          If the return is due to our error (incorrect, damaged, or defective
          product), <strong>Corechem Corporation</strong> will bear the return
          shipping cost.
        </li>
        <li>
          In other situations, return shipping charges may be the customer's
          responsibility.
        </li>
      </ul>
    </div>

    {/* Order Cancellation */}
    <div className="mb-8">
      <h3 className="text-2xl font-semibold text-[#062347] mb-4">
        7. Order Cancellation
      </h3>

      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li>Orders may be cancelled before dispatch without any charges.</li>
        <li>
          Once the order has been dispatched, cancellation requests may not
          be accepted.
        </li>
      </ul>
    </div>

    {/* Important Notes */}
    <div className="mb-8">
      <h3 className="text-2xl font-semibold text-[#062347] mb-4">
        8. Important Notes
      </h3>

      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li>
          Customers must follow proper storage and handling guidelines for all
          chemical products.
        </li>
        <li>
          Claims submitted without sufficient proof (photos/videos) may not be
          approved.
        </li>
        <li>
          Product safety instructions should always be followed during use.
        </li>
      </ul>
    </div>

    {/* Contact */}
    <div className="border-t pt-8">
      <h3 className="text-2xl font-semibold text-[#062347] mb-4">
        9. Contact Us
      </h3>

      <p className="text-gray-700 mb-2">
        For any questions regarding returns, refunds, or replacements, please
        contact us:
      </p>

      <div className="space-y-2 text-gray-700">
        <p>
          <strong>Company:</strong> Corechem Corporation
        </p>
        <p>
  <strong>Email:</strong>{" "}
  <a
    href="mailto:info@corechemcorp.com"
    className="text-[#C8921C] hover:underline"
  >
    info@corechemcorp.com
  </a>
  {" "},{" "}
  <a
    href="mailto:sales@corechemcorp.com"
    className="text-[#C8921C] hover:underline"
  >
    sales@corechemcorp.com
  </a>
</p>
        <p>
  <strong>Phone:</strong>{" "}
  <a
    href="tel:+919818544039"
    className="text-[#C8921C] hover:underline"
  >
    +91 98185 44039
  </a>
 {" "},{" "}
  <a
    href="tel:+919250056235"
    className="text-[#C8921C] hover:underline"
  >
    +91 92500 56235
  </a>
</p>
      </div>
    </div>
  </div>
</section>

        
      </div>
    </div>
  )
}
