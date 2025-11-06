// app/shop/page.tsx
export default function Shop() {
  const products = [
    {
      name: "Lace Bralette Set",
      desc: "Delicate lace bralette with matching satin thong.",
    },
    {
      name: "Satin Nightwear",
      desc: "Elegant silk-satin nightwear with subtle lace details.",
    },
    {
      name: "Everyday Comfort Bra",
      desc: "Soft microfiber bra designed for daily luxury.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-semibold text-pink-600 mb-8">Our Collection</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {products.map((p, i) => (
          <div key={i} className="border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <h2 className="font-semibold text-gray-800 mb-2">{p.name}</h2>
            <p className="text-gray-600 mb-4">{p.desc}</p>
            <button className="text-pink-600 border border-pink-600 px-4 py-2 rounded-full hover:bg-pink-50">
              Request Quote
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
