import "./index.css";

import App from "./App";
import { AuthContextProvider } from "./store/auth-context";
import { BrowserRouter } from "react-router-dom";
import { CartContextProvider } from "./store/cart-context";
import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
