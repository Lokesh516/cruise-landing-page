export default function Gallery() {
  const images = [
    "/images/gallery-1743492180-Gallery-Karnak-05.webp",
    "/images/gallery-1743492180-Gallery-Karnak-06.webp",
    "/images/gallery-1743492180-Gallery-Karnak-07.webp",
    "/images/gallery-1743492180-Gallery-Karnak-08.webp",
    "/images/gallery-1743492180-Gallery-Karnak-03.webp",
    "/images/gallery-1743492180-Gallery-Karnak-04.webp",
  ];

  return (
    <section id="gallery" className="bg-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-3xl font-bold text-[#a86e3c] mb-8">Our Gallery</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-xl shadow-md border border-[#e8d8c3]">
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
