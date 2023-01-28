import { Route, Routes } from "react-router-dom";

import Feed from "../pages/Feed";
import React from "react";

const FeedRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Feed />} />
      </Routes>
    </div>
  );
};

export default FeedRoutes;
