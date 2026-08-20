import React from 'react';
import GalleryGrid from './ui/GalleryGrid';
import CTAButton from './ui/CTAButton';
import works1 from '../assets/works-1.webp';
import works2 from '../assets/works-2.webp';
import works3 from '../assets/works-3.jpg';
import works4 from '../assets/works-4.jpg';
import work5 from '../assets/work-5.jpg';
import work6 from '../assets/work-6.jpg';

const GALLERY_IMAGES = [
  { id: 'g1', src: works1, alt: 'High-capacity industrial overhead crane bay and storage area', title: 'Factory Facility' },
  { id: 'g2', src: works2, alt: 'Heavy gauge flat steel plates and raw sheets stacked in storage bay', title: 'Raw Materials' },
  { id: 'g3', src: works3, alt: 'RHS (Rectangular Hollow Sections) precision structural steel bundles', title: 'RHS Sections' },
  { id: 'g4', src: works4, alt: 'SHS (Square Hollow Sections) structural steel tubes neatly stacked', title: 'SHS Sections' },
  { id: 'g5', src: work5, alt: 'Heavy-duty circular round pipe sections for structural construction', title: 'Round Pipe' },
  { id: 'g6', src: work6, alt: 'Cold-formed custom steel purlins and profile sections', title: 'Structural Purlins' },
];

export default function Gallery() {
  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-container">
        <h2 className="gallery-title">Visit Our Works</h2>

        {/* Featured 2 top + 4 bottom layout */}
        <GalleryGrid items={GALLERY_IMAGES} layout="featured" />

        {/* Discover More CTA */}
        <div className="gallery-discover-wrap">
          <CTAButton to="/services" variant="primary" className="gallery-discover-btn">
            Discover More
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
