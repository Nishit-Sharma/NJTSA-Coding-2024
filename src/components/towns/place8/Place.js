// Place8.js

import React from 'react';
import Layout from '../../Layout.js';
import { useSpring, animated } from 'react-spring';
import Image1 from '../../static/p8image1.webp'; // Assuming this is the image for Morey's Piers & Beachfront
import Image2 from '../../static/p1image2.png';

function Place8() {
    const props = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        delay: 100,
    });

    const placeDetails = {
        name: "Morey's Piers & Beachfront",
        description: "Experience endless fun and excitement at Morey's Piers & Beachfront, a premier seaside amusement park destination on the iconic Wildwood boardwalk.",
        address: "3501 Boardwalk, Wildwood, NJ 08260",
        phone: "(609) 522-3900",
        hours: "Varies by season, check website for details",
        website: "https://www.moreyspiers.com/",
        about: `
            Morey's Piers & Beachfront offers thrills and entertainment for visitors of all ages, 
            with three action-packed amusement piers stretching along the vibrant Wildwood boardwalk. 
            From classic rides like roller coasters and Ferris wheels to adrenaline-pumping attractions 
            and water parks, there's something for everyone to enjoy at this iconic destination. 
            Take a leisurely stroll along the beachfront promenade, 
            soak up the sun on the sandy shores, or cool off in the refreshing waters of the Atlantic Ocean. 
            With live entertainment, dining options, and special events throughout the summer season, 
            Morey's Piers & Beachfront promises an unforgettable seaside getaway filled with fun, 
            laughter, and cherished memories.
        `,
        features: [
            "Three amusement piers with a wide variety of rides and attractions",
            "Water parks with slides, pools, and lazy rivers",
            "Beachfront access with sandy shores and scenic views",
            "Live entertainment and special events throughout the summer season",
            "Dining options ranging from casual eateries to beachfront restaurants",
            "Games, shops, and arcades along the boardwalk",
            "Accessibility features for visitors with disabilities"
        ]
    };

    return (
        <animated.div style={props}>
            <Layout>
                <div className="header" style={{ backgroundImage: `url(${Image1})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '300px' }}>
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
                                <div className="park-map">
                                    <a href={Image2} target="_blank" rel="noopener noreferrer">
                                        <img src={Image2} alt="Park Map" />
                                    </a>
                                </div>
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

export default Place8;
