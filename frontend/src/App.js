import "primereact/resources/themes/lara-light-blue/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";

import { Login, Register } from "./pages";
import React, { Fragment, useContext } from "react";
import { Route, Routes } from "react-router-dom";

import AuthContext from "./store/auth-context";
import Home from "./pages/Home";

function App() {
  const ctx = useContext(AuthContext);
  return (
    <Fragment>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </Fragment>
  );
}

export default App;
