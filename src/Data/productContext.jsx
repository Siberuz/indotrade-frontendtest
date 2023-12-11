import { createContext, useEffect, useState } from "react";
import axios from "axios";

const context = createContext();

const Provider = ({ children }) => {
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState([]);

  const getDataProduct = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    setProduct(response.data);
  };

  const getDataCategory = async () => {
    const response = await axios.get(
      "https://fakestoreapi.com/products/categories"
    );
    setCategory(response.data);
  };

  useEffect(() => {
    getDataProduct();
    getDataCategory();
  }, []);

  return (
    <context.Provider value={{ category, product }}>
      {children}
    </context.Provider>
  );
};

export { context, Provider };
