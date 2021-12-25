import React, { createContext } from "react";
import useAuth from "../Hooks/useAuth";

export const AuthContext = createContext();

const ContextProvider = ({ children }) => {
  const contextValue = useAuth();
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default ContextProvider;
