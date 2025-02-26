import React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import ShoppingCart from "./components/ShoppingCart";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="App p-3">
          <Switch>
            <Redirect exact from="/" to="/home" />
            <Route path="/products" component={ProductList} />
            <Route
              path="/product-details/:productId"
              component={ProductDetails}
            />
            <Route path="/shopping-cart" component={ShoppingCart} />
            <Route path="/Home" component={Home} />
            <Route path="**" component={NotFound} />
            {/* Add more routes as needed */}
          </Switch>
        </div>
      </Router>
    </>
  );
}
export default App;
