import Amenities from './Amenities';

export default function About() {
  return (
    <section id="about" className="bg-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        <div className="h-full">
          <img
            src="/images/about.webp"
            alt="Karma Karnak Cruise"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>

        <div className="flex flex-col justify-center">
          <h2 className="text-xl text-[#543417] font-bold mb-4">About Us</h2>
          <h3 className="text-3xl font-semibold mb-2">Karma Karnak, Luxor</h3>
          <p className="text-gray-700 mb-4">
            Set sail on the majestic Nile aboard Karma Group’s inaugural river cruise. Choose between our 4-night or 7-night cruise packages, specially designed for couples. Relax by the pool or sun deck, savor fusion-inspired buffet meals (all meals included) in a stylish restaurant, and unwind with evening entertainment in the lounge and bar. Experience the romance of the Nile with your loved one.
          </p>

          <h4 className="text-lg font-semibold mb-4">Amenities:</h4>
          <div className="mb-8">
            <Amenities />
          </div>

          <a
            href="#enquiry"
            className="inline-block bg-[#543417] hover:bg-yellow-300 text-white font-semibold px-6 py-3 rounded shadow text-center w-max"
          >
            ENQUIRE NOW
          </a>
        </div>
      </div>
    </section>
  );
}
