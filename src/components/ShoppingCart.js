import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAtom } from "jotai";
import {
  catagoryList,
  filteredProducts,
  productListData,
  cartItemsData,
} from "../state/state";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

import { Button } from "primereact/button";

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useAtom(cartItemsData);
  const [total, setTotal] = useState(0);

  const [productList, setProductList] = useAtom(productListData);
  useEffect(() => {
    // axios.get('/api/cart')
    //   .then(response => {
    //     console.log('Fetched cart items:', response.data);
    //     setCartItems(response.data.items);
    //     setTotal(response.data.total);
    //   })
    //   .catch(error => {
    //     console.error('Error fetching cart items:', error);
    //   });

    const addCartItems = productList.filter((product) => product.quntity > 0);

    console.log("Add to cart items", addCartItems);

    setCartItems(addCartItems);
    //setTotal(mockCartData.total);
  }, [productList]);
  const updateCart = () => {
    axios
      .post("/api/cart", { items: cartItems })
      .then((response) => {
        console.log("Cart updated:", response.data);
        setCartItems(response.data.items);
        setTotal(response.data.total);
      })
      .catch((error) => {
        console.error("Error updating cart:", error);
      });
  };
  const handleQuantityChange = (productId, quantity) => {
    const updatedItems = cartItems.map((item) =>
      item.productID === productId
        ? { ...item, quantity: parseInt(quantity, 10) }
        : item
    );
    setCartItems(updatedItems);
  };
  const handleRemoveItem = (productId) => {
    const updatedItems = cartItems.filter(
      (item) => item.productID !== productId
    );
    setCartItems(updatedItems);
  };

  const footer = `In total there are ${
    cartItems ? cartItems.length : 0
  } products.`;

  const imageBodyTemplate = (product) => {
    return (
      <img
        src={`./assets/catalog/images/thumbs/${product.imagePath}`}
        alt={product.productName}
        className="w-6rem shadow-2 border-round"
      />
    );
  };

  const priceBodyTemplate = (product) => {
    return formatCurrency(product.unitPrice);
  };

  const formatCurrency = (value) => {
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  const removeAddToCart = (product) => {
    console.log("removeAddToCart", product);

    const removedCartProduct = {
      ...product,
      quntity: 0,
    };

    setProductList((products) => {
      const removedProduct = products.map((p) => {
        if (p.productID === removedCartProduct.productID) {
          return removedCartProduct;
        }
        return p;
      });
      return removedProduct;
    });
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <div>Your cart is empty</div>
      ) : (
        <div>
          <div className="card mb-3">
            <DataTable
              value={cartItems}
              footer={footer}
              tableStyle={{ minWidth: "60rem" }}
            >
              <Column field="productID" header="ID"></Column>
              <Column field="productName" header="Name"></Column>
              <Column header="Image" body={imageBodyTemplate}></Column>
              <Column
                field="price"
                header="Price (each)"
                body={priceBodyTemplate}
              ></Column>

              <Column field="quntity" header="Quantity"></Column>
              <Column
                header="Item total"
                body={(product) => {
                  return (
                    <span>
                      ${(product.unitPrice * product.quntity).toFixed(2)}
                    </span>
                  );
                }}
              ></Column>
              <Column
                header=""
                body={(product) => {
                  return (
                    <Button
                      icon="pi pi-times"
                      rounded
                      severity="danger"
                      aria-label="Cancel"
                      onClick={() => {
                        removeAddToCart(product);
                      }}
                    />
                  );
                }}
              ></Column>
            </DataTable>
          </div>

          <div className="flex align-items-center flex-column gap-2">
            <div className="flex gap-2">
              <div className="font-bold text-lg">Order Total: </div>
              <div className="text-lg">
                $
                {cartItems
                  .reduce((count, items) => {
                    return (count += items.unitPrice * items.quntity);
                  }, 0)
                  .toFixed(2)}
              </div>
            </div>

            <div>
              <Button
                label="Checkout with Paypal"
                icon="pi pi-paypal"
                onClick={updateCart}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default ShoppingCart;
