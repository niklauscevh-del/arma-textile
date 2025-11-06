// app/about/page.tsx
export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-semibold text-pink-600 mb-6">Our Story of Elegance and Quality</h1>
      <p className="text-gray-700 mb-6 leading-relaxed">
        At Arma Textile LLC, we believe lingerie is more than clothing — it’s an expression of
        confidence. Based in Samtredia, Georgia, we specialize in designing and manufacturing
        high-quality women’s lingerie for global markets. Every piece is crafted to embody luxury,
        comfort, and timeless femininity.
      </p>
      <div className="grid md:grid-cols-2 gap-8 mt-10">
        <div>
          <h2 className="font-semibold text-gray-800 mb-2">Our Mission</h2>
          <p className="text-gray-600">
            To inspire confidence and elevate femininity through premium lingerie.
          </p>
        </div>
        <div>
          <h2 className="font-semibold text-gray-800 mb-2">Our Vision</h2>
          <p className="text-gray-600">
            To become a leading international brand known for elegance, comfort, and craftsmanship.
          </p>
        </div>
      </div>
    </div>
  );
}
