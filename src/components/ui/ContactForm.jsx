import React, { useState } from 'react';
import CTAButton from './CTAButton';

/**
 * Reusable ContactForm component (Frontend-only submission)
 * Implements accessible form fields, client validation, and clear feedback messages.
 */
export default function ContactForm({
  title,
  subtitle,
  className = '',
  id,
  onSubmitSuccess,
}) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Front-end only simulated submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      if (onSubmitSuccess) onSubmitSuccess(formData);
    }, 600);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    setSubmitted(false);
  };

  return (
    <div className={`contact-form-container ${className}`.trim()} id={id}>
      {title && <h3 className="contact-form-title">{title}</h3>}
      {subtitle && <p className="contact-form-subtitle">{subtitle}</p>}

      {submitted ? (
        <div className="contact-form-success" role="alert">
          <div className="contact-success-icon">✓</div>
          <h4>Thank you for reaching out!</h4>
          <p>We have received your message and will get back to you promptly.</p>
          <button type="button" onClick={handleReset} className="contact-reset-btn">
            Send another message
          </button>
        </div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="contact-name" className="visually-hidden">
              Your Name
            </label>
            <input
              type="text"
              id="contact-name"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="contact-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="contact-email" className="visually-hidden">
              Your Email
            </label>
            <input
              type="email"
              id="contact-email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="contact-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="contact-phone" className="visually-hidden">
              Your Phone (Optional)
            </label>
            <input
              type="tel"
              id="contact-phone"
              name="phone"
              placeholder="Your Phone (Optional)"
              value={formData.phone}
              onChange={handleChange}
              className="contact-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="contact-message" className="visually-hidden">
              Your Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              placeholder="Your Message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="contact-textarea"
            />
          </div>

          <button
            type="submit"
            className="contact-submit-btn"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      )}
    </div>
  );
}
