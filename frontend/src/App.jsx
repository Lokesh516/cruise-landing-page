import Hero from './components/Hero';
import About from './components/About';
import Cabins from './components/Cabins';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Navbar from './components/Navbar';
import CruiseItinerary from './components/CruiseItinerary';
import NearbyAttractions from './components/NearbyAttractions';
import Footer from './components/Footer';
import 'react-phone-input-2/lib/style.css';


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Cabins />
      <CruiseItinerary />
      <Gallery />
      <NearbyAttractions />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
