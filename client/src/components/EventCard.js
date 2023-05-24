import React from 'react';


const EventCard = ({ event }) => {
  const { title, date, location, image} = event;

  return (
    <div className="event-card">
      <img src={image} alt={title} />
      <div className="event-details">
        <h2>{title}</h2>
        <p>Date: {date}</p>
        <p>Location: {location}</p>
        <button className="btn-card">Book Now</button>
      </div>
    </div>
  );
};

export default EventCard;
