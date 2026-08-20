import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import CTAButton from './ui/CTAButton';
import { fadeUp, staggerContainer } from '../lib/motion';

export default function Hero() {
  return (
    <section className="hero-section" id="home">
      {/* Navbar — in natural flow, pinned to the top of the flex column */}
      <Navbar />

      {/* Hero Content — flex:1 with staggered mount animation */}
      <motion.div
        className="hero-content-wrapper"
        variants={staggerContainer(0.12, 0.1)}
        initial="hidden"
        animate="show"
      >
        <div className="hero-content">
          <motion.h1 className="hero-title" variants={fadeUp}>
            BUILDING STRENGTH,<br />
            SHAPING THE FUTURE
          </motion.h1>
          <motion.p className="hero-description" variants={fadeUp}>
            Supplying high quality steel and innovative fabrication solutions that power Ethiopia&#x2019;s
            construction, manufacturing, and infrastructure growth.
          </motion.p>
          <motion.div className="hero-cta-group" variants={fadeUp}>
            <CTAButton href="#contact" variant="primary" className="hero-cta-btn" id="hero-get-in-touch-btn">
              Get In Touch
            </CTAButton>
          </motion.div>
        </div>
      </motion.div>

      {/* Floating PDF Badge with hover animation */}
      <motion.a
        href="#catalog"
        className="hero-floating-pdf"
        aria-label="Download Company Profile PDF"
        title="Download PDF"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg viewBox="0 0 24 24" width="24" height="24" fill="#E5252A">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9.5 8.5c0 .83-.67 1.5-1.5 1.5H7v2H5.5V8H8c.83 0 1.5.67 1.5 1.5v2zm5 2c0 .83-.67 1.5-1.5 1.5h-2.5V8H13c.83 0 1.5.67 1.5 1.5v4zm4-3.5H17v1h1.5V12H17v3h-1.5V8h3v2zM7 9.5h1v2H7v-2zm4.5 1.5h1v3h-1v-3z" />
        </svg>
      </motion.a>
    </section>
  );
}
