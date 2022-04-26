import React from "react";
import Map from "../Map/Map";
import Navbar from "../Navbar/Navbar";
import { MdOutlineEmail, MdPhone } from "react-icons/md";
import { RiSendPlaneFill } from "react-icons/ri";
import styles from "./Contact.module.css";
import HorizontalLine from "../HorizontalLine/HorizontalLine";

const Contact = () => {
  return (
    <div className='containerParent'>
      <Navbar></Navbar>
      <div className='container'>
        <h2 className={styles.texCenter}>Contact With Me</h2>
        <p className={styles.texCenter}>
          <MdOutlineEmail style={{ marginBottom: "-4px" }} />{" "}
          hebronhossainhamim@gmail.com
        </p>
        <HorizontalLine>OR</HorizontalLine>
        <p className={styles.texCenter}>
          <MdPhone style={{ marginBottom: "-4px" }} /> +8801*********
        </p>
        <HorizontalLine>OR</HorizontalLine>
        <div className={styles.formParent}>
          <form id='contact-form' className={styles.form}>
            <input
              type='text'
              name='user_name'
              id='name'
              placeholder='Your Name'
              className={styles.nameAndEmail}
            />
            <input
              type='email'
              name='user_email'
              id='email'
              placeholder='Your Email'
              className={styles.nameAndEmail}
            />
            <textarea
              name='message'
              id='message'
              className={styles.message}
              placeholder='Your Message'
            ></textarea>
            <button type='submit' id='submit' className={styles.buttonSubmit}>
              Send Your Thoughts{" "}
              <RiSendPlaneFill style={{ marginBottom: "-2px" }} />
            </button>
          </form>
        </div>
        <Map></Map>
      </div>
    </div>
  );
};

export default Contact;
