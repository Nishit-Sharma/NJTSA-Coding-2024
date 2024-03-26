import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import './Global.css';

function Home() {
  return (
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
  );
}

export default Home;
