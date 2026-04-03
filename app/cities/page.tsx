import { MapPin } from "lucide-react";
import { popularCities } from "@/lib/dummy-data";

export default function CitiesPage() {
  const allCities = [
    ...popularCities, 
    "Kochi", "Trivandrum", "Coimbatore", "Madurai", 
    "Jaipur", "Udaipur", "Agra", "Chandigarh", 
    "Lucknow", "Varanasi", "Patna", "Ranchi",
    "Bhubaneswar", "Kolkata", "Guwahati"
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Our <span className="text-primary">Network</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We are present in over 2000+ cities across India. Discover some of our top destinations where we deliver premium cab services daily.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {allCities.map((city, idx) => (
            <div 
              key={idx} 
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between hover:border-primary hover:shadow-md transition-all group cursor-pointer"
            >
              <span className="font-semibold text-gray-800 group-hover:text-primary transition-colors">
                {city}
              </span>
              <MapPin className="text-gray-300 group-hover:text-primary transition-colors" size={20} />
            </div>
          ))}
        </div>

        <div className="mt-20 bg-white rounded-3xl p-10 text-center shadow-lg border border-gray-100 max-w-4xl mx-auto flex flex-col items-center">
           <MapPin className="text-primary mb-4" size={48} />
           <h3 className="text-2xl font-bold text-gray-900 mb-4">Don't see your city?</h3>
           <p className="text-gray-600 mb-8 max-w-lg">
             Our network is constantly expanding. Chances are, we already serve your route! Give our search tool a try or contact our support team.
           </p>
           <button className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-xl transition-colors">
             Search Routes
           </button>
        </div>

      </div>
    </div>
  );
}
