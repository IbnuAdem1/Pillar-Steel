import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { buttonTap } from '../../lib/motion';

/**
 * Reusable CTA Button Component with Framer Motion hover & tap interactions.
 * Variants: 'primary' (orange fill), 'secondary' (white fill), 'outline' (transparent with border)
 */
export default function CTAButton({
  children,
  to,
  href,
  variant = 'primary',
  className = '',
  id,
  type = 'button',
  onClick,
  target,
  rel,
  animate = true,
  ...props
}) {
  const baseClass = `cta-btn cta-btn-${variant} ${className}`.trim();

  const motionProps = animate
    ? {
        whileHover: buttonTap.hover,
        whileTap: buttonTap.tap,
      }
    : {};

  if (to) {
    return (
      <motion.div {...motionProps} style={{ display: 'inline-block' }}>
        <Link to={to} className={baseClass} id={id} onClick={onClick} {...props}>
          {children}
        </Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.div {...motionProps} style={{ display: 'inline-block' }}>
        <a
          href={href}
          className={baseClass}
          id={id}
          target={target}
          rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
          onClick={onClick}
          {...props}
        >
          {children}
        </a>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      className={baseClass}
      id={id}
      onClick={onClick}
      {...motionProps}
      {...props}
    >
      {children}
    </motion.button>
  );
}
