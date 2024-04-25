import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Home from "../Pages/Home";
import Cart from "../Pages/Cart";
import { Routes, Route } from "react-router-dom";
import Success from "../Pages/Success";
import Payment from "../Pages/Payment";

const AllRoutes = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Payment />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
