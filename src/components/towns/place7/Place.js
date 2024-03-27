// Place7.js

import React from 'react';
import Layout from '../../Layout.js';
import { useSpring, animated } from 'react-spring';
import Image7 from '../../static/image7.jpg'; // Assuming this is the image for Cape May County Park & Zoo

function Place7() {
    const props = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        delay: 100,
    });

    const placeDetails = {
        name: "Cape May County Park & Zoo",
        description: "Experience the beauty of nature and the thrill of wildlife at Cape May County Park & Zoo, a scenic park and accredited zoo in Cape May Court House, New Jersey.",
        address: "707 N Route 9, Cape May Court House, NJ 08210",
        phone: "(609) 465-5271",
        hours: "Open daily from 10:00 AM - 4:30 PM (Closed Thanksgiving, Christmas, and New Year's Day)",
        website: "https://www.capemaycountynj.gov/1008/Park-Zoo",
        about: `
            Cape May County Park & Zoo offers a delightful escape into the natural world, 
            with lush landscapes, picturesque gardens, and fascinating wildlife 
            awaiting visitors of all ages. Explore the zoo's diverse collection of animals, 
            including lions, tigers, bears, giraffes, and more, housed in spacious habitats 
            designed to mimic their natural environments. Stroll through the park's scenic 
            trails and gardens, perfect for picnics, leisurely walks, and birdwatching. 
            Don't miss the chance to catch a glimpse of the zoo's residents during 
            daily feeding and enrichment activities, or embark on a guided tour 
            to learn more about the park's conservation efforts and animal care initiatives. 
            With free admission and a commitment to education, conservation, and 
            community engagement, Cape May County Park & Zoo offers a memorable 
            and enriching experience for visitors of all backgrounds and interests.
        `,
        features: [
            "Accredited zoo with a diverse collection of animals",
            "Scenic park with gardens, trails, and picnic areas",
            "Daily feeding and enrichment activities",
            "Guided tours and educational programs",
            "Free admission (donations welcome)",
            "Gift shop and concessions onsite",
            "Accessibility features for visitors with disabilities"
        ]
    };

    return (
        <animated.div style={props}>
            <Layout>
                <div className="header" style={{ backgroundImage: `url(${Image7})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '300px' }}>
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

export default Place7;