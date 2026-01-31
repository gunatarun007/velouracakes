import { useParallax } from '../hooks/useReveal';
import './Hero.css';

export default function Hero() {
    const parallaxRef = useParallax(0.3);

    return (
        <section className="hero">
            {/* Background Image with Parallax */}
            <div className="hero-bg" ref={parallaxRef}>
                <div className="hero-overlay" />
            </div>

            {/* Content */}
            <div className="hero-content container">
                <span className="hero-label">Est. 2014 · Artisan Bakery</span>

                <h1 className="hero-title">
                    Crafted with Patience.
                    <br />
                    <em>Served with Pride.</em>
                </h1>

                <p className="hero-tagline">
                    Where every creation tells a story of tradition, passion, and the finest ingredients.
                </p>

                <div className="hero-cta">
                    <a href="#creations" className="btn btn-light">
                        Discover Our Creations
                    </a>
                </div>
            </div>

            {/* Scroll Indicator - Elegant Mouse Icon */}
            <div className="hero-scroll">
                <div className="scroll-mouse">
                    <div className="scroll-wheel"></div>
                </div>
                <svg className="scroll-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 5v14M19 12l-7 7-7-7" />
                </svg>
            </div>
        </section>
    );
}
