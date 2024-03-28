// Place9.js

import React from 'react';
import Layout from '../../Layout.js';
import { useSpring, animated } from 'react-spring';
import Image1 from '../../static/p9image1.jpg'; // Assuming this is the image for Delaware Water Gap National Recreation Area
import Image2 from '../../static/p9image2.webp';

function Place9() {
    const props = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        delay: 100,
    });

    const placeDetails = {
        name: "Delaware Water Gap National Recreation Area",
        description: "Immerse yourself in the beauty of nature and explore the wonders of the Delaware Water Gap National Recreation Area, a pristine wilderness sanctuary spanning the Delaware River in New Jersey and Pennsylvania.",
        address: "1978 River Rd, Bushkill, PA 18324",
        phone: "(570) 426-2452",
        hours: "Open daily from sunrise to sunset",
        website: "https://www.nps.gov/dewa/index.htm",
        about: `
            The Delaware Water Gap National Recreation Area offers a tranquil retreat from the hustle and bustle of everyday life, 
            with lush forests, cascading waterfalls, and breathtaking vistas awaiting visitors at every turn. 
            Explore over 70,000 acres of pristine wilderness, where outdoor enthusiasts can enjoy a variety of recreational activities, 
            including hiking, biking, fishing, camping, and wildlife viewing. 
            Discover the natural beauty of the Delaware River as it winds its way through towering cliffs and verdant valleys, 
            or embark on a scenic drive along the historic Old Mine Road. 
            With numerous trails, picnic areas, and scenic overlooks to explore, 
            the Delaware Water Gap National Recreation Area offers endless opportunities for adventure and relaxation in the great outdoors.
        `,
        features: [
            "Over 100 miles of hiking trails, ranging from easy strolls to challenging hikes",
            "Scenic drives along the historic Old Mine Road and Delaware River Scenic Byway",
            "Opportunities for camping, fishing, boating, and swimming",
            "Spectacular waterfalls, including Dingmans Falls and Raymondskill Falls",
            "Abundant wildlife, including white-tailed deer, black bears, and bald eagles",
            "Visitor centers with exhibits, information, and ranger-led programs",
            "Picnic areas, overlooks, and scenic vistas throughout the park",
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

export default Place9;