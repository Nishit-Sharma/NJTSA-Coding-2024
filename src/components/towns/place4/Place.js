// Place4.js

import React from 'react';
import Layout from '../../Layout.js';
import { useSpring, animated } from 'react-spring';
import Image1 from '../../static/p4image1.jpeg'; // Assuming this is the image for Six Flags Great Adventure

function Place4() {
    const props = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        delay: 100,
    });

    const placeDetails = {
        name: "Six Flags Great Adventure",
        description: "Embark on thrilling adventures and unforgettable experiences at Six Flags Great Adventure, one of the largest amusement parks in the world.",
        address: "1 Six Flags Blvd, Jackson, NJ 08527",
        phone: "(732) 928-1821",
        hours: "Varies by season, check website for details",
        website: "https://www.sixflags.com/greatadventure",
        about: `
            Six Flags Great Adventure offers excitement and entertainment for visitors of all ages, 
            featuring a diverse array of attractions, rides, and shows. 
            From heart-pounding roller coasters to family-friendly rides and attractions, 
            there's something for everyone to enjoy at this premier theme park destination. 
            Thrill-seekers can brave the heights of Kingda Ka, the world's tallest and fastest roller coaster, 
            or test their courage on the looping twists of El Toro. 
            Families can bond over classic rides like the Carousel and the Ferris wheel, 
            or cool off at the adjacent Hurricane Harbor water park during the summer months. 
            With live entertainment, dining options, and special events throughout the year, 
            Six Flags Great Adventure promises an adrenaline-fueled adventure that will leave lasting memories for years to come.
        `,
        features: [
            "Wide range of thrilling roller coasters and rides for all ages",
            "Live entertainment, including shows and performances",
            "Seasonal events and festivals, such as Fright Fest and Holiday in the Park",
            "Adjacent water park, Hurricane Harbor, with slides and attractions",
            "Dining options ranging from quick bites to full-service restaurants",
            "Games and souvenir shops scattered throughout the park",
            "FastPass and VIP experiences for expedited access to rides"
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

export default Place4;