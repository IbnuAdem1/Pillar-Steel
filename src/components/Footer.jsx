import { Link } from 'react-router-dom';
import logoImg from '../assets/nav-logo.png';
import { Phone, Mail, MapPin } from 'lucide-react';

const FacebookIcon = () => (
  <svg viewBox="0 0 512 512" fill="currentColor" width="18" height="18" aria-hidden="true">
    <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 448 512" fill="currentColor" width="18" height="18" aria-hidden="true">
    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
  </svg>
);

const TelegramIcon = () => (
  <svg viewBox="0 0 496 512" fill="currentColor" width="18" height="18" aria-hidden="true">
    <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z" />
  </svg>
);

export default function Footer() {
  return (
    <footer>
      {/* Main Footer */}
      <div className="footer">
        <div className="footer-main">
          {/* Logo & Tagline Column */}
          <div className="footer-logo-col">
            <Link to="/">
              <img src={logoImg} alt="Pillar Steel Logo" className="footer-logo" />
            </Link>
            <p className="footer-tagline">We build strength by shaping the future. Work with us.</p>
          </div>

          {/* Useful Links Column */}
          <div>
            <h3 className="footer-col-title">Useful Links</h3>
            <div className="footer-links-cols">
              <div className="footer-links-col">
                <ul className="footer-links-list">
                  <li><Link to="/" className="footer-link">Home</Link></li>
                  <li><Link to="/about" className="footer-link">About Us</Link></li>
                  <li><Link to="/services" className="footer-link">Our Services</Link></li>
                  <li><Link to="/gallery" className="footer-link">Gallery</Link></li>
                  <li><Link to="/contact" className="footer-link">Contact</Link></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Subscribe / Socials Column */}
          <div className="footer-subscribe-col">
            <h3 className="footer-col-title">Subscribe Now</h3>
            <p className="footer-subscribe-text">Don't miss our future updates! Get Subscribed Today!</p>
            <div className="footer-social-icons">
              <a href="#" className="footer-social-icon" aria-label="Facebook">
                <FacebookIcon />
              </a>
              <a href="#" className="footer-social-icon" aria-label="LinkedIn">
                <LinkedInIcon />
              </a>
              <a href="#" className="footer-social-icon" aria-label="Telegram">
                <TelegramIcon />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Info Strip (black bg, white pill) */}
      <div className="footer-contact-strip-wrap">
        <div className="footer-contact-strip">
          <a href="tel:+251930303831" className="footer-contact-item">
            <Phone size={18} color="#FD5D00" />
            <span>+251930303831</span>
          </a>
          <a href="tel:+251973032277" className="footer-contact-item">
            <Phone size={18} color="#FD5D00" />
            <span>+251973032277</span>
          </a>
          <a href="mailto:steelpillar92@gmail.com" className="footer-contact-item">
            <Mail size={18} color="#FD5D00" />
            <span>steelpillar92@gmail.com</span>
          </a>
          <div className="footer-contact-item" style={{ cursor: 'default' }}>
            <MapPin size={18} color="#FD5D00" />
            <span>Chafe Tumma, Tullu Dimtu, Shaggar City</span>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="footer-copyright-bar">
        <p className="footer-copyright-text">
          ©2026 | PillarSteel | All Rights Reserved | 
        </p>
      </div>
    </footer>
  );
}
