import React from 'react';
import AlternatingSection from './ui/AlternatingSection';
import aboutImg from '../assets/about-us.jpg';

export default function About() {
  return (
    <AlternatingSection
      id="about"
      className="about-section"
      title="About PillarSteel"
      description="Pillar Steel Factory is a dynamic and forward-thinking steel manufacturing company committed to delivering high quality steel products and unparalleled service. Built on foundation of innovation, reliability, and a deep understanding of the evolving needs of the construction and manufacturing sectors, we are poised to become a trusted partner in a stronger future for Ethiopia and the East African region."
      imageSrc={aboutImg}
      imageAlt="Pillar Steel Factory and Manufacturing Equipment"
      ctaText="Read More"
      ctaTo="/about"
      ctaVariant="primary"
    />
  );
}
