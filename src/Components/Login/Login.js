import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import HorizontalLine from "../HorizontalLine/HorizontalLine";
import Navbar from "../Navbar/Navbar";
import styles from "./Login.module.css";

const Login = () => {
  const location = useLocation();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  let from = location.state?.from?.pathname || "/";
  console.log(from);

  const emailSet = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };
  const passSet = (e) => {
    setPass(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className='containerParent'>
      <Navbar></Navbar>
      <div className='container'>
        <h2 className={styles.texCenter}>Login</h2>
        <HorizontalLine>AmarLab</HorizontalLine>
        <div className={styles.formParent}>
          <form id='loginform' className={styles.form}>
            <input
              type='email'
              name='email'
              placeholder='Your Email'
              className={styles.nameAndEmail}
              onBlur={emailSet}
            />
            <input
              type='password'
              name='pass'
              placeholder='Password'
              className={styles.nameAndEmail}
              onBlur={passSet}
            />
            <input
              type='button'
              value='Login'
              className={styles.buttonSubmit}
              onClick={() => login(email, pass, from)}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
