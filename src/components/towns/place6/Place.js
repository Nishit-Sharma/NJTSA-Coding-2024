// Place6.js

import React from 'react';
import Layout from '../../Layout.js';
import { useSpring, animated } from 'react-spring';
import Image1 from '../../static/p6image1.jpg'; // Assuming this is the image for Liberty Science Center
import Image2 from '../../static/p1image2.png';

function Place6() {
    const props = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        delay: 100,
    });

    const placeDetails = {
        name: "Liberty Science Center",
        description: "Ignite your curiosity and explore the wonders of science at Liberty Science Center, an interactive science museum and learning center.",
        address: "222 Jersey City Blvd, Jersey City, NJ 07305",
        phone: "(201) 200-1000",
        hours: "Varies by season, check website for details",
        website: "https://lsc.org/",
        about: `
            Liberty Science Center is a hub of discovery and innovation, offering hands-on exhibits, 
            interactive demonstrations, and immersive experiences for visitors of all ages. 
            Explore the mysteries of the universe in the Jennifer Chalsty Planetarium, 
            the largest planetarium in the Western Hemisphere, or dive into the depths of the ocean 
            in the interactive Our Hudson Home exhibition. 
            Delve into the realms of technology, engineering, and robotics in the S.T.E.A.M. Works 
            and MakerLab galleries, where creativity and experimentation know no bounds. 
            With educational programs, live demonstrations, and special exhibitions 
            throughout the year, Liberty Science Center inspires curiosity and sparks 
            a passion for learning in visitors of all backgrounds and interests.
        `,
        features: [
            "Hands-on exhibits and interactive demonstrations",
            "The Jennifer Chalsty Planetarium, the largest planetarium in the Western Hemisphere",
            "Our Hudson Home exhibition exploring the local ecosystem",
            "S.T.E.A.M. Works and MakerLab galleries focusing on technology, engineering, and robotics",
            "Live demonstrations and educational programs",
            "Special exhibitions and events throughout the year",
            "Dining options and gift shop onsite"
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

export default Place6;