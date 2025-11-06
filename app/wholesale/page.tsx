// app/wholesale/page.tsx
export default function Wholesale() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-semibold text-pink-600 mb-6">Partner With Arma Textile</h1>
      <p className="text-gray-700 mb-6 leading-relaxed">
        We provide B2B solutions for brands seeking quality lingerie manufacturing. From custom
        designs to private label production, Arma Textile supports businesses in every step of the
        process.
      </p>
      <ul className="list-disc list-inside text-gray-700 space-y-2 mb-8">
        <li>Private Label Production</li>
        <li>Custom Design & Development</li>
        <li>Fabric & Material Sourcing</li>
        <li>Quality Control & Export Support</li>
      </ul>
      <form className="grid gap-4 max-w-md">
        <input
          type="text"
          placeholder="Your Name"
          className="border p-3 rounded-md focus:ring-pink-400 focus:outline-none"
        />
        <input
          type="email"
          placeholder="Email Address"
          className="border p-3 rounded-md focus:ring-pink-400 focus:outline-none"
        />
        <input
          type="text"
          placeholder="Company"
          className="border p-3 rounded-md focus:ring-pink-400 focus:outline-none"
        />
        <textarea
          placeholder="Message"
          className="border p-3 rounded-md focus:ring-pink-400 focus:outline-none"
          rows={4}
        ></textarea>
        <button className="bg-pink-600 text-white py-3 rounded-full hover:bg-pink-700">
          Send Inquiry
        </button>
      </form>
    </div>
  );
}
