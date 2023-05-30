import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { isAuthenticated, retrieveUser } from "../utils";

export async function loader() {
  if (!isAuthenticated()) {
    return null;
  }

  return await retrieveUser();
}

export default function Layout() {
  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      <header>
        <NavBar />
      </header>
      <main className="flex-grow-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
