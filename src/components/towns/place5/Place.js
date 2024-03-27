// Place5.js

import React from 'react';
import Layout from '../../Layout.js';
import { useSpring, animated } from 'react-spring';
import Image5 from '../../static/image5.jpg'; // Assuming this is the image for Adventure Aquarium

function Place5() {
    const props = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        delay: 100,
    });

    const placeDetails = {
        name: "Adventure Aquarium",
        description: "Dive into an underwater world of wonder and discovery at Adventure Aquarium, where fascinating marine life awaits at every turn.",
        address: "1 Riverside Dr, Camden, NJ 08103",
        phone: "(856) 365-3300",
        hours: "Varies by season, check website for details",
        website: "https://www.adventureaquarium.com/",
        about: `
            Adventure Aquarium offers an immersive journey into the depths of the ocean, 
            showcasing a diverse array of aquatic species from around the globe. 
            Explore fascinating exhibits featuring sharks, stingrays, sea turtles, and more, 
            and get up close and personal with underwater creatures through interactive touch tanks 
            and feeding experiences. Marvel at the vibrant colors of tropical fish in the Caribbean Current 
            exhibit or witness the grace of giant sea turtles in the Ocean Realm. 
            Don't miss the chance to walk through Shark Bridge, a unique experience 
            that allows you to stroll just inches above majestic sharks and rays. 
            With educational programs, behind-the-scenes tours, and special events 
            throughout the year, Adventure Aquarium offers fun and excitement for visitors of all ages.
        `,
        features: [
            "Wide variety of marine life, including sharks, stingrays, sea turtles, and more",
            "Interactive touch tanks and feeding experiences",
            "Educational programs and behind-the-scenes tours",
            "Unique exhibits, such as Shark Bridge and the Caribbean Current",
            "Special events and seasonal attractions",
            "Dining options and gift shops onsite",
            "Accessibility features for visitors with disabilities"
        ]
    };

    return (
        <animated.div style={props}>
            <Layout>
                <div className="header" style={{ backgroundImage: `url(${Image5})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '300px' }}>
                    {/* You can add any overlay content here if needed */}
                </div>

                <div className="container">
                    <div className="place-container">
                        {/* Overview Section */}
                        <div className="overview-section">
                            <h1>{placeDetails.name}</h1>
                            <p>{placeDetails.description}</p>
                            &nbsp;
                            <h2>About</h2>
                            <p>{placeDetails.about}</p>
                            &nbsp;
                            <h2>Features</h2>
                            <ul>
                                {placeDetails.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Sidebar with General Information */}
                        <div className="sidebar">
                            <div className="sidebar-content">
                                <div className="general-info">
                                    <h2>General Information</h2>
                                    <p>Address: {placeDetails.address}</p>
                                    <p>Phone: {placeDetails.phone}</p>
                                    <p>Hours: {placeDetails.hours}</p>
                                    <p>Website: <a className="link" href={placeDetails.website} target="_blank" rel="noopener noreferrer">{placeDetails.website}</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </animated.div>
    );
}

export default Place5;