// src/components/Navbar.js

import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import "./Navbar.css"; // Import a CSS file for styling

function Navbar() {
  const history = useHistory();
  const location = useLocation();

  const handleNavigation = (path) => {
    history.push(path);
  };

  const getLinkActiveClass = (path) => {
    return location.pathname === path ? "bg-primary-600" : "";
  };

  return (
    <nav className="bg-primary flex justify-content-between px-5 align-items-center">
      <div className="flex align-items-center">
        <div className="w-10rem">
          <a
            className="no-underline text-white text-lg font-semibold block p-3 relative"
            onClick={(e) => {
              e.preventDefault();
              handleNavigation("/");
            }}
          >
            <img
              src="../assets/logo-white-transparent-1.png"
              width="100%"
              className="logo-scale block md:absolute md:top-0 -m-1"
            ></img>
          </a>
        </div>
        <ul className=" m-0 hidden md:flex">
          <li className="list-none">
            <a
              href="#"
              className={`no-underline text-white block p-3 hover:bg-primary-600 ${getLinkActiveClass(
                "/home"
              )}`}
            >
              Home
            </a>
          </li>
          <li className="list-none">
            <a
              href="#"
              className={`no-underline text-white block p-3 hover:bg-primary-600 ${getLinkActiveClass(
                "/about"
              )}`}
            >
              About
            </a>
          </li>
          <li className="list-none">
            <a
              href="#"
              className={`no-underline text-white block p-3 hover:bg-primary-600 ${getLinkActiveClass(
                "/contact"
              )}`}
            >
              Contact
            </a>
          </li>
          <li className="list-none">
            <a
              href="#"
              className={`no-underline text-white block p-3 hover:bg-primary-600 ${getLinkActiveClass(
                "/products"
              )}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavigation("/products");
              }}
            >
              Products
            </a>
          </li>
          <li className="list-none">
            <a
              href="#"
              className="no-underline text-white block p-3 hover:bg-primary-600"
            >
              Cart (0)
            </a>
          </li>
        </ul>
      </div>

      <div>
        <ul className="hidden md:flex m-0 ">
          <li className="list-none">
            <a
              href="#"
              className="no-underline text-white block p-3 hover:bg-primary-600"
            >
              Register
            </a>
          </li>
          <li className="list-none">
            <a
              href="#"
              className="no-underline text-white block p-3 hover:bg-primary-600"
            >
              Login
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
