import React, { useState } from 'react';

const EventForm = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');

const handleSubmit = async (event) => {
  event.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, date, location, description }),
      });
const data = await response.json();
    console.log(data);

  } catch (error) {
    console.error('Event creation failed', error);
  }

    // Reset the form fields
    setTitle('');
    setDate('');
    setLocation('');
    setDescription('');
};

return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>

      {/* <div>
        <label htmlFor="price">Price:</label>
        <textarea
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div> */}
      <button type="submit">Create Event</button>
    </form>
  );
};

export default EventForm;
