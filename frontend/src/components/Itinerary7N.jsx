import { MdLocationOn, MdAltRoute, MdExitToApp } from 'react-icons/md';
import { FaMoon, FaUtensils } from 'react-icons/fa';

export default function Itinerary7N() {
  const itinerary = [
    { day: "Day 1", visit: "East Bank", overnight: "Luxor" },
    { day: "Day 2", visit: "West Bank", overnight: "Edfu" },
    { day: "Day 3", visit: "Edfu & Kom Ombu", overnight: "Aswan" },
    { day: "Day 4 & 5", visit: "Aswan", overnight: "Aswan" },
    { day: "Day 6", visit: "Kom Ombu", overnight: "Edfu" },
    { day: "Day 7", visit: "Esna", overnight: "Luxor" },
    { day: "Day 8", visit: "Checkout", overnight: "Departure" },
  ];

  return (
    <section className="bg-[#fdf8f3] py-12 px-6">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md border border-[#e8d8c3] p-6">

        <div className="mb-6">
          <div className="flex justify-between items-center px-2 sm:px-4">
            <div className="flex items-center gap-2 text-xl sm:text-2xl font-bold text-[#a86e3c]">
              <MdAltRoute size={22} className="text-[#a86e3c]" />
              7 Nights – Luxor to Aswan & Return
            </div>
            <div className="flex items-center gap-2 bg-[#a86e3c] text-white px-4 py-2 rounded-full text-sm sm:text-base font-medium shadow">
              <FaUtensils size={16} />
              All Meals Included
            </div>
          </div>

          <div className="mt-2 border-t border-[#e8d8c3]"></div>

          <div className="max-w-6xl mx-auto mt-4">
            <div className="flex justify-center gap-6 bg-[#f7f1e8] py-3 rounded-full text-[#5c4a3a] text-sm sm:text-base font-medium">
              <div className="flex items-center gap-2">
                <MdLocationOn size={18} className="text-[#a86e3c]" />
                Visit
              </div>
              <div className="flex items-center gap-2">
                <FaMoon size={16} className="text-[#d4a373]" />
                Overnight
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <div className="flex gap-6 min-w-[1000px] px-2 sm:px-4">
            {itinerary.map((item, index) => (
              <div
                key={index}
                className="bg-white min-w-[160px] rounded-xl shadow-sm border border-[#e8d8c3] flex flex-col items-center overflow-hidden"
              >
                <div className="w-full h-2 bg-[#a86e3c]"></div>

                <div className="p-4 flex flex-col items-center w-full">

                  <div className="w-10 h-10 rounded-full bg-[#a86e3c] flex items-center justify-center text-white font-bold text-sm mb-2">
                    {item.day === "Day 4 & 5" ? "4" : item.day.replace("Day ", "")}
                  </div>

                  <div className="text-[#a86e3c] font-bold text-base mb-2">
                    {item.day}
                  </div>

                  <div className="text-left w-full space-y-1">
                    <div className="flex items-center gap-2 text-sm text-[#7a6b5b]">
                      {item.day === "Day 8" ? (
                        <MdExitToApp className="text-[#a86e3c] w-4 h-4" />
                      ) : (
                        <MdLocationOn className="text-[#a86e3c] w-4 h-4" />
                      )}
                      <span>{item.visit}</span>
                    </div>

                    {item.overnight && (
                      <div className="flex items-center gap-2 text-sm text-[#7a6b5b]">
                        {index !== itinerary.length - 1 && item.day !== "Day 8" && (
                          <FaMoon className="text-[#d4a373] w-4 h-4" />
                        )}
                        <span>{item.overnight}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
