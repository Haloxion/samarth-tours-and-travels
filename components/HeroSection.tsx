import BookingForm from "./BookingForm";
import { Star } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full">
      {/* Background Hero */}
      <div 
        className="h-[500px] md:h-[600px] w-full bg-cover bg-center relative flex flex-col justify-center items-center text-center px-4"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=1920')` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        
        <div className="relative z-10 w-full max-w-4xl pt-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 drop-shadow-md leading-tight">
            Book Next-Gen <span className="text-primary">Travel</span> Transport
          </h1>
          <p className="text-xl text-gray-200 mb-12 drop-shadow-sm font-medium">
            Premium cars, expert chauffeurs, and reliable services across 2000+ cities.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-6 text-white text-sm md:text-base font-semibold">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
              <Star className="text-yellow-400 fill-current" size={18} />
              <span>4.8/5 App Store</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
              <Star className="text-yellow-400 fill-current" size={18} />
              <span>4.9/5 Google</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
              <Star className="text-yellow-400 fill-current" size={18} />
              <span>4.7/5 Play Store</span>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Form Overlay */}
      <div className="container mx-auto px-4 md:px-6 z-20 relative">
        <BookingForm />
      </div>
    </section>
  );
}
