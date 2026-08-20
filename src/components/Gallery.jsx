import React from 'react';

/**
 * Gallery / Visit Our Works Section
 * Using placeholder colored divs since gallery images are hotlinked from
 * pillarsteelethiopia.com. The real images are live-fetched from the live site.
 */

const GALLERY_IMAGES_ROW1 = [
  {
    id: 'g1',
    src: 'https://pillarsteelethiopia.com/wp-content/uploads/elementor/css/../../../2025/08/WhatsApp-Image-2025-08-26-at-16.30.02_f5e0ba4a-e1756302861280.jpg',
    alt: 'Pillar Steel Factory',
  },
  {
    id: 'g2',
    src: 'https://pillarsteelethiopia.com/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-26-at-16.30.02_f5e0ba4a-e1756302861280.jpg',
    alt: 'Pillar Steel Products',
  },
];

const GALLERY_IMAGES_ROW2 = [
  { id: 'g3', src: 'https://pillarsteelethiopia.com/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-26-at-16.30.02_f5e0ba4a-e1756302861280.jpg', alt: 'Steel Manufacturing 1' },
  { id: 'g4', src: 'https://pillarsteelethiopia.com/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-26-at-16.30.02_f5e0ba4a-e1756302861280.jpg', alt: 'Steel Manufacturing 2' },
  { id: 'g5', src: 'https://pillarsteelethiopia.com/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-26-at-16.30.02_f5e0ba4a-e1756302861280.jpg', alt: 'Steel Manufacturing 3' },
  { id: 'g6', src: 'https://pillarsteelethiopia.com/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-26-at-16.30.02_f5e0ba4a-e1756302861280.jpg', alt: 'Steel Manufacturing 4' },
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
              <img
                src={src}
                alt={alt}
                className="gallery-img"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.style.background = 'linear-gradient(135deg, #fd5d0033, #fd5d0011)';
                }}
              />
            </div>
          ))}
        </div>

        {/* Row 2: 4 smaller images */}
        <div className="gallery-grid-2" style={{ marginTop: '16px' }}>
          {GALLERY_IMAGES_ROW2.map(({ id, src, alt }) => (
            <div key={id} className="gallery-img-wrap">
              <img
                src={src}
                alt={alt}
                className="gallery-img"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.style.background = 'linear-gradient(135deg, #fd5d0022, #fd5d0008)';
                }}
              />
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
