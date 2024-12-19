import logo from "../../assets/images/logo.png";
import { useContext, useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Link } from 'react-router';

const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");

    const onlineStatus = useOnlineStatus();

    const { loggedInUser } = useContext(UserContext);

    const cartItems = useSelector((store) => store.cart.items)

    return (
        <header className="header">
            <div className="logo-container">
                <img className="logo" src={logo} alt="Galactic Gateways Logo" />
                <span className="brand-name">Galactic Gateways</span>
            </div>
            <nav className="nav-items">
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
                {/* <span className="user-name">{loggedInUser}</span> */}
            </div>
        </header>
    );
};

export default Header;