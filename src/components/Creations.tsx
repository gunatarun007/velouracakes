import { Reveal } from '../hooks/useReveal';
import './Creations.css';

const creations = [
    {
        id: 1,
        name: 'Dark Chocolate Truffle',
        description: 'Belgian chocolate, Madagascar vanilla, edible gold',
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80',
    },
    {
        id: 2,
        name: 'Seasonal Berry Tart',
        description: 'Wild berries, almond cream, buttery pastry',
        image: 'https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=800&q=80',
    },
    {
        id: 3,
        name: 'Vanilla Bean Mille-Feuille',
        description: 'Tahitian vanilla, caramelized pastry layers',
        image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&q=80',
    },
    {
        id: 4,
        name: 'Pistachio Rose Cake',
        description: 'Persian rose water, Sicilian pistachios',
        image: 'https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=800&q=80',
    },
];

export default function Creations() {
    return (
        <section className="creations section bg-parchment" id="creations">
            <div className="container">
                <Reveal>
                    <header className="creations-header">
                        <span className="section-label">Signature Collection</span>
                        <h2 className="creations-title">
                            Our <em>Creations</em>
                        </h2>
                        <p className="creations-intro">
                            Each piece is a labor of love, crafted from the finest ingredients
                            sourced from artisan producers around the world.
                        </p>
                    </header>
                </Reveal>

                <div className="creations-grid">
                    {creations.map((item, index) => (
                        <Reveal key={item.id} delay={index * 100}>
                            <article className="creation-item" tabIndex={0}>
                                <div className="creation-image">
                                    <img src={item.image} alt={item.name} loading="lazy" />
                                    {/* Dark overlay with text on hover */}
                                    <div className="creation-overlay">
                                        <h3 className="creation-overlay-name">{item.name}</h3>
                                        <p className="creation-overlay-desc">{item.description}</p>
                                        <span className="creation-overlay-cta">View Details</span>
                                    </div>
                                </div>
                            </article>
                        </Reveal>
                    ))}
                </div>

                <Reveal>
                    <div className="creations-cta">
                        <a href="#" className="btn btn-outline">View Full Collection</a>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
