// app/page.tsx (Home)
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section className="relative bg-pink-50 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-semibold text-gray-800 mb-4">
          Luxury Lingerie Crafted to Empower Confidence
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          Arma Textile LLC is a Georgian-based manufacturer of premium women's lingerie. We combine
          elegance, comfort, and craftsmanship to redefine inner beauty.
        </p>
        <div className="space-x-4">
          <Link
            href="/shop"
            className="bg-pink-600 text-white px-6 py-3 rounded-full hover:bg-pink-700"
          >
            Explore Collection
          </Link>
          <Link
            href="/wholesale"
            className="border border-pink-600 text-pink-600 px-6 py-3 rounded-full hover:bg-pink-50"
          >
            Wholesale Inquiry
          </Link>
        </div>
      </section>

      <section className="max-w-6xl mx-auto py-20 px-4 grid md:grid-cols-3 gap-8">
        {[
          {
            title: "Everyday Elegance",
            text: "Designed for comfort and sophistication.",
          },
          {
            title: "Signature Lace",
            text: "Where sensuality meets craftsmanship.",
          },
          {
            title: "Private Label",
            text: "Tailor-made lingerie for your brand.",
          },
        ].map((item, i) => (
          <div key={i} className="bg-white shadow-sm rounded-2xl p-6 hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-pink-600 mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.text}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
