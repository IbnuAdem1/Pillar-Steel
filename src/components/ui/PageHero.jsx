import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../Navbar';
import { fadeUp, staggerContainer } from '../../lib/motion';

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
        variants={staggerContainer(0.1, 0.1)}
        initial="hidden"
        animate="show"
      >
        <motion.h1 className="page-hero-title" variants={fadeUp}>
          {renderTitle()}
        </motion.h1>
        {subtitle && (
          <motion.p className="page-hero-subtitle" variants={fadeUp}>
            {subtitle}
          </motion.p>
        )}
        {extraContent && <motion.div variants={fadeUp}>{extraContent}</motion.div>}
      </motion.div>
    </section>
  );
}
