import { useState, useContext } from "react";
import { useSelector } from "react-redux";
import { Link } from 'react-router';
import logo from "../../assets/images/logo.png";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import "../../header.css";

const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");
    const [menuOpen, setMenuOpen] = useState(false);

    const onlineStatus = useOnlineStatus();
    const { loggedInUser } = useContext(UserContext);
    const cartItems = useSelector((store) => store.cart.items);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="header">
            <div className="logo-container">
                <img className="logo" src={logo} alt="Galactic Gateways Logo" />
                <span className="brand-name">Galactic Gateways</span>
            </div>
            <div className={`hamburger-menu ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
            <nav className={`nav-items ${menuOpen ? "open" : ""}`}>
                <ul>
                    <li>
                        <span className="online-status">
                            {onlineStatus ? '🟢 Online' : '🔴 Offline'}
                        </span>
                    </li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li>
                        <Link to="/cart" className="cart-link">
                            Cart ({cartItems.length})
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="user-actions">
                <button
                    className="login-button"
                    onClick={() => {
                        setBtnNameReact(btnNameReact === "Login" ? "Logout" : "Login");
                    }}
                >
                    {btnNameReact}
                </button>
            </div>
        </header>
    );
};

export default Header;

