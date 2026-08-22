import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import CTAButton from './CTAButton';
import { slideInLeft, slideInRight, revealImage, imageHoverSubtle, fadeIn } from '../../lib/motion';

/**
 * Reusable AlternatingSection component with directional scroll-reveal entrance and hover polish.
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
  const shouldReduceMotion = useReducedMotion();

  // If text is on the left (reverse=false), it slides in from left; if on right (reverse=true), from right
  const textVariant = shouldReduceMotion ? fadeIn : (reverse ? slideInRight : slideInLeft);
  const imageVariant = shouldReduceMotion ? fadeIn : revealImage;

  return (
    <section
      className={`alternating-section alternating-${theme} ${reverse ? 'reverse' : ''} ${className}`.trim()}
      id={id}
    >
      <div className="alternating-container">
        {/* Content Column */}
        <motion.div
          className="alternating-text-col"
          variants={textVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
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
          variants={imageVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          style={{ overflow: 'hidden' }}
        >
          <motion.img
            src={imageSrc}
            alt={imageAlt}
            className="alternating-image"
            loading="lazy"
            whileHover={shouldReduceMotion ? undefined : imageHoverSubtle.hover}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.div>
      </div>
    </section>
  );
}
