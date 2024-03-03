import React from "react";
import { Link } from "react-router-dom";
import "./../navbar/index.css"; // Import your CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          {/* <Link to="/" className="navbar-logo">
            Your Logo
          </Link> */}
        </div>
        <ul className="navbar-links">
          {/* <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
