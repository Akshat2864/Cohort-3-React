import React from "react";
import Home from "../pages/Home";
import { Route, Routes } from "react-router";
import Product from "../pages/Product";
import About from "../pages/About";
import ProductDetail from "../pages/ProductDetail";
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<ProtectedRoute><About/></ProtectedRoute>}></Route>
        <Route path="/products" element={<Product />}></Route>
        <Route path="/detail/:id" element={<ProductDetail />}></Route>
      </Routes>
    </div>
  );
};

export default AppRoutes;
