import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import aboutImg from '../assets/about-us.jpg';
import chooseImg from '../assets/choose.webp';

/* ── SVG Icons ── */
const MissionIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" width="36" height="36" aria-hidden="true">
    <circle cx="32" cy="32" r="28" stroke="white" strokeWidth="3" />
    <path d="M32 16v16l10 6" stroke="white" strokeWidth="3" strokeLinecap="round" />
  </svg>
);
const VisionIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" width="36" height="36" aria-hidden="true">
    <ellipse cx="32" cy="32" rx="28" ry="16" stroke="white" strokeWidth="3" />
    <circle cx="32" cy="32" r="8" stroke="white" strokeWidth="3" />
    <circle cx="32" cy="32" r="3" fill="white" />
  </svg>
);
const GoalIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" width="36" height="36" aria-hidden="true">
    <circle cx="32" cy="32" r="28" stroke="white" strokeWidth="3" />
    <circle cx="32" cy="32" r="16" stroke="white" strokeWidth="3" />
    <circle cx="32" cy="32" r="5" fill="white" />
  </svg>
);
const QualityIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" width="34" height="34" aria-hidden="true">
    <path d="M32 6l6 13 14 2-10 10 2 14-12-6-12 6 2-14L12 21l14-2z" stroke="white" strokeWidth="3" strokeLinejoin="round" />
  </svg>
);
const ReliabilityIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" width="34" height="34" aria-hidden="true">
    <path d="M32 8L8 20v12c0 14 10 24 24 28 14-4 24-14 24-28V20L32 8z" stroke="white" strokeWidth="3" strokeLinejoin="round" />
    <path d="M22 32l7 7 13-13" stroke="white" strokeWidth="3" strokeLinecap="round" />
  </svg>
);
const InnovationIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" width="34" height="34" aria-hidden="true">
    <circle cx="32" cy="26" r="14" stroke="white" strokeWidth="3" />
    <path d="M26 40h12M29 46h6" stroke="white" strokeWidth="3" strokeLinecap="round" />
    <path d="M32 12V8M44 16l3-3M48 28h4M44 40l3 3M20 16l-3-3M16 28h-4" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);
const SustainabilityIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" width="34" height="34" aria-hidden="true">
    <path d="M32 56C32 56 8 44 8 26a24 24 0 0 1 24-20 24 24 0 0 1 24 20c0 18-24 30-24 30z" stroke="white" strokeWidth="3" />
    <path d="M32 36V20M24 28l8-8 8 8" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const PartnershipIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" width="34" height="34" aria-hidden="true">
    <circle cx="20" cy="22" r="10" stroke="white" strokeWidth="3" />
    <circle cx="44" cy="22" r="10" stroke="white" strokeWidth="3" />
    <path d="M8 52c0-8 5-14 12-14h24c7 0 12 6 12 14" stroke="white" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

const MISSION_CARDS = [
  {
    id: 'mission',
    Icon: MissionIcon,
    title: 'Mission',
    text: 'To become the premier steel manufacturer in Ethiopia, delivering high-quality structural steel and precision processing solutions for projects across the country.',
  },
  {
    id: 'vision',
    Icon: VisionIcon,
    title: 'Vision',
    text: 'To be the premier steel manufacturer in Ethiopia, setting a new standard for excellence in quality, reliability, and innovation to build a stronger, more sustainable nation.',
  },
  {
    id: 'our-goal',
    Icon: GoalIcon,
    title: 'Our Goal',
    text: 'We aim to expand our reach across Ethiopia and beyond, strengthening our presence while maintaining the quality of service and reliability our customers expect from Pillar Steel Ethiopia.',
  },
];

