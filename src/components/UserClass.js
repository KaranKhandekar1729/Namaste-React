import React, { useState, useEffect } from 'react';

const AboutUs = () => {
  const [userInfo, setUserInfo] = useState({
    name: "Loading...",
    location: "Unknown",
    avatar_url: "https://via.placeholder.com/150",
    bio: "Fetching bio...",
  });

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await fetch("https://api.github.com/users/KaranKhandekar1729");
        const data = await response.json();
        setUserInfo({
          name: data.name || "Karan Khandekar",
          location: data.location || "Earth",
          avatar_url: data.avatar_url,
          bio: data.bio || "Exploring the cosmos through code",
        });
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserInfo();
  }, []);

  return (
    <div className="about-us">
      <div className="star-field">
        <div className="layer"></div>
        <div className="layer"></div>
        <div className="layer"></div>
      </div>
      <h1 className="about-title">Meet Our Cosmic Explorer</h1>
      <div className="user-card">
        <div className="avatar-container">
          <img src={userInfo.avatar_url} alt={userInfo.name} className="avatar" />
        </div>
        <div className="user-info">
          <h2>{userInfo.name}</h2>
          <p className="location">
            <span className="icon">🌎</span> {userInfo.location}
          </p>
          <p className="bio">{userInfo.bio}</p>
          <p className="contact">
            <span className="icon">📧</span> karankhandekar028@gmail.com
          </p>
        </div>
      </div>
      <div className="mission-statement">
        <h2>Our Galactic Mission</h2>
        <p>
          At Galactic Gateways, we're on a mission to make space tourism accessible to everyone. 
          Our team of passionate cosmic explorers is dedicated to pushing the boundaries of what's 
          possible, bringing the wonders of the universe closer to home.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;

