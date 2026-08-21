import React from 'react';
import SEO from '../components/layout/SEO';
import PageHero from '../components/ui/PageHero';
import GalleryGrid from '../components/ui/GalleryGrid';
import Footer from '../components/Footer';

// Assets
import heroBg from '../assets/hero-bg.webp';
import aboutImg from '../assets/about-us.jpg';
import chooseImg from '../assets/choose.webp';
import works1 from '../assets/works-1.webp';
import works2 from '../assets/works-2.webp';
import works3 from '../assets/works-3.jpg';
import works4 from '../assets/works-4.jpg';
import work5 from '../assets/work-5.jpg';
import work6 from '../assets/work-6.jpg';

const CATEGORIES = [
  'Factory & Facility',
  'Raw Materials & Sheets',
  'Products',
  'Operations',
];

const GALLERY_ITEMS = [
  {
    id: 'gal-1',
    src: heroBg,
    alt: 'Overhead heavy crane and industrial manufacturing warehouse floor at Pillar Steel',
    title: 'Manufacturing Bay & Heavy Crane',
    category: 'Factory & Facility',
  },
  {
    id: 'gal-2',
    src: works2,
    alt: 'Heavy gauge flat steel plates and raw sheets stacked in storage bay',
    title: 'Flat Steel Plates & Coils',
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
    alt: 'SHS (Square Hollow Sections) structural steel tubes neatly stacked',
    title: 'SHS Square Hollow Sections',
    category: 'Products',
  },
  {
    id: 'gal-5',
    src: work5,
    alt: 'Heavy-duty circular round pipe sections for structural construction',
    title: 'Circular Round Steel Pipes',
    category: 'Products',
  },
  {
    id: 'gal-6',
    src: work6,
    alt: 'Cold-formed custom steel purlins and profile sections for roofing and framing',
    title: 'Custom Steel Purlins & Profiles',
    category: 'Products',
  },
  {
    id: 'gal-7',
    src: aboutImg,
    alt: 'High-precision automated steel tube rolling machine facility and forming operations',
    title: 'Tube Mill & Precision Forming Line',
    category: 'Operations',
  },
  {
    id: 'gal-8',
    src: chooseImg,
    alt: 'Industrial continuous roll-forming production line and cutting station in Addis Ababa',
    title: 'Automated Roll-Forming Facility',
    category: 'Factory & Facility',
  },
  {
    id: 'gal-9',
    src: works1,
    alt: 'High-capacity industrial overhead crane bay and storage area for heavy structural steel',
    title: 'Primary Crane Bay & Raw Materials',
    category: 'Raw Materials & Sheets',
  },
  {
    id: 'gal-10',
    src: aboutImg,
    alt: 'Tube mill calibration and precision steel forming operations under quality monitoring',
    title: 'Quality Testing & Mill Calibration',
    category: 'Operations',
  },
  {
    id: 'gal-11',
    src: chooseImg,
    alt: 'Continuous automated profile roll-forming operations during active shift',
    title: 'Continuous Forming Operations',
    category: 'Operations',
  },
];

export default function GalleryPage() {
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
        <div className="gallery-container">
          <div className="gallery-section-intro">
            <h2 className="gallery-title">Our Works & Facilities</h2>
            
          </div>

          <GalleryGrid
            items={GALLERY_ITEMS}
            categories={CATEGORIES}
            showFilter={true}
            layout="grid"
          />
        </div>
      </section>

      {/* ── 3. Footer ── */}
      <Footer />
    </>
  );
}
