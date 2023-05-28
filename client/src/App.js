import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import About from './components/About';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import PrivateRoute from './components/PrivateRoute';
import EventForm from './components/EventForm';
import SingleEventPage from './components/SingleEventPage';

const events = [ // Just a placeholder, your data would likely come from an API
  { id: 1, name: 'Event 1' },
  { id: 2, name: 'Event 2' },
];

const App = () => (
  <Router>
    <Navbar />
    <Route exact path="/" component={() => <LandingPage events={events} />} />
    <Route path="/about" component={About} />
    <Route path="/login" component={LogIn} />
    <Route path="/signup" component={SignUp} />
    <PrivateRoute path="/events" component={EventForm} />
    <PrivateRoute path="/event/:id" component={SingleEventPage} />
    <Footer />
  </Router>
);

export default App;
