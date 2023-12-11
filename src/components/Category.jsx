import React, { useContext } from "react";
import { context } from "../Data/productContext";
import "./category-style.css";
import menclothes from "../images/menclothes.svg";
import womanclothes from "../images/womanclothes.svg";
import iphone from "../images/iphone.svg";
import jewerly from "../images/jewerly.svg";

export default function Category() {
  const { category } = useContext(context);
  const imageCategory = [iphone, jewerly, menclothes, womanclothes];

  return (
    <div className="container category py-3 ">
      <div className="title-wrapper mb-4">
        <h5>Categories</h5>
      </div>
      <div className="row">
        {category.map((c, index) => {
          return (
            <div className="col-lg-3 col-md-4 position-relative">
              <div className="card-category w-100 text-center">
                <img src={imageCategory[index]} alt={"Category: " + c} />
                <div className="category-label">{c}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
