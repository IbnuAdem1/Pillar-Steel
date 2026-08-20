import React from 'react';
import aboutImg from '../assets/about-us.jpg';

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        {/* Left Column: Text & CTA */}
        <div className="about-content-col">
          <h2 className="about-title">About PillarSteel</h2>
          <p className="about-paragraph">
            Pilar Steel Factory is a dynamic and forward-thinking steel manufacturing company committed 
            to delivering high quality steel products and unparalleled service. Built on foundation of 
            innovation, reliability, and a deep understanding of the evolving needs of the construction 
            and manufacturing sectors, we are poised to become a trusted partner in a stronger future 
            for Ethiopia and the East African region.
          </p>
          <a href="#about" className="about-readmore-btn">
            Read More
          </a>
        </div>

        {/* Right Column: Factory Image */}
        <div className="about-image-col">
          <img
            src={aboutImg}
            alt="Pillar Steel Factory and Manufacturing Equipment"
            className="about-image"
          />
        </div>
      </div>
    </section>
  );
}
