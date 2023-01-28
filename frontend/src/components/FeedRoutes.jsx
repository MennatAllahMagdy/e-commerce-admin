import { OrderDetail, Orders } from "../pages";
import { Route, Routes } from "react-router-dom";

import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
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
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/order-detail/:orderId" element={<OrderDetail />} />
      </Routes>
    </div>
  );
};

export default FeedRoutes;
