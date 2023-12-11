import React, { useContext } from "react";
import "./allproduct-style.css";
import { context } from "../Data/productContext";

export default function AllProduct() {
  const { product } = useContext(context);

  return (
    <div className="container mt-4">
      <div className="row  justify-content-center">
        <div className="col-8">
          <h4 className="text-center title-product">All Products</h4>
        </div>
      </div>

      <div className="row">
        {product.map((p) => {
          return (
            <div className="col-lg-3 mt-3" key={p.id}>
              <div className="product-card">
                <div className="image-wrapper">
                  <img src={p.image} alt="..." className="w-100" />
                </div>
                <span className="label-category mt-3">{p.category}</span>
                <span className="label-title">{p.title}</span>
                <div className="price-wrapper">
                  <span className="label-price">$ {p.price}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
