import { Link } from 'react-router';
import "../../footer.css";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>Galactic Gateways</h3>
                    <p>Explore the final frontier with cutting-edge space travel technology and expert guidance.</p>
                </div>

                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><Link to="/destination">Destinations</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Contact Info</h4>
                    <ul>
                        <li>📍 Earth</li>
                        <li>📞 1-800-GALACTIC</li>
                        <li>✉️ info@galacticgateways.com</li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Newsletter</h4>
                    <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                        <input 
                            type="email" 
                            placeholder="Enter your email"
                            aria-label="Email for newsletter"
                        />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {currentYear} Karan Khandekar. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
