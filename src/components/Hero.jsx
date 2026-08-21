import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import CTAButton from './ui/CTAButton';
import { fadeUp, staggerContainer } from '../lib/motion';

export default function Hero() {
  return (
    <section className="hero-section" id="home">
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

    
    </section>
  );
}
