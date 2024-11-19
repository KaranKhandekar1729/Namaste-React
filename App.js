import React from "react"; 
import ReactDOM from "react-dom/client";
import logo from './assets/images/logo.png';
import kepler from './assets/images/kepler22b.jpg';
import iss from './assets/images/iss.jpg';
import saturnsmoon from './assets/images/saturnsmoon.jpg';
import mars from './assets/images/mars.jpg';

/** 
 * Header
 *  - Logo
 *  - Nav items
 * Body
 *  - Search
 *  - RestaurantContainer
 *      - RestaurantCard
 * footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
*/

const Header = () => {
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
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

const DestinationCard = () => {
    return (
        <div className="des-cards-row">
            <div className="des-card">
                <img className="des-image" src={kepler}/>
                <h1>Kepler 22b</h1>
            </div>
            <div className="des-card">
                <img className="des-image" src={iss}/>
                <h1>International Space Station</h1>
            </div>
            <div className="des-card">
                <img className="des-image" src={mars}/>
                <h1>Mars</h1>
            </div>
            <div className="des-card">
                <img className="des-image" src={saturnsmoon}/>
                <h1>Saturn's Moons</h1>
            </div>
        </div>
    );
}

const Body = () => {
    return (
        <div className="body">
            <div className="search"></div>
            <div className="des-container">
                <DestinationCard/>
            </div>
        </div>
    );
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);