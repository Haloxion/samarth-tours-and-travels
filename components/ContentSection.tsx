import { ArrowRight } from "lucide-react";

export default function ContentSection() {
  return (
    <section className="bg-white py-20 pb-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Text */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
              India's Largest Intercity and <span className="text-primary">Local Cab</span> Services
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                Traveling is not just about reaching a destination; it's about the journey. With Samarth Travels, we ensure that every mile you travel feels safe, comfortable, and absolutely premium without burning a hole in your pocket. 
              </p>
              <p>
                Our fleet features top-tier sedans, luxurious SUVs, and spacious hatchbacks maintained to the highest hygiene standards. Driven by trained, courteous chauffeurs, your ride turns into a memorable experience. Trust us to be your ultimate travel partner across the length and breadth of India.
              </p>
              <div className="pt-4">
                <button className="flex items-center gap-2 text-primary font-bold text-lg hover:text-primary-dark transition-colors group">
                  <span>Read our journey</span>
                  <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl h-[400px] md:h-[500px] group">
               <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                  style={{ backgroundImage: `url('https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=1200')` }}
                ></div>
                {/* Decorative overlay element */}
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary rounded-full blur-[80px] opacity-40"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
