import React from 'react';
import Navbar from './Navbar';

export default function Hero() {
  return (
    <section
      className="hero-section"
      id="home"
      style={{ paddingTop: '160px' }}
    >
      {/* Hero Header / Navbar */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0 }}>
        <Navbar />
      </div>

      {/* Hero Content Container */}
      <div className="hero-content-wrapper">
        <div className="hero-content">
          <h1 className="hero-title">
            BUILDING STRENGTH,<br />
            SHAPING THE FUTURE
          </h1>
          <p className="hero-description">
            Supplying high quality steel and innovative fabrication solutions that power Ethiopia&#x2019;s
            construction, manufacturing, and infrastructure growth.
          </p>
          <div className="hero-cta-group">
            <a href="#contact" className="hero-cta-btn">
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      {/* Floating PDF Badge */}
      <a
        href="#catalog"
        className="hero-floating-pdf"
        aria-label="Download Company Profile PDF"
        title="Download PDF"
        style={{ position: 'absolute', bottom: '28px', right: '32px' }}
      >
        <svg viewBox="0 0 24 24" width="24" height="24" fill="#E5252A">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9.5 8.5c0 .83-.67 1.5-1.5 1.5H7v2H5.5V8H8c.83 0 1.5.67 1.5 1.5v2zm5 2c0 .83-.67 1.5-1.5 1.5h-2.5V8H13c.83 0 1.5.67 1.5 1.5v4zm4-3.5H17v1h1.5V12H17v3h-1.5V8h3v2zM7 9.5h1v2H7v-2zm4.5 1.5h1v3h-1v-3z" />
        </svg>
      </a>
    </section>
  );
}
