import React from "react";
import { NavLink } from "react-router-dom";

import "./Header.css";

function Header() {
  return (
    <nav className="navbar justify-content-center navbar-expand-lg navbar-light bg-light ">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="navbar-collapse collapse justify-content-center"
        id="navbarNav"
      >
        <ul className="navbar-nav">
        
          <li className="nav-item">
            <NavLink className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link" } 
                to="/home">Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link" } 
                to="/about">About
            </NavLink>
          </li>    
          <li className="nav-item">
            <NavLink className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link" } 
                to="/calculator">Calculator
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link" } 
                to="/greeter">Greeter
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
