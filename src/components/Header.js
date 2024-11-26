import logo from "../../assets/images/logo.png";
import { useState } from "react";
import { Link } from 'react-router';

const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo"
                    src={logo}
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li id="alignleft">Galactic Gateways</li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>Cart</li>
                    <button 
                        className="login"
                        onClick={() => {
                            btnNameReact === "Login" 
                                ? setBtnNameReact("Logout") 
                                : setBtnNameReact("Login");
                        }}
                    >
                        {btnNameReact}
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default Header;