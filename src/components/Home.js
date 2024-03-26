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
            <Link key={1} to={`/place${1}`} className="place-link">
              <img src={`place${1}.jpg`} alt={`Place ${1}`} className="place-image" />
              <p>Liberty State Park</p>
            </Link>
            <Link key={2} to={`/place${2}`} className="place-link">
              <img src={`place${2}.jpg`} alt={`Place ${2}`} className="place-image" />
              <p>Grounds For Sculpture</p>
            </Link>
            <Link key={3} to={`/place${3}`} className="place-link">
              <img src={`place${3}.jpg`} alt={`Place ${3}`} className="place-image" />
              <p>Statue of Liberty</p>
            </Link>
            <Link key={4} to={`/place${4}`} className="place-link">
              <img src={`place${4}.jpg`} alt={`Place ${4}`} className="place-image" />
              <p>Six Flag Great Adventure</p>
            </Link>
            <Link key={5} to={`/place${5}`} className="place-link">
              <img src={`place${5}.jpg`} alt={`Place ${5}`} className="place-image" />
              <p>Adventure Aquarium</p>
            </Link>
            <Link key={6} to={`/place${6}`} className="place-link">
              <img src={`place${6}.jpg`} alt={`Place ${6}`} className="place-image" />
              <p>Liberty Science Center</p>
            </Link>
            <Link key={7} to={`/place${7}`} className="place-link">
              <img src={`place${7}.jpg`} alt={`Place ${7}`} className="place-image" />
              <p>Cape May County Park & Zoo</p>
            </Link>
            <Link key={8} to={`/place${8}`} className="place-link">
              <img src={`place${8}.jpg`} alt={`Place ${8}`} className="place-image" />
              <p>Morey’s Piers & Beachfront</p>
            </Link>
            <Link key={9} to={`/place${9}`} className="place-link">
              <img src={`place${9}.jpg`} alt={`Place ${9}`} className="place-image" />
              <p>Delaware Water Gap National Recreation Area</p>
            </Link>
            <Link key={10} to={`/place${10}`} className="place-link">
              <img src={`place${10}.jpg`} alt={`Place ${10}`} className="place-image" />
              <p>Atlantic City Boardwalk</p>
            </Link>
          </div>
        </div>
      </Layout>
    </animated.div>
  );
}

export default Home;
