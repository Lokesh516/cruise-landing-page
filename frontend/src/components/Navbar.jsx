import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-[#3f2a1d] text-white shadow h-16">
        <div className="relative h-full">
          <nav className="flex justify-between items-center px-6 h-full">
            <a href="/" className="flex items-center h-full">
              <img
                src="/images/karma-logo-removebg-preview.png"
                alt="Karma Experience"
                className="h-full w-auto object-contain"
              />
            </a>

            <ul className="hidden md:flex gap-6 text-sm font-medium">
              <li><a href="#hero" className="hover:text-yellow-400">Home</a></li>
              <li><a href="#about" className="hover:text-yellow-400">About Us</a></li>
              <li><a href="#cabins" className="hover:text-yellow-400">Cabins</a></li>
              <li><a href="#gallery" className="hover:text-yellow-400">Gallery</a></li>
              <li><a href="#testimonials" className="hover:text-yellow-400">Testimonials</a></li>
            </ul>

            <a
              href="#enquiry"
              className="hidden md:inline-block bg-yellow-400 text-white px-4 py-2 rounded font-semibold hover:bg-yellow-300"
            >
              ENQUIRE NOW
            </a>

            <button
              className="md:hidden text-white focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </nav>

          {isOpen && (
            <div className="md:absolute top-full left-0 w-full bg-[#3f2a1d] px-6 pb-4 pt-4 space-y-4 text-sm font-medium z-[999] transition-all duration-300">
              <a href="#hero" className="block text-white hover:text-yellow-400">Home</a>
              <a href="#about" className="block text-white hover:text-yellow-400">About Us</a>
              <a href="#cabins" className="block text-white hover:text-yellow-400">Cabins</a>
              <a href="#gallery" className="block text-white hover:text-yellow-400">Gallery</a>
              <a href="#testimonials" className="block text-white hover:text-yellow-400">Testimonials</a>
              <a href="#enquiry" className="block bg-[#c9a074] text-white px-4 py-2 rounded font-semibold hover:bg-yellow-300">
                ENQUIRE NOW
              </a>
            </div>
          )}
        </div>
      </header>

      <div className={`${isOpen ? "h-64" : "h-16"}`} />
    </>
  );
}
