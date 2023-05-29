import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import axios from 'axios';
import { HeroSection } from './HeroSection';

export async function loader() {
  try {
    const response = await axios.get("/events");
    return await response.data;
  } catch (error) {
    console.error(error);
  }
}


const LandingPage = () => {
  const events = useLoaderData();


  return (
    <>
      <HeroSection />

      <section className="py-5 container">
        <h2>Upcoming Events</h2>

        <ul className="event-list">
          {events.map(event => (
            <li key={event.id}>
              <Link to={`/events/${event.id}`}>{event.name}</Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default LandingPage;
