import { Reveal } from '../hooks/useReveal';
import './Quote.css';

export default function Quote() {
    return (
        <section className="quote-section section bg-linen">
            <div className="container container-narrow">
                <Reveal>
                    <blockquote className="editorial-quote">
                        <p className="quote-text">
                            "In every slice, a story. In every bite, a memory.
                            This is not just baking — this is the art of creating moments
                            that linger long after the last crumb."
                        </p>
                        <footer className="quote-author">
                            <span className="author-name">— Maria Veloura</span>
                            <span className="author-title">Founder & Head Pastry Chef</span>
                        </footer>
                    </blockquote>
                </Reveal>
            </div>
        </section>
    );
}
