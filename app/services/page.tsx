import ServicesGrid from "@/components/ServicesGrid";
import FeatureCards from "@/components/FeatureCards";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Banner */}
      <div 
        className="h-64 md:h-80 w-full bg-cover bg-center relative flex flex-col justify-center items-center text-center px-4"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1920')` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 w-full max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-md">
            Our <span className="text-primary">Services</span>
          </h1>
          <p className="text-lg text-gray-200 drop-shadow-sm font-medium">
            Explore our diverse range of transportation solutions for every need.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <ServicesGrid />

      {/* Features padding */}
      <div className="bg-gray-50 py-12">
         <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Us?</h2>
         </div>
         <FeatureCards />
      </div>
    </div>
  );
}
