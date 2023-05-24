const express = require('express');
const app = express();

// Example route
app.get('/api/events', (req, res) => {
  // Logic to fetch events from the database or other data source
  const events = [
    { id: 1, title: 'Event 1' },
    { id: 2, title: 'Event 2' },
    { id: 3, title: 'Event 3' },
  ];
  
  res.json(events);
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


