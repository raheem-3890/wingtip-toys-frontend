import React, { useState, useEffect } from "react";
import axios from "axios";

import { useHistory } from "react-router-dom";

import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { useAtom } from "jotai";
import {
  catagoryList,
  filteredProducts,
  productListData,
  cartItemsData,
} from "../state/state";

const ProductList = () => {
  const [products, setProducts] = useAtom(filteredProducts);
  const [productList, setProductList] = useAtom(productListData);
  const [categoryList, setCategoryList] = useAtom(catagoryList);

  const [selectedCategory, setSelectedCategory] = useState(null);

  const [cartItems, setCartItems] = useAtom(cartItemsData);

  const history = useHistory();

  useEffect(() => {
    // axios.get('/api/products') // Assuming the API endpoint for products
    //   .then(response => {
    //     console.log('Products fetched successfully:', response.data);
    //     setProducts(response.data);
    //   })
    //   .catch(error => {
    //     console.error('Error fetching products:', error);
    //   });

    const mockCategories = [
      { categoryID: 1, categoryName: "Cars" },
      { categoryID: 2, categoryName: "Planes" },
      { categoryID: 3, categoryName: "Trucks" },
      { categoryID: 4, categoryName: "Boats" },
      { categoryID: 5, categoryName: "Rockets" },
    ];
    const mockProductData = [
      {
        productID: 1,
        productName: "Convertible Car",
        description:
          "This convertible car is fast! The engine is powered by a neutrino based battery (not included). Power it up and let it go!",
        imagePath: "carconvert.png",
        unitPrice: 22.5,
        categoryID: 1,
      },
      {
        productID: 2,
        productName: "Old-time Car",
        description:
          "There's nothing old about this toy car, except it's looks. Compatible with other old toy cars.",
        imagePath: "carearly.png",
        unitPrice: 15.95,
        categoryID: 1,
      },
      {
        productID: 3,
        productName: "Fast Car",
        description: "Yes this car is fast, but it also floats in water.",
        imagePath: "carfast.png",
        unitPrice: 32.99,
        categoryID: 1,
      },
      {
        productID: 4,
        productName: "Super Fast Car",
        description:
          "Use this super fast car to entertain guests. Lights and doors work!",
        imagePath: "carfaster.png",
        unitPrice: 8.95,
        categoryID: 1,
      },
      {
        productID: 5,
        productName: "Old Style Racer",
        description:
          "This old style racer can fly (with user assistance). Gravity controls flight duration. No batteries required.",
        imagePath: "carracer.png",
        unitPrice: 34.95,
        categoryID: 1,
      },
      {
        productID: 6,
        productName: "Ace Plane",
        description:
          "Authentic airplane toy. Features realistic color and details.",
        imagePath: "planeace.png",
        unitPrice: 95.0,
        categoryID: 2,
      },
      {
        productID: 7,
        productName: "Glider",
        description:
          "This fun glider is made from real balsa wood. Some assembly required.",
        imagePath: "planeglider.png",
        unitPrice: 4.95,
        categoryID: 2,
      },
      {
        productID: 8,
        productName: "Paper Plane",
        description:
          "This paper plane is like no other paper plane. Some folding required.",
        imagePath: "planepaper.png",
        unitPrice: 2.95,
        categoryID: 2,
      },
      {
        productID: 9,
        productName: "Propeller Plane",
        description: "Rubber band powered plane features two wheels.",
        imagePath: "planeprop.png",
        unitPrice: 32.95,
        categoryID: 2,
      },
      {
        productID: 10,
        productName: "Early Truck",
        description:
          "This toy truck has a real gas powered engine. Requires regular tune ups.",
        imagePath: "truckearly.png",
        unitPrice: 15.0,
        categoryID: 3,
      },
      {
        productID: 11,
        productName: "Fire Truck",
        description:
          "You will have endless fun with this one quarter sized fire truck.",
        imagePath: "truckfire.png",
        unitPrice: 26.0,
        categoryID: 3,
      },
      {
        productID: 12,
        productName: "Big Truck",
        description:
          "This fun toy truck can be used to tow other trucks that are not as big.",
        imagePath: "truckbig.png",
        unitPrice: 29.0,
        categoryID: 3,
      },
      {
        productID: 13,
        productName: "Big Ship",
        description:
          "Is it a boat or a ship. Let this floating vehicle decide by using its artificially intelligent computer brain!",
        imagePath: "boatbig.png",
        unitPrice: 95.0,
        categoryID: 4,
      },
      {
        productID: 14,
        productName: "Paper Boat",
        description:
          "Floating fun for all! This toy boat can be assembled in seconds. Floats for minutes! Some folding required.",
        imagePath: "boatpaper.png",
        unitPrice: 4.95,
        categoryID: 4,
      },
      {
        productID: 15,
        productName: "Sail Boat",
        description: "Put this fun toy sail boat in the water and let it go!",
        imagePath: "boatsail.png",
        unitPrice: 42.95,
        categoryID: 4,
      },
      {
        productID: 16,
        productName: "Rocket",
        description: "This fun rocket will travel up to a height of 200 feet.",
        imagePath: "rocket.png",
        unitPrice: 122.95,
        categoryID: 5,
      },
    ];

    mockProductData.map((product) => {
      return {
        ...product,
        quntity: 0,
      };
    });
    setCategoryList(mockCategories);
    setProductList(mockProductData);
    setProducts(mockProductData);
  }, [cartItems]);

  const header = (imagePath) => {
    return (
      <img
        alt="product-image"
        src={`./assets/catalog/images/thumbs/${imagePath}`}
        width="100%"
      />
    );
  };

  function filterProduct(selectedCategoryVal) {
    console.log("filter", selectedCategoryVal);

    setSelectedCategory(selectedCategoryVal);

    if (selectedCategoryVal) {
      const filteredProducts = productList.filter((product) => {
        return product.categoryID === selectedCategoryVal.categoryID;
      });

      console.log("filteredProducts", filteredProducts);

      setProducts(filteredProducts);
    } else {
      setProducts(productList);
    }
  }

  function addToCart(product) {
    const newProduct = {
      ...product,
      quntity: product.quntity ? product.quntity + 1 : 1,
    };

    setProducts((products) => {
      const updatedProd = products.map((p) => {
        if (p.productID === newProduct.productID) {
          return newProduct;
        }
        return p;
      });

      return updatedProd;
    });

    setProductList((products) => {
      const updatedProd = products.map((p) => {
        if (p.productID === newProduct.productID) {
          return newProduct;
        }
        return p;
      });

      console.log("updatedProd", updatedProd);
      return updatedProd;
    });
  }

  return (
    <div>
      <div className="w-3 mx-auto hidden">
        <img src="./assets/logo.jpg" alt="Wingtip Toys" width="100%" />
      </div>

      <div className="card flex justify-content-between align-items-center mb-3">
        <div>
          <h2 className="font-semibold">Products</h2>
        </div>
        <div>
          <Dropdown
            value={selectedCategory}
            onChange={(e) => filterProduct(e.value)}
            options={categoryList}
            optionLabel="categoryName"
            placeholder="Filter by category"
            className="w-full md:w-14rem"
            showClear
          />
        </div>
      </div>

      <div className="grid ">
        {products.map((product) => (
          <div
            className="col-12 md:col-3 lg:col-2 cursor-pointer"
            key={product.productID}
          >
            <Card
              title={<h5 className="m-0">{product.productName}</h5>}
              header={header(product.imagePath)}
              footer={
                <div className="flex justify-content-between align-items-center md:block lg:block">
                  <div className="mb-2">
                    <b>Price: </b>${product.unitPrice}
                  </div>
                  <div>
                    <Button
                      label="Add to Cart"
                      rounded
                      size="small"
                      className="w-full"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        addToCart(product);
                      }}
                    />
                  </div>
                </div>
              }
              className="w-full"
              onClick={() => {
                history.push("/product-details/" + product.productID);
              }}
            ></Card>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ProductList;
