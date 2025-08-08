import React, { useState, useEffect, useRef } from 'react';
import image from './Adobe Express - file.png'
// 1. IMPORT THE BACKGROUND IMAGE:
// Make sure 'wp13050630.webp' is in the same 'src' folder.
import heroBgImage from './wp13050630.webp';


// SVG Icons
const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const ChevronDownIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);


const YoutubeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" stroke="currentColor" strokeWidth="2"/>
    <polygon points="9.75,15.02 15.5,11.75 9.75,8.48" fill="currentColor"/>
  </svg>
);

const EmailIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2"/>
    <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

const PhoneIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2"/>
  </svg>
);


const CloseModalIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const App = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const heroRef = useRef();
  const aboutRef = useRef();
  const performancesRef = useRef();
  const pressRef = useRef();
  const contactRef = useRef();

  // Set page title and favicon
  useEffect(() => {
    document.title = "Soubhagya Atiyat";
    
    // Create a stylish "SA" SVG logo for the favicon
    const saLogoSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100"><rect width="100" height="100" rx="20" fill="#D4AF37"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Playfair Display, serif" font-size="55" fill="white">SA</text></svg>`;
    const faviconHref = `data:image/svg+xml;base64,${btoa(saLogoSvg)}`;

    const favicon = document.querySelector('link[rel="icon"]');
    if (favicon) {
      favicon.href = faviconHref;
      favicon.type = 'image/svg+xml';
    } else {
      const newFavicon = document.createElement('link');
      newFavicon.rel = 'icon';
      newFavicon.type = 'image/svg+xml';
      newFavicon.href = faviconHref;
      document.head.appendChild(newFavicon);
    }
  }, []);

  // Add CSS styles to head
  useEffect(() => {
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap');

      /* CSS Variables for Indian Classical Theme */
      .light-theme {
        --primary-color: #D4AF37;
        --secondary-color: #B8860B;
        --accent-color: #CD853F;
        --tertiary-color: #8B4513;
        --background-color: #FFF8DC;
        --surface-color: #FFFAF0;
        --card-color: #F5F5DC;
        --text-primary: #2F1B14;
        --text-secondary: #5D4E37;
        --text-muted: #8B7D6B;
        --border-color: #DDD6C0;
        --shadow-color: rgba(212, 175, 55, 0.15);
        --gradient-primary: linear-gradient(135deg, #FFF8DC 0%, #F5F5DC 50%, #DDBF94 100%);
        --gradient-accent: linear-gradient(135deg, #D4AF37 0%, #B8860B 100%);
        --overlay-color: rgba(255, 248, 220, 0.85);
      }

      .dark-theme {
        --primary-color: #FF6B35;
        --secondary-color: #F7931E;
        --accent-color: #FFD700;
        --tertiary-color: #8B0000;
        --background-color: #0F0A07;
        --surface-color: #1A0F0A;
        --card-color: #2D1810;
        --text-primary: #F5DEB3;
        --text-secondary: #DDD6C0;
        --text-muted: #B8860B;
        --border-color: #4A2C1A;
        --shadow-color: rgba(255, 107, 53, 0.2);
        --gradient-primary: linear-gradient(135deg, #0F0A07 0%, #1A0F0A 50%, #2D1810 100%);
        --gradient-accent: linear-gradient(135deg, #FF6B35 0%, #F7931E 100%);
        --overlay-color: rgba(15, 10, 7, 0.85);
      }

      /* Global Styles */
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      html {
        scroll-behavior: smooth;
      }

      body {
        font-family: 'Crimson Text', serif;
        line-height: 1.7;
        color: var(--text-primary);
        background: var(--background-color);
        transition: all 0.3s ease;
        overflow-x: hidden;
      }

      .app {
        transition: all 0.3s ease;
        min-height: 100vh;
      }

      .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 2rem;
      }

      /* Typography */
      h1, h2, h3, h4, h5, h6 {
        font-family: 'Playfair Display', serif;
        font-weight: 600;
        line-height: 1.2;
        margin-bottom: 1rem;
        color: var(--primary-color);
      }

      h1 {
        font-size: clamp(2.5rem, 5vw, 4rem);
        font-weight: 700;
      }

      h2 {
        font-size: clamp(2rem, 4vw, 3rem);
      }

      h3 {
        font-size: clamp(1.5rem, 3vw, 2rem);
      }

      p {
        margin-bottom: 1rem;
        color: var(--text-secondary);
        font-weight: 400;
      }

      /* Floating Navigation */
      .navbar {
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 1000;
        background: var(--overlay-color);
        backdrop-filter: blur(20px);
        border: 2px solid var(--border-color);
        border-radius: 50px;
        padding: 0.5rem 2rem;
        box-shadow: 0 10px 30px var(--shadow-color);
        transition: all 0.3s ease;
        max-width: 90vw;
      }

      .navbar:hover {
        box-shadow: 0 15px 40px var(--shadow-color);
        transform: translateX(-50%) translateY(-2px);
      }

      .nav-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.5rem 0;
      }

      .nav-logo h2 {
        color: var(--primary-color);
        margin: 0;
        font-size: 1.3rem;
        text-shadow: 0 2px 4px var(--shadow-color);
      }

      .nav-menu {
        display: flex;
        gap: 1.5rem;
        align-items: center;
      }

      .nav-link {
        background: none;
        border: none;
        color: var(--text-primary);
        font-size: 0.95rem;
        font-weight: 400;
        cursor: pointer;
        padding: 0.5rem 1rem;
        border-radius: 25px;
        transition: all 0.3s ease;
        text-decoration: none;
        position: relative;
        overflow: hidden;
      }

      .nav-link::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: var(--gradient-accent);
        transition: left 0.3s ease;
        z-index: -1;
        border-radius: 25px;
      }

      .nav-link:hover::before {
        left: 0;
      }

      .nav-link:hover {
        color: white;
        transform: translateY(-1px);
      }

      .nav-controls {
        display: flex;
        align-items: center;
        gap: 1rem;
      }

      /* Theme Toggle */
      .theme-toggle {
        position: relative;
      }

      #theme-switch {
        display: none;
      }

      .theme-switch {
        display: block;
        width: 50px;
        height: 25px;
        background: var(--border-color);
        border-radius: 25px;
        cursor: pointer;
        position: relative;
        transition: all 0.3s ease;
        border: 2px solid var(--primary-color);
      }

      .theme-slider {
        position: absolute;
        top: 1px;
        left: 1px;
        width: 21px;
        height: 21px;
        background: var(--primary-color);
        border-radius: 50%;
        transition: all 0.3s ease;
        box-shadow: 0 2px 4px var(--shadow-color);
      }

      #theme-switch:checked + .theme-switch {
        background: var(--accent-color);
      }

      #theme-switch:checked + .theme-switch .theme-slider {
        transform: translateX(23px);
        background: var(--tertiary-color);
      }

      /* Mobile Menu */
      .mobile-menu-btn {
        display: none;
        background: none;
        border: 2px solid var(--primary-color);
        color: var(--primary-color);
        cursor: pointer;
        padding: 0.5rem;
        border-radius: 50%;
        transition: all 0.3s ease;
      }

      .mobile-menu-btn:hover {
        background: var(--primary-color);
        color: white;
      }

      @media (max-width: 768px) {
        .navbar {
          top: 10px;
          padding: 0.5rem 1rem;
          transform: none;
          left: 10px;
          right: 10px;
          max-width: none;
          border-radius: 15px;
        }

        .navbar:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 40px var(--shadow-color);
        }

        .mobile-menu-btn {
          display: block;
        }

        .nav-menu {
          position: fixed;
          top: 80px;
          left: 50%;
          transform: translateX(-50%);
          background: var(--overlay-color);
          backdrop-filter: blur(20px);
          border: 2px solid var(--border-color);
          border-radius: 20px;
          width: 90vw;
          max-width: 300px;
          flex-direction: column;
          align-items: center;
          padding: 2rem 0;
          transition: all 0.3s ease;
          opacity: 0;
          visibility: hidden;
        }

        .nav-menu.active {
          opacity: 1;
          visibility: visible;
        }

        .nav-link {
          width: 80%;
          text-align: center;
          padding: 1rem;
        }

        .nav-logo h2 {
          font-size: 1.1rem;
        }
      }

      /* Hero Section */
      .hero {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        padding-top: 120px;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      }

      .hero::before {
        content: '';
        position: absolute;
        top: 0; left: 0; right: 0; bottom: 0;
        background-color: var(--background-color);
        opacity: 0.7;
        z-index: 0;
      }

      .hero-content {
        position: relative;
        z-index: 1;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4rem;
        align-items: center;
        max-width: 1200px;
        width: 100%;
        padding: 0 2rem;
      }

      .hero-text {
        text-align: left;
      }

      .hero-text h1 {
        background: var(--gradient-accent);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        margin-bottom: 1rem;
        animation: fadeInUp 1s ease-out;
        text-shadow: 2px 2px 4px var(--shadow-color);
      }

      .hero-subtitle {
        font-size: 1.5rem;
        color: var(--secondary-color);
        font-style: italic;
        margin-bottom: 1rem;
        animation: fadeInUp 1s ease-out 0.2s both;
        font-family: 'Playfair Display', serif;
      }

      .hero-location {
        font-size: 1.1rem;
        color: var(--text-muted);
        margin-bottom: 1.5rem;
        animation: fadeInUp 1s ease-out 0.3s both;
      }

      .hero-description {
        font-size: 1.1rem;
        color: var(--text-secondary);
        max-width: 400px;
        animation: fadeInUp 1s ease-out 0.4s both;
        line-height: 1.6;
      }

      .hero-image {
        display: flex;
        justify-content: center;
        animation: fadeInRight 1s ease-out 0.6s both;
      }

      .hero-image img {
        width: 100%;
        max-width: 400px;
        height: auto;
        border-radius: 20px;
        box-shadow: 0 20px 50px var(--shadow-color);
        transition: transform 0.3s ease;
      }

      .hero-image img:hover {
        transform: scale(1.02) rotateY(5deg);
      }

      .scroll-indicator {
        position: absolute;
        bottom: 2rem;
        left: 50%;
        transform: translateX(-50%);
        color: var(--primary-color);
        animation: bounce 2s infinite;
      }

      @media (max-width: 768px) {
        .hero {
          padding-top: 100px;
        }

        .hero-content {
          grid-template-columns: 1fr;
          text-align: center;
          gap: 2rem;
        }

        .hero-text {
          text-align: center;
        }
        
        /* Mobile-specific hero text color for readability */
        .hero-text h1 {
          background: none;
          -webkit-background-clip: unset;
          background-clip: unset;
          color: var(--text-primary);
          -webkit-text-fill-color: initial;
          text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
        }
      }

      /* Section Styles */
      section {
        padding: 6rem 0;
      }

      .section-title {
        text-align: center;
        color: var(--primary-color);
        margin-bottom: 3rem;
        position: relative;
      }

      .section-title::after {
        content: '';
        position: absolute;
        bottom: -15px;
        left: 50%;
        transform: translateX(-50%);
        width: 80px;
        height: 4px;
        background: var(--gradient-accent);
        border-radius: 2px;
      }

      /* About Section */
      .about {
        background: var(--surface-color);
        position: relative;
      }

      .about-content {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4rem;
        align-items: start;
      }

      .about-text {
        font-size: 1.1rem;
        line-height: 1.8;
      }

      .about-text p {
        margin-bottom: 1.5rem;
      }

      /* Education Timeline */
      .education-timeline {
        position: relative;
        padding-left: 2rem;
      }

      .education-timeline::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 3px;
        background: var(--gradient-accent);
        border-radius: 2px;
      }

      .education-item {
        position: relative;
        margin-bottom: 2rem;
        padding-left: 2rem;
        background: var(--card-color);
        border-radius: 10px;
        padding: 1.5rem;
        box-shadow: 0 5px 15px var(--shadow-color);
        border-left: 4px solid var(--primary-color);
      }

      .education-item::before {
        content: '';
        position: absolute;
        left: -8px;
        top: 20px;
        width: 16px;
        height: 16px;
        background: var(--primary-color);
        border-radius: 50%;
        border: 3px solid var(--surface-color);
        box-shadow: 0 2px 4px var(--shadow-color);
      }

      .education-item h4 {
        color: var(--primary-color);
        margin-bottom: 0.5rem;
        font-size: 1.2rem;
      }

      .education-item p {
        color: var(--text-muted);
        font-size: 0.95rem;
        margin-bottom: 0.5rem;
      }

      .guru-name {
        color: var(--secondary-color);
        font-style: italic;
        font-weight: 600;
      }

      @media (max-width: 768px) {
        .about-content {
          grid-template-columns: 1fr;
          gap: 2rem;
        }
      }

      /* Performances Section */
      .performances {
        background: var(--background-color);
      }

      .performances-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4rem;
        align-items: start;
      }

      .performance-category {
        background: var(--surface-color);
        padding: 2rem;
        border-radius: 15px;
        box-shadow: 0 10px 30px var(--shadow-color);
        border: 2px solid var(--border-color);
      }

      .category-title {
        color: var(--secondary-color);
        margin-bottom: 2rem;
        text-align: center;
        font-size: 1.8rem;
        position: relative;
      }

      .category-title::after {
        content: '';
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
        width: 60px;
        height: 2px;
        background: var(--accent-color);
        border-radius: 1px;
      }

      .performance-list {
        list-style: none;
        padding: 0;
      }

      .performance-item {
        font-size: 1.1rem;
        color: var(--text-secondary);
        padding: 1rem;
        border-bottom: 1px solid var(--border-color);
        transition: all 0.3s ease;
      }

      .performance-item:last-child {
        border-bottom: none;
      }

      .performance-item:hover {
        background: var(--card-color);
        border-left: 4px solid var(--primary-color);
        transform: translateX(5px);
      }

      @media (max-width: 768px) {
        .performances-grid {
          grid-template-columns: 1fr;
          gap: 2rem;
        }
      }


      /* Gallery Section */
      .gallery {
        background: var(--surface-color);
      }

      .gallery-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 1.5rem;
      }

      .gallery-item {
        position: relative;
        overflow: hidden;
        border-radius: 15px;
        cursor: pointer;
        aspect-ratio: 3/4;
        border: 3px solid var(--border-color);
        transition: all 0.3s ease;
      }

      .gallery-item:hover {
        border-color: var(--primary-color);
        transform: scale(1.02);
      }

      .gallery-item img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;
      }

      .gallery-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: var(--gradient-accent);
        background: linear-gradient(45deg, var(--primary-color)80, var(--secondary-color)80);
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        opacity: 0;
        transition: opacity 0.3s ease;
        font-weight: 600;
      }

      .gallery-item:hover img {
        transform: scale(1.1);
      }

      .gallery-item:hover .gallery-overlay {
        opacity: 1;
      }

      /* Press Section */
      .press {
        background: var(--background-color);
      }

      .awards-section {
        margin-bottom: 4rem;
      }

      .awards-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 2rem;
        margin-top: 2rem;
      }

      .award-item {
        background: var(--surface-color);
        padding: 2rem;
        border-radius: 15px;
        text-align: center;
        box-shadow: 0 8px 25px var(--shadow-color);
        transition: all 0.3s ease;
        border: 2px solid var(--border-color);
        position: relative;
        overflow: hidden;
      }

      .award-item::before {
        content: '';
        position: absolute;
        top: -2px;
        left: -2px;
        right: -2px;
        height: 4px;
        background: var(--gradient-accent);
      }

      .award-item:hover {
        transform: translateY(-5px);
        border-color: var(--primary-color);
        box-shadow: 0 15px 35px var(--shadow-color);
      }

      .award-item h4 {
        color: var(--primary-color);
        margin-bottom: 1rem;
        font-size: 1.3rem;
      }

      .award-item p {
        color: var(--text-secondary);
        font-size: 1rem;
        font-weight: 500;
      }

      /* Testimonials */
      .testimonials {
        text-align: center;
      }

      .testimonial-carousel {
        max-width: 800px;
        margin: 0 auto;
        padding: 3rem;
        background: var(--surface-color);
        border-radius: 20px;
        box-shadow: 0 15px 40px var(--shadow-color);
        border: 2px solid var(--border-color);
        position: relative;
      }

      .testimonial-carousel::before {
        content: '"';
        position: absolute;
        top: -10px;
        left: 30px;
        font-size: 4rem;
        color: var(--primary-color);
        font-family: 'Playfair Display', serif;
      }

      .testimonial-content blockquote {
        font-size: 1.3rem;
        font-style: italic;
        color: var(--text-secondary);
        margin-bottom: 2rem;
        line-height: 1.6;
        font-family: 'Playfair Display', serif;
      }

      .testimonial-content cite {
        color: var(--primary-color);
        font-weight: 600;
        display: block;
        font-size: 1.1rem;
      }

      .testimonial-content cite span {
        display: block;
        color: var(--text-muted);
        font-size: 0.95rem;
        font-weight: 400;
        margin-top: 0.5rem;
      }

      .testimonial-indicators {
        display: flex;
        justify-content: center;
        gap: 1rem;
        margin-top: 2rem;
      }

      .indicator {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: var(--border-color);
        border: 2px solid var(--primary-color);
        cursor: pointer;
        transition: all 0.3s ease;
      }

      .indicator.active {
        background: var(--primary-color);
        transform: scale(1.2);
      }

      /* Contact Section */
      .contact {
        background: var(--surface-color);
      }

      .contact-content {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4rem;
        align-items: start;
      }

      .contact-info h3 {
        color: var(--primary-color);
        margin-bottom: 1rem;
        font-size: 1.5rem;
      }

      .contact-methods {
        margin: 2rem 0;
      }

      .contact-method {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 1rem;
        color: var(--text-secondary);
        font-size: 1.1rem;
        padding: 1rem;
        background: var(--card-color);
        border-radius: 10px;
        border-left: 4px solid var(--primary-color);
        transition: all 0.3s ease;
      }

      .contact-method:hover {
        transform: translateX(5px);
        box-shadow: 0 5px 15px var(--shadow-color);
      }

      .social-links {
        display: flex;
        gap: 1rem;
        margin-top: 2rem;
        justify-content: center;
      }

      .social-link {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 60px;
        height: 60px;
        background: var(--gradient-accent);
        border-radius: 50%;
        color: white;
        text-decoration: none;
        transition: all 0.3s ease;
        border: 3px solid var(--primary-color);
        box-shadow: 0 5px 15px var(--shadow-color);
      }

      .social-link:hover {
        transform: translateY(-3px) scale(1.1);
        box-shadow: 0 10px 25px var(--shadow-color);
      }

      /* Contact Form */
      .contact-form {
        background: var(--background-color);
        padding: 2.5rem;
        border-radius: 20px;
        border: 2px solid var(--border-color);
        box-shadow: 0 10px 30px var(--shadow-color);
      }

      .form-group {
        margin-bottom: 1.5rem;
      }

      .form-group label {
        display: block;
        margin-bottom: 0.5rem;
        color: var(--primary-color);
        font-weight: 600;
        font-size: 1.1rem;
      }

      .form-group input,
      .form-group textarea {
        width: 100%;
        padding: 1rem;
        border: 2px solid var(--border-color);
        border-radius: 10px;
        background: var(--surface-color);
        color: var(--text-primary);
        font-family: inherit;
        font-size: 1rem;
        transition: all 0.3s ease;
      }

      .form-group input:focus,
      .form-group textarea:focus {
        outline: none;
        border-color: var(--primary-color);
        box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.1);
      }

      .submit-btn {
        background: var(--gradient-accent);
        color: white;
        border: none;
        padding: 1rem 2.5rem;
        border-radius: 30px;
        font-size: 1.1rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 5px 15px var(--shadow-color);
        text-transform: uppercase;
        letter-spacing: 1px;
      }

      .submit-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 25px var(--shadow-color);
      }

      @media (max-width: 768px) {
        .contact-content {
          grid-template-columns: 1fr;
          gap: 2rem;
        }
      }

      /* Footer */
      .footer {
        background: var(--primary-color);
        color: white;
        text-align: center;
        padding: 2rem 0;
        position: relative;
        overflow: hidden;
      }

      .footer::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: var(--gradient-accent);
      }

      .footer p {
        margin-bottom: 0.5rem;
        color: white;
        font-size: 1rem;
      }

      /* Modal */
      .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2000;
        padding: 2rem;
        backdrop-filter: blur(10px);
      }

      .modal-content {
        position: relative;
        max-width: 90vw;
        max-height: 90vh;
      }

      .modal-content img {
        width: 100%;
        height: auto;
        border-radius: 15px;
        border: 3px solid var(--primary-color);
      }

      .modal-close {
        position: absolute;
        top: -50px;
        right: 0;
        background: var(--primary-color);
        border: none;
        color: white;
        cursor: pointer;
        padding: 0.5rem;
        border-radius: 50%;
        transition: all 0.3s ease;
      }

      .modal-close:hover {
        transform: scale(1.1);
        background: var(--secondary-color);
      }

      /* Animations */
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes fadeInRight {
        from {
          opacity: 0;
          transform: translateX(30px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }

      @keyframes bounce {
        0%, 20%, 50%, 80%, 100% {
          transform: translateX(-50%) translateY(0);
        }
        40% {
          transform: translateX(-50%) translateY(-10px);
        }
        60% {
          transform: translateX(-50%) translateY(-5px);
        }
      }

      .animate-on-scroll {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease;
      }

      .animate-on-scroll.animate-in {
        opacity: 1;
        transform: translateY(0);
      }

      /* Responsive Design */
      @media (max-width: 480px) {
        .container {
          padding: 0 1rem;
        }

        .hero-content {
          padding: 0 1rem;
        }

        .nav-container {
          padding: 0.5rem 0;
        }

        section {
          padding: 4rem 0;
        }

        .performances-grid,
        .gallery-grid {
          grid-template-columns: 1fr;
        }

        .contact-form {
          padding: 1.5rem;
        }
      }

      /* PDF & Print Styles */
      @media print {
        body {
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
        }

        * {
          box-shadow: none !important;
          text-shadow: none !important;
          transition: none !important;
          animation: none !important;
        }

        /* Hide non-essential elements for the PDF */
        .nav-controls, .mobile-menu-btn, .scroll-indicator, .submit-btn, .modal-overlay, .social-links, .footer .print-instruction {
          display: none !important;
        }

        /* Make the navbar a static header */
        .navbar {
          position: static !important;
          transform: none !important;
          border: none;
          backdrop-filter: none;
        }

        /* Control page flow */
        section {
          padding-top: 2rem;
          padding-bottom: 2rem;
        }

        .award-item, .education-item, .performance-card, .testimonial-carousel {
          page-break-inside: avoid;
        }

        /* Ensure all animated content is visible */
        .animate-on-scroll, .animate-on-scroll.animate-in, .hero-text, .hero-image {
          opacity: 1 !important;
          transform: none !important;
        }

        /* Force gradient text to render correctly */
        .hero-text h1 {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
            background: var(--gradient-accent) !important;
            -webkit-background-clip: text !important;
            background-clip: text !important;
            -webkit-text-fill-color: transparent !important;
        }

        img {
          max-width: 100% !important;
          page-break-inside: avoid;
        }

        .hero-content, .about-content, .contact-content, .awards-grid {
            grid-template-columns: 1fr !important;
        }
      }
    `;
    document.head.appendChild(styleSheet);

    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Testimonial carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  },);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      alert('Thank you for your message! I will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert('Please fill in all fields.');
    }
  };

  const educationJourney = [
    {
      title: "M.A in Mohiniyattam",
      institution: "Sree Shankaracharya University of Sanskrit, Kalady",
      status: "Currently Pursuing",
      description: "Advanced studies in the classical dance form of Mohiniyattam"
    },
    {
      title: "B.A in Mohiniyattam with Bharathanatyam",
      institution: "Kerala Kalamandalam Deemed to be University for Arts and Culture",
      status: "Completed",
      description: "Comprehensive education in both Mohiniyattam and Bharathanatyam"
    },
    {
      title: "Mohiniyattam Training",
      institution: "Under Guru Kalamandalam Husnabhanu",
      status: "13 Years",
      description: "Intensive traditional training in the graceful art of Mohiniyattam"
    },
    {
      title: "Bharathanatyam Training",
      institution: "Under Guru Natyakalavipanchi Shafeekudeen and Shrimathi Shabhana Shafeekudeen",
      status: "13 Years",
      description: "Classical training in the divine art of Bharathanatyam"
    }
  ];

  const bharathanatyamPerformances = [
    "All India Sai Samaj, Mylapore, Chennai",
    "Chinnamelam Festival by Thanjavur Heritage Arts and Cultural Academy, Palace Devasthanam",
    "Nrithyothsaaha South Zonal Competition",
    "Annual Dance Competition by Omkara Nada Brahmam Trust Chennai"
  ];

  const mohiniyattamPerformances = [
    "Koothambalam, Kerala Kalamandalam Deemed to be University for Arts and Culture",
    "Navaratri Mahotsav at Urakathamma Thiruvadi Temple",
    "Shivaratri Mahotsav at Sree Vadakkumnathan Temple"
  ];



  const testimonials = [
    {
      text: "Sree Soubhagya's performances showcase exceptional mastery in both Mohiniyattam and Bharathanatyam, bringing grace and spiritual depth to every movement.",
      author: "Kerala Kalamandalam",
      role: "Prestigious Arts Institution"
    },
    {
      text: "A rising star in Indian classical dance, her dedication to both forms reflects the true spirit of artistic excellence and cultural preservation.",
      author: "Dance Critics Guild",
      role: "Cultural Review Board"
    },
    {
      text: "Her performances transcend mere technique, embodying the divine essence that makes classical Indian dance a spiritual journey.",
      author: "Temple Arts Committee",
      role: "Traditional Performance Venues"
    }
  ];

  return (
    <div className={`app ${isDark ? 'dark-theme' : 'light-theme'}`}>
      {/* Floating Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <h2>Sree Soubhagya</h2>
          </div>

          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <button className="nav-link" onClick={() => scrollToSection(heroRef)}>Home</button>
            <button className="nav-link" onClick={() => scrollToSection(aboutRef)}>About</button>
            <button className="nav-link" onClick={() => scrollToSection(performancesRef)}>Performances</button>
            <button className="nav-link" onClick={() => scrollToSection(pressRef)}>Awards</button>
            <button className="nav-link" onClick={() => scrollToSection(contactRef)}>Contact</button>
          </div>

          <div className="nav-controls">
            <div className="theme-toggle">
              <input
                type="checkbox"
                id="theme-switch"
                checked={isDark}
                onChange={() => setIsDark(!isDark)}
              />
              <label htmlFor="theme-switch" className="theme-switch">
                <span className="theme-slider"></span>
              </label>
            </div>

            <button
              className="mobile-menu-btn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </nav>

      {/* 2. APPLY THE BACKGROUND IMAGE VIA INLINE STYLE */}
      <section ref={heroRef} className="hero" style={{ backgroundImage: `url(${heroBgImage})` }}>
        <div className="hero-content">
          <div className="hero-text animate-on-scroll">
            <h1>Sree Soubhagya Gouri Atiyat</h1>
            <p className="hero-subtitle">Classical Dancer</p>
            <p className="hero-location">📍 Kerala, India</p>
            <p className="hero-description">
              Dedicated practitioner of Mohiniyattam and Bharathanatyam with 13 years of intensive training under renowned gurus, preserving the eternal essence of Indian classical dance traditions.
            </p>
          </div>
          <div className="hero-image animate-on-scroll">
            <img
              src={image}
              alt="Sree Soubhagya Gouri Atiyat"
            />
          </div>
        </div>
        <div className="scroll-indicator">
          <ChevronDownIcon />
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="about">
        <div className="container">
          <h2 className="section-title animate-on-scroll">About</h2>
          <div className="about-content">
            <div className="about-text animate-on-scroll">
              <p>
                Sree Soubhagya Gouri Atiyat is a dedicated classical dancer with over 13 years of intensive training in both Mohiniyattam and Bharathanatyam. Her artistic journey reflects years of discipline and deep-rooted learning under eminent gurus.
              </p>
              <p>
                Currently pursuing her M.A in Mohiniyattam from Sree Shankaracharya University of Sanskrit, she continues to enrich her practice through stage experiences across prestigious platforms. Her performances embody the divine grace of Mohiniyattam and the powerful expressions of Bharathanatyam.
              </p>
              <p>
                Based in Kerala, the cultural heartland of India, she actively performs and contributes to preserving these ancient art forms while bringing contemporary relevance to classical compositions.
              </p>
            </div>
            <div className="dance-journey animate-on-scroll">
              <h3>Education & Training</h3>
              <div className="education-timeline">
                {educationJourney.map((item, index) => (
                  <div key={index} className={`education-item animate-on-scroll`} style={{animationDelay: `${index * 0.2}s`}}>
                    <h4>{item.title}</h4>
                    <p><strong>{item.institution}</strong></p>
                    <p className="guru-name">{item.status}</p>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performances Section */}
      <section ref={performancesRef} className="performances">
        <div className="container">
          <h2 className="section-title animate-on-scroll">Selected Performances</h2>
          <div className="performances-grid">
            <div className="performance-category animate-on-scroll">
              <h3 className="category-title">Bharathanatyam</h3>
              <ul className="performance-list">
                {bharathanatyamPerformances.map((performance, index) => (
                  <li key={index} className="performance-item">{performance}</li>
                ))}
              </ul>
            </div>
            <div className="performance-category animate-on-scroll">
              <h3 className="category-title">Mohiniyattam</h3>
              <ul className="performance-list">
                {mohiniyattamPerformances.map((performance, index) => (
                  <li key={index} className="performance-item">{performance}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Press & Recognition Section */}
      <section ref={pressRef} className="press">
        <div className="container">
          <h2 className="section-title animate-on-scroll">Awards & Recognition</h2>

          <div className="awards-section animate-on-scroll">
            <div className="awards-grid">
              <div className="award-item">
                <h4>Yuva Nrithya Prathiba Award</h4>
                <p>Nrithyothsaaha South Zonal Competition</p>
              </div>
              <div className="award-item">
                <h4>First Prize</h4>
                <p>Nrithyothsaaha South Zonal Competition</p>
              </div>
              <div className="award-item">
                <h4>Third Prize</h4>
                <p>Omkara Nada Brahmam Trust, Chennai</p>
              </div>
            </div>
          </div>


            </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="contact">
        <div className="container">
          <h2 className="section-title animate-on-scroll">Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info animate-on-scroll">
              <h3>Let's Connect</h3>
              <p>Available for performances, workshops, and collaborations.</p>

              <div className="contact-methods">
                <div className="contact-method">
                  <EmailIcon />
                  <span>g18atiyat@gmail.com</span>
                </div>
                <div className="contact-method">
                  <PhoneIcon />
                  <span>+91 62386 93253</span>
                </div>
              </div>

              <div className="social-links">
                <a href="https://www.youtube.com/@GouriAtiyat" target="_blank" rel="noopener noreferrer" className="social-link">
                  <YoutubeIcon />
                </a>
              </div>
            </div>

            <div className="contact-form animate-on-scroll">
              <form onSubmit={handleFormSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    rows="5"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="submit-btn">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Sree Soubhagya Gouri Atiyat. All rights reserved.</p>
          <p>Preserving the eternal essence of Indian classical dance.</p>
          <p className="print-instruction" style={{fontSize: '0.8rem', opacity: 0.7, marginTop: '1rem'}}>
            To save this page as a PDF, use your browser's Print function (Ctrl/Cmd + P) and select "Save as PDF".
          </p>
        </div>
      </footer>

      {/* Image Modal */}
      {selectedImage && (
        <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedImage(null)}>
              <CloseModalIcon />
            </button>
            <img src={selectedImage} alt="Gallery fullsize" />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;