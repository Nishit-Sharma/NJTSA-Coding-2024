// Place3.js

import React from 'react';
import Layout from '../../Layout.js';
import { useSpring, animated } from 'react-spring';
import Image3 from '../../static/image3.jpg'; // Assuming this is the image for the Statue of Liberty

function Place3() {
    const props = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        delay: 100,
    });

    const placeDetails = {
        name: "Statue of Liberty",
        description: "Experience the iconic symbol of freedom and democracy at the Statue of Liberty, a timeless monument standing proudly in New York Harbor.",
        address: "Liberty Island, New York, NY 10004",
        phone: "1-212-363-3200",
        hours: "9:00 AM - 5:00 PM (Park Hours)",
        website: "https://www.nps.gov/stli/index.htm",
        about: `
            The Statue of Liberty, a gift from France to the United States, is an enduring symbol of liberty 
            and democracy, welcoming visitors from around the world to the shores of New York Harbor. 
            Designed by French sculptor Frédéric Auguste Bartholdi and dedicated on October 28, 1886, 
            Lady Liberty stands at an impressive height of 305 feet, symbolizing freedom and hope for all mankind. 
            Visitors can embark on a journey to Liberty Island and explore the statue's pedestal and museum, 
            offering panoramic views of the New York City skyline and the surrounding harbor. 
            Additionally, guided tours are available to the crown, providing a unique perspective 
            on this iconic monument and its storied history. Whether admiring her from afar or 
            standing in her shadow, the Statue of Liberty continues to inspire awe and reverence 
            as a beacon of liberty and opportunity for generations to come.
        `,
        features: [
            "Iconic symbol of freedom and democracy",
            "Magnificent views of New York Harbor and the Manhattan skyline",
            "Pedestal museum showcasing the statue's history and significance",
            "Guided tours to the crown (advance reservations required)",
            "Ferry service to Liberty Island from Battery Park, New York, and Liberty State Park, New Jersey",
            "Accessibility features for visitors with disabilities",
            "Gift shop offering a variety of Statue of Liberty-themed souvenirs"
        ]
    };

    return (
        <animated.div style={props}>
            <Layout>
                <div className="header" style={{ backgroundImage: `url(${Image3})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '300px' }}>
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

export default Place3;