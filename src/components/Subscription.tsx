import { Reveal } from '../hooks/useReveal';
import './Subscription.css';

export default function Subscription() {
    return (
        <section className="subscription-section section">
            <div className="container">
                <Reveal>
                    <div className="subscription-card">
                        <div className="sub-content">
                            <span className="sub-badge">🎁 Special Offer</span>
                            <h2 className="sub-title">Never Miss a Celebration</h2>
                            <p className="sub-description">
                                Subscribe to our monthly cake box and get premium cakes delivered
                                every month with exclusive member-only flavors and 20% off every order.
                            </p>

                            <div className="sub-perks">
                                <div className="perk">
                                    <span className="perk-icon">📦</span>
                                    <span>Monthly Surprise Box</span>
                                </div>
                                <div className="perk">
                                    <span className="perk-icon">💰</span>
                                    <span>20% Members Discount</span>
                                </div>
                                <div className="perk">
                                    <span className="perk-icon">🎂</span>
                                    <span>Free Birthday Cake</span>
                                </div>
                                <div className="perk">
                                    <span className="perk-icon">🚫</span>
                                    <span>Cancel Anytime</span>
                                </div>
                            </div>

                            <div className="sub-cta">
                                <button className="btn btn-gold btn-lg">
                                    Subscribe - ₹999/month
                                </button>
                                <span className="sub-note">First month free! No commitment.</span>
                            </div>
                        </div>

                        <div className="sub-visual">
                            <div className="box-preview">
                                <div className="box-lid">
                                    <div className="ribbon" />
                                </div>
                                <div className="box-body">
                                    <div className="cake-peek">🍰</div>
                                </div>
                            </div>
                            <div className="floating-treats">
                                <span className="treat t1">🧁</span>
                                <span className="treat t2">🍩</span>
                                <span className="treat t3">🍪</span>
                                <span className="treat t4">🎂</span>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
