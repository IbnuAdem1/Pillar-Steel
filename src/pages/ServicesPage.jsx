import React from 'react';
import SEO from '../components/layout/SEO';
import PageHero from '../components/ui/PageHero';
import AlternatingSection from '../components/ui/AlternatingSection';
import IconCard from '../components/ui/IconCard';
import GalleryGrid from '../components/ui/GalleryGrid';
import Footer from '../components/Footer';

// Assets
import aboutImg from '../assets/about-us.jpg';
import chooseImg from '../assets/choose.webp';
import works1 from '../assets/works-1.webp';
import works2 from '../assets/works-2.webp';
import works3 from '../assets/works-3.jpg';
import works4 from '../assets/works-4.jpg';
import work5 from '../assets/work-5.jpg';
import work6 from '../assets/work-6.jpg';

/* ── SVG Icons for Competitive Advantage ── */
const ShieldIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" width="34" height="34" aria-hidden="true">
    <path d="M32 8L10 18v16c0 14 10 24 22 26 12-2 22-12 22-26V18L32 8z" stroke="white" strokeWidth="3" strokeLinejoin="round" />
    <path d="M22 32l7 7 13-13" stroke="white" strokeWidth="3" strokeLinecap="round" />
  </svg>
);
const TechIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" width="34" height="34" aria-hidden="true">
    <circle cx="32" cy="32" r="14" stroke="white" strokeWidth="3" />
    <path d="M32 6v8M32 50v8M6 32h8M50 32h8M14 14l6 6M44 44l6 6M14 50l6-6M44 20l6-6" stroke="white" strokeWidth="3" strokeLinecap="round" />
  </svg>
);
const TeamIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" width="34" height="34" aria-hidden="true">
    <circle cx="32" cy="20" r="10" stroke="white" strokeWidth="3" />
    <path d="M12 50c0-9 9-16 20-16s20 7 20 16" stroke="white" strokeWidth="3" strokeLinecap="round" />
  </svg>
);
const QualityCheckIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" width="34" height="34" aria-hidden="true">
    <circle cx="32" cy="32" r="26" stroke="white" strokeWidth="3" />
    <path d="M20 32l8 8 16-16" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const LocationPinIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" width="34" height="34" aria-hidden="true">
    <path d="M32 6C20 6 12 15 12 26c0 16 20 32 20 32s20-16 20-32c0-11-8-20-20-20z" stroke="white" strokeWidth="3" />
    <circle cx="32" cy="24" r="7" stroke="white" strokeWidth="3" />
  </svg>
);

const COMPETITIVE_ADVANTAGES = [
  {
    id: 'raw-materials',
    icon: ShieldIcon,
    title: 'High-Grade Raw Materials',
    description: 'We source only certified prime steel coils and raw materials to ensure unmatched structural strength and longevity.',
  },
  {
    id: 'modern-tech',
    icon: TechIcon,
    title: 'State-of-the-Art Technology',
    description: 'Equipped with automated European-standard roll-forming and cutting lines for high precision and efficiency.',
  },
  {
    id: 'experienced-team',
    icon: TeamIcon,
    title: 'Experienced Workforce',
    description: 'Skilled metallurgical engineers and machine operators bringing decades of combined industry expertise.',
  },
  {
    id: 'quality-control',
    icon: QualityCheckIcon,
    title: 'Strict Quality Control',
    description: 'Every pipe and profile undergoes rigorous dimensional, weld-integrity, and tensile strength testing.',
  },
  {
    id: 'strategic-hub',
    icon: LocationPinIcon,
    title: 'Strategic Location',
    description: 'Located in Galan City with direct transit routes to Addis Ababa and nationwide construction hubs.',
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
        title="Our Steel Products & Services | Pillar Steel Factory"
        description="Explore Pillar Steel's customized steel fabrication, technical support, prompt delivery, RHS/SHS hollow sections, round pipes, and structural steel profiles."
      />

      {/* ── 1. Page Hero ── */}
      <PageHero
        title="Our Services"
        highlightWord="Services"
        subtitle="Comprehensive steel manufacturing, precision cutting, and customized fabrication solutions for Ethiopia's growing infrastructure."
        className="services-hero-section"
      />

      {/* ── 2. Customized Solutions (Alternating light) ── */}
      <AlternatingSection
        id="customized-solutions"
        subtitle="Tailored Fabrication"
        title="Customized Solutions"
        description={[
          "We work closely with contractors, engineers, and industrial clients to understand exact structural specifications and deliver tailored steel solutions.",
          "From custom dimensional cuts to specialized profile shaping and project-specific bundle configurations, our engineering team ensures optimal compatibility for your construction timeline."
        ]}
        imageSrc={aboutImg}
        imageAlt="Customized Steel Solutions at Pillar Steel"
        ctaText="Contact Us Now"
        ctaTo="/#contact"
        ctaVariant="primary"
      />

      {/* ── 3. Technical Support (Alternating reversed orange) ── */}
      <AlternatingSection
        id="technical-support"
        subtitle="Expert Consultation"
        title="Technical Support & Advisory"
        description={[
          "Our knowledgeable metallurgical team provides dedicated technical assistance and engineering guidance to ensure optimal product selection and application.",
          "We help you determine the exact gauge, profile strength, and load tolerances required to maximize safety and cost-efficiency on every structural build."
        ]}
        imageSrc={chooseImg}
        imageAlt="Technical Support and Consultation"
        reverse={true}
        theme="orange"
        ctaText="Let's Work Together"
        ctaTo="/#contact"
        ctaVariant="secondary"
      />

      {/* ── 4. Timely Delivery (Alternating light) ── */}
      <AlternatingSection
        id="timely-delivery"
        subtitle="Logistics Excellence"
        title="Reliable & Timely Delivery"
        description={[
          "We understand the critical importance of project milestones and construction timelines. Pillar Steel is dedicated to swift, safe, and efficient nationwide delivery.",
          "Situated in Galan Industrial City, our fleet and logistics network connect directly to major highway corridors across Addis Ababa, Oromia, and national project sites."
        ]}
        imageSrc={works1}
        imageAlt="Timely Delivery and Logistics Facility"
        ctaText="Reach Out Now"
        ctaTo="/#contact"
        ctaVariant="primary"
      />

      {/* ── 5. Our Competitive Advantage (5 IconCards) ── */}
      <section className="about-values-section" id="competitive-advantage">
        <div className="about-values-container">
          <h2 className="about-values-title">Our Competitive Advantage</h2>
          <div className="about-values-grid">
            {COMPETITIVE_ADVANTAGES.map(({ id, icon, title, description }) => (
              <IconCard
                key={id}
                id={`advantage-${id}`}
                title={title}
                description={description}
                icon={icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Our Products & Services Gallery Strip ── */}
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
