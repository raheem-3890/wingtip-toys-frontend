import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import ShoppingCart from "./components/ShoppingCart";

import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="App p-3">
          <Switch>
            <Route path="/" exact component={ProductList} />
            <Route path="/products" component={ProductList} />
            <Route
              path="/product-details/:productId"
              component={ProductDetails}
            />
            <Route path="/shopping-cart" component={ShoppingCart} />
            {/* Add more routes as needed */}
          </Switch>
        </div>
      </Router>
    </>
  );
}
export default App;
