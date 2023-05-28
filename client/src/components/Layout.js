import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./NavBar";
import Footer from "./Footer";
import { isAuthenticated, retrieveUser } from "../utils";

export async function loader() {
  if (!isAuthenticated()) {
    return null;
  }

  return await retrieveUser();
}

export default function Layout() {
  return (
    <div className="d-flex flex-column" style={{minHeight: '100vh'}}>
      <header>
        <Navbar />
      </header>
      <main className="flex-grow-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
