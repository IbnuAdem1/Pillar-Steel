import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import AccordionFeatureList from './ui/AccordionFeatureList';
import CTAButton from './ui/CTAButton';
import chooseImg from '../assets/choose.webp';
import { slideInRight, revealImage, imageHoverSubtle, fadeIn, fadeUp, staggerContainer } from '../lib/motion';

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
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="whychoose-section" id="why-pillarsteel">
      {/* Left: factory image with orange overlay */}
      <motion.div
        className="whychoose-image-side"
        variants={shouldReduceMotion ? fadeIn : revealImage}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        style={{ overflow: 'hidden' }}
      >
        <motion.img
          src={chooseImg}
          alt="Pillar Steel Facility"
          className="whychoose-bg-img"
          loading="lazy"
          whileHover={shouldReduceMotion ? undefined : imageHoverSubtle.hover}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="whychoose-overlay" />
      </motion.div>

      {/* Right: orange panel with content */}
      <motion.div
        className="whychoose-content-side"
        variants={shouldReduceMotion ? fadeIn : slideInRight}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.h2 className="whychoose-title" variants={fadeUp}>
          Why Choose Us?
        </motion.h2>

        <motion.div className="whychoose-card" variants={fadeUp}>
          <AccordionFeatureList items={REASONS} />
        </motion.div>

        <motion.div variants={fadeUp}>
          <CTAButton href="#contact" variant="secondary" className="whychoose-cta-btn" id="why-choose-us-buy-now">
            Buy Now
          </CTAButton>
        </motion.div>
      </motion.div>
    </section>
  );
}
