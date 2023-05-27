import React, {useState} from 'react';
import StarRating from './StarRating';

const EventCard = ({ event }) => {
  const { title, date, location,image, rating} = event;

  const [updatedRating, setUpdatedRating] = useState(rating);


  function handleUpdateRating(pct) {
    const newRating = pct * 5;
    fetch(`http://localhost:3000/event/title`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ rating: newRating }),
    })
      .then((r) => r.json())
      .then((data) => setUpdatedRating(data.rating));
  }

  return (
    <div className="event-card">
      <img src={image} alt={title} />
      <div className="event-details">
        <h2>{title}</h2>
        <p>Date: {date}</p>
        <p>Location: {location}</p>
        <button className="btn-card">Get Ticket</button>
        <div>
           Rating:{" "}
         <StarRating percentage={updatedRating / 5} onClick={handleUpdateRating} />
        </div>
      </div>
    </div>
  );
};

export default EventCard;
