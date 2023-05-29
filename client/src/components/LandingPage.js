import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import concert2 from "../images/concert2.jpg";

const LandingPage = () => {
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
      <h1>Welcome to Events Hub</h1>
      <p>Discover and book exciting events near you.</p>
      <div className="image-container">
        <img src={concert2} alt="Event Hub Logo" />
      </div>
      <div className="event-list">
        {events.map((event) => (
          <div key={event.id}>
            <Link to={`/events/${event.id}`}>{event.name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
