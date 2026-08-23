import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { fadeUp, fadeIn, staggerContainer } from '../../lib/motion';

/**
 * Reusable PageHero component for interior pages with staggered headline entrance animation.
 */
export default function PageHero({
  title,
  highlightWord = '',
  subtitle = '',
  extraContent = null,
  bgImage = '/hero-bg.webp',
  className = '',
  id,
}) {
  const shouldReduceMotion = useReducedMotion();
  const childVariant = shouldReduceMotion ? fadeIn : fadeUp;

  const renderTitle = () => {
    if (!highlightWord) return title;
    const parts = title.split(new RegExp(`(${highlightWord})`, 'gi'));
    return parts.map((part, index) =>
      part.toLowerCase() === highlightWord.toLowerCase() ? (
        <span key={index} className="page-hero-highlight">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <section
      className={`page-hero-section ${className}`.trim()}
      id={id}
      style={{
        backgroundImage: `linear-gradient(rgba(253, 93, 0, 0.82), rgba(253, 93, 0, 0.82)), url('${bgImage}')`,
      }}
    >
      <motion.div
        className="page-hero-content"
        variants={shouldReduceMotion ? fadeIn : staggerContainer(0.12, 0.05)}
        initial="hidden"
        animate="show"
      >
        <motion.h1 className="page-hero-title" variants={childVariant}>
          {renderTitle()}
        </motion.h1>
        {subtitle && (
          <motion.p className="page-hero-subtitle" variants={childVariant}>
            {subtitle}
          </motion.p>
        )}
        {extraContent && <motion.div variants={childVariant}>{extraContent}</motion.div>}
      </motion.div>
    </section>
  );
}
