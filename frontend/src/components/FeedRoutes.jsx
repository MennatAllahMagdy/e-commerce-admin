import { Route, Routes } from "react-router-dom";

import Cart from "../pages/Cart";
import Feed from "../pages/Feed";
import ProductDetail from "../pages/ProductDetail";
import React from "react";

const FeedRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/product-detail/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default FeedRoutes;
