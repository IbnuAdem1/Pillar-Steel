import React, { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate async submission (no backend)
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setForm({ name: '', email: '', message: '' });
    }, 1000);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        {/* Left: Contact Form */}
        <div className="contact-form-col">
          <h2 className="contact-title">Send Us A Message</h2>

          {submitted ? (
            <div style={{
              background: 'rgba(253, 93, 0, 0.08)',
              border: '1px solid var(--primary-orange)',
              borderRadius: '20px',
              padding: '28px 24px',
              textAlign: 'center',
            }}>
              <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '20px', color: 'var(--primary-orange)', marginBottom: '8px' }}>
                Thank you!
              </p>
              <p style={{ fontFamily: 'Lato, sans-serif', fontSize: '16px', color: '#555' }}>
                Your message has been received. We'll get back to you shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                style={{
                  marginTop: '20px',
                  background: 'var(--primary-orange)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '20px',
                  padding: '10px 24px',
                  cursor: 'pointer',
                  fontFamily: 'Lato, sans-serif',
                  fontWeight: 600,
                  fontSize: '15px',
                }}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <input
                type="text"
                id="contact-name"
                name="name"
                className="contact-input"
                placeholder="Your name*"
                value={form.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                id="contact-email"
                name="email"
                className="contact-input"
                placeholder="Your email*"
                value={form.email}
                onChange={handleChange}
                required
              />
              <textarea
                id="contact-message"
                name="message"
                className="contact-textarea"
                placeholder="Your message*"
                value={form.message}
                onChange={handleChange}
                required
              />
              <button
                type="submit"
                className="contact-submit-btn"
                disabled={submitting}
              >
                {submitting ? 'Sending...' : 'Submit'}
              </button>
            </form>
          )}
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
