import React, { useState } from 'react';
import StarRating from './StarRating';

const EventCard = ({ event }) => {
  const { id, title, date, location, image, rating } = event;

  const [isBooked, setIsBooked] = useState(false);
  const [isRated, setIsRated] = useState(false);
  const [updatedRating, setUpdatedRating] = useState(rating);

  function handleBookEvent() {
    fetch(`http://localhost:3000/events/${id}/book`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    })
      .then((response) => response.json())
      .then((data) => {
        setIsBooked(true);
        setIsRated(false);
      })
      .catch((error) => {
        console.error('Error booking event:', error);
      });
  }

  function handleUpdateRating(pct) {
    const newRating = pct * 5;
    fetch(`http://localhost:3000/events/${id}/rate`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ rating: newRating }),
    })
      .then((response) => response.json())
      .then((data) => {
        setUpdatedRating(data.rating);
        setIsRated(true);
      })
      .catch((error) => {
        console.error('Error updating rating:', error);
      });
  }

  return (
    <div className="event-card">
      <img src={image} alt={title} />
      <div className="event-details">
        <h2>{title}</h2>
        <p>Date: {date}</p>
        <p>Location: {location}</p>
        {isBooked && <p>Event booked!</p>}
        {!isBooked && (
          <button className="btn-card" onClick={handleBookEvent}>
            Book Now
          </button>
        )}
        {isRated && (
          <div>
            <p>Event rated: {updatedRating}</p>
            <StarRating rating={updatedRating} />
          </div>
        )}
        {!isRated && (
          <div>
            <p>Rate this event:</p>
            <StarRating handleUpdateRating={handleUpdateRating} />
          </div>
        )}
      </div>
    </div>
  );
};

export default EventCard;
