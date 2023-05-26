import React, { useEffect, useState } from "react";
import EventCard from "./EventCard";
import axios from "axios";

const HomePage = () => {
  const [events, setEvents] = useState([]);

  function fetchEvents() {
    axios
      .get("/events")
      .then((res) => {
        setEvents(res.data);
      })
      .catch((error) => {
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
      <div className="event-list">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
