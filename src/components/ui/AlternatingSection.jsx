import React from 'react';
import { motion } from 'framer-motion';
import CTAButton from './CTAButton';
import { fadeUp, fadeIn } from '../../lib/motion';

/**
 * Reusable AlternatingSection component with scroll-reveal entrance.
 */
export default function AlternatingSection({
  title,
  subtitle,
  description,
  children,
  imageSrc,
  imageAlt = '',
  reverse = false,
  theme = 'light', // 'light' or 'orange'
  ctaText,
  ctaTo,
  ctaHref,
  ctaVariant = 'primary',
  id,
  className = '',
}) {
  return (
    <section
      className={`alternating-section alternating-${theme} ${reverse ? 'reverse' : ''} ${className}`.trim()}
      id={id}
    >
      <div className="alternating-container">
        {/* Content Column */}
        <motion.div
          className="alternating-text-col"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {subtitle && <span className="alternating-subtitle">{subtitle}</span>}
          <h2 className="alternating-title">{title}</h2>
          {description && (
            <div className="alternating-description">
              {Array.isArray(description) ? (
                description.map((p, i) => <p key={i}>{p}</p>)
              ) : (
                <p>{description}</p>
              )}
            </div>
          )}
          {children}
          {(ctaText && (ctaTo || ctaHref)) && (
            <div className="alternating-cta">
              <CTAButton to={ctaTo} href={ctaHref} variant={ctaVariant}>
                {ctaText}
              </CTAButton>
            </div>
          )}
        </motion.div>

        {/* Image Column */}
        <motion.div
          className="alternating-image-col"
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <img src={imageSrc} alt={imageAlt} className="alternating-image" loading="lazy" />
        </motion.div>
      </div>
    </section>
  );
}
