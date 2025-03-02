import React from "react";
import { useParams } from "react-router";
import { useState } from "react";
import desData from "../utils/api";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";


const DestinationInfo = () => {

    const [activeTab, setActiveTab] = useState('overview');
    const [selectedAddons, setSelectedAddons] = useState([]);
    const dispatch = useDispatch();

    const { id } = useParams();
    const desInfo = desData.find((des) => des.id === parseInt(id));

    const {
        name,
        type,
        distance,
        travel_time,
        overview,
        features,
        activities,
        price,
        currency,
        travel_packages,
        spacecraft,
        addons,
        reviews,
        average_rating
    } = desInfo;

    const cartItems = useSelector(state => state.cart.items);

    useEffect(() => {
        const cartAddonNames = cartItems.map(item => item.name);
        setSelectedAddons(cartAddonNames);
    }, [cartItems]);

    const toggleAddon = (addon) => {
        setSelectedAddons(prev => {
            const newSelectedAddons = prev.includes(addon.name)
                ? prev.filter(a => a !== addon.name)
                : [...prev, addon.name];

            if (newSelectedAddons.includes(addon.name)) {
                dispatch(addItem(addon));
            } else {
                dispatch(removeItem(addon));
            }

            return newSelectedAddons;
        });
    };

    const handleBookJourney = () => {
        const addon = { name, price };
        toggleAddon(addon);
    };

    return (
        <div className="destination-info">
            <div className="star-field">
                <div className="layer"></div>
                <div className="layer"></div>
                <div className="layer"></div>
            </div>
            <header className="destination-header">
                <h1>{name}</h1>
                <div className="destination-meta">
                    <span className="planet-type">{type}</span>
                    <span className="distance">{distance}</span>
                    <span className="travel-time">{travel_time}</span>
                </div>
            </header>

            <nav className="destination-nav">
                <button className={activeTab === 'overview' ? 'active' : ''} onClick={() => setActiveTab('overview')}>Overview</button>
                <button className={activeTab === 'details' ? 'active' : ''} onClick={() => setActiveTab('details')}>Details</button>
                <button className={activeTab === 'packages' ? 'active' : ''} onClick={() => setActiveTab('packages')}>Packages</button>
                <button className={activeTab === 'reviews' ? 'active' : ''} onClick={() => setActiveTab('reviews')}>Reviews</button>
            </nav>

            <div className="destination-content">
                {activeTab === 'overview' && (
                    <section className="destination-overview">
                        <h2>Overview</h2>
                        <p>{overview}</p>
                        <div className="overview-stats">
                            <div className="stat">
                                <span className="stat-value">${price.toLocaleString()}</span>
                                <span className="stat-label">Price</span>
                            </div>
                            <div className="stat">
                                <span className="stat-value">{average_rating}</span>
                                <span className="stat-label">Rating</span>
                            </div>
                        </div>
                        <div className="buy-ticket">
                            <h2>Book Your Journey</h2>
                            <p>Embark on an unforgettable adventure to {name}!</p>
                            <button className={`buy-button ${selectedAddons.includes(name) ? 'selected' : ''}`}
                                onClick={handleBookJourney}
                            >
                                {selectedAddons.includes(name) ? 'Cancel Your Spot' : `Reserve Your Spot - ${price}`}
                            </button>
                        </div>
                        <div className="next-steps">
                            <p>Next: Check our <button className="link-button" onClick={() => setActiveTab('packages')}>Travel Packages</button> for an enhanced experience!</p>
                        </div>
                    </section>
                )}

                {activeTab === 'details' && (
                    <div className="destination-details">
                        <section className="destination-features">
                            <h2>Features</h2>
                            <ul>
                                {features?.map((feature, index) => (
                                    <li key={index}>
                                        <p>{feature}</p>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <section className="destination-activities">
                            <h2>Activities</h2>
                            <ul>
                                {activities?.map((activity, index) => (
                                    <li key={index}>
                                        <p>{activity}</p>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <section className="destination-spacecraft">
                            <h2>Spacecraft</h2>
                            <ul>
                                <li>
                                    <h3>{spacecraft.name}</h3>
                                    <p>{spacecraft.type}</p>
                                    <p>{spacecraft.capacity}</p>
                                    <p>{spacecraft?.features?.join(", ")}</p>
                                </li>
                            </ul>
                        </section>

                        <section className="destination-addons">
                            <h2>Enhance Your Journey with Add-ons</h2>
                            <ul>
                                {addons?.map((addon, index) => (
                                    <li key={index}>
                                        <div className="addon-feature">
                                            <div className="addon-item">
                                                <span>{addon.name}</span>
                                                <div className="addon-price">
                                                    <span>${addon.price}</span>
                                                    <button className={`buy-button ${selectedAddons.includes(addon.name) ? 'selected' : ''}`}
                                                        onClick={() => toggleAddon(addon)}
                                                    >
                                                        {selectedAddons.includes(addon.name) ? 'Remove' : 'Add'}
                                                    </button>
                                                </div>
                                            </div>
                                            <p>{addon.features}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </div>
                )}

                {activeTab === 'packages' && (
                    <section className="destination-packages">
                        <h2>Travel Packages</h2>
                        <p>Choose from our carefully curated travel packages for an all-inclusive experience</p>
                        <ul>
                            {travel_packages?.map((pkg, index) => (
                                <li key={index}>
                                    <div className="package-feature">
                                        <div className="package-item">
                                            <h3>{pkg.name}</h3>
                                            <div className="package-action">
                                                <span className="package-price">${pkg.price} {currency}</span>
                                                <button className={`buy-button ${selectedAddons.includes(pkg.name) ? 'selected' : ''}`}
                                                    onClick={() => toggleAddon(pkg)}
                                                >
                                                    {selectedAddons.includes(pkg.name) ? 'Booked' : 'Book Package'}
                                                </button>
                                            </div>
                                        </div>
                                        <div>
                                            <p>Duration: {pkg.duration}</p>
                                            <p>Includes: {pkg.includes.join(', ')}</p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="next-steps">
                            <p>Next: Check out our <button className="link-button" onClick={() => setActiveTab('details')}>Add-ons</button></p>
                        </div>
                    </section>
                )}

                {activeTab === 'reviews' && (
                    <section className="destination-reviews">
                        <h2>User Reviews</h2>
                        {reviews?.map((review, index) => (
                            <div key={index} className="review">
                                <h3>{review.user}</h3>
                                <div className="review-rating">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} className={i < review.rating ? 'star filled' : 'star'}>★</span>
                                    ))}
                                </div>
                                <p>{review.comment}</p>
                            </div>
                        ))}
                    </section>
                )}
            </div>
        </div >
    );
};

export default DestinationInfo;
