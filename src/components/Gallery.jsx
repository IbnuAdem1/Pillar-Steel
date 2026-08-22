import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import GalleryGrid from './ui/GalleryGrid';
import CTAButton from './ui/CTAButton';
import works1 from '../assets/works-1.webp';
import works2 from '../assets/works-2.webp';
import works3 from '../assets/works-3.jpg';
import works4 from '../assets/works-4.jpg';
import work5 from '../assets/work-5.jpg';
import work6 from '../assets/work-6.jpg';
import { fadeUp, fadeIn, staggerContainer } from '../lib/motion';

const GALLERY_IMAGES = [
  { id: 'g1', src: works1, alt: 'High-capacity industrial overhead crane bay and storage area' },
  { id: 'g2', src: works2, alt: 'Heavy gauge flat steel plates and raw sheets stacked in storage bay' },
  { id: 'g3', src: works3, alt: 'RHS (Rectangular Hollow Sections) precision structural steel bundles' },
  { id: 'g4', src: works4, alt: 'SHS (Square Hollow Sections) structural steel tubes neatly stacked' },
  { id: 'g5', src: work5, alt: 'Heavy-duty circular round pipe sections for structural construction' },
  { id: 'g6', src: work6, alt: 'Cold-formed custom steel purlins and profile sections' },
];

export default function Gallery() {
  const shouldReduceMotion = useReducedMotion();
  const childVariant = shouldReduceMotion ? fadeIn : fadeUp;

  return (
    <section className="gallery-section" id="gallery">
      <motion.div
        className="gallery-container"
        variants={shouldReduceMotion ? fadeIn : staggerContainer(0.12, 0.05)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
        <motion.h2 className="gallery-title" variants={childVariant}>
          Visit Our Works
        </motion.h2>

        {/* Featured 2 top + 4 bottom layout */}
        <GalleryGrid items={GALLERY_IMAGES} layout="featured" />

        {/* Discover More CTA */}
        <motion.div className="gallery-discover-wrap" variants={childVariant}>
          <CTAButton to="/services" variant="primary" className="gallery-discover-btn">
            Discover More
          </CTAButton>
        </motion.div>
      </motion.div>
    </section>
  );
}
