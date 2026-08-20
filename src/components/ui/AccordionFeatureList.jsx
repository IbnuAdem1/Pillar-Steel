import React, { useState } from 'react';

/**
 * Reusable AccordionFeatureList Component
 * Smooth interactive accordion for features and benefits (e.g. Why Choose Us).
 * Tap-to-expand with animated height transition and custom open/close state.
 */
export default function AccordionFeatureList({
  items = [],
  allowMultiple = false,
  defaultOpenId = null,
  className = '',
  id,
}) {
  const [openIds, setOpenIds] = useState(
    defaultOpenId ? (Array.isArray(defaultOpenId) ? defaultOpenId : [defaultOpenId]) : []
  );

  const toggleItem = (itemId) => {
    if (allowMultiple) {
      setOpenIds((prev) =>
        prev.includes(itemId) ? prev.filter((id) => id !== itemId) : [...prev, itemId]
      );
    } else {
      setOpenIds((prev) => (prev.includes(itemId) ? [] : [itemId]));
    }
  };

  return (
    <div className={`accordion-feature-list ${className}`.trim()} id={id}>
      {items.map((item, index) => {
        const itemId = item.id || `item-${index}`;
        const isOpen = openIds.includes(itemId);

        return (
          <div key={itemId} className={`accordion-feature-item ${isOpen ? 'open' : ''}`}>
            <button
              type="button"
              className="accordion-feature-header"
              onClick={() => toggleItem(itemId)}
              aria-expanded={isOpen}
              aria-controls={`feature-content-${itemId}`}
              id={`feature-btn-${itemId}`}
            >
              <span className="accordion-feature-icon" aria-hidden="true">
                {isOpen ? '−' : '+'}
              </span>
              <span className="accordion-feature-title">{item.title}</span>
            </button>

            <div
              id={`feature-content-${itemId}`}
              className={`accordion-feature-body ${isOpen ? 'open' : ''}`}
              role="region"
              aria-labelledby={`feature-btn-${itemId}`}
            >
              <div className="accordion-feature-desc">
                <p>{item.content || item.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
