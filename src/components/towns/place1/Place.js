import React from 'react';
import Layout from '../../Layout.js';
import { useSpring, animated } from 'react-spring';
import '../../Global.css';
import Image1 from '../../static/p1image1.jpg';
import Image2 from '../../static/p1image1.jpg';

function Place1() {
    const props = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        delay: 100,
    });

    const placeDetails = {
        name: "Liberty State Park",
        description: "A beautiful destination in New Jersey with stunning views and rich history.",
        address: "200 Morris Pesin Dr, Jersey City, NJ 07305",
        phone: "(201) 915-3402",
        hours: "Park is open daily from 6:00 AM to 10:00 PM",
        website: "https://www.state.nj.us/dep/parksandforests/parks/liberty_state_park/liberty_state_park_home.htm",
        about: "Liberty State Park is a green oasis in the middle of Metropolitan northern New Jersey. With the Manhattan skyline, the Statue of Liberty, and Ellis Island as a spectacular backdrop, Liberty State Park is one of the state's most dramatic parks.",
        features: [
            "Walking and biking paths",
            "Picnic areas",
            "Fishing and crabbing",
            "Playgrounds",
            "Interpretive center",
            "Ferry service to Statue of Liberty and Ellis Island"
        ]
    };

    const parkMapUrl = "https://example.com/park-map.jpg"; // Replace with actual URL for the park map

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
                            <h2>About Liberty State Park</h2>
                            <p>{placeDetails.about}</p>
                            <h2>Features</h2>
                            <ul>
                                {placeDetails.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Sidebar with Park Map and General Information */}
                        <div className="sidebar">
                            <div className="sidebar-content">
                                <div className="park-map">
                                    <img src={Image2} alt="Park Map" />
                                </div>
                                <div className="general-info">
                                    <h2>General Information</h2>
                                    <p>Address: {placeDetails.address}</p>
                                    <p>Phone: {placeDetails.phone}</p>
                                    <p>Hours: {placeDetails.hours}</p>
                                    <p>Website: <a href={placeDetails.website} target="_blank" rel="noopener noreferrer">{placeDetails.website}</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </animated.div>
    );
}

export default Place1;