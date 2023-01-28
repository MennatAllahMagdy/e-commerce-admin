import Product from "../components/Product";
import React from "react";
import { products } from "../data/productsData";
const Feed = () => {
  return (
    <div>
      <div className="p-5 gap-10 flex flex-row justify-center flex-wrap w-full ">
        {products.map((item) => (
          <Product product={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
