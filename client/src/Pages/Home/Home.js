import React from 'react';
import './Home.css';
import worldMap from '../Assets/worldMap.png';
import Statisticas from '../Statisticas/Statisticas';

const Home = () => {
  return (
    <div className="home-page">
      <img src={worldMap} alt="img" className="background-img" width={800} />
      <p className="paragraphe">Welcome to DOCTORIGHT</p>
      <h1 className="first-one">Discover the right</h1>
      <h1 className="second-one">care for you</h1>
      <p className="second-para">
        At DOCTORIGHT, we believe that everyone deserves personalized
        healthcare. Our platform connects you with qualified doctors who provide
        tailored medical solutions. Whether you need a routine checkup or
        specialized treatment, our team of healthcare professionals is here to
        help you. With DOCTORIGHT, you are in good hands.
      </p>
      <a href="/">
        <button type="button" className="first-btn">
          Explore now
        </button>
      </a>

      <a href="/">
        <button type="button" className="second-btn">
          Get Started
        </button>
      </a>

      <Statisticas />
    </div>
  );
};

export default Home;
