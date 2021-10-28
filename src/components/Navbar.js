import React from "react";
import { Link } from "react-router-dom";
import mealsdb from "../mealsdb.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/">
          <img src={mealsdb} alt="meal db logo" className="logo"></img>
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/random">RandomMeal</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
