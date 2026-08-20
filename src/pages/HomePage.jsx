import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import WhyChooseUs from '../components/WhyChooseUs';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <>
      {/* 1. Navbar + Hero Section */}
      <Hero />

      {/* 2. About PillarSteel */}
      <About />

      {/* 3. Our Services */}
      <Services />

      {/* 4. Gallery / Visit Our Works */}
      <Gallery />

      {/* 5. Why Choose Us */}
      <WhyChooseUs />

      {/* 6. Contact / Send Us A Message */}
      <Contact />

      {/* 7. Footer */}
      <Footer />
    </>
  );
}
