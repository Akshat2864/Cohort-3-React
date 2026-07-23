import React, { useState } from "react";
import { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import axios from "axios";
import { axiosInstance } from "../config/axiosinstance";

const ProductPage = () => {
  const [productsData, setProductsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  let getProductData = async () => {
    try {
      let res = await axiosInstance.get("/products");
      console.log(res);
      setProductsData(res.data);
      setIsLoading(false);
    } catch (error) {
      console.log("error in api call", error);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  if (isLoading) return <h1 className="text-4xl">Products Loading...</h1>;

  return (
    <div className="grid grid-cols-4 gap-4">
      {productsData.map((val) => (
        <ProductCard key={val.id} product={val} />
      ))}
    </div>
  );
};

export default ProductPage;
