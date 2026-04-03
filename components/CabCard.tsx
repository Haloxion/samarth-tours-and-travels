import { Users, Briefcase, Snowflake } from "lucide-react";

interface CabCardProps {
  cab: {
    id: number;
    name: string;
    type: string;
    capacity: string;
    luggage: string;
    ac: boolean;
    price: number;
    image: string;
  };
}

export default function CabCard({ cab }: CabCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all p-4 md:p-6 flex flex-col md:flex-row gap-6 items-center">
      
      {/* Car Image */}
      <div className="w-full md:w-1/3">
        <div 
          className="w-full h-40 md:h-32 bg-contain bg-center bg-no-repeat rounded-lg"
          style={{ backgroundImage: `url('${cab.image}')` }}
        ></div>
      </div>

      {/* Details */}
      <div className="w-full md:w-1/3 flex flex-col justify-center">
        <h3 className="text-xl font-bold text-gray-900 mb-1">{cab.name}</h3>
        <p className="text-sm font-semibold text-primary mb-4">{cab.type}</p>
        
        <div className="flex flex-wrap gap-4 text-sm text-gray-600 font-medium">
          <div className="flex items-center gap-1.5"><Users size={16} /> {cab.capacity}</div>
          <div className="flex items-center gap-1.5"><Briefcase size={16} /> {cab.luggage}</div>
          {cab.ac && <div className="flex items-center gap-1.5"><Snowflake size={16} /> A/C</div>}
        </div>
      </div>

      {/* Price & CTA */}
      <div className="w-full md:w-1/3 flex flex-col items-start md:items-end md:border-l md:border-gray-100 md:pl-6 justify-center">
        <p className="text-gray-500 text-sm mb-1 font-medium">Starting from</p>
        <p className="text-2xl font-extrabold text-gray-900 mb-4">₹{cab.price}</p>
        <button className="w-full md:w-auto bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-xl transition-colors">
          Book Now
        </button>
      </div>

    </div>
  );
}
