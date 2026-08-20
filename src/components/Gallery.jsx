import React from 'react';
import works1 from '../assets/works-1.webp';
import works2 from '../assets/works-2.webp';
import works3 from '../assets/works-3.jpg';
import works4 from '../assets/works-4.jpg';
import work5 from '../assets/work-5.jpg';
import work6 from '../assets/work-6.jpg';

/**
 * Gallery / Visit Our Works Section
 * Uses locally stored work images (works-1 to work-6).
 * Layout: Row 1 = 2 images (wide + tall), Row 2 = 4 equal images.
 */

const GALLERY_IMAGES_ROW1 = [
  { id: 'g1', src: works1, alt: 'Pillar Steel Factory' },
  { id: 'g2', src: works2, alt: 'Pillar Steel Products' },
];

const GALLERY_IMAGES_ROW2 = [
  { id: 'g3', src: works3, alt: 'RHS Steel Sections' },
  { id: 'g4', src: works4, alt: 'SHS Steel Sections' },
  { id: 'g5', src: work5, alt: 'Round Pipe Steel' },
  { id: 'g6', src: work6, alt: 'Steel I-Beams' },
];

export default function Gallery() {
  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-container">
        <h2 className="gallery-title">Visit Our Works</h2>

        {/* Row 1: 2 large images */}
        <div className="gallery-grid">
          {GALLERY_IMAGES_ROW1.map(({ id, src, alt }) => (
            <div key={id} className="gallery-img-wrap">
              <img src={src} alt={alt} className="gallery-img" />
            </div>
          ))}
        </div>

        {/* Row 2: 4 smaller images */}
        <div className="gallery-grid-2" style={{ marginTop: '16px' }}>
          {GALLERY_IMAGES_ROW2.map(({ id, src, alt }) => (
            <div key={id} className="gallery-img-wrap">
              <img src={src} alt={alt} className="gallery-img" />
            </div>
          ))}
        </div>

        {/* Discover More button */}
        <div className="gallery-discover-wrap">
          <a href="https://pillarsteelethiopia.com/services/" className="gallery-discover-btn" target="_blank" rel="noopener noreferrer">
            Discover More
          </a>
        </div>
      </div>
    </section>
  );
}
