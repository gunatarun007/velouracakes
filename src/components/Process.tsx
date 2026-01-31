import { Reveal } from '../hooks/useReveal';
import './Process.css';

const steps = [
    {
        number: '01',
        title: 'Source',
        description: 'Only the finest ingredients from trusted artisan producers.',
        image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&q=80',
    },
    {
        number: '02',
        title: 'Craft',
        description: 'Time-honored techniques perfected over a decade.',
        image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&q=80',
    },
    {
        number: '03',
        title: 'Present',
        description: 'Every creation arrives as a moment of pure delight.',
        image: 'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=600&q=80',
    },
];

export default function Process() {
    return (
        <section className="process section bg-dark">
            <div className="container">
                {/* Header */}
                <div className="process-header">
                    <Reveal>
                        <span className="section-label">Our Philosophy</span>
                    </Reveal>
                    <Reveal>
                        <h2 className="process-title text-light">
                            Slow Craft,
                            <br />
                            <em>Lasting Impressions</em>
                        </h2>
                    </Reveal>
                    <Reveal>
                        <p className="process-intro">
                            In a world of shortcuts, we choose the long road. Every dough rests
                            overnight. Every cream is churned fresh. Every decoration is placed
                            by hand.
                        </p>
                    </Reveal>
                </div>

                {/* Process Steps Grid */}
                <div className="process-steps">
                    {steps.map((step, index) => (
                        <Reveal key={step.number} delay={index * 150}>
                            <article className="process-step">
                                <div className="step-image">
                                    <img src={step.image} alt={step.title} loading="lazy" />
                                    <div className="step-overlay">
                                        <span className="step-number">{step.number}</span>
                                    </div>
                                </div>
                                <div className="step-content">
                                    <h3 className="step-title">{step.title}</h3>
                                    <p className="step-desc">{step.description}</p>
                                </div>
                            </article>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
