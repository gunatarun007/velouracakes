import { Reveal } from '../hooks/useReveal';
import './Delivery.css';

const cities = [
    { name: 'Mumbai', time: '2-3 hrs' },
    { name: 'Delhi', time: '2-3 hrs' },
    { name: 'Bangalore', time: '2-3 hrs' },
    { name: 'Hyderabad', time: '3-4 hrs' },
    { name: 'Chennai', time: '3-4 hrs' },
    { name: 'Pune', time: '2-3 hrs' },
    { name: 'Kolkata', time: '3-4 hrs' },
    { name: 'Ahmedabad', time: '3-4 hrs' },
];

export default function Delivery() {
    return (
        <section className="delivery-section section">
            <div className="container">
                <Reveal>
                    <div className="delivery-banner glass-card">
                        <div className="banner-content">
                            <div className="banner-icon">
                                <span>🚀</span>
                            </div>
                            <div className="banner-text">
                                <h3 className="banner-title">Lightning Fast Delivery</h3>
                                <p className="banner-subtitle">
                                    Order now and get your cake delivered fresh within 3 hours.
                                    Same-day delivery available across major cities.
                                </p>
                            </div>
                            <div className="banner-cta">
                                <button className="btn btn-gold">
                                    Check Availability
                                </button>
                            </div>
                        </div>

                        {/* Countdown Timer */}
                        <div className="countdown-ribbon">
                            <span className="countdown-label">Order within</span>
                            <div className="countdown-timer">
                                <div className="time-unit">
                                    <span className="time-value">02</span>
                                    <span className="time-label">hrs</span>
                                </div>
                                <span className="time-separator">:</span>
                                <div className="time-unit">
                                    <span className="time-value">45</span>
                                    <span className="time-label">min</span>
                                </div>
                            </div>
                            <span className="countdown-text">for same-day delivery</span>
                        </div>
                    </div>
                </Reveal>

                {/* Cities Grid */}
                <Reveal delay={200}>
                    <div className="cities-section">
                        <h4 className="cities-title">We Deliver To</h4>
                        <div className="cities-grid">
                            {cities.map((city, index) => (
                                <div key={index} className="city-card">
                                    <span className="city-name">{city.name}</span>
                                    <span className="city-time">⚡ {city.time}</span>
                                </div>
                            ))}
                        </div>
                        <p className="cities-note">
                            + 50 more cities. Enter your pincode to check delivery availability.
                        </p>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
