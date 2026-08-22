import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { fadeUp, fadeIn, hoverLift } from '../../lib/motion';

/**
 * Reusable IconCard component with scroll-triggered entrance and hover lift micro-interaction.
 */
export default function IconCard({
  icon: IconOrElement,
  title,
  description,
  variant = 'default', // 'default', 'compact', 'service'
  className = '',
  id,
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={`icon-card icon-card-${variant} ${className}`.trim()}
      id={id}
      variants={shouldReduceMotion ? fadeIn : fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      whileHover={shouldReduceMotion ? undefined : hoverLift.hover}
    >
      <div className="icon-card-badge">
        {React.isValidElement(IconOrElement) ? (
          IconOrElement
        ) : typeof IconOrElement === 'function' ? (
          <IconOrElement />
        ) : null}
      </div>
      <h3 className="icon-card-title">{title}</h3>
      <p className="icon-card-desc">{description}</p>
    </motion.div>
  );
}
