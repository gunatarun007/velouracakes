import { Reveal } from '../hooks/useReveal';
import './Features.css';

const features = [
    {
        icon: '🎨',
        title: '100% Customizable',
        description: 'Design your dream cake with our AI-powered cake builder. Choose flavors, shapes, and decorations.',
    },
    {
        icon: '⚡',
        title: 'Express Delivery',
        description: 'Fresh cakes delivered to your doorstep in under 3 hours. Same-day delivery available.',
    },
    {
        icon: '🌿',
        title: 'Premium Ingredients',
        description: 'We use only the finest organic ingredients. No preservatives, just pure deliciousness.',
    },
    {
        icon: '💝',
        title: 'Made with Love',
        description: 'Every cake is handcrafted by our master bakers with passion and attention to detail.',
    },
];

export default function Features() {
    return (
        <section className="features-section section">
            <div className="container">
                <Reveal>
                    <div className="section-header text-center">
                        <span className="section-tag">Why Veloura</span>
                        <h2 className="section-title">Why Choose Us</h2>
                        <p className="section-subtitle">
                            We don't just bake cakes, we craft unforgettable moments for your celebrations.
                        </p>
                    </div>
                </Reveal>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <Reveal key={index} delay={index * 100}>
                            <div className="feature-card glass-card">
                                <div className="feature-icon">
                                    <span>{feature.icon}</span>
                                </div>
                                <h3 className="feature-title">{feature.title}</h3>
                                <p className="feature-description">{feature.description}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="features-decoration">
                <div className="decoration-blob blob-1" />
                <div className="decoration-blob blob-2" />
            </div>
        </section>
    );
}
