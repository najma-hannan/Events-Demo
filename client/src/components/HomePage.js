import React, { useEffect, useState } from 'react';
import EventCard from './EventCard';

const HomePage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('http://localhost:3000/events');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error('Fetching events failed: ', error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div>
      <h1>Welcome to Event Hub</h1>
      <p>Discover and book exciting events near you.</p>
      <div className="event-list">
        {events.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
