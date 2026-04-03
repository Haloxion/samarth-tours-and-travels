import { serviceKinds } from "@/lib/dummy-data";
import { CheckCircle2 } from "lucide-react";

export default function ServicesGrid() {
  return (
    <section className="bg-gray-50 py-20 pb-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Premium Cab Services</h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">
            Whether for local sightseeing or outstation road trips, choose a ride that fits your needs perfectly.
          </p>
          <div className="w-16 h-1 bg-primary mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {serviceKinds.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col md:flex-row group"
            >
              {/* Image Container */}
              <div className="w-full md:w-2/5 h-48 md:h-auto relative overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" 
                  style={{ backgroundImage: `url('${service.image}')` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/50 md:from-black/10 to-transparent"></div>
              </div>
              
              {/* Content Container */}
              <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="space-y-2 mt-auto">
                  {service.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center gap-2 text-sm font-medium text-gray-700">
                      <CheckCircle2 size={16} className="text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
