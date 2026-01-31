import { Reveal } from '../hooks/useReveal';
import './CTASection.css';

export default function CTASection() {
    return (
        <section className="cta-editorial section bg-moody">
            <div className="container container-narrow text-center">
                <Reveal>
                    <span className="section-label">Begin Your Journey</span>
                </Reveal>

                <Reveal>
                    <h2 className="cta-title text-light">
                        Let Us Craft Your
                        <br />
                        <em>Perfect Moment</em>
                    </h2>
                </Reveal>

                <Reveal>
                    <p className="cta-text">
                        Whether it's a milestone celebration or an everyday indulgence,
                        our artisans are ready to create something extraordinary just for you.
                    </p>
                </Reveal>

                <Reveal>
                    <div className="cta-actions">
                        <a href="#" className="btn btn-light">
                            Order Now
                        </a>
                        <a href="#" className="cta-link link text-light">
                            Visit Our Bakery
                        </a>
                    </div>
                </Reveal>

                <Reveal>
                    <div className="cta-contact">
                        <p className="contact-label">Or reach us directly</p>
                        <a href="tel:+919182100688" className="contact-phone">
                            +91 9182100688
                        </a>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
