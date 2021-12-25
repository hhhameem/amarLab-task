import React from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./Navbar.css";

const Navbar = () => {
  const { user, setUser, logOut } = useAuth();
  const loggedIn = localStorage.getItem("loggedIn");

  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedIn");
    loggedIn && setUser(loggedIn);
  }, [user, setUser]);

  return (
    <div className='headerNavbar'>
      <NavLink
        to='/'
        className={({ isActive }) => (isActive ? "ActiveNavItem" : " navItem")}
      >
        Home
      </NavLink>
      <NavLink
        to='/contact'
        className={({ isActive }) => (isActive ? "ActiveNavItem" : " navItem")}
      >
        Contact
      </NavLink>
      <NavLink
        to='/blogs'
        className={({ isActive }) => (isActive ? "ActiveNavItem" : " navItem")}
      >
        Blogs
      </NavLink>
      {loggedIn ? (
        <NavLink
          to='/login'
          className={({ isActive }) =>
            isActive ? "ActiveNavItem" : " navItem"
          }
          onClick={logOut}
        >
          LogOut
        </NavLink>
      ) : (
        <NavLink
          to='/login'
          className={({ isActive }) =>
            isActive ? "ActiveNavItem" : " navItem"
          }
        >
          Login
        </NavLink>
      )}
    </div>
  );
};

export default Navbar;
