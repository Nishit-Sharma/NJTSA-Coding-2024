// Place10.js

import React from 'react';
import Layout from '../../Layout.js';
import { useSpring, animated } from 'react-spring';
import Image1 from '../../static/p10image1.jpg'; // Assuming this is the image for Atlantic City Boardwalk
import Image2 from '../../static/p10image2.png';

function Place10() {
    const props = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        delay: 100,
    });

    const placeDetails = {
        name: "Atlantic City Boardwalk",
        description: "Experience the vibrant energy and iconic landmarks of the Atlantic City Boardwalk, a historic promenade stretching along the scenic shores of the Atlantic Ocean.",
        address: "Atlantic City, NJ 08401",
        phone: "(609) 555-1234",
        hours: "Open 24 hours",
        website: "https://www.atlanticcitynj.com/",
        about: `
            The Atlantic City Boardwalk is a beloved seaside destination that captures the essence of fun, 
            excitement, and nostalgia. Stretching for over four miles along the picturesque shores of the Atlantic Ocean, 
            this historic promenade offers a myriad of attractions, entertainment options, and scenic views. 
            Take a leisurely stroll along the wooden planks and soak up the sights and sounds of the bustling boardwalk, 
            lined with shops, restaurants, and amusement arcades. 
            Stop by iconic landmarks such as Steel Pier, known for its thrilling rides and carnival games, 
            or catch a live performance at the legendary Boardwalk Hall. 
            With sandy beaches, oceanfront resorts, and vibrant nightlife just steps away, 
            the Atlantic City Boardwalk promises an unforgettable seaside experience for visitors of all ages.
        `,
        features: [
            "Scenic wooden boardwalk stretching along the Atlantic Ocean",
            "Shops, restaurants, and entertainment venues",
            "Iconic landmarks such as Steel Pier and Boardwalk Hall",
            "Amusement arcades and family-friendly attractions",
            "Beautiful views of the ocean and coastline",
            "Access to sandy beaches and oceanfront resorts",
            "Vibrant nightlife and events throughout the year"
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

export default Place10;