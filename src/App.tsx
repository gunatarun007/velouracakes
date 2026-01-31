import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Creations from './components/Creations';
import Process from './components/Process';
import Quote from './components/Quote';
import Trust from './components/Trust';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import { useReveal } from './hooks/useReveal';
import './styles/global.css';
import './App.css';

function App() {
  const [navState, setNavState] = useState({
    scrolled: false,
    hidden: false,
  });
  const [showSocial, setShowSocial] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Initialize reveal animations
  useReveal();

  // Navbar scroll behavior and social icons visibility
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateNavbar = () => {
      const currentScrollY = window.scrollY;
      const scrolled = currentScrollY > 80;
      const hidden = currentScrollY > lastScrollY && currentScrollY > 300;

      // Show social icons after hero section (approx 100vh)
      const heroHeight = window.innerHeight;
      setShowSocial(currentScrollY > heroHeight * 0.5);

      setNavState({ scrolled, hidden });
      lastScrollY = currentScrollY;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateNavbar);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on scroll
  useEffect(() => {
    if (mobileMenuOpen) {
      const handleScroll = () => setMobileMenuOpen(false);
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [mobileMenuOpen]);

  const navClasses = [
    'navbar',
    navState.scrolled ? 'navbar--scrolled' : '',
    navState.hidden && !mobileMenuOpen ? 'navbar--hidden' : '',
    mobileMenuOpen ? 'navbar--menu-open' : '',
  ].filter(Boolean).join(' ');

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="app">
      {/* Grain Texture Overlay */}
      <div className="grain-overlay" aria-hidden="true" />

      {/* Floating Social Icons - Only Icons */}
      <div className={`social-float ${showSocial ? 'social-float--visible' : ''}`}>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-float-icon" aria-label="Instagram">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="2" y="2" width="20" height="20" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="18" cy="6" r="1.5" fill="currentColor" stroke="none" />
          </svg>
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-float-icon" aria-label="Facebook">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>
        </a>
        <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="social-float-icon" aria-label="WhatsApp">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
        </a>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="mobile-overlay" onClick={closeMobileMenu} />
      )}

      {/* Navigation */}
      <nav className={navClasses}>
        <div className="container navbar-content">
          <a href="/" className="nav-brand">Veloura</a>

          {/* Desktop Nav Links */}
          <div className="nav-links nav-links--desktop">
            <a href="#about" className="nav-link">Our Story</a>
            <a href="#creations" className="nav-link">Creations</a>
            <a href="#" className="nav-link">Visit</a>
            <a href="#" className="nav-link nav-link--cta">Order</a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`nav-toggle ${mobileMenuOpen ? 'nav-toggle--active' : ''}`}
            aria-label="Menu"
            onClick={toggleMobileMenu}
          >
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Nav Links */}
        <div className={`nav-links nav-links--mobile ${mobileMenuOpen ? 'nav-links--open' : ''}`}>
          <a href="#about" className="nav-link" onClick={closeMobileMenu}>Our Story</a>
          <a href="#creations" className="nav-link" onClick={closeMobileMenu}>Creations</a>
          <a href="#" className="nav-link" onClick={closeMobileMenu}>Visit</a>
          <a href="#" className="nav-link nav-link--cta" onClick={closeMobileMenu}>Order</a>
        </div>
      </nav>

      {/* Main Sections */}
      <main>
        <Hero />
        <About />
        <Creations />
        <Process />
        <Quote />
        <Trust />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
