import React from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const { user, setUser, logOut } = useAuth();
  const loggedIn = localStorage.getItem("loggedIn");

  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedIn");
    loggedIn && setUser(loggedIn);
  }, [user, setUser]);

  return (
    <div className={styles.headerNavbar}>
      <NavLink to='/' className={styles.navItem}>
        Home
      </NavLink>
      <NavLink to='/contact' className={styles.navItem}>
        Contact
      </NavLink>
      <NavLink to='/blogs' className={styles.navItem}>
        Blogs
      </NavLink>
      {loggedIn ? (
        <span className={styles.navItem} onClick={logOut}>
          LogOut
        </span>
      ) : (
        <NavLink to='/login' className={styles.navItem}>
          Login
        </NavLink>
      )}
    </div>
  );
};

export default Navbar;
