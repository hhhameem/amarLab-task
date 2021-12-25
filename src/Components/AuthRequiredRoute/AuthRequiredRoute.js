import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const AuthRequiredRoute = ({ children }) => {
  let location = useLocation();
  const loggedIn = localStorage.getItem("loggedIn");

  if (!loggedIn) {
    return <Navigate to='/login' state={{ from: location }} />;
  }

  return children;
};

export default AuthRequiredRoute;
