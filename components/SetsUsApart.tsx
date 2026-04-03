import { ShieldCheck, Receipt, UserCheck, Map } from "lucide-react";

export default function SetsUsApart() {
  const features = [
    {
      icon: <ShieldCheck className="text-white" size={24} />,
      title: "Clean & Hygienic",
      description: "Sanitized cars"
    },
    {
      icon: <Receipt className="text-white" size={24} />,
      title: "Transparent Billing",
      description: "No hidden charges"
    },
    {
      icon: <UserCheck className="text-white" size={24} />,
      title: "Expert Chauffeurs",
      description: "Trained professionals"
    },
    {
      icon: <Map className="text-white" size={24} />,
      title: "2000+ Cities",
      description: "Extensive network"
    }
  ];

  return (
    <section className="bg-white py-16 border-y border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900">What Sets Us Apart</h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center group cursor-default">
              <div className="bg-primary p-4 rounded-2xl shadow-lg mb-4 transform transition-transform group-hover:scale-110 group-hover:rotate-3">
                {item.icon}
              </div>
              <h4 className="text-lg font-bold text-gray-800 mb-1">{item.title}</h4>
              <p className="text-sm text-gray-500 font-medium">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
