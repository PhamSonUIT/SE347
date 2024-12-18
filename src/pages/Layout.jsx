import React from "react";
import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <>
      <nav>
        <ul>
            <li>
                <Link to="/Home">Home</Link>
            </li>
            <li>
                <Link to="/watch">Watch</Link>
            </li>
            <li>
                <Link to="/Login">Login</Link>
            </li>
            <li>
                <Link to="/Profile">Profile</Link>
            </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default Layout;
