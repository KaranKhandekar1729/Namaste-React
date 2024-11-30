import React from "react";
import { useParams } from "react-router";
import { useState } from "react";
import desData from "../utils/api";

const DestinationInfo = () => {

    const [activeTab, setActiveTab] = useState('overview');

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

    console.log(spacecraft);

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
                            <h2>Add-ons</h2>
                            <ul>
                                {addons?.map((addon, index) => (
                                    <li key={index}>
                                        <h3>{addon.name}</h3>
                                        <p>{addon.price}</p>
                                        <p>{addon.feature}</p>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </div>
                )}

                {activeTab === 'packages' && (
                    <section className="destination-packages">
                        <h2>Travel Packages</h2>
                        <ul>
                            {travel_packages?.map((pkg, index) => (
                                <li key={index}>
                                    <h3>{pkg.name}</h3>
                                    <p>Duration: {pkg.duration}</p>
                                    <p>Price: {pkg.price} {currency}</p>
                                    <p>Includes: {pkg.includes.join(', ')}</p>
                                </li>
                            ))}
                        </ul>
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
        </div>
    );
};

export default DestinationInfo;
