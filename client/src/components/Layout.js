import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./NavBar";
import Footer from "./Footer";
import { isAuthenticated, retrieveUser } from "../utils";

export function loader() {
  if (isAuthenticated()) {
    return retrieveUser();
  }

  return null;
}

export default function Layout() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
