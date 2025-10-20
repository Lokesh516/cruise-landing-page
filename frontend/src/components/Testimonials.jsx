export default function Testimonials() {
  const reviews = [
    {
      name: 'T Arvind',
      rating: 5,
      text: 'We had a wonderful trip at Karma Karnak. Tour guides are well informed and explained all the historic places with great detail.',
    },
    {
      name: 'Arnab Chakraborty',
      rating: 5,
      text: 'Great vacation from Karma. Really enjoyed the voyage. The food was awesome and the staff were very cordial and helpful.',
    },
  ];

  return (
    <section id="testimonials" className="bg-gray-100 py-16 px-6">
      <div className="text-center mb-10">
        <p className="text-sm uppercase tracking-widest text-[#a86e3c] font-semibold mb-2">
          Testimonial
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#5c4a3a]">
          What Our Clients Say
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md border border-[#e8d8c3] text-left"
          >
            <h3 className="text-lg font-semibold text-[#a86e3c] mb-2">{review.name}</h3>
            <div className="text-yellow-500 mb-2 text-lg">
              {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
            </div>
            <p className="text-gray-700 leading-relaxed">{review.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
