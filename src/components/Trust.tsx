import { Reveal } from '../hooks/useReveal';
import './Trust.css';

const stats = [
    { number: '10+', label: 'Years of Excellence' },
    { number: '50K', label: 'Celebrations Crafted' },
    { number: '12', label: 'Master Artisans' },
    { number: '100%', label: 'Natural Ingredients' },
];

export default function Trust() {
    return (
        <section className="trust section bg-cream">
            <div className="container">
                <Reveal>
                    <header className="trust-header">
                        <span className="section-label">Our Legacy</span>
                        <h2 className="trust-title">
                            A Tradition of <em>Trust</em>
                        </h2>
                    </header>
                </Reveal>

                <div className="trust-stats">
                    {stats.map((stat, index) => (
                        <Reveal key={stat.label} delay={index * 100}>
                            <div className="stat-item">
                                <span className="stat-number">{stat.number}</span>
                                <span className="stat-label">{stat.label}</span>
                            </div>
                        </Reveal>
                    ))}
                </div>

                <Reveal>
                    <div className="trust-image" tabIndex={0}>
                        <img
                            src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1400&q=80"
                            srcSet="
                                https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=70 600w,
                                https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1400&q=80 1400w
                            "
                            sizes="(max-width: 768px) 100vw, 1200px"
                            alt="Our bakery team at work"
                            loading="lazy"
                            width="1400"
                            height="800"
                        />
                        {/* Dark overlay on hover */}
                        <div className="trust-overlay">
                            <span className="trust-overlay-text">Est. 2014</span>
                            <h3 className="trust-overlay-title">Veloura Bakery</h3>
                            <p className="trust-overlay-tagline">Where Every Moment Matters</p>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
