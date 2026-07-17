import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import { Route, Routes } from "react-router";
import Detail from "../pages/Detail";
import DirectorsMsg from "../pages/DirectorsMsg";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="detail" element={<Detail />}></Route>
        </Route>
        <Route path="/about" element={<About />}>
          <Route path="director-msg" element={<DirectorsMsg />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
