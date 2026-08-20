import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/layout/SEO';
import PageHero from '../components/ui/PageHero';
import IconCard from '../components/ui/IconCard';
import AlternatingSection from '../components/ui/AlternatingSection';
import Footer from '../components/Footer';

// Assets matching the reference design layout exactly
import storyImg from '../assets/works-2.webp'; // Stacks of steel plates on factory floor
import factoryImg from '../assets/choose.webp'; // Long factory workshop with blue roll forming lines
import commitmentImg from '../assets/about-us.jpg'; // Roll-forming machine line
import { staggerContainer, fadeUp } from '../lib/motion';

/* ── 1. Precise SVG Icons Matching Reference Image ── */

// Mission: Magnifying glass / precision target style icon
const MissionIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" width="34" height="34" aria-hidden="true">
    <circle cx="28" cy="28" r="16" stroke="white" strokeWidth="3" />
    <circle cx="28" cy="28" r="8" stroke="white" strokeWidth="2.5" />
    <circle cx="28" cy="28" r="2.5" fill="white" />
    <path d="M40 40L54 54" stroke="white" strokeWidth="4" strokeLinecap="round" />
  </svg>
);

// Vision: Eye icon
const VisionIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" width="34" height="34" aria-hidden="true">
    <ellipse cx="32" cy="32" rx="26" ry="16" stroke="white" strokeWidth="3" />
    <circle cx="32" cy="32" r="8" stroke="white" strokeWidth="3" />
    <circle cx="32" cy="32" r="3.5" fill="white" />
  </svg>
);

// Our Goal: Lightbulb / target goal icon
const GoalIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" width="34" height="34" aria-hidden="true">
    <path
      d="M32 10C22.059 10 14 18.059 14 28c0 6.2 3.14 11.66 7.9 14.88V48c0 1.1.9 2 2 2h16.2c1.1 0 2-.9 2-2v-5.12C46.86 39.66 50 34.2 50 28c0-9.941-8.059-18-18-18z"
      stroke="white"
      strokeWidth="3"
    />
    <path d="M26 54h12M28 58h8" stroke="white" strokeWidth="3" strokeLinecap="round" />
    <path d="M32 20v8M28 24h8" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

// Quality: Gear with star/ribbon
const QualityIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" width="34" height="34" aria-hidden="true">
    <circle cx="32" cy="32" r="14" stroke="white" strokeWidth="3" />
    <path d="M32 6v6M32 52v6M6 32h6M52 32h6M13.6 13.6l4.2 4.2M46.2 46.2l4.2 4.2M13.6 50.4l4.2-4.2M46.2 17.8l4.2-4.2" stroke="white" strokeWidth="3" strokeLinecap="round" />
    <path d="M26 32l4 4 8-8" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Reliability: Bar chart / upward growth
const ReliabilityIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" width="34" height="34" aria-hidden="true">
    <path d="M12 52h40" stroke="white" strokeWidth="3" strokeLinecap="round" />
    <path d="M20 52V36" stroke="white" strokeWidth="4" strokeLinecap="round" />
    <path d="M32 52V24" stroke="white" strokeWidth="4" strokeLinecap="round" />
    <path d="M44 52V14" stroke="white" strokeWidth="4" strokeLinecap="round" />
    <path d="M18 30l12-10 10 6 8-10" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Innovation: Lightbulb with beams
const InnovationIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" width="34" height="34" aria-hidden="true">
    <circle cx="32" cy="24" r="14" stroke="white" strokeWidth="3" />
    <path d="M26 38h12M28 44h8M30 50h4" stroke="white" strokeWidth="3" strokeLinecap="round" />
    <path d="M32 6V2M50 24h4M10 24h4M45 11l3-3M19 11l-3-3" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

// Sustainability: Eco leaf
const SustainabilityIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" width="34" height="34" aria-hidden="true">
    <path
      d="M16 48C16 48 20 30 36 20C48 12.5 52 12 52 12C52 12 51.5 16 44 28C34 44 16 48 16 48Z"
      stroke="white"
      strokeWidth="3"
      strokeLinejoin="round"
    />
    <path d="M16 48C26 42 34 32 38 22" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

// Partnership: Two people connected / handshake
const PartnershipIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" width="34" height="34" aria-hidden="true">
    <circle cx="22" cy="22" r="8" stroke="white" strokeWidth="3" />
    <circle cx="42" cy="22" r="8" stroke="white" strokeWidth="3" />
    <path d="M10 50c0-6.627 5.373-12 12-12h20c6.627 0 12 5.373 12 12" stroke="white" strokeWidth="3" strokeLinecap="round" />
    <path d="M26 44l6 6 12-12" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ── 2. Exact Card Data Matching Reference ── */
const MISSION_CARDS = [
  {
    id: 'mission',
    icon: MissionIcon,
    title: 'Mission',
    description:
      'To manufacture and deliver high-grade structural steel that exceeds industry standards through precision engineering, modern processing lines, and sustainable practices. As a dedicated construction steel supplier, we provide reliable, cost-effective steel solutions that power major building and infrastructure developments across the region.',
  },
  {
    id: 'vision',
    icon: VisionIcon,
    title: 'Vision',
    description:
      'To be the premier steel manufacturer in Ethiopia, recognized across East Africa for manufacturing excellence, technical innovation, and product reliability. We aim to drive sustainable industrial expansion by operating a state-of-the-art steel factory in Addis Ababa that sets the benchmark for quality and supply capacity.',
  },
  {
    id: 'our-goal',
    icon: GoalIcon,
    title: 'Our Goal',
    description:
      'To empower building developments across Ethiopia by expanding our inventory of structural steel pipes, hollow sections, and custom slitting services. Pillar Steel Ethiopia strives to maintain strict quality control, offering competitive factory pricing and rapid delivery for commercial and industrial contractors.',
  },
];

