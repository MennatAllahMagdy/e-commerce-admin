import { Route, Routes } from "react-router-dom";

import Feed from "../pages/Feed";
import ProductDetail from "../pages/ProductDetail";
import React from "react";

const FeedRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/product-detail/:productId" element={<ProductDetail />} />
      </Routes>
    </div>
  );
};

export default FeedRoutes;
