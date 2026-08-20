import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Reusable SEO component for client-rendered React SPA.
 * Dynamically updates document title, description, canonical link, and OpenGraph tags per page.
 */
export default function SEO({
  title = 'Steel Supplier in Addis Ababa | Pillar Steel Ethiopia',
  description = 'Leading steel manufacturer in Ethiopia supplying high-grade structural steel pipes, hollow sections (RHS/SHS), custom steel profiles, and precision cutting.',
  image = 'https://pillarsteelethiopia.com/hero-bg.webp',
}) {
  const location = useLocation();
  const canonicalUrl = `https://pillarsteelethiopia.com${location.pathname === '/' ? '' : location.pathname}`;

  useEffect(() => {
    // 1. Update Title
    document.title = title;

    // Helper to update or create meta tags
    const setMetaTag = (attrName, attrValue, content) => {
      let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Helper for canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // 2. Standard Meta Tags
    setMetaTag('name', 'description', description);

    // 3. Open Graph Tags
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:image', image);
    setMetaTag('property', 'og:type', 'website');
    setMetaTag('property', 'og:site_name', 'Pillar Steel Factory');

    // 4. Twitter Card Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', image);
  }, [title, description, image, canonicalUrl]);

  return null;
}
