import React from 'react';
import concert1 from "../images/concert1.jpg"


const About = () => {
  return (
    <>
    <div className="about-container">
      <h2>About Us</h2>
      <p className="about-description">We are a leading event management company dedicated to creating extraordinary experiences for our clients.</p>
      <p className="about-description">Our team of passionate professionals is committed to delivering innovative and memorable events. From corporate conferences to live concerts, we strive to exceed expectations and leave a lasting impression.</p>
      <div className="card">
    <img src={concert1} alt="concert" />
      </div>
    </div>
    </>
  );
};

export default About;
