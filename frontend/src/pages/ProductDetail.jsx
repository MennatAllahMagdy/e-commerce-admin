import React, { useEffect, useState } from "react";

import { Button } from "primereact/button";
import { products } from "../data/productsData";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const [productItem, setProductItem] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    const productDetails = products.find((item) => item.id === productId);
    setProductItem(productDetails);
  }, []);

  return (
    <div className=" bg-white rounded-lg flex lg:flex-row flex-col justify-center p-3 gap-2 mt-2 mb-2">
      <div className="p-5 rounded-xl ">
        <img
          src={productItem && productItem.image}
          className="sm:h-96 w-full"
        />
      </div>
      <div className="p-5 m-2">
        <p className="outline-none text-3xl sm:text-3xl font-bold ">
          {productItem && productItem.name}
        </p>
        <p className="text-xl pt-2">{productItem && productItem.description}</p>
        <div className="flex mt-2 space-x-5 pt-5 items-center">
          <p className="text-2xl font-bold">
            ${productItem && productItem.price}
          </p>
          <Button className=" opacity-70  hover:opacity-100 hover:shadow-md outlined-none">
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
