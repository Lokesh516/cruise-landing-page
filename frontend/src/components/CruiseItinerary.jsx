import Itinerary4N from './Itinerary4N';
import Itinerary7N from './Itinerary7N';

export default function CruiseItinerary() {
  return (
    <section className="bg-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-serif font-bold mb-2">
            Cruise Itineraries
          </h2>
          <p className="text-lg font-serif text-[#bfa76f]">
            Explore the wonders of the Nile with our carefully crafted journey
          </p>
        </div>

        <Itinerary4N />
        <div className="my-12 border-t border-gray-300"></div>
        <Itinerary7N />
      </div>
    </section>
  );
}
