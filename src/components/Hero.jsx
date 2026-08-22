import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import CTAButton from './ui/CTAButton';
import { fadeUp, fadeIn, staggerContainer } from '../lib/motion';

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const childVariant = shouldReduceMotion ? fadeIn : fadeUp;

  return (
    <section className="hero-section" id="home">
      {/* Hero Content — flex:1 with staggered mount animation (~0.12s apart, total sequence under 1s) */}
      <motion.div
        className="hero-content-wrapper"
        variants={shouldReduceMotion ? fadeIn : staggerContainer(0.12, 0.05)}
        initial="hidden"
        animate="show"
      >
        <div className="hero-content">
          <motion.h1 className="hero-title" variants={childVariant}>
            BUILDING STRENGTH,<br />
            SHAPING THE FUTURE
          </motion.h1>
          <motion.p className="hero-description" variants={childVariant}>
            Supplying high quality steel and innovative fabrication solutions that power Ethiopia&#x2019;s
            construction, manufacturing, and infrastructure growth.
          </motion.p>
          <motion.div className="hero-cta-group" variants={childVariant}>
            <CTAButton href="#contact" variant="primary" className="hero-cta-btn" id="hero-get-in-touch-btn">
              Get In Touch
            </CTAButton>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
