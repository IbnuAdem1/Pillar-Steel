import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, hoverLift } from '../../lib/motion';

/**
 * Reusable InfoCard component with hover lift and scroll entrance.
 */
export default function InfoCard({
  icon: IconOrElement,
  title,
  content,
  linkHref,
  linkType, // 'tel', 'mailto', 'map', 'external'
  className = '',
  id,
}) {
  const getHref = () => {
    if (linkHref) return linkHref;
    if (linkType === 'tel') return `tel:${content.replace(/\s+/g, '')}`;
    if (linkType === 'mailto') return `mailto:${content.trim()}`;
    return null;
  };

  const href = getHref();

  return (
    <motion.div
      className={`info-card ${className}`.trim()}
      id={id}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      whileHover={hoverLift.hover}
    >
      <div className="info-card-icon-wrap">
        {React.isValidElement(IconOrElement) ? (
          IconOrElement
        ) : typeof IconOrElement === 'function' ? (
          <IconOrElement />
        ) : null}
      </div>
      <h4 className="info-card-title">{title}</h4>
      <div className="info-card-content">
        {href ? (
          <a
            href={href}
            className="info-card-link"
            target={linkType === 'map' || linkType === 'external' ? '_blank' : undefined}
            rel={linkType === 'map' || linkType === 'external' ? 'noopener noreferrer' : undefined}
          >
            {content}
          </a>
        ) : Array.isArray(content) ? (
          content.map((line, idx) => (
            <p key={idx} className="info-card-text">
              {line}
            </p>
          ))
        ) : (
          <p className="info-card-text">{content}</p>
        )}
      </div>
    </motion.div>
  );
}
