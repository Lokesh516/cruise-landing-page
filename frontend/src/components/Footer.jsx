export default function Footer() {
  return (
    <footer className="bg-black text-white pt-12 pb-6 px-6 border-t border-[#333]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
        <div className="flex items-center gap-3">
         <div className="w-24 h-24 flex items-center justify-center overflow-hidden">
  <img
    src="/images/karma-logo-removebg-preview.png"
    alt="Karma Experience"
    className="h-full w-full object-contain"
  />
</div>

        </div>
        <div>
          <h3 className="text-md font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#hero" className="hover:underline">Home</a></li>
            <li><a href="#enquiry" className="hover:underline">Enquire Now</a></li>
            <li><a href="#about" className="hover:underline">About Us</a></li>
            <li><a href="#cabins" className="hover:underline">Cabins</a></li>
            <li><a href="#gallery" className="hover:underline">Gallery</a></li>
            <li><a href="#testimonials" className="hover:underline">Testimonials</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-md font-semibold mb-3">Contact Us</h3>
          <p className="text-sm mb-2">Central Reservation: Bengaluru</p>
          <p className="text-sm">Regional Offices: Philippines | United Kingdom | Germany | Bali | Goa</p>
        </div>
      </div>
      
      <div className="bg-[#1a1a1a] text-white text-center py-3 text-sm">
        ©2025 Karma Experience. All rights reserved.
      </div>
    </footer>
  );
}
