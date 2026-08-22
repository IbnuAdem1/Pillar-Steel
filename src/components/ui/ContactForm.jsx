import React, { useState } from 'react';
import CTAButton from './CTAButton';
import { submitContactForm } from '../../config/web3forms';

/**
 * Reusable ContactForm component with Web3Forms integration
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
  const [error, setError] = useState(null);
  const [validationErrors, setValidationErrors] = useState({});

  /**
   * Client-side validation for required fields
   * @returns {boolean} True if form is valid
   */
  const validateForm = () => {
    const errors = {};

    // Name validation
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    // Message validation
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error for this field when user starts typing
    if (validationErrors[name]) {
      setValidationErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Clear previous errors
    setError(null);

    // Validate form
    if (!validateForm()) {
      return;
    }

    // Prevent duplicate submissions
    if (loading) {
      return;
    }

    setLoading(true);

    try {
      // Submit form to Web3Forms
      await submitContactForm(formData);

      // Success
      setLoading(false);
      setSubmitted(true);
      if (onSubmitSuccess) onSubmitSuccess(formData);
    } catch (err) {
      // Handle error
      setLoading(false);
      setError(err.message || 'Failed to send message. Please try again.');
    }
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    setSubmitted(false);
    setError(null);
    setValidationErrors({});
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
        <>
          {error && (
            <div className="contact-form-error" role="alert">
              <div className="contact-error-icon">⚠</div>
              <p>{error}</p>
            </div>
          )}
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
                className={`contact-input ${validationErrors.name ? 'has-error' : ''}`}
                aria-describedby={validationErrors.name ? 'name-error' : undefined}
              />
              {validationErrors.name && (
                <span id="name-error" className="form-error-message">
                  {validationErrors.name}
                </span>
              )}
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
                className={`contact-input ${validationErrors.email ? 'has-error' : ''}`}
                aria-describedby={validationErrors.email ? 'email-error' : undefined}
              />
              {validationErrors.email && (
                <span id="email-error" className="form-error-message">
                  {validationErrors.email}
                </span>
              )}
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
              <label htmlFor="contact-subject" className="visually-hidden">
                Subject (Optional)
              </label>
              <input
                type="text"
                id="contact-subject"
                name="subject"
                placeholder="Subject (Optional)"
                value={formData.subject}
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
                className={`contact-textarea ${validationErrors.message ? 'has-error' : ''}`}
                aria-describedby={validationErrors.message ? 'message-error' : undefined}
              />
              {validationErrors.message && (
                <span id="message-error" className="form-error-message">
                  {validationErrors.message}
                </span>
              )}
            </div>

            <button
              type="submit"
              className="contact-submit-btn"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </>
      )}
    </div>
  );
}
