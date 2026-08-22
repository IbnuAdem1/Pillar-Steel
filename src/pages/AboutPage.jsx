import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/layout/SEO';
import PageHero from '../components/ui/PageHero';
import IconCard from '../components/ui/IconCard';
import AlternatingSection from '../components/ui/AlternatingSection';
import Footer from '../components/Footer';

// Assets matching the reference design layout exactly
import storyImg from '../assets/works-2.webp'; // Stacks of steel plates on factory floor
import factoryImg from '../assets/factory.png'; // Long factory workshop with blue roll forming lines
import commitmentImg from '../assets/about-us.jpg'; // Roll-forming machine line
import { staggerContainer, fadeUp } from '../lib/motion';

import { 
  Target, 
  Eye, 
  Lightbulb, 
  BadgeCheck, 
  ShieldCheck, 
  Sparkles, 
  Leaf, 
  Handshake 
} from 'lucide-react';

/* ── 1. Modern Crisp Icons for About Page ── */
const MissionIcon = () => <Target size={32} strokeWidth={2.2} />;
const VisionIcon = () => <Eye size={32} strokeWidth={2.2} />;
const GoalIcon = () => <Lightbulb size={32} strokeWidth={2.2} />;

const QualityIcon = () => <BadgeCheck size={32} strokeWidth={2.2} />;
const ReliabilityIcon = () => <ShieldCheck size={32} strokeWidth={2.2} />;
const InnovationIcon = () => <Sparkles size={32} strokeWidth={2.2} />;
const SustainabilityIcon = () => <Leaf size={32} strokeWidth={2.2} />;
const PartnershipIcon = () => <Handshake size={32} strokeWidth={2.2} />;

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

      {/* ── 1. Page Hero ── */}
      <PageHero
        title="About US"
        highlightWord="US"
        subtitle="Steel Manufacturer in Ethiopia High-grade structural steel and precision processing solutions for projects across Ethiopia."
        className="about-hero-section"
      />

      {/* ── 2. Mission / Vision / Our Goal Cards ── */}
      <section className="about-mvg-section" id="mission-vision-goals">
        <motion.div
          className="about-mvg-container"
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
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
        <motion.div
          className="about-values-container"
          variants={staggerContainer(0.12, 0.05)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.h2 className="about-values-title" variants={fadeUp}>
            Our Core Values
          </motion.h2>

          {/* Top Row: 3 Cards */}
          <motion.div
            className="about-values-top-row"
            variants={staggerContainer(0.1)}
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
            variants={staggerContainer(0.1, 0.1)}
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
        </motion.div>
      </section>

      {/* ── 7. Footer ── */}
      <Footer />
    </>
  );
}
