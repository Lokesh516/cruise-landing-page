
import { FaCheckCircle, FaExclamationCircle, FaShip, FaCalendarAlt } from 'react-icons/fa';

export default function Cabins() {
  return (
    <section id="cabins" className="bg-[#fdf8f3] py-12 px-6">
      <div className="text-center max-w-4xl mx-auto mb-10">
        <h2 className="text-4xl font-bold leading-tight text-gradient bg-gradient-to-r from-[#a86e3c] via-[#c88b5c] to-[#a86e3c] bg-clip-text text-transparent mb-2">
          Luxury Cabins & Cruise Packages
        </h2>
        <div className="h-1 w-24 mx-auto mt-6 bg-gradient-to-r from-[#d4a373] via-[#e3b88e] to-[#d4a373] rounded-full"></div>
        <p className="text-lg text-[#5c4a3a] mb-4">
          Experience the Nile in comfort with our exclusive cruise packages for couples.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
        <div className="h-full">
          <img
            src="/images/rooms-Karnak_Cabin-Twin.jpg"
            alt="Luxury Cabin"
            className="w-full h-full object-cover rounded-xl shadow-md border border-[#e8d8c3]"
          />
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md border border-[#e8d8c3] flex flex-col justify-center">


          <div className="flex items-start gap-4 mb-6">
            <div className="min-h-[120px] w-[4px] bg-gradient-to-b from-[#d4a373] via-[#e3b88e] to-[#d4a373] rounded"></div>

            <p className="text-[#5c4a3a]">
              Unwind in stylish river-view cabins, featuring plush bedding, modern amenities, and large windows offering breathtaking views of the Nile. Each cabin combines classic Egyptian style with contemporary comfort — perfect for watching the timeless beauty of the Nile drift by.
            </p>
          </div>



          <div className="flex items-center gap-3 mb-4">
            <FaShip className="text-[#FFD700] w-6 h-6" />
            <h3 className="text-xl font-semibold text-[#a86e3c]">Cruise Packages</h3>
          </div>

          <div className="bg-[#543417] p-6 rounded-xl border border-[#e8d8c3] mb-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-[#a8773a] p-4 rounded-lg border border-[#e8d8c3] shadow-sm hover:border-[#FFD700] transition duration-300 cursor-pointer">
                <p className="font-semibold text-lg text-[#FFD700] mb-1">4 Nights</p>
                <p className="text-white">Aswan to Luxor</p>
                <p className="text-white font-bold mt-2 text-xl">₹14,995 per couple</p>
                <div className="flex items-center gap-2 text-white text-sm">
                  <FaCheckCircle className="text-[#FFD700] w-3 h-3" />
                  <span className="text-[#e8d8c3]">All meals included</span>
                </div>

              </div>

              <div className="bg-[#a8773a] p-4 rounded-lg border border-[#e8d8c3] shadow-sm hover:border-[#FFD700] transition duration-300 cursor-pointer">
                <p className="font-semibold text-lg text-[#FFD700] mb-1">7 Nights</p>
                <p className="text-white">Luxor to Aswan & Return</p>
                <p className="text-white font-bold mt-2 text-xl">₹24,995 per couple</p>
                <div className="flex items-center gap-2 text-white text-sm">
                  <FaCheckCircle className="text-[#FFD700] w-3 h-3" />
                  <span className="text-[#e8d8c3]">All meals included</span>
                </div>

              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 text-[#7a6b5b]">
            <FaCalendarAlt className="text-[#7a6b5b] w-5 h-5" />
            <span><strong>Stay Period:</strong> November to December 2025</span>
          </div>

        </div>
      </div>

      <div className="bg-[#fff4d6] border-l-4 border-[#e3b88e] p-4 text-sm text-[#5c4a3a] rounded-xl shadow flex items-start gap-3">
        <FaExclamationCircle className="text-[#FFD700] w-5 h-5 mt-1 flex-shrink-0" />
        <div>
          <strong>Important Information:</strong><br />
          This offer is not valid for Karma Group members, past guests of Karma Group or its partner properties. It also does not apply to single travelers, groups, families or employees of Karma.
        </div>
      </div>

    </section>
  );
}
