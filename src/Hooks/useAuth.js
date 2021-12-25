import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const [user, setUser] = useState(false);
  const userCredential = ["hamim@gmail.com", "123456"];
  const navigate = useNavigate();

  const login = (email, password, from) => {
    if (email === userCredential[0] && password === userCredential[1]) {
      localStorage.setItem("loggedIn", true);
      setUser(true);
      navigate(from);
      console.log(from);

      console.log(user.email);
    } else {
      window.alert("Please use correct User Credentials");
    }
  };

  const logOut = (email, password) => {
    localStorage.removeItem("loggedIn");
    setUser(false);
  };

  return {
    user,
    setUser,
    login,
    logOut,
  };
};

export default useAuth;
