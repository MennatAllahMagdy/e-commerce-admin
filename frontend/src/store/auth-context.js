import React, { useState } from "react";
const AuthContext = React.createContext({
  user: null,
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: () => {},
  saveUserInfo: (info) => {},
});
export default AuthContext;

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const logoutHandler = () => {
    setIsLoggedIn(false);
    setUser(null);
  };
  const loginHandler = () => {
    setIsLoggedIn(true);
  };
  const getUserInfo = (info) => {
    setUser(info);
  };

  return (
    <AuthContext.Provider
      value={{
        user: user,
        isLoggedIn: isLoggedIn,
        saveUserInfo: getUserInfo,

        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
