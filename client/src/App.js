import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import LandingPage from "./components/LandingPage";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import SingleEventPage, {
  loader as singleEventLoader,
} from "./components/SingleEventPage";
import Layout, { loader as layoutLoader } from "./components/Layout";
import PrivateRoute from "./components/PrivateRoute";
import ProfilePage from "./components/ProfilePage";
import "./api/bootstrap";
import AdminPrivateRoute from "./components/AdminPrivateRoute";
import ListEvents, {
  loader as listEventsLoader,
} from "./components/Admin/ListEvents";
import CreateEvent from "./components/Admin/CreateEvent";
import EditEvent, {
  loader as editEventLoader,
} from "./components/Admin/EditEvent";
import EventsGalleryPage, {
  loader as eventGalleryLoader,
} from "./components/EventsGalleryPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route id="root" element={<Layout />} loader={layoutLoader}>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/signup" element={<SignUp />} />

      <Route
        path="/events"
        element={<EventsGalleryPage />}
        loader={eventGalleryLoader}
      />

      <Route element={<PrivateRoute />}>
        <Route path="profile" element={<ProfilePage />} />

        <Route
          path="events/:event_id"
          element={<SingleEventPage />}
          loader={singleEventLoader}
        />

        {/* Admin related routes */}
        <Route path="admin" element={<AdminPrivateRoute />}>
          <Route path="events">
            <Route
              index={true}
              element={<ListEvents />}
              loader={listEventsLoader}
            />
            <Route path="new" element={<CreateEvent />} />
            <Route
              path=":event_id/edit"
              element={<EditEvent />}
              loader={editEventLoader}
            />
          </Route>
        </Route>
      </Route>
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
