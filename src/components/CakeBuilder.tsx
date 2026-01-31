import { Reveal } from '../hooks/useReveal';
import './CakeBuilder.css';

export default function CakeBuilder() {
    return (
        <section className="cake-builder-section section">
            <div className="container">
                <div className="builder-content">
                    <Reveal>
                        <div className="builder-text">
                            <span className="section-tag">AI Powered</span>
                            <h2 className="section-title">Design Your Dream Cake</h2>
                            <p className="builder-description">
                                Can't find the perfect cake? Use our AI-powered cake builder to create
                                a truly unique masterpiece. Choose your flavors, colors, decorations,
                                and we'll bring your vision to life.
                            </p>

                            <ul className="builder-features">
                                <li>
                                    <span className="check">✓</span>
                                    <span>Choose from 20+ base flavors</span>
                                </li>
                                <li>
                                    <span className="check">✓</span>
                                    <span>Customize size & tiers</span>
                                </li>
                                <li>
                                    <span className="check">✓</span>
                                    <span>AI design recommendations</span>
                                </li>
                                <li>
                                    <span className="check">✓</span>
                                    <span>Real-time 3D preview</span>
                                </li>
                            </ul>

                            <div className="builder-ctas">
                                <button className="btn btn-primary btn-lg">
                                    <span>🎨</span>
                                    Start Building
                                </button>
                                <button className="btn btn-secondary">
                                    Take the Quiz
                                </button>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal delay={200}>
                        <div className="builder-visual">
                            <div className="builder-preview">
                                <div className="preview-screen">
                                    {/* Simplified cake builder preview */}
                                    <div className="preview-header">
                                        <span className="preview-title">Cake Preview</span>
                                        <div className="preview-actions">
                                            <span className="action-btn">🔄</span>
                                            <span className="action-btn">💾</span>
                                        </div>
                                    </div>

                                    <div className="preview-cake">
                                        <div className="preview-tier tier-1">
                                            <div className="tier-label">Chocolate</div>
                                        </div>
                                        <div className="preview-tier tier-2">
                                            <div className="tier-label">Vanilla</div>
                                        </div>
                                        <div className="preview-tier tier-3">
                                            <div className="tier-label">🍓</div>
                                        </div>
                                    </div>

                                    <div className="preview-options">
                                        <div className="option-group">
                                            <span className="option-label">Flavor</span>
                                            <div className="option-swatches">
                                                <span className="swatch active" style={{ background: '#8B4513' }} />
                                                <span className="swatch" style={{ background: '#FFF8DC' }} />
                                                <span className="swatch" style={{ background: '#FFB6C1' }} />
                                                <span className="swatch" style={{ background: '#C41E3A' }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating decorations */}
                                <div className="builder-decorations">
                                    <span className="float-emoji e1">🎂</span>
                                    <span className="float-emoji e2">🍰</span>
                                    <span className="float-emoji e3">✨</span>
                                    <span className="float-emoji e4">🎉</span>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
