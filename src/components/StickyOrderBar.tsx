import { useState, useEffect } from 'react';
import './StickyOrderBar.css';

interface StickyOrderBarProps {
    cartCount: number;
    onOrderClick: () => void;
}

export default function StickyOrderBar({ cartCount, onOrderClick }: StickyOrderBarProps) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling past hero section
            setIsVisible(window.scrollY > 600);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* Sticky Bottom Bar - Mobile */}
            <div className={`sticky-order-bar ${isVisible ? 'visible' : ''}`}>
                <div className="bar-content">
                    <div className="bar-info">
                        <span className="bar-title">Veloura Cakes</span>
                        <span className="bar-subtitle">Express delivery in 3 hrs</span>
                    </div>

                    <button className="bar-cta" onClick={onOrderClick}>
                        {cartCount > 0 && (
                            <span className="cart-badge">{cartCount}</span>
                        )}
                        <span>Order Now</span>
                        <span className="arrow">→</span>
                    </button>
                </div>
            </div>

            {/* WhatsApp Floating Button */}
            <a
                href="https://wa.me/919999999999?text=Hi, I'd like to order a cake!"
                className={`whatsapp-float ${isVisible ? 'visible' : ''}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
            >
                <svg viewBox="0 0 32 32" width="28" height="28" fill="currentColor">
                    <path d="M16 2C8.28 2 2 8.28 2 16c0 2.66.74 5.14 2.02 7.26L2 30l6.98-2.04A13.93 13.93 0 0016 30c7.72 0 14-6.28 14-14S23.72 2 16 2zm0 25.5c-2.38 0-4.6-.64-6.52-1.74l-.46-.28-4.16 1.22 1.2-4.02-.3-.48A11.47 11.47 0 014.5 16c0-6.35 5.15-11.5 11.5-11.5S27.5 9.65 27.5 16 22.35 27.5 16 27.5zm6.36-8.58c-.34-.17-2.02-1-2.34-1.12-.32-.1-.54-.17-.78.17-.22.34-.88 1.1-1.08 1.34-.2.22-.4.26-.74.08-.34-.17-1.44-.54-2.74-1.7-1.02-.9-1.7-2.02-1.9-2.36-.2-.34-.02-.52.16-.7.16-.16.34-.4.52-.6.16-.2.22-.34.34-.56.1-.22.06-.42-.02-.6-.1-.16-.78-1.88-1.06-2.56-.28-.68-.56-.58-.78-.6h-.66c-.22 0-.6.08-.9.42-.32.34-1.2 1.16-1.2 2.84s1.22 3.28 1.4 3.52c.16.22 2.42 3.7 5.86 5.18.82.36 1.46.56 1.96.72.82.26 1.58.22 2.16.14.66-.1 2.02-.82 2.32-1.62.28-.8.28-1.48.2-1.62-.1-.16-.32-.26-.66-.42z" />
                </svg>
            </a>
        </>
    );
}
