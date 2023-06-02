import React from "react";
import { useState } from 'react';

const EventCard = ({ event }) => {
  const { id, title, date, location, image } = event;
  const [isBooked, setIsBooked] = useState(false);

  const handleBookEvent = () => {
    // Perform booking logic here
    // Example: Call the backend API to book the event
    fetch(`/api/events/${id}/bookings`, {
      method: 'POST',
      // Additional headers or authentication tokens if required
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response from the backend
        setIsBooked(true);
        console.log('Event booked!', data);
      })
      .catch(error => {
        // Handle any errors that occurred during the booking process
        console.error('Error booking event:', error);
      });
  };

  return (
    <div className="event-card">
      <img src={image} alt={title} />
      <div className="event-details">
        <h2>{title}</h2>
        <p>Date: {date}</p>
        <p>Location: {location}</p>
        {isBooked ? (
          <p>Event booked!</p>
        ) : (
          <button className="btn-card" onClick={handleBookEvent}>
            Book Now
          </button>
        )}
      </div>
    </div>
  );
};

export default EventCard;

