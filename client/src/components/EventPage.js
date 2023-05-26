import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SingleEventPage = () => {
  const [event, setEvent] = useState(null);
  const [tickets, setTickets] = useState([]);
  const [selectedTickets, setSelectedTickets] = useState([]);

  useEffect(() => {
    fetchEvent();
  }, []);

  const fetchEvent = async () => {
    try {
      const response = await axios.get('/api/events/:id'); // Replace with your API endpoint to fetch event details
      setEvent(response.data.event);
      setTickets(response.data.tickets);
    } catch (error) {
      console.log(error);
    }
  };

  const handleTicketQuantityChange = (ticketId, quantity) => {
    const updatedTickets = selectedTickets.map((ticket) => {
      if (ticket.ticketId === ticketId) {
        return { ...ticket, quantity };
      }
      return ticket;
    });
    setSelectedTickets(updatedTickets);
  };

  const handleOrderSubmit = async () => {
    try {
      const payload = {
        user_id: 1,
        tickets: selectedTickets,
      };
      const authToken = localStorage.getItem('authToken');
      const headers = {
        Authorization: `Bearer ${authToken}`,
      };
      const response = await axios.post('/api/events/:id/orders', payload, { headers });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!event) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{event.title}</h1>
      <p>Date: {event.date}</p>
      <p>Location: {event.location}</p>

      <h2>Tickets</h2>
      {tickets.map((ticket) => (
        <div key={ticket.id}>
          <p>{ticket.name}</p>
          <input
            type="number"
            value={selectedTickets.find((t) => t.ticketId === ticket.id)?.quantity || 0}
            onChange={(e) => handleTicketQuantityChange(ticket.id, parseInt(e.target.value))}
          />
        </div>
      ))}

      <button onClick={handleOrderSubmit}>Place Order</button>
    </div>
  );
};

export default SingleEventPage;
