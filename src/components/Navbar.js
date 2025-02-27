// src/components/Navbar.js

import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

import "./Navbar.css"; // Import a CSS file for styling

import { useAtom } from "jotai";
import {
  catagoryList,
  filteredProducts,
  productListData,
  cartItemsData,
} from "../state/state";

function Navbar() {
  const history = useHistory();
  const location = useLocation();

  const [products, setProducts] = useAtom(filteredProducts);

  const [totalCartCount, setAddCartCount] = useState(null);
  const [productList, setProductList] = useAtom(productListData);

  useEffect(() => {
    const addCartCount = productList.reduce((count, product) => {
      if (product.quntity) {
        count += product.quntity;
      }
      return count;
    }, 0);
    console.log("Navbar", addCartCount);

    setAddCartCount(addCartCount || 0);
  }, [products, productList]);

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
            className="no-underline text-white text-lg font-semibold block p-3 relative cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              handleNavigation("/");
            }}
          >
            <img
              src={"./assets/logo-white-transparent-1.png"}
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
              onClick={(e) => {
                e.preventDefault();
                handleNavigation("/home");
              }}
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
              onClick={(e) => {
                e.preventDefault();
                handleNavigation("/about");
              }}
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
              onClick={(e) => {
                e.preventDefault();
                handleNavigation("/contact");
              }}
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
              className={`no-underline text-white block p-3 hover:bg-primary-600 ${getLinkActiveClass(
                "/shopping-cart"
              )}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavigation("/shopping-cart");
              }}
            >
              Cart ({totalCartCount})
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
