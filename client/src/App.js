import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./components/HomePage";
import EventForm from "./components/EventForm";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import Cart from "./pages/Cart";
import Navbar from "./components/NavBar";
import Tickets from "./pages/Tickets";
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
          <Route path="/log-in" element={<LogIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/tickets" element={<Tickets />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
