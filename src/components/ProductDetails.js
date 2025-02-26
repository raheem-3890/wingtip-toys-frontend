import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import { InputNumber } from "primereact/inputnumber";

import { useAtom } from "jotai";
import { productListData } from "../state/state";

const ProductDetails = () => {
  const { productId } = useParams();

  const [product, setProduct] = useState(null);

  const [productList, setProductList] = useAtom(productListData);

  useEffect(() => {
    // axios.get(`/api/products/${productId}`)
    //   .then(response => {
    //     console.log('Product details fetched successfully:', response.data);
    //     setProduct(response.data);
    //   })
    //   .catch(error => {
    //     console.error('Error fetching product details:', error);
    //   });

    console.log("useParam", productId);
    const filteredData = productList.find(
      (product) => product.productID == productId
    );

    setProduct(filteredData);
  }, [productId]);
  if (!product) return <div>Loading...</div>;
  return (
    <div>
      <h1>{product.productName}</h1>

      <div className="flex gap-2">
        <div>
          <img
            src={`./assets/Catalog/Images/${product.imagePath}`}
            alt={product.productName}
            style={{ border: "solid", height: "300px" }}
            width="100%"
          />
        </div>

        <div className="flex-column">
          <div className="mb-3">
            <div className="mb-2">
              <h4 className="m-0">Description:</h4>
              <p>{product.description}</p>
            </div>

            <div className="flex gap-2 mb-2">
              <div className="font-semibold">Price:</div>
              <div>${product.unitPrice}</div>
            </div>

            <div className="flex gap-2">
              <div className="font-semibold">Product Number:</div>
              <div>{product.productID}</div>
            </div>
          </div>

          {product.quntity ? (
            <div className="flex gap-2">
              <p>Quantity </p>

              <InputNumber
                value={product.quntity}
                onValueChange={(e) => {}}
                showButtons
                buttonLayout="horizontal"
                step={1}
                incrementButtonIcon="pi pi-plus"
                decrementButtonIcon="pi pi-minus"
                size="1"
                min={1}
              />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};
export default ProductDetails;
