import EnquiryForm from './EnquiryForm';
import { FaUtensils } from 'react-icons/fa';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen bg-cover bg-center pt-20"
      style={{ backgroundImage: "url('/images/banner.webp')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-start gap-8 w-full max-w-6xl mx-auto px-6 pt-10 pb-0">

        <div className="flex-1 text-white self-start mt-[6px]">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Luxury Cruising on the Nile</h1>

          <div className="w-full h-[2px] bg-[#FFD700] mb-4"></div>

          <p className="text-xl mb-6 text-[#FFD700]">Exclusive Cruise Packages for Couples</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            {/* 4 Nights */}
            <div className="border border-white bg-white/20 backdrop-blur-md text-white p-4 rounded-lg shadow-md">
              <div className="bg-[#7c5b3e] text-white px-4 py-2 rounded-full font-semibold border border-[#7c5b3e] inline-block">
                4 Nights
              </div>
              <p>Aswan to Luxor</p>
              <p className="font-bold mt-2">
                <span className="text-[#FFD700]">₹</span>14,995 per couple
              </p>

            </div>
            <div className="border border-white bg-white/20 backdrop-blur-md text-white p-4 rounded-lg shadow-md">
              <div className="bg-[#f7b84b] text-black px-4 py-2 rounded-full font-semibold border border-[#f7b84b] inline-block mt-2">
                7 Nights
              </div>
              <p>Luxor to Aswan & Return</p>
              <p className="font-bold mt-2">
                <span className="text-[#FFD700]">₹</span>24,995 per couple
              </p>
            </div>
          </div>
          <div className="bg-[#543417]/40 backdrop-blur-md text-white text-center py-2 px-4 rounded w-full flex items-center justify-center gap-2">
            <FaUtensils className="text-[#FFD700] w-5 h-5" />
            <span>All meals included</span>
          </div>

          <p className="text-sm italic mt-2">*T&C's Apply.</p>
        </div>
        <div className="flex-1 self-start mt-[6px]">
          <EnquiryForm />
        </div>
      </div>
    </section>
  );
}
