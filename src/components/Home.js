import React from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import Layout from './Layout.js';
import './Global.css';

function Home() {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 300,
  });

  return (
    <animated.div style={props}>
      <Layout>
        <div className="Home">
          <h1>Welcome to our travel website!</h1>
          <p>Choose from one of our 10 places to learn more:</p>
          <div className="places-container">
            {[...Array(10)].map((_, index) => (
              <Link key={index} to={`/place${index + 1}`} className="place-link">
                <img src={`place${index + 1}.jpg`} alt={`Place ${index + 1}`} className="place-image" />
                <p>Place {index + 1}</p>
              </Link>
            ))}
          </div>
        </div>
      </Layout>
    </animated.div>
  );
}

export default Home;
