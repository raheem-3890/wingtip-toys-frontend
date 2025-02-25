// src/components/Navbar.js

import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import a CSS file for styling

function Navbar() {
  return (
    <nav className="navbar flex flex-row w-full bg-primary">
      <div className="flex flex-row justify-content-between w-full">
        <div className="flex flex-row">
          <div className="p-3 cursor-pointer">Wingtip Toys</div>

          <div className="flex flex-row">
            <div className="p-3 hover:bg-primary-400 cursor-pointer"> Home</div>
            <div className="p-3 hover:bg-primary-400 cursor-pointer">About</div>
            <div className="p-3 hover:bg-primary-400 cursor-pointer">
              Contact
            </div>
            <div className="p-3 hover:bg-primary-400 cursor-pointer">
              Products
            </div>
            <div className="p-3 hover:bg-primary-400 cursor-pointer">
              Cart (0)
            </div>
          </div>
        </div>
        <div className="flex flex-row ">
          <div className="p-3 hover:bg-primary-400 cursor-pointer">
            Register
          </div>
          <div className="p-3 hover:bg-primary-400 cursor-pointer">Login</div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
