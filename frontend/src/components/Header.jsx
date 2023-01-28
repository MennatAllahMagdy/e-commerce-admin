import React, { useContext } from "react";

import AuthContext from "../store/auth-context";
import { Link } from "react-router-dom";

const Header = () => {
  const ctx = useContext(AuthContext);
  const handleLogut = async () => {
    const response = await fetch("http://localhost:8000/api/logout/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    if (response.ok) ctx.onLogout();
  };
  return (
    <header>
      <div className="shadow-md py-2 bg-blue-500/70 ">
        <div className="px-6 w-full flex flex-wrap">
          <div className="p-2 flex flex-row items-center w-full justify-between">
            <div>
              <Link to="/" className="pr-2 lg:px-2 py-2 text-2xl font-bold">
                Home
              </Link>

              <Link to="/orders" className="pr-2 lg:px-5 py-2 text-2xl">
                Orders
              </Link>
            </div>
            <div></div>

            <div className="flex flex-row items-center justify-center gap-6 text-l">
              <div>
                {ctx.isLoggedIn ? (
                  <div className="cursor-pointer" onClick={handleLogut}>
                    Logut
                  </div>
                ) : (
                  <Link to="/login" className="pr-2 lg:px-2 py-2">
                    Login
                  </Link>
                )}
              </div>
              <div>
                <Link to="/cart" className="pr-2 lg:px-2 py-2">
                  <i className="pi pi-shopping-cart "></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
