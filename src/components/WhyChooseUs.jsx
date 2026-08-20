import React, { useState } from 'react';
import chooseImg from '../assets/choose.webp';

const REASONS = [
  {
    id: 'facility',
    title: 'State-of-the-Art Facility',
    content: 'Our modern manufacturing plant ensures efficient production and consistent quality.',
  },
  {
    id: 'team',
    title: 'Experienced Team',
    content: 'Our skilled workforce brings a wealth of expertise to every stage of the manufacturing process.',
  },
  {
    id: 'quality',
    title: 'Commitment to Quality',
    content: 'We adhere to stringent quality control measures to guarantee superior products.',
  },
  {
    id: 'customer',
    title: 'Customer-Centric Approach',
    content: 'We prioritize building long-term relationships through exceptional service and support.',
  },
  {
    id: 'location',
    title: 'Strategic Location',
    content: 'Situated in Galan City, a key industrial zone with access to transportation networks, we are well-positioned to serve the growing demand in Ethiopia and beyond.',
  },
];

export default function WhyChooseUs() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="whychoose-section" id="why-pillarsteel">
      {/* Left: factory image with orange overlay */}
      <div className="whychoose-image-side">
        <img src={chooseImg} alt="Pillar Steel Facility" className="whychoose-bg-img" />
        <div className="whychoose-overlay" />
      </div>

      {/* Right: orange panel with content */}
      <div className="whychoose-content-side">
        <h2 className="whychoose-title">Why Choose Us?</h2>

        <div className="whychoose-card">
          {REASONS.map(({ id, title, content }) => {
            const isOpen = openId === id;
            return (
              <div key={id} className="whychoose-item">
                <button
                  className="whychoose-item-header"
                  onClick={() => toggle(id)}
                  aria-expanded={isOpen}
                  aria-controls={`wcu-content-${id}`}
                  id={`wcu-btn-${id}`}
                >
                  <span className="whychoose-plus">{isOpen ? '−' : '+'}</span>
                  <span className="whychoose-item-text">{title}</span>
                </button>
                <div
                  id={`wcu-content-${id}`}
                  className={`whychoose-item-body${isOpen ? ' open' : ''}`}
                  aria-labelledby={`wcu-btn-${id}`}
                >
                  <p className="whychoose-item-desc">{content}</p>
                </div>
              </div>
            );
          })}
        </div>

        <a href="#contact" className="whychoose-cta-btn" id="why-choose-us-buy-now">
          Buy Now
        </a>
      </div>
    </section>
  );
}
