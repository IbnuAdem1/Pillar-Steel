import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import SEO from '../components/layout/SEO';
import PageHero from '../components/ui/PageHero';
import InfoCard from '../components/ui/InfoCard';
import ContactForm from '../components/ui/ContactForm';
import Footer from '../components/Footer';
import chooseImg from '../assets/choose.webp';
import logoImg from '../assets/nav-logo.png';
import { staggerContainer, fadeUp } from '../lib/motion';

const CONTACT_INFO = [
  {
    id: 'address',
    icon: () => <MapPin size={30} strokeWidth={2} />,
    title: 'Our Location',
    content: 'Chafe Tumma, Tullu Dimtu, Shaggar City, Ethiopia',
    linkHref: 'https://maps.google.com/maps?q=Pillar%20Steel%20Factory%20Bulgaria%20Street%20Addis%20Ababa',
    linkType: 'map',
  },
  {
    id: 'phone',
    icon: () => <Phone size={30} strokeWidth={2} />,
    title: 'Phone Numbers',
    content: '+251 93 030 3831 / +251 97 303 2277',
    linkHref: 'tel:+251930303831',
    linkType: 'tel',
  },
  {
    id: 'email',
    icon: () => <Mail size={30} strokeWidth={2} />,
    title: 'Email Address',
    content: 'steelpillar92@gmail.com',
    linkHref: 'mailto:steelpillar92@gmail.com',
    linkType: 'mailto',
  },
  {
    id: 'hours',
    icon: () => <Clock size={30} strokeWidth={2} />,
    title: 'Opening Hours',
    content: 'Monday – Saturday: 8:30 AM – 5:30 PM',
  },
];

export default function ContactPage() {
  return (
    <>
      <SEO
        title="Contact Pillar Steel Factory | Addis Ababa & Shaggar City"
        description="Contact Pillar Steel Factory Ethiopia at +251 93 030 3831. Located in Galan Industrial Hub, Tullu Dimtu. Get quotes on structural steel & custom cutting."
      />

      {/* ── LocalBusiness JSON-LD Structured Data ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Pillar Steel Factory',
            telephone: ['+251930303831', '+251973032277'],
            email: 'steelpillar92@gmail.com',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Chafe Tumma, Tullu Dimtu',
              addressLocality: 'Shaggar City',
              addressCountry: 'ET',
            },
            openingHours: 'Mo-Sa 08:30-17:30',
          }),
        }}
      />

      {/* ── 1. Page Hero ── */}
      <PageHero
        title="Contact Us"
        highlightWord="Us"
        subtitle="Get in touch with our engineering and sales teams for quotes, custom fabrication inquiries, or factory visits."
        className="contact-hero-section"
      />

      {/* ── 2. 4-Up Info Cards Row ── */}
      <section className="contact-info-cards-section" id="contact-details">
        <motion.div
          className="contact-info-cards-container"
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {CONTACT_INFO.map((info) => (
            <InfoCard
              key={info.id}
              id={`info-${info.id}`}
              icon={info.icon}
              title={info.title}
              content={info.content}
              linkHref={info.linkHref}
              linkType={info.linkType}
            />
          ))}
        </motion.div>
      </section>

      {/* ── 3. Send Us A Message (Form + Visual Badge Card) ── */}
      <section className="contact-form-section" id="send-message">
        <div className="contact-form-layout-container">
          {/* Left Form Column */}
          <div className="contact-form-column">
            <ContactForm
              title="Send Us A Message"
              subtitle="Fill out the form below and our team will get back to you within 24 hours."
            />
          </div>

          {/* Right Brand Showcase Column */}
          <motion.div
            className="contact-brand-card"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="contact-brand-card-img-wrap">
              <img src={chooseImg} alt="Pillar Steel Manufacturing Facility" className="contact-brand-img" />
              <div className="contact-brand-overlay" />
            </div>
            <div className="contact-brand-content">
              <img src={logoImg} alt="Pillar Steel Logo" className="contact-brand-logo" />
              <h3 className="contact-brand-title">Pillar Steel Factory</h3>
              <p className="contact-brand-desc">
                Leading construction steel manufacturer in Ethiopia, supplying high-grade structural pipes, hollow sections, and custom steel profiles across East Africa.
              </p>
              <div className="contact-brand-pill">
                <span>📍 Galan Industrial Hub, Tullu Dimtu</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 4. Visit Our Factory & Interactive Map ── */}
      <section className="contact-map-section" id="factory-map">
        <div className="contact-map-container">
          <div className="contact-map-header">
            <h2 className="contact-map-title">Visit Our Factory</h2>
            <p className="contact-map-subtitle">
              Located conveniently in Galan City with direct heavy freight access across Addis Ababa and regional corridors.
            </p>
          </div>
          <div className="contact-map-frame-wrap">
            <iframe
              className="contact-map-iframe"
              src="https://maps.google.com/maps?q=Pillar%20Steel%20Factory%20Bulgaria%20Street%20Addis%20Ababa&t=m&z=14&output=embed&iwloc=near"
              title="Pillar Steel Factory Bulgaria Street Addis Ababa"
              aria-label="Pillar Steel Factory Location Map"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ── 5. Footer ── */}
      <Footer />
    </>
  );
}
