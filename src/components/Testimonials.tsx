import { useState, useEffect, useCallback } from 'react';
import { Reveal } from '../hooks/useReveal';
import './Testimonials.css';

const testimonials = [
    {
        id: 1,
        name: 'Priya Sharma',
        role: 'Birthday Celebration',
        content: 'The chocolate cake was absolutely divine! It was the highlight of my daughter\'s birthday. Everyone asked where we ordered it from. Definitely ordering again!',
        rating: 5,
        avatar: '👩',
    },
    {
        id: 2,
        name: 'Rahul Mehta',
        role: 'Anniversary Surprise',
        content: 'Ordered a custom red velvet cake for our anniversary. The attention to detail was outstanding. My wife was in tears! Thank you for making our day special.',
        rating: 5,
        avatar: '👨',
    },
    {
        id: 3,
        name: 'Ananya Reddy',
        role: 'Wedding Cake',
        content: 'Veloura created the most stunning three-tier wedding cake. Not only did it look gorgeous, but it tasted incredible. Our guests are still talking about it!',
        rating: 5,
        avatar: '👰',
    },
    {
        id: 4,
        name: 'Vikram Singh',
        role: 'Corporate Event',
        content: 'We ordered 50 cupcakes for our office party. Professional service, on-time delivery, and the flavors were amazing. Will definitely be our go-to for events!',
        rating: 5,
        avatar: '🧔',
    },
    {
        id: 5,
        name: 'Meera Patel',
        role: 'Baby Shower',
        content: 'The custom baby shower cake exceeded all expectations. The pastel colors and the delicate decorations were perfect. Absolutely recommend Veloura!',
        rating: 5,
        avatar: '🤰',
    },
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, []);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }, []);

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
        setIsAutoPlaying(false);
    };

    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, [isAutoPlaying, nextSlide]);

    return (
        <section className="testimonials-section section">
            <div className="container">
                <Reveal>
                    <div className="section-header text-center">
                        <span className="section-tag">Love Notes</span>
                        <h2 className="section-title">What Our Customers Say</h2>
                        <p className="section-subtitle">
                            Real stories from real celebrations. Join thousands of happy customers.
                        </p>
                    </div>
                </Reveal>

                <div className="testimonials-carousel">
                    {/* Social Proof Counter */}
                    <div className="social-proof">
                        <div className="proof-item">
                            <span className="proof-number">10,000+</span>
                            <span className="proof-label">Happy Customers</span>
                        </div>
                        <div className="proof-divider" />
                        <div className="proof-item">
                            <span className="proof-number">4.9★</span>
                            <span className="proof-label">Average Rating</span>
                        </div>
                        <div className="proof-divider" />
                        <div className="proof-item">
                            <span className="proof-number">500+</span>
                            <span className="proof-label">5-Star Reviews</span>
                        </div>
                    </div>

                    {/* Carousel Track */}
                    <div className="carousel-container">
                        <div
                            className="carousel-track"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {testimonials.map((testimonial) => (
                                <div key={testimonial.id} className="testimonial-card glass-card">
                                    <div className="testimonial-rating">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <span key={i} className="star">★</span>
                                        ))}
                                    </div>
                                    <blockquote className="testimonial-content">
                                        "{testimonial.content}"
                                    </blockquote>
                                    <div className="testimonial-author">
                                        <span className="author-avatar">{testimonial.avatar}</span>
                                        <div className="author-info">
                                            <strong className="author-name">{testimonial.name}</strong>
                                            <span className="author-role">{testimonial.role}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Navigation Buttons */}
                        <button className="carousel-btn prev" onClick={prevSlide} aria-label="Previous testimonial">
                            ←
                        </button>
                        <button className="carousel-btn next" onClick={nextSlide} aria-label="Next testimonial">
                            →
                        </button>
                    </div>

                    {/* Dots Pagination */}
                    <div className="carousel-dots">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                className={`dot ${index === currentIndex ? 'active' : ''}`}
                                onClick={() => goToSlide(index)}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
