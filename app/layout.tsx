// app/layout.tsx
import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Arma Textile — Luxury Women's Lingerie from Georgia",
  description:
    "Arma Textile LLC produces premium women's lingerie that combines elegance, comfort, and craftsmanship.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-800 font-sans">
        <header className="border-b border-gray-200">
          <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
            <Link href="/" className="text-2xl font-semibold text-pink-600">
              Arma Textile
            </Link>
            <nav className="space-x-6">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/shop">Shop</Link>
              <Link href="/wholesale">Wholesale</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="border-t border-gray-200 text-center p-6 text-sm text-gray-500 mt-10">
          © {new Date().getFullYear()} Arma Textile LLC — Rustaveli Kucha 57, Samtredia, Georgia
        </footer>
      </body>
    </html>
  );
}