const CORE_VALUES = [
  {
    id: 'quality',
    Icon: QualityIcon,
    title: 'Quality',
    text: 'We are committed to maintaining the highest standards of excellence, ensuring our products meet the highest quality standards.',
  },
  {
    id: 'reliability',
    Icon: ReliabilityIcon,
    title: 'Reliability',
    text: 'Our customers can depend on us to deliver exceptional quality, reliability, and exceptional value.',
  },
  {
    id: 'innovation',
    Icon: InnovationIcon,
    title: 'Innovation',
    text: 'We continuously develop and implement innovative solutions to optimize our processes and deliver revolutionary steel products.',
  },
  {
    id: 'sustainability',
    Icon: SustainabilityIcon,
    title: 'Sustainability',
    text: 'We are committed to environmentally responsible manufacturing, reducing our carbon footprint and contributing to a greener future.',
  },
  {
    id: 'partnership',
    Icon: PartnershipIcon,
    title: 'Partnership',
    text: 'We believe in building strong, long-term partnerships with our clients, suppliers and other stakeholders.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="about-hero-section">
        <Navbar />
        <div className="about-hero-content">
          <h1 className="about-hero-title">About <span className="about-hero-us">US</span></h1>
          <p className="about-hero-subtitle">
            Steel Manufacturer in Ethiopia High-grade structural steel and precision processing solutions for projects across Ethiopia.
          </p>
        </div>
      </section>

      {/* ── Mission / Vision / Our Goal Cards ── */}
      <section className="about-mvg-section">
        <div className="about-mvg-container">
          {MISSION_CARDS.map(({ id, Icon, title, text }) => (
            <div key={id} className="about-mvg-card" id={`about-card-${id}`}>
              <div className="about-mvg-icon">
                <Icon />
              </div>
              <h3 className="about-mvg-title">{title}</h3>
              <p className="about-mvg-text">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Our Story ── */}
      <section className="about-story-section">
        <div className="about-story-container">
          <div className="about-story-text-col">
            <h2 className="about-story-title">Our Story</h2>
            <p className="about-story-para">
              Established in 2025 at Tullu Dimtu, Galan Region Shaggar City, the heart of Ethiopian industrial hub. Pillar Steel Factory is a dynamic and forward-thinking steel manufacturing company committed to delivering high quality steel products and unparalleled service. Built on foundations of innovation, reliability, and a deep understanding of the evolving needs of the construction and manufacturing sectors, we are poised to become a trusted partner in a stronger future for Ethiopia and the East African region.
            </p>
            <Link to="/#contact" className="about-story-btn" id="about-contact-us-btn">Contact Us</Link>
          </div>
          <div className="about-story-img-col">
            <img src={aboutImg} alt="Pillar Steel Factory Story" className="about-story-img" />
          </div>
        </div>
      </section>

      {/* ── Modern Steel Factory ── */}
      <section className="about-factory-section">
        <div className="about-factory-img-col">
          <img src={chooseImg} alt="Modern Steel Factory in Addis Ababa" className="about-factory-img" />
        </div>
        <div className="about-factory-text-col">
          <h2 className="about-factory-title">Modern Steel Factory in Addis Ababa</h2>
          <p className="about-factory-para">
            As a leading construction steel supplier, Pillar Steel operates a high-capacity production facility focused on producing Ethiopian construction steel. We manufacture, process, and supply high-grade structural steel pipes, metal sections, and offer specialized cutting and precision processing. From value-to-cost solutions to meet client needs, Pillar Steel delivers winning manufacturing expertise for construction and infrastructure projects.
          </p>
        </div>
      </section>

      {/* ── Our Commitment ── */}
      <section className="about-commitment-section">
        <div className="about-commitment-container">
          <h2 className="about-commitment-title">OUR COMMITMENT</h2>
          <p className="about-commitment-text">
            At Pillar Steel Ethiopia, our commitment is to provide reliable, innovative and cost-effective steel solutions that support sustainable and economic growth across Ethiopia's construction and manufacturing sectors.
          </p>
        </div>
      </section>

      {/* ── Our Core Values ── */}
      <section className="about-values-section">
        <div className="about-values-container">
          <h2 className="about-values-title">Our Core Values</h2>
          <div className="about-values-grid">
            {CORE_VALUES.map(({ id, Icon, title, text }) => (
              <div key={id} className="about-value-card" id={`value-card-${id}`}>
                <div className="about-value-icon">
                  <Icon />
                </div>
                <h3 className="about-value-card-title">{title}</h3>
                <p className="about-value-card-text">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <Footer />
    </>
  );
}
