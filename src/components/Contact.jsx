import React from 'react';
import ContactForm from './ui/ContactForm';

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        {/* Left: Contact Form */}
        <div className="contact-form-col">
          <ContactForm title="Send Us A Message" />
        </div>

        {/* Right: Google Map */}
        <div className="contact-map-col">
          <iframe
            className="contact-map-iframe"
            src="https://maps.google.com/maps?q=Pillar%20Steel%20Factory%20Bulgaria%20Street%20Addis%20Ababa&t=m&z=14&output=embed&iwloc=near"
            title="Pillar Steel Factory Bulgaria Street Addis Ababa"
            aria-label="Pillar Steel Factory Bulgaria Street Addis Ababa"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
