import React from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import Layout from './Layout.js';
// import { Box, Center, Image, Flex, Badge, Text } from "@chakra-ui/react";

import './Global.css';
import Image1 from './static/image1.jpg';
import Image2 from './static/image2.jpg';
import Image3 from './static/image3.jpg';
import Image4 from './static/image4.jpg';
import Image5 from './static/image5.jpg';
import Image6 from './static/image6.jpg';
import Image7 from './static/image7.jpg';
import Image8 from './static/image8.jpg';
import Image9 from './static/image9.jpg';
import Image10 from './static/image10.jpg';


function Home() {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 100,
  });

  return (
    <animated.div style={props}>
      <Layout>
        <div className="Home">
          <h1>Welcome to our travel website!</h1>
          <p>Choose from one of our 10 places to learn more:</p>
          <div className="places-container">
            <Link key={1} to={`/place${1}`} className="place-link">
              <img src={Image1} alt={`Liberty State Park`} className="place-image" />
              <p>Liberty State Park</p>
            </Link>
            <Link key={2} to={`/place${2}`} className="place-link">
              <img src={Image2} alt={`Grounds For Sculpture`} className="place-image" />
              <p>Grounds For Sculpture</p>
            </Link>
            <Link key={3} to={`/place${3}`} className="place-link">
              <img src={Image3} alt={`Statue of Liberty`} className="place-image" />
              <p>Statue of Liberty</p>
            </Link>
            <Link key={4} to={`/place${4}`} className="place-link">
              <img src={Image4} alt={`Six Flags Great Adventure`} className="place-image" />
              <p>Six Flag Great Adventure</p>
            </Link>
            <Link key={5} to={`/place${5}`} className="place-link">
              <img src={Image5} alt={`Adventure Aquarium`} className="place-image" />
              <p>Adventure Aquarium</p>
            </Link>
            <Link key={6} to={`/place${6}`} className="place-link">
              <img src={Image6} alt={`Liberty Science Center`} className="place-image" />
              <p>Liberty Science Center</p>
            </Link>
            <Link key={7} to={`/place${7}`} className="place-link">
              <img src={Image7} alt={`Cape May County Park & Zoo`} className="place-image" />
              <p>Cape May County Park & Zoo</p>
            </Link>
            <Link key={8} to={`/place${8}`} className="place-link">
              <img src={Image8} alt={`Morey’s Piers & Beachfront`} className="place-image" />
              <p>Morey’s Piers & Beachfront</p>
            </Link>
            <Link key={9} to={`/place${9}`} className="place-link">
              <img src={Image9} alt={`Delaware Water Gap National Recreation Area`} className="place-image" />
              <p>Delaware Water Gap National Recreation Area</p>
            </Link>
            <Link key={10} to={`/place${10}`} className="place-link">
              <img src={Image10} alt={`Atlantic City Boardwalk`} className="place-image" />
              <p>Atlantic City Boardwalk</p>
            </Link>
          </div>
        </div>
      </Layout>
    </animated.div>
  );
}

export default Home;