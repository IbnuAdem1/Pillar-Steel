import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/layout/SEO';
import PageHero from '../components/ui/PageHero';
import AlternatingSection from '../components/ui/AlternatingSection';
import IconCard from '../components/ui/IconCard';
import GalleryGrid from '../components/ui/GalleryGrid';
import Footer from '../components/Footer';

// Assets matching the reference design layout exactly
import works1 from '../assets/works-1.webp'; // Overhead crane workshop
import works2 from '../assets/works-2.webp'; // Stacks of steel plates on factory floor
import works3 from '../assets/works-3.jpg';  // RHS sections
import works4 from '../assets/works-4.jpg';  // Bundles of square/rectangular hollow sections
import work5 from '../assets/work-5.jpg';   // Round pipe sections
import work6 from '../assets/work-6.jpg';   // Purlins & profiles
import { staggerContainer } from '../lib/motion';

import { 
  Cog, 
  Users, 
  Award, 
  HeartHandshake, 
  MapPin 
} from 'lucide-react';

/* ── Modern Lucide Icons for Competitive Advantage Matching Reference ── */
const FacilityIcon = () => <Cog size={32} strokeWidth={2.2} />;
const TeamIcon = () => <Users size={32} strokeWidth={2.2} />;
const QualityIcon = () => <Award size={32} strokeWidth={2.2} />;
const CustomerCentricIcon = () => <HeartHandshake size={32} strokeWidth={2.2} />;
const LocationIcon = () => <MapPin size={32} strokeWidth={2.2} />;

const COMPETITIVE_ADVANTAGES_TOP = [
  {
    id: 'facility',
    icon: FacilityIcon,
    title: 'State-of-the-Art Facility',
    description: 'Our modern manufacturing plant ensures efficient production and consistent quality.',
  },
  {
    id: 'team',
    icon: TeamIcon,
    title: 'Experienced Team',
    description: 'Our skilled workforce brings a wealth of expertise to every stage of the manufacturing process.',
  },
  {
    id: 'quality',
    icon: QualityIcon,
    title: 'Commitment to Quality',
    description: 'We adhere to stringent quality control measures to guarantee superior products.',
  },
];

const COMPETITIVE_ADVANTAGES_BOTTOM = [
  {
    id: 'customer-centric',
    icon: CustomerCentricIcon,
    title: 'Customer-Centric Approach',
    description: 'We prioritize building long-term relationships through exceptional service and support.',
  },
  {
    id: 'strategic-location',
    icon: LocationIcon,
    title: 'Strategic Location',
    description: 'Situated in Tulu Dimtu, a key industrial zone with access to transportation networks, we are well-positioned to serve the growing demand in Ethiopia and beyond.',
  },
];

const PRODUCTS_AND_SERVICES_IMAGES = [
  { id: 'p1', src: works3, alt: 'RHS (Rectangular Hollow Sections) precision structural steel bundles', title: 'RHS (Rectangular Hollow Sections)' },
  { id: 'p2', src: works4, alt: 'SHS (Square Hollow Sections) structural steel tubes neatly stacked', title: 'SHS (Square Hollow Sections)' },
  { id: 'p3', src: work5, alt: 'Heavy-duty circular round pipe sections for structural construction', title: 'Circular Round Pipes' },
  { id: 'p4', src: work6, alt: 'Cold-formed custom steel purlins and profile sections', title: 'Custom Profiles & Purlins' },
  { id: 'p5', src: works2, alt: 'Heavy gauge flat steel plates and raw sheets stacked in storage bay', title: 'Steel Plates & Sheets' },
  { id: 'p6', src: works1, alt: 'High-capacity industrial overhead crane bay and storage area', title: 'Heavy Structural Sections' },
];

export default function ServicesPage() {
  return (
    <>
      <SEO
        title="Our Services | Pillar Steel Factory Ethiopia"
        description="Expert steel processing services in Addis Ababa delivering quality, support, and on-time solutions. Precision slitting, cut-to-length, and structural steel manufacturing."
      />

      {/* ── 1. Page Hero ── */}
      <PageHero
        title="Our Services"
        highlightWord="Services"
        subtitle="Expert steel processing services in Addis Ababa delivering quality, support, and on-time solutions."
        className="services-hero-section"
      />

      {/* ── 2. Customized Solutions (Text Left, Image Right) ── */}
      <AlternatingSection
        id="customized-solutions"
        title="Customized Solutions"
        description="Every project has unique structural demands. We deliver tailored steel processing services in Addis Ababa, from precision slitting and cut to length Ethiopia builders trust to custom hollow sections crafted to your exact specifications."
        imageSrc={works2}
        imageAlt="Customized Steel Solutions and Plate Processing"
        ctaText="Contact Us Now"
        ctaTo="/contact"
        ctaVariant="primary"
        className="service-alternating-section"
      />

      {/* ── 3. Technical Support (Image Left, Text Right) ── */}
      <AlternatingSection
        id="technical-support"
        title="Technical Support"
        description="As a leading steel factory in Addis Ababa, our technical team provides expert engineering advice, material selection guidance, and fabrication support. Pillar Steel Ethiopia helps you optimize efficiency while minimizing site waste."
        imageSrc={works1}
        imageAlt="Technical Support and Overhead Crane Steel Processing"
        reverse={true}
        theme="light"
        ctaText="Let's Work Together"
        ctaTo="/contact"
        ctaVariant="primary"
        className="service-alternating-section"
      />

      {/* ── 4. Timely Delivery (Text Left, Image Right) ── */}
      <AlternatingSection
        id="timely-delivery"
        title="Timely Delivery"
        description="Time is critical in construction. As premier providers of steel processing in Ethiopia, our reliable logistics network guarantees on-time delivery of processed steel straight to your job site, keeping your project on schedule."
        imageSrc={works4}
        imageAlt="Timely Delivery and Finished Steel Profile Bundles"
        reverse={false}
        theme="light"
        ctaText="Reach Out Now"
        ctaTo="/contact"
        ctaVariant="primary"
        className="service-alternating-section"
      />

      {/* ── 5. Our Competitive Advantage (3 top cards + 2 bottom cards centered) ── */}
      <section className="about-values-section" id="competitive-advantage">
        <div className="about-values-container">
          <h2 className="about-values-title">Our Competitive Advantage</h2>

          {/* Top Row: 3 Cards */}
          <motion.div
            className="about-values-top-row"
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
          >
            {COMPETITIVE_ADVANTAGES_TOP.map(({ id, icon, title, description }) => (
              <IconCard
                key={id}
                id={`advantage-${id}`}
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
            {COMPETITIVE_ADVANTAGES_BOTTOM.map(({ id, icon, title, description }) => (
              <IconCard
                key={id}
                id={`advantage-${id}`}
                title={title}
                description={description}
                icon={icon}
                className="about-value-card-item"
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 6. Our Products & Precision Profiles Gallery Strip (Preserved as requested) ── */}
      <section className="gallery-section" id="products-services-strip">
        <div className="gallery-container">
          <h2 className="gallery-title">Our Products & Precision Profiles</h2>
          <GalleryGrid items={PRODUCTS_AND_SERVICES_IMAGES} layout="featured" />
        </div>
      </section>

      {/* ── 7. Footer ── */}
      <Footer />
    </>
  );
}
