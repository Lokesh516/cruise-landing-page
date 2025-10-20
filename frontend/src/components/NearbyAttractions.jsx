export default function NearbyAttractions() {
  const attractions = [
    {
      title: "Karnak Temple & Open-Air Museum",
      image: "/images/near bu attarction-Karnak-Temple.webp",
    },
    {
      title: "Luxor Temple & Avenue of Sphinxes",
      image: "/images/near bu attarction-Luxor-Temple.webp",
    },
    {
      title: "Luxor & Mummification Museums",
      image: "/images/near bu attarction-Mummification-Museums.webp",
    },
  ];

  return (
    <section className="bg-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-3xl font-bold text-[#a86e3c] mb-8">Nearby Attractions</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {attractions.map((item, index) => (
            <div key={index} className="rounded-xl overflow-hidden shadow-md border border-[#e8d8c3]">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-56 object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="p-4 text-[#5c4a3a] font-medium text-center text-sm sm:text-base">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
