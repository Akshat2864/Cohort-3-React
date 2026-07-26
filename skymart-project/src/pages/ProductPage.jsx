import React, { useContext, useState } from "react";
import { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { Search } from "lucide-react";
import axios from "axios";
import { axiosInstance } from "../config/axiosinstance";
import { Product } from "../context/ProductContext";

const ProductPage = () => {
  
  let { products, setProducts, cartItems, isLoading, setIsLoading }= useContext(Product)

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  let getProductData = async () => {
    try {
      let res = await axiosInstance.get("/products");
     
      setProducts(res.data);
      setIsLoading(false);
    } catch (error) {
      console.log("error in api call", error);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  const categories = [
    "all",
    ...new Set(products.map((product) => product.category)),
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  if (isLoading) return <h1 className="text-4xl">Products Loading...</h1>;

  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold">All Products</h1>

      <p className="text-gray-500 mt-2">
        {filteredProducts.length} Products Found
      </p>

      <div className="relative mt-6 mb-8 flex gap-4">
        <Search
          size={20}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full border rounded-xl py-3 pl-12 pr-4 outline-none"
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border rounded-xl px-4 py-3"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className=" grid grid-cols-4 gap-4 ">
        {filteredProducts.map((val) => {
          
          let isInCart = cartItems.find((elem)=> elem.id === val.id)

          return <ProductCard key={val.id} isInCart={isInCart} product={val} />
})}
      </div>
    </div>
  );
};

export default ProductPage;
