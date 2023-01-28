import React, { useState } from "react";
const CartContext = React.createContext({
  cartItems: [],
  addItem: (item) => {},
  decreaseQuantity: (item) => {},
  removeCartItems: () => {},
  deleteItem: (itemId) => {},
});
export default CartContext;

export const CartContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  const addHandler = (item) => {
    if (
      cartItems.length === 0 ||
      !cartItems.find((prod) => prod.id === item.id)
    ) {
      const product = {
        id: item.id,
        name: item.name,
        description: item.description,
        image: item.image,
        price: item.price,
        quantity: 1,
      };
      setCartItems((oldArray) => [...oldArray, product]);
    } else {
      const items = cartItems.slice();
      const productIndex = cartItems.findIndex((prod) => prod.id === item.id);
      items[productIndex].quantity = items[productIndex].quantity + 1;
      setCartItems(items);
    }
  };

  const removeHandler = (item) => {
    const items = cartItems.slice();
    const productIndex = cartItems.findIndex((prod) => prod.id === item.id);
    items[productIndex].quantity = items[productIndex].quantity - 1;
    if (items[productIndex].quantity == 0) items.splice(productIndex, 1);
    setCartItems(items);
  };

  const deleteItemHandler = (itemId) => {
    const items = cartItems.slice();
    const productIndex = cartItems.findIndex((prod) => prod.id === itemId);
    items.splice(productIndex, 1);
    setCartItems(items);
  };

  const deleteCart = () => {
    setCartItems([]);
  };
  return (
    <CartContext.Provider
      value={{
        cartItems: cartItems,
        addItem: addHandler,
        decreaseQuantity: removeHandler,
        removeCartItems: deleteCart,
        deleteItem: deleteItemHandler,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
