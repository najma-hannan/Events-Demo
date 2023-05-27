import React, { useEffect, useState } from 'react';
import EventCard from './EventCard';
import axios from 'axios';
import concert2 from '../images/concert2.jpg';

const HomePage = () => {
  const [events, setEvents] = useState([]);

  function fetchEvents() {
    axios.get("/events")
      .then(res => {
        setEvents(res.data);
      }).catch(error => {
        console.error(error);
      });
  }

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div>
      <h1>Welcome to Event Hub</h1>
      <p>Discover and book exciting events near you.</p>
      <div className="image-container">
      <img src={concert2} alt="Event Hub Logo" />
      </div>
      <div className="event-list">
        {events.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
