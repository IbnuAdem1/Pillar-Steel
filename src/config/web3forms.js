/**
 * Web3Forms Configuration
 * Centralized configuration for form submission via Web3Forms
 * 
 * Environment variables:
 * - VITE_WEB3FORMS_ACCESS_KEY: Access key from web3forms.com
 * - VITE_CONTACT_EMAIL: Recipient email address for submissions
 */

const WEB3FORMS_CONFIG = {
  accessKey: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '',
  recipientEmail: import.meta.env.VITE_CONTACT_EMAIL || 'steelpillar92@gmail.com',
  apiEndpoint: 'https://api.web3forms.com/submit',
};

/**
 * Validates that required environment variables are configured
 * @returns {boolean} True if configuration is valid
 */
export const isConfigured = () => {
  return WEB3FORMS_CONFIG.accessKey && WEB3FORMS_CONFIG.accessKey !== '';
};

/**
 * Submits contact form data via Web3Forms
 * @param {Object} formData - Form data object with name, email, phone, subject, message
 * @returns {Promise<Object>} Response from Web3Forms API
 * @throws {Error} If submission fails or configuration is missing
 */
export const submitContactForm = async (formData) => {
  if (!isConfigured()) {
    throw new Error(
      'Web3Forms is not configured. Please set VITE_WEB3FORMS_ACCESS_KEY in .env.local'
    );
  }

  const payload = {
    access_key: WEB3FORMS_CONFIG.accessKey,
    subject: `New Contact Form Submission: ${formData.subject || 'General Inquiry'}`,
    email_to: WEB3FORMS_CONFIG.recipientEmail,
    from_name: formData.name,
    from_email: formData.email,
    phone: formData.phone,
    message: formData.message,
    redirect: false, // Disable redirect, we'll handle response in React
  };

  try {
    const response = await fetch(WEB3FORMS_CONFIG.apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Web3Forms API error: ${response.statusText}`);
    }

    const data = await response.json();

    // Web3Forms returns { success: true } on successful submission
    if (!data.success) {
      throw new Error(data.message || 'Form submission failed');
    }

    return data;
  } catch (error) {
    // Re-throw with clear messaging
    throw new Error(`Failed to send message: ${error.message}`);
  }
};

export default WEB3FORMS_CONFIG;
