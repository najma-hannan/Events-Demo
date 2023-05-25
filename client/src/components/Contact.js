import React from 'react';
import concert2 from "../images/concert2.jpg"

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p className="contact-description">We would love to hear from you! Please get in touch for any inquiries or feedback.</p>
      <ul className="contact-details">
        <li><strong>Email:</strong> info@example.com</li>
        <li><strong>Phone:</strong> +254 722390950</li>
        <li><strong>Address:</strong> Nairobi, Kenya</li>
      </ul>
      <div className="card">
    <img src={concert2} alt="concert2" />
      </div>
    </div>
  );
};

export default Contact;
