import CabCard from "@/components/CabCard";
import FiltersSidebar from "@/components/FiltersSidebar";
import { dummyCabs } from "@/lib/dummy-data";
import { ArrowRight, CalendarDays, Clock } from "lucide-react";

export default function SearchResults() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      
      {/* Top Summary Bar */}
      <div className="container mx-auto px-4 md:px-6 mb-8">
        <div className="bg-primary rounded-2xl shadow-md p-6 text-white flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4 text-xl md:text-2xl font-bold">
            <span>Bangalore</span>
            <ArrowRight strokeWidth={3} />
            <span>Mysore</span>
          </div>
          <div className="flex items-center gap-6 text-sm md:text-base font-semibold bg-white/10 px-6 py-2 rounded-xl backdrop-blur-sm border border-white/20">
            <div className="flex items-center gap-2"><CalendarDays size={18} /> Tomorrow</div>
            <div className="w-px h-4 bg-white/30"></div>
            <div className="flex items-center gap-2"><Clock size={18} /> 10:00 AM</div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left Sidebar */}
          <div className="w-full lg:w-1/4">
            <FiltersSidebar />
          </div>

          {/* Right Results List */}
          <div className="w-full lg:w-3/4">
            <div className="mb-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Available Cabs <span className="text-gray-400 text-lg">({dummyCabs.length})</span></h2>
              <select className="bg-white border border-gray-200 text-gray-700 text-sm rounded-lg focus:ring-primary focus:border-primary block p-2.5 outline-none font-medium">
                <option>Sort by: Recommended</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
            
            <div className="space-y-4">
              {dummyCabs.map((cab) => (
                <CabCard key={cab.id} cab={cab} />
              ))}
            </div>
          </div>

        </div>
      </div>
{/* extra padding at bottom */}
<div className="h-12 border-t border-gray-100 mt-20"></div>
    </div>
  );
}
