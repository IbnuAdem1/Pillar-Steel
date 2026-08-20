import React from 'react';
import AccordionFeatureList from './ui/AccordionFeatureList';
import CTAButton from './ui/CTAButton';
import chooseImg from '../assets/choose.webp';

const REASONS = [
  {
    id: 'facility',
    title: 'State-of-the-Art Facility',
    content: 'Our modern manufacturing plant ensures efficient production and consistent quality.',
  },
  {
    id: 'team',
    title: 'Experienced Team',
    content: 'Our skilled workforce brings a wealth of expertise to every stage of the manufacturing process.',
  },
  {
    id: 'quality',
    title: 'Commitment to Quality',
    content: 'We adhere to stringent quality control measures to guarantee superior products.',
  },
  {
    id: 'customer',
    title: 'Customer-Centric Approach',
    content: 'We prioritize building long-term relationships through exceptional service and support.',
  },
  {
    id: 'location',
    title: 'Strategic Location',
    content: 'Situated in Galan City, a key industrial zone with access to transportation networks, we are well-positioned to serve the growing demand in Ethiopia and beyond.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="whychoose-section" id="why-pillarsteel">
      {/* Left: factory image with orange overlay */}
      <div className="whychoose-image-side">
        <img src={chooseImg} alt="Pillar Steel Facility" className="whychoose-bg-img" loading="lazy" />
        <div className="whychoose-overlay" />
      </div>

      {/* Right: orange panel with content */}
      <div className="whychoose-content-side">
        <h2 className="whychoose-title">Why Choose Us?</h2>

        <div className="whychoose-card">
          <AccordionFeatureList items={REASONS} />
        </div>

        <CTAButton href="#contact" variant="secondary" className="whychoose-cta-btn" id="why-choose-us-buy-now">
          Buy Now
        </CTAButton>
      </div>
    </section>
  );
}
