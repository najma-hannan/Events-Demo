import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./components/HomePage";
import EventForm from "./components/EventForm";
import LogIn from "./components/LogIn";
import About from "./components/About";
import Contact from "./components/Contact";
import SignUp from "./components/SignUp";
import Cart from "./pages/Cart";
import Navbar from "./components/NavBar";
// import NavigationBar from "./components/NavigationBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        {/* <NavigationBar /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events" element={<EventForm />} />
<<<<<<< Updated upstream
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
=======
>>>>>>> Stashed changes
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
