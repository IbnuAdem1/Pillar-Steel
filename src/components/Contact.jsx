import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import ContactForm from './ui/ContactForm';
import { slideInLeft, slideInRight, fadeIn } from '../lib/motion';

export default function Contact() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        {/* Left: Contact Form */}
        <motion.div
          className="contact-form-col"
          variants={shouldReduceMotion ? fadeIn : slideInLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <ContactForm title="Send Us A Message" />
        </motion.div>

        {/* Right: Google Map */}
        <motion.div
          className="contact-map-col"
          variants={shouldReduceMotion ? fadeIn : slideInRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <iframe
            className="contact-map-iframe"
            src="https://maps.google.com/maps?q=Pillar%20Steel%20Factory%20Bulgaria%20Street%20Addis%20Ababa&t=m&z=14&output=embed&iwloc=near"
            title="Pillar Steel Factory Bulgaria Street Addis Ababa"
            aria-label="Pillar Steel Factory Bulgaria Street Addis Ababa"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
}
