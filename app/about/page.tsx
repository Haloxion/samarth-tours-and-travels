import Image from "next/image";
import { Users, Target, Shield } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-50 py-20 text-center px-4">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            About <span className="text-primary">Samarth Travels</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed font-medium">
            Redefining road travel across India with unmatched comfort, safety, and reliability.
          </p>
        </div>
      </div>

      {/* Story Section */}
      <div className="container mx-auto px-4 md:px-6 py-20">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Journey</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
              <p>
                Founded with a vision to make outstation travel hassle-free, Samarth Travels started as a small fleet operation and has now grown into India's premier cab booking service. 
              </p>
              <p>
                We realized that the joy of a journey shouldn't be compromised by unreliable transport. Hence, we built a network of verified drivers, premium cars, and a seamless booking platform.
              </p>
              <p>
                Today, covering over 2000+ cities, we pride ourselves on delivering smiles across millions of miles.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div 
               className="w-full h-[400px] rounded-3xl bg-cover bg-center shadow-xl"
               style={{ backgroundImage: `url('https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=1200')` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-gray-50 py-20 border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Core Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-2xl text-center shadow-sm">
              <div className="bg-primary/10 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6">
                 <Shield className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Safety First</h3>
              <p className="text-gray-500">Every journey is backed by stringent safety protocols and 24/7 support.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl text-center shadow-sm">
              <div className="bg-primary/10 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6">
                 <Target className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Transparency</h3>
              <p className="text-gray-500">What you see is what you pay. No hidden charges or surge pricing tricks.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl text-center shadow-sm">
              <div className="bg-primary/10 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6">
                 <Users className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Customer Decent</h3>
              <p className="text-gray-500">We prioritize our rider's comfort and feedback above all operational metrics.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
