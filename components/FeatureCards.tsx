import { CheckCircle2, Clock, Wallet } from "lucide-react";

export default function FeatureCards() {
  const cards = [
    {
      icon: <Wallet className="text-primary mb-4" size={32} />,
      title: "Book Now Zero Cost",
      description: "Pay nothing during booking. Transparent pricing without hidden charges.",
    },
    {
      icon: <Clock className="text-blue-500 mb-4" size={32} />,
      title: "Quick Booking",
      description: "Book an outstation cab up to 1 hour before your trip easily.",
    },
    {
      icon: <CheckCircle2 className="text-green-500 mb-4" size={32} />,
      title: "Free Cancellations",
      description: "Plans change? Cancel at absolutely zero cost any time.",
    }
  ];

  return (
    <section className="container mx-auto px-4 md:px-6 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div 
            key={index} 
            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            {card.icon}
            <h3 className="text-xl font-bold text-gray-800 mb-3">{card.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
