import React, { useContext } from "react";

import CartContext from "../store/cart-context";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const navigate = useNavigate();

  const ctx = useContext(CartContext);
  return (
    <div
      className="bg-slate-100 p-4 "
      onClick={() => navigate(`/product-detail/${product.id}`)}
    >
      <h2 className="text-2xl ">{product.name}</h2>
      <div className="py-4 flex justify-center ">
        <div className="w-64 ">
          <div className="p-5 rounded-xl">
            <img src={product.image} className="w-full h-48" />
          </div>

          <p className="text-sm mt-1 loading-4">{product.description}</p>
          <div className="flex mt-2 space-x-5">
            <p className="text-2xl font-bold">${product.price}</p>
            <button
              className="bg-emerald-400 text-white py-1 px-3 rounded-xl"
              onClick={(e) => {
                e.stopPropagation();
                ctx.addItem(product);
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