const CORE_VALUES_TOP = [
  {
    id: 'quality',
    icon: QualityIcon,
    title: 'Quality',
    description:
      'We are uncompromising in our pursuit of excellence, ensuring that every steel product we manufacture adheres to the highest quality standards.',
  },
  {
    id: 'reliability',
    icon: ReliabilityIcon,
    title: 'Reliability',
    description:
      'Our customers can depend on us for consistent product quality, timely delivery, and responsive service.',
  },
  {
    id: 'innovation',
    icon: InnovationIcon,
    title: 'Innovation',
    description:
      'We embrace technological advancements and continuous improvements to optimize our processes and develop innovative steel solutions.',
  },
];

const CORE_VALUES_BOTTOM = [
  {
    id: 'sustainability',
    icon: SustainabilityIcon,
    title: 'Sustainability',
    description:
      'We are committed to environmentally responsible manufacturing practices, minimizing our impact, and contributing to a greener future.',
  },
  {
    id: 'partnership',
    icon: PartnershipIcon,
    title: 'Partnership',
    description:
      'We believe in building strong, collaborative relationships with our customers, suppliers, and the communities we serve.',
  },
];

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About Us | Pillar Steel Factory Ethiopia"
        description="Learn about Pillar Steel Factory, our mission, vision, state-of-the-art facility in Tulu Dimtu, Oromia Regional State, and commitment to Ethiopian infrastructure growth."
      />

      {/* ── 1. Hero ── */}
      <PageHero
        title="About US"
        highlightWord="US"
        subtitle="Steel Manufacturer in Ethiopia High-grade structural steel and precision processing solutions for projects across Ethiopia."
        className="about-hero-section"
      />

      {/* ── 2. Mission / Vision / Our Goal Cards (Tucked closely under hero) ── */}
      <section className="about-mvg-section" id="mission-vision-goals">
        <motion.div
          className="about-mvg-container"
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {MISSION_CARDS.map(({ id, icon, title, description }) => (
            <IconCard
              key={id}
              id={`about-card-${id}`}
              title={title}
              description={description}
              icon={icon}
              className="about-top-card"
            />
          ))}
        </motion.div>
      </section>

      {/* ── 3. Our Story ── */}
      <AlternatingSection
        id="our-story"
        title="Our Story"
        description="Established in 2025 in Tulu Dimtu, Oromia Regional State, the heart of Ethiopian industrial hub, Pillar Steel Factory is a dynamic and forward-thinking steel manufacturing company committed to delivering high quality steel products and unparalleled service. Built on foundation of innovation, reliability, and a deep understanding of the evolving needs of the construction and manufacturing sectors, we are poised to become a trusted partner in a stronger future for Ethiopia and the East African region."
        imageSrc={storyImg}
        imageAlt="Pillar Steel Factory Floor and Stored Materials"
        ctaText="Contact Us"
        ctaTo="/contact"
        ctaVariant="primary"
        className="about-story-compact"
      />

      {/* ── 4. Modern Steel Factory in Addis Ababa (White background, image left, text right) ── */}
      <AlternatingSection
        id="modern-factory"
        title="Modern Steel Factory in Addis Ababa"
        description="As a leading construction steel supplier, Pillar Steel operates a high-capacity production facility dedicated to supporting Ethiopia's infrastructure growth. We manufacture and supply high-tensile structural steel, pipes, hollow sections, and offer specialized slitting and cut-to-length processing. Every order is quality-tested to meet strict industry standards, ensuring maximum strength and long-term durability for your commercial and industrial projects."
        imageSrc={factoryImg}
        imageAlt="Modern Steel Factory Production Line in Addis Ababa"
        reverse={true}
        theme="light"
        className="about-factory-compact"
      />

      {/* ── 5. Our Commitment (White background, text left, machine image right) ── */}
      <AlternatingSection
        id="commitment"
        title="OUR COMMITMENT"
        description="At Pillar Steel Ethiopia, our commitment is to provide durable, innovative, and cost-effective structural steel solutions that support sustainable industrial and economic growth across Ethiopia's construction and manufacturing sectors."
        imageSrc={commitmentImg}
        imageAlt="Pillar Steel Roll-Forming Facility and Operations"
        reverse={false}
        theme="light"
        className="about-commitment-compact"
      />

      {/* ── 6. Our Core Values (3 top cards + 2 centered bottom cards) ── */}
      <section className="about-values-section" id="core-values">
        <div className="about-values-container">
          <h2 className="about-values-title">Our Core Values</h2>

          {/* Top Row: 3 Cards */}
          <motion.div
            className="about-values-top-row"
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
          >
            {CORE_VALUES_TOP.map(({ id, icon, title, description }) => (
              <IconCard
                key={id}
                id={`value-card-${id}`}
                title={title}
                description={description}
                icon={icon}
                className="about-value-card-item"
              />
            ))}
          </motion.div>

          {/* Bottom Row: 2 Cards Centered */}
          <motion.div
            className="about-values-bottom-row"
            variants={staggerContainer(0.1, 0.15)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
          >
            {CORE_VALUES_BOTTOM.map(({ id, icon, title, description }) => (
              <IconCard
                key={id}
                id={`value-card-${id}`}
                title={title}
                description={description}
                icon={icon}
                className="about-value-card-item"
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 7. Footer ── */}
      <Footer />
    </>
  );
}
