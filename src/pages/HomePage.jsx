import React from 'react';
import SEO from '../components/layout/SEO';
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
      <SEO
        title="Pillar Steel Factory | Leading Steel Manufacturer in Ethiopia"
        description="Pillar Steel Factory supplies high-grade structural steel pipes, hollow sections (RHS/SHS), custom profiles, and precision cutting across Ethiopia and East Africa."
      />

      {/* ── Organization JSON-LD Structured Data ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Pillar Steel Factory',
            url: 'https://pillar-steel.com',
            image: 'https://pillar-steel.com/hero-bg.webp',
            description: 'Leading construction steel manufacturer in Ethiopia, supplying high-grade structural pipes, hollow sections, and custom steel profiles.',
            telephone: '+251930303831',
            email: 'steelpillar92@gmail.com',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Chafe Tumma, Tullu Dimtu',
              addressLocality: 'Shaggar City',
              addressCountry: 'ET',
            },
            contactPoint: {
              '@type': 'ContactPoint',
              contactType: 'Sales',
              telephone: '+251930303831',
              email: 'steelpillar92@gmail.com',
            },
          }),
        }}
      />

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
