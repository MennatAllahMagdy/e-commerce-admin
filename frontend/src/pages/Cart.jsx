import React, { useContext } from "react";

import AuthContext from "../store/auth-context";
import { Button } from "primereact/button";
import CartContext from "../store/cart-context";

const Cart = () => {
  const ctx = useContext(CartContext);
  const authCtx = useContext(AuthContext);
  if (ctx.cartItems.length === 0)
    return (
      <div className="flex justify-center p-5 m-2">
        <p className="text-xl font-bold">Your cart is empty</p>
      </div>
    );
  return (
    <div className=" flex-col m-5 p-5 ">
      {ctx.cartItems.length &&
        ctx.cartItems.map((item) => (
          <div className="flex p-5 mb-5 justify-center" key={item.id}>
            <div className="bg-gray-100 p-3 rounded-xl shrink-0">
              <img className="w-24" src={item.image} alt="product-img" />
            </div>
            <div className="pl-4 flex flex-col justify-between justify-center  ">
              <h3 className="front-bold text-xl font-bold">{item.name}</h3>
              <p className="text-sm loading-4 text-gray-500">
                {item.description}
              </p>
              <p className="">${item.price}</p>

              <div className="flex items-center">
                <Button
                  className="p-button-sm"
                  onClick={() => ctx.removeItem(item)}
                >
                  -
                </Button>
                <span className="px-2">{item.quantity}</span>
                <Button
                  className="p-button-sm"
                  onClick={() => ctx.addItem(item)}
                >
                  +
                </Button>
              </div>
            </div>
          </div>
        ))}
      <div className="flex justify-center">
        {!authCtx.isLoggedIn ? (
          <Button disabled>Proceed to cheeckout</Button>
        ) : (
          <Button>Proceed to cheeckout</Button>
        )}
      </div>
    </div>
  );
};

export default Cart;
