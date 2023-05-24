// import logo from './logo.svg';
import './App.css';
import EventForm from './components/EventForm';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import LogIn from './components/LogIn';
import Navbar from './components/NavBar';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <HomePage/>
      <EventForm/>
      <SignUp/>
      <LogIn/>
    </div>
  );
}

export default App;
