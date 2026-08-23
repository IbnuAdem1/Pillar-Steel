import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import SEO from '../components/layout/SEO';
import PageHero from '../components/ui/PageHero';
import GalleryGrid from '../components/ui/GalleryGrid';
import Footer from '../components/Footer';
import { fadeUp, fadeIn, staggerContainer } from '../lib/motion';

// Assets
import heroBg from '../assets/hero-bg.webp';
import aboutImg from '../assets/about-us.jpg';
import plant_structure from '../assets/Plant_structure1.jpg.jpeg';
// import chooseImg from '../assets/choose.webp';
// import works1 from '../assets/works-1.webp';
import works2 from '../assets/works-2.webp';
import works3 from '../assets/works-3.jpg';
import works4 from '../assets/works-4.jpg';
import work5 from '../assets/work-5.jpg';
import work6 from '../assets/work-6.jpg';

const CATEGORIES = [
  'Raw Materials & Sheets',
  'Products',
  'Operations',
];

const GALLERY_ITEMS = [
  {
    id: 'gal-2',
    src: works2,
    alt: 'Heavy gauge flat steel plates and raw sheets stacked in storage bay',
    title: 'Flat Steel Plates',
    category: 'Raw Materials & Sheets',
  },
  {
    id: 'gal-3',
    src: works3,
    alt: 'RHS (Rectangular Hollow Sections) precision structural steel bundles',
    title: 'RHS Structural Steel Sections',
    category: 'Products',
  },
  {
    id: 'gal-4',
    src: works4,
    alt: 'CHS (Circular Hollow Sections)',
    title: 'CHS (Circular Hollow Sections)',
    category: 'Products',
  },
  {
    id: 'gal-5',
    src: work5,
    alt: 'SHS (Square Hollow Sections)',
    title: 'SHS (Square Hollow Sections)',
    category: 'Products',
  },
  {
    id: 'gal-6',
    src: work6,
    alt: 'LTZ & D- Profiles',
    title: 'LTZ & D- Profiles',
    category: 'Products',
  },
  // {
  //   id: 'gal-7',
  //   src: aboutImg,
  //   alt: 'High-precision automated steel tube rolling machine facility and forming operations',
  //   title: 'Tube Mill & Precision Forming Line',
  //   category: 'Operations',
  // },
  // {
  //   id: 'gal-9',
  //   src: works1,
  //   alt: 'High-capacity industrial overhead crane bay and storage area for heavy structural steel',
  //   title: 'Primary Crane Bay & Raw Materials',
  //   category: 'Raw Materials & Sheets',
  // },
  {
    id: 'gal-10',
    src: aboutImg,
    alt: 'High-Frequency ERW Mill Machine',
    title: 'High-Frequency ERW Mill Machine',
    category: 'Operations',
  },
  {
    id: 'gal-11',
    src: plant_structure,
    alt: 'Continuous automated profile roll-forming operations during active shift',
    title: 'Continuous Forming Operations',
    category: 'Operations',
  },
];

export default function GalleryPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      <SEO
        title="Works & Facility Gallery | Pillar Steel Factory"
        description="View our photo gallery featuring manufacturing lines, raw steel plate storage, precision tube forming, and structural steel sections produced in Ethiopia."
      />

      {/* ── 1. Page Hero ── */}
      <PageHero
        title="Gallery"
        highlightWord="Gallery"
        subtitle="Explore our state-of-the-art manufacturing facilities, raw material storage, precision steel products, and daily operations in Galan City."
        className="gallery-hero-section"
      />

      {/* ── 2. Filterable Gallery Grid ── */}
      <section className="gallery-main-section" id="gallery-grid-view">
        <motion.div
          className="gallery-container"
          variants={shouldReduceMotion ? fadeIn : staggerContainer(0.12, 0.05)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          <div className="gallery-section-intro">
            <motion.h2 className="gallery-title" variants={shouldReduceMotion ? fadeIn : fadeUp}>
              Our Works & Facilities
            </motion.h2>
          </div>

          <GalleryGrid
            items={GALLERY_ITEMS}
            categories={CATEGORIES}
            showFilter={true}
            layout="grid"
          />
        </motion.div>
      </section>

      {/* ── 3. Footer ── */}
      <Footer />
    </>
  );
}
