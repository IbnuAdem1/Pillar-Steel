import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeUp, staggerContainer, imageZoom } from '../../lib/motion';

/**
 * Reusable GalleryGrid component with animated card stagger, image zoom, and animated modal.
 */
export default function GalleryGrid({
  items = [],
  categories = [],
  showFilter = false,
  layout = 'grid', // 'grid' or 'featured'
  className = '',
  id,
}) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    if (selectedImage) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedImage]);

  const filteredItems =
    activeCategory === 'All'
      ? items
      : items.filter(
          (item) =>
            item.category === activeCategory ||
            (Array.isArray(item.categories) && item.categories.includes(activeCategory))
        );

  return (
    <div className={`gallery-grid-component ${className}`.trim()} id={id}>
      {/* Optional Category Filter Tabs */}
      {showFilter && categories.length > 0 && (
        <div className="gallery-filter-tabs" role="tablist">
          {['All', ...categories].map((category) => (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={activeCategory === category}
              className={`gallery-filter-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      {/* Grid Container */}
      {layout === 'featured' ? (
        <div className="gallery-featured-layout">
          {/* Row 1: Top 2 large images */}
          <div className="gallery-grid">
            {filteredItems.slice(0, 2).map((item, idx) => (
              <motion.div
                key={item.id || idx}
                className="gallery-img-wrap"
                tabIndex={0}
                role="button"
                aria-label={`View enlarged image: ${item.alt || item.title}`}
                onClick={() => setSelectedImage(item)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') setSelectedImage(item);
                }}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                whileHover="hover"
              >
                <motion.img
                  src={item.src}
                  alt={item.alt || 'Pillar Steel Factory'}
                  className="gallery-img"
                  loading="lazy"
                  variants={imageZoom}
                />
                {item.title && <div className="gallery-img-caption">{item.title}</div>}
              </motion.div>
            ))}
          </div>

          {/* Row 2: Bottom 4 smaller images */}
          <div className="gallery-grid-2">
            {filteredItems.slice(2, 6).map((item, idx) => (
              <motion.div
                key={item.id || idx + 2}
                className="gallery-img-wrap"
                tabIndex={0}
                role="button"
                aria-label={`View enlarged image: ${item.alt || item.title}`}
                onClick={() => setSelectedImage(item)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') setSelectedImage(item);
                }}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                whileHover="hover"
              >
                <motion.img
                  src={item.src}
                  alt={item.alt || 'Pillar Steel Product'}
                  className="gallery-img"
                  loading="lazy"
                  variants={imageZoom}
                />
                {item.title && <div className="gallery-img-caption">{item.title}</div>}
              </motion.div>
            ))}
          </div>
        </div>
      ) : (
        <motion.div
          className="gallery-standard-grid"
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id || idx}
              className="gallery-card-item"
              tabIndex={0}
              role="button"
              aria-label={`View enlarged image: ${item.alt || item.title}`}
              onClick={() => setSelectedImage(item)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') setSelectedImage(item);
              }}
              variants={fadeUp}
              whileHover="hover"
            >
              <div className="gallery-card-img-wrap">
                <motion.img
                  src={item.src}
                  alt={item.alt || 'Pillar Steel Image'}
                  className="gallery-card-img"
                  loading="lazy"
                  variants={imageZoom}
                />
              </div>
              {(item.title || item.category) && (
                <div className="gallery-card-info">
                  {item.title && <h4 className="gallery-card-title">{item.title}</h4>}
                  {item.category && <span className="gallery-card-tag">{item.category}</span>}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="gallery-lightbox-backdrop"
            role="dialog"
            aria-modal="true"
            aria-label="Image preview"
            onClick={() => setSelectedImage(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="gallery-lightbox-content"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              <button
                type="button"
                className="gallery-lightbox-close"
                onClick={() => setSelectedImage(null)}
                aria-label="Close image preview"
              >
                ✕
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.alt || 'Enlarged Pillar Steel view'}
                className="gallery-lightbox-img"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
