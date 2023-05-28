import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import LandingPage from './components/LandingPage';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import EventForm from './components/EventForm';
import SingleEventPage from './components/SingleEventPage';
import Layout, { loader as layoutLoader } from "./components/Layout";
import PrivateRoute from "./components/PrivateRoute";
import ProfilePage from "./components/ProfilePage";
import './api/bootstrap';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      id="root"
      element={<Layout />}
      loader={layoutLoader}
    >
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/signup" element={<SignUp />} />

      <Route path="/events" element={<EventForm />} />

      <Route element={<PrivateRoute />}>
        <Route path="/profile" element={<ProfilePage/>} />

        <Route path="/events/:id" element={<SingleEventPage />} />
      </Route>

    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
