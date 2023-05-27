import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./components/HomePage";
// import EventForm from "./components/EventForm";
import { EventsPage } from "./components/EventsPage";
import LogIn from "./components/LogIn";
import About from "./components/About";
import Contact from "./components/Contact";
import SignUp from "./components/SignUp";
import Cart from "./components/Cart";

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import { isAuthenticated, retrieveUser } from "./utils";
import Layout from "./components/Layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      id="root"
      element={<Layout />}
      loader={() => {
        if (isAuthenticated()) {
          return retrieveUser();
        }

        return null;
      }}
    >
      <Route path="/" element={<HomePage />} />
      <Route path="/events" element={<EventsPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/cart" element={<Cart />} />
    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router}>
      <Outlet />
    </RouterProvider>
  );
  // return <RouterProvider router={router} />;
}

export default App;
