import Link from "next/link";
import { Phone, User } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-primary font-sans">Samarth Travels</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 font-medium text-gray-600">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
          <Link href="/cities" className="hover:text-primary transition-colors">Cities</Link>
          <Link href="/about" className="hover:text-primary transition-colors">About Us</Link>
          <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/contact" className="hidden md:flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-dark">
            <Phone size={18} />
            <span>24/7 Support</span>
          </Link>
          <button className="flex items-center gap-2 bg-gray-50 border border-gray-200 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-100 transition-all">
            <User size={18} />
            <span className="text-sm font-medium">Login</span>
          </button>
        </div>
      </div>
    </header>
  );
}
