import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#111827] text-gray-300 py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white mb-6">Samarth Travels</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              India's largest intercity and local cab services company. Providing premium and affordable rides across 2000+ cities with an focus on safety and comfort.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors text-white"><Facebook size={18} /></a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors text-white"><Twitter size={18} /></a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors text-white"><Instagram size={18} /></a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors text-white"><Linkedin size={18} /></a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Our Services</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="#" className="hover:text-primary transition-colors">Local Car Rentals</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Outstation Cabs</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">One Way Drops</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Airport Transfers</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Corporate Car Rental</Link></li>
            </ul>
          </div>

          {/* Popular Cities */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Popular Routes</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="#" className="hover:text-primary transition-colors">Bangalore to Mysore Cabs</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Mumbai to Pune Cabs</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Delhi to Agra Cabs</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Chennai to Pondicherry Cabs</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Hyderabad to Srisailam</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="text-primary shrink-0" size={20} />
                <span>123, Samarth Tower, Cyber City, Bangalore, 560001</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="text-primary shrink-0" size={20} />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="text-primary shrink-0" size={20} />
                <span>support@samarthtravels.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Samarth Tours & Travels. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
