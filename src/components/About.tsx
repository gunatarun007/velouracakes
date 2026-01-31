import { Reveal } from '../hooks/useReveal';
import './About.css';

export default function About() {
    return (
        <section className="about section bg-cream" id="about">
            <div className="container container-narrow">
                <Reveal>
                    <span className="section-label">Our Story</span>
                </Reveal>

                <Reveal>
                    <h2 className="about-title">
                        A Decade of
                        <br />
                        <em>Artisan Excellence</em>
                    </h2>
                </Reveal>

                <Reveal>
                    <div className="divider divider-center" />
                </Reveal>

                <Reveal>
                    <p className="about-lead">
                        Since 2014, Veloura has been crafting moments of joy through the art of baking.
                        What began as a small kitchen with a dream has grown into a beloved sanctuary
                        for those who appreciate the beauty of slow, intentional craft.
                    </p>
                </Reveal>

                <div className="about-grid">
                    <Reveal>
                        <div className="about-image">
                            <img
                                src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=800&q=80"
                                alt="Baker hands kneading dough"
                            />
                        </div>
                    </Reveal>

                    <div className="about-content">
                        <Reveal>
                            <blockquote className="about-quote">
                                "We don't just bake. We create edible poetry."
                            </blockquote>
                        </Reveal>

                        <Reveal>
                            <p className="about-text">
                                Every ingredient is chosen with care. Every technique perfected over years.
                                Every creation tells a story of patience, passion, and unwavering commitment
                                to excellence.
                            </p>
                        </Reveal>

                        <Reveal>
                            <p className="about-text">
                                Our master bakers arrive before dawn, working with heritage recipes passed
                                down through generations, infused with modern artistry. This is baking
                                as it was meant to be.
                            </p>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
}
