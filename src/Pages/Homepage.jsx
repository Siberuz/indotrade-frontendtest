import React from "react";
import NavbarCustom from "../components/Navbar";
import Banner from "../components/Banner";
// import { context } from "../Data/productContext";
import { Provider } from "../Data/productContext";
import Category from "../components/Category";
import AllProduct from "../components/AllProduct";
import Footer from "../components/Footer";

export default function Homepage() {
  return (
    <>
      <NavbarCustom />
      <Banner />
      <Provider>
        <Category />
        <AllProduct />
      </Provider>
      <Footer />
    </>
  );
}
