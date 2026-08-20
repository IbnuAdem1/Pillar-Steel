import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, hoverLift } from '../../lib/motion';

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
  return (
    <motion.div
      className={`icon-card icon-card-${variant} ${className}`.trim()}
      id={id}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      whileHover={hoverLift.hover}
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
