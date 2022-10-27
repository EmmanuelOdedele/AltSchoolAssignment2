import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/nav-bar.css"

function Navigation() {
  return (
    <nav className="nav-bar">
      <NavLink to="/" end>
        HomePage
      </NavLink>
      <NavLink to="/contact">ContactPage</NavLink>
      <NavLink to="/users">Users</NavLink>
    </nav>
  );
}

export default Navigation;
