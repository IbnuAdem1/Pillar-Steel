import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const ACCORDION_ITEMS = [
  {
    id: 'state-of-the-art-facility',
    title: 'State-of-the-Art Facility',
    content: 'Our modern manufacturing plant ensures efficient production and consistent quality.',
    defaultOpen: true,
  },
  {
    id: 'experienced-team',
    title: 'Experienced Team',
    content: 'Our skilled workforce brings a wealth of expertise to every stage of the manufacturing process.',
    defaultOpen: false,
  },
  {
    id: 'commitment-to-quality',
    title: 'Commitment to Quality',
    content: 'We adhere to stringent quality control measures to guarantee superior products.',
    defaultOpen: false,
  },
  {
    id: 'customer-centric-approach',
    title: 'Customer-Centric Approach',
    content: 'We prioritize building long-term relationships through exceptional service and support.',
    defaultOpen: false,
  },
  {
    id: 'strategic-location',
    title: 'Strategic Location',
    content: 'Situated in Galan City, a key industrial zone with access to transportation networks, we are well-positioned to serve the growing demand in Ethiopia and beyond.',
    defaultOpen: false,
  },
];

export default function WhyChooseUs() {
  const [openId, setOpenId] = useState('state-of-the-art-facility');

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="whychoose-section" id="why-pillarsteel">
      <div className="whychoose-container">
        {/* Left: Title + CTA */}
        <div className="whychoose-left">
          <h2 className="whychoose-title">Why Choose Us?</h2>
          <a href="#contact" className="whychoose-cta-btn">
            Buy Now
          </a>
        </div>

        {/* Right: Accordion */}
        <div className="whychoose-right">
          {ACCORDION_ITEMS.map(({ id, title, content }) => {
            const isOpen = openId === id;
            return (
              <div
                key={id}
                className={`accordion-item ${isOpen ? 'open' : ''}`}
              >
                <div
                  className="accordion-header"
                  onClick={() => toggle(id)}
                  role="button"
                  tabIndex={0}
                  id={id}
                  aria-expanded={isOpen}
                  aria-controls={`content-${id}`}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') toggle(id); }}
                >
                  <span className="accordion-tab-title">{title}</span>
                  {isOpen
                    ? <Minus className="accordion-icon" size={20} color="rgba(255,255,255,0.9)" />
                    : <Plus className="accordion-icon" size={20} color="rgba(255,255,255,0.9)" />
                  }
                </div>
                <div
                  className="accordion-content"
                  id={`content-${id}`}
                  aria-labelledby={id}
                >
                  <div className="accordion-content-inner">
                    <p>{content}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
