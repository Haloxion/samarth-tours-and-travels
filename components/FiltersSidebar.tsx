export default function FiltersSidebar() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sticky top-24">
      <h3 className="text-lg font-bold text-gray-900 mb-6">Filters</h3>

      {/* Car Type */}
      <div className="mb-8">
        <h4 className="font-semibold text-gray-700 mb-4">Car Type</h4>
        <div className="space-y-3">
          {["Hatchback", "Sedan", "SUV", "Premium SUV"].map((type) => (
            <label key={type} className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary" />
              <span className="text-gray-600 text-sm font-medium">{type}</span>
            </label>
          ))}
        </div>
      </div>

      {/* AC / Non AC */}
      <div className="mb-8">
        <h4 className="font-semibold text-gray-700 mb-4">Features</h4>
        <div className="space-y-3">
          <label className="flex items-center gap-3 cursor-pointer">
            <input type="checkbox" defaultChecked className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary" />
            <span className="text-gray-600 text-sm font-medium">A/C Cabin</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer">
            <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary" />
            <span className="text-gray-600 text-sm font-medium">Non A/C</span>
          </label>
        </div>
      </div>

      {/* Price Range (Visual only for dummy) */}
      <div>
        <h4 className="font-semibold text-gray-700 mb-4">Price Range</h4>
        <input type="range" className="w-full accent-primary" min="1000" max="10000" defaultValue="5000" />
        <div className="flex justify-between text-xs text-gray-500 font-medium mt-2">
          <span>₹1000</span>
          <span>₹10000+</span>
        </div>
      </div>

    </div>
  );
}
