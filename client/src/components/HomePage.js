import React from "react";
import EventCard from "./EventCard";

const HomePage = () => {
  // Sample event data
  const events = [
    {
      id: 1,
      title: "Music Concert",
      date: "June 15, 2023",
      location: "City Stadium",
      image: "logo192.png",
    },
    {
      id: 2,
      title: "Art Exhibition",
      date: "July 10, 2023",
      location: "Art Gallery",
      image: "logo192.png",
    },
    // Add more events as needed
  ];

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
