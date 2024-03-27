import React from 'react';
import Layout from '../../Layout.js';
import { useSpring, animated } from 'react-spring';
import '../../Global.css';

function Place5() {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 100,
  });

const placeDetails = {
    name: "Example Place",
    description: "A beautiful destination in New Jersey with stunning views and rich history.",
    address: "123 Main Street, New Jersey",
    phone: "123-456-7890"
};

const activities = [
    {
        name: "Grounds For Sculpture",
        description: "A sculpture park with a vast collection of contemporary sculptures.",
        link: "https://www.groundsforsculpture.org/"
    },
    {
        name: "Atlantic City Boardwalk",
        description: "Iconic boardwalk known for its casinos, shops, and entertainment.",
        link: "https://www.atlanticcitynj.com/"
    },
    {
        name: "Ocean City Boardwalk",
        description: "Family-friendly boardwalk offering shops, eateries, and amusements.",
        link: "https://ocnj.us/"
    }
];

return (
    <animated.div style={props}>
        <Layout>
            <div className="place-container">
                <h1>{placeDetails.name}</h1>
                <p>{placeDetails.description}</p>
                <p>Address: {placeDetails.address}</p>
                <p>Phone: {placeDetails.phone}</p>
                <h2>Activities in New Jersey</h2>
                {activities.map((activity, index) => (
                    <div key={index} className="activity">
                        <h3>{activity.name}</h3>
                        <p>{activity.description}</p>
                        <a href={activity.link} target="_blank" rel="noopener noreferrer">Visit Website</a>
                    </div>
                ))}
            </div>
        </Layout>
    </animated.div>
);
}

export default Place5;