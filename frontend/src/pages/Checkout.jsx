import React, { useContext, useState } from "react";

import AuthContext from "../store/auth-context";
import { Button } from "primereact/button";
import CartContext from "../store/cart-context";
import { InputText } from "primereact/inputtext";
import { orders } from "../data/orders";

const Checkout = () => {
  const authCtx = useContext(AuthContext);
  const cartCtx = useContext(CartContext);
  const [shippingAddress, setShippingAddress] = useState("");

  const calculateTotalPrice = () => {
    const initialValue = 0;
    const totalPrice = cartCtx.cartItems.reduce(
      (accumulator, currenItem) =>
        accumulator + currenItem.quantity * currenItem.price,
      initialValue
    );
    return totalPrice;
  };

  const totalPrice = calculateTotalPrice();

  const paymentHandler = () => {
    orders.push({
      userId: authCtx.user,
      products: [cartCtx.cartItems],
      totalPrice: totalPrice,
      shippingAddress: shippingAddress,
    });
    cartCtx.removeCartItems();
  };
  return (
    <div className="flex p-5 gap-8 flex-col mt-40">
      <div className="flex flex-row gap-5">
        <p className="font-bold text-900 text-xl">Order total</p>
        <p className="ftext-900 text-xl">$ {totalPrice}</p>
      </div>
      <div className="flex flex-col w-3/5 mb-2 mt-2">
        <label
          htmlFor="address"
          className="block text-900 text-xl font-medium mb-2 mt-7"
        >
          Shipping address
        </label>
        <InputText
          id="address"
          type="text"
          placeholder="Enter your shipping address"
          className="w-full mb-3"
          value={shippingAddress}
          onChange={(e) => setShippingAddress(e.target.value)}
        />
      </div>
      <Button
        label="Place your order"
        className="w-full"
        onClick={paymentHandler}
      />
    </div>
  );
};

export default Checkout;
