import React from "react";
import { carouselData } from "../Data/carouseldata";
import img5 from "../images/slide5-indo.svg";
import img6 from "../images/image 5.svg";

export default function Banner() {
  return (
    <div className="container banner-container mt-md-3">
      <div className="row">
        <div className="col-12 col-md-8">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval="3000"
          >
            <div className="carousel-indicators">
              {carouselData.map((item, index) => (
                <button
                  key={index}
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to={index}
                  className={index === 0 ? "active" : ""}
                  aria-label={`Slide ${index + 1}`}
                ></button>
              ))}
            </div>
            <div className="carousel-inner">
              {carouselData.map((item, index) => (
                <div
                  key={index}
                  className={
                    index === 0 ? "carousel-item active" : "carousel-item"
                  }
                >
                  <img
                    src={item.image}
                    className="d-block w-100"
                    alt={`Slide ${index + 1}`}
                  />
                </div>
              ))}
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="col-4 h-100 d-none d-md-block">
          <div className="h-50">
            <img src={img5} alt="..." className="w-100 h-100 mt-2" />
          </div>
          <div className="h-50">
            <img src={img6} alt="..." className="w-100 h-100 mt-2" />
          </div>
        </div>
      </div>
    </div>
  );
}
