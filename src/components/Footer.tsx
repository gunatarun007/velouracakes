import './Footer.css';

const footerLinks = {
    visit: [
        { label: 'Our Bakery', href: '#' },
        { label: 'Opening Hours', href: '#' },
        { label: 'Location', href: '#' },
    ],
    explore: [
        { label: 'Our Story', href: '#about' },
        { label: 'Creations', href: '#creations' },
        { label: 'Process', href: '#' },
    ],
    connect: [
        { label: 'Contact', href: '#' },
        { label: 'Careers', href: '#' },
        { label: 'Press', href: '#' },
    ],
};

export default function Footer() {
    return (
        <footer className="footer-editorial">
            <div className="container">
                {/* Main Footer */}
                <div className="footer-main">
                    {/* Brand */}
                    <div className="footer-brand">
                        <h3 className="footer-logo">Veloura</h3>
                        <p className="footer-tagline">
                            Crafting Moments,<br />Not Just Cakes.
                        </p>
                        <p className="footer-address">
                            42 Heritage Lane, Artisan District<br />
                            Mumbai, Maharashtra 400001
                        </p>
                    </div>

                    {/* Links */}
                    <nav className="footer-nav">
                        <div className="footer-col">
                            <h4 className="footer-col-title">Visit</h4>
                            <ul>
                                {footerLinks.visit.map((link, i) => (
                                    <li key={i}>
                                        <a href={link.href} className="footer-link">{link.label}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="footer-col">
                            <h4 className="footer-col-title">Explore</h4>
                            <ul>
                                {footerLinks.explore.map((link, i) => (
                                    <li key={i}>
                                        <a href={link.href} className="footer-link">{link.label}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="footer-col">
                            <h4 className="footer-col-title">Connect</h4>
                            <ul>
                                {footerLinks.connect.map((link, i) => (
                                    <li key={i}>
                                        <a href={link.href} className="footer-link">{link.label}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </nav>
                </div>

                {/* Divider */}
                <div className="footer-divider" />

                {/* Bottom */}
                <div className="footer-bottom">
                    <p className="footer-copyright">
                        © 2024 Veloura Bakery. All rights reserved.
                    </p>
                    <div className="footer-social">
                        <a href="#" className="social-link" aria-label="Instagram">Instagram</a>
                        <a href="#" className="social-link" aria-label="Pinterest">Pinterest</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
