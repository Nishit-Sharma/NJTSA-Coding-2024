import React from 'react';
import Layout from '../../Layout.js';
import { useSpring, animated } from 'react-spring';
import '../../Global.css';
import Image1 from '../../static/p1image1.jpg';
import Image2 from '../../static/p1image2.png';

function Place1() {
    const props = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        delay: 100,
    });

    const placeDetails = {
        name: "Liberty State Park",
        description: "Experience the harmony of nature and urban splendor at Liberty State Park, a sprawling oasis nestled along the picturesque Hudson River waterfront.",
        address: "1 Audrey Zapp Dr, Jersey City, NJ 07305",
        phone: "(201) 915-3402 ext. 101",
        hours: "6:00 AM - 10:00 PM",
        website: "https://www.nj.gov/dep/parksandforests/parks/libertystatepark.html",
        about: `
            Liberty State Park is a stunning fusion of natural beauty and historical significance, 
            offering visitors a multifaceted experience that celebrates the spirit of freedom and exploration. 
            Spanning over 1,200 acres, this iconic park boasts panoramic views of the Manhattan skyline, 
            the majestic Statue of Liberty, and the historic Ellis Island. Immerse yourself in the tranquility 
            of its lush landscapes, embark on scenic waterfront walks, or enjoy recreational activities such as 
            biking, fishing, and picnicking. Delve into the park's rich history with visits to the Central Railroad 
            of New Jersey Terminal and the Liberty Science Center. With its diverse array of attractions and scenic 
            vistas, Liberty State Park invites you to embark on an unforgettable journey of discovery and relaxation.
        `,
        features: [
            "Scenic waterfront promenades with stunning views of the Manhattan skyline, Statue of Liberty, and Ellis Island",
            "Biking and walking paths that wind through lush greenery and along the riverfront",
            "Picnic areas equipped with tables, grills, and breathtaking vistas for al fresco dining",
            "Fishing and crabbing opportunities along the Hudson River waterfront",
            "Playgrounds and recreational facilities for children and families to enjoy",
            "Historic sites such as the Central Railroad of New Jersey Terminal and the Empty Sky Memorial",
            "Educational experiences at the Liberty Science Center, where science and history come alive",
            "Ferry service to the Statue of Liberty and Ellis Island, providing a unique perspective on American history"
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

                        {/* Sidebar with Park Map and General Information */}
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

export default Place1;