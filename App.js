import React from "react";
import ReactDOM from "react-dom/client";
import logo from './assets/images/logo.png';
import kepler from './assets/images/kepler22b.jpg';
import iss from './assets/images/iss.jpg';
import saturnsmoon from './assets/images/saturnsmoon.jpg';
import mars from './assets/images/mars.jpg';
import lunarcolony from './assets/images/lunar-colony.jpg';
import starship from './assets/images/starship.jpg';
import Response from "./api";


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

const DestinationCard = (props) => {
    return (
        <div className="des-card">
            <img className="des-image" src={props.desImage} />
            <h1>{props.desName}</h1>
        </div>
    );
}

const Body = () => {
    console.log(Response[0]?.images[0]);
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="des-cards-row">
                {
                    Response?.map((card) => (
                        <DestinationCard
                            desName={card?.name}
                            desImage={card?.images}
                        />
                    ))
                }
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

root.render(<AppLayout />);