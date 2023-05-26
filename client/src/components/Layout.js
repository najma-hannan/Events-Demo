import { Outlet } from "react-router-dom";
import Navbar from "./NavBar";

export default function Layout() {
  return (
    <div>
      <header>
        <Navbar cartCount={cartCount} />
        <main>
          <Outlet />
        </main>
      </header>
    </div>
  );
}
