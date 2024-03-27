// Place2.js

import React from 'react';
import Layout from '../../Layout.js';
import { useSpring, animated } from 'react-spring';
import Image2 from '../../static/image2.jpg'; // Assuming this is the image for Grounds For Sculpture

function Place2() {
    const props = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        delay: 100,
    });

    const placeDetails = {
        name: "Grounds For Sculpture",
        description: "Explore a world of art, nature, and inspiration at Grounds For Sculpture, a unique 42-acre sculpture park and museum nestled in the heart of New Jersey.",
        address: "80 Sculptors Way, Hamilton Township, NJ 08619",
        phone: "(609) 586-0616",
        hours: "Tuesday - Sunday: 10:00 AM - 6:00 PM",
        website: "https://www.groundsforsculpture.org/",
        about: `
            Grounds For Sculpture is a breathtaking destination where art and nature harmoniously intertwine. 
            Stroll through beautifully landscaped gardens adorned with over 300 contemporary sculptures, 
            each offering a distinctive blend of form, texture, and meaning. Delight in the serenity of 
            reflective ponds, vibrant flower beds, and winding pathways that invite exploration and contemplation. 
            Engage your senses with rotating exhibitions, educational programs, and culinary delights at the 
            park's onsite restaurants and cafes. Whether you're a seasoned art enthusiast or a casual admirer, 
            Grounds For Sculpture promises an enriching experience that celebrates the transformative power of creativity.
        `,
        features: [
            "Over 300 contemporary sculptures by renowned and emerging artists",
            "Exquisite landscaped gardens with diverse flora and fauna",
            "Rotating exhibitions showcasing a variety of artistic styles and mediums",
            "Educational programs for all ages, including guided tours and workshops",
            "Onsite dining options offering culinary delights in a scenic setting",
            "Special events and performances throughout the year",
            "Gift shop featuring unique art-inspired merchandise"
        ]
    };

    return (
        <animated.div style={props}>
            <Layout>
                <div className="header" style={{ backgroundImage: `url(${Image2})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '300px' }}>
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

export default Place2;