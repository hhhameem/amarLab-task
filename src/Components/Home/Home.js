import React from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./Home.module.css";
import myImage from "../../img/myImage.jpg";

const Home = () => {
  return (
    <div className='containerParent'>
      <Navbar></Navbar>
      <div className='container'>
        <div className={styles.displayFlexCenter}>
          <img src={myImage} alt='My avatar' className={styles.myImage} />
          <h2 className={styles.myNameTitle}>Hebron Hossain Hamim</h2>
          <h5 className={styles.myNameTitle}>Junior Web Developer</h5>
        </div>
        <div className={styles.displayFlexCenter}>
          <h2 className={styles.aboutMe}>About Me</h2>
          <p>
            Hello There, Welcome! This is{" "}
            <span className={styles.bold}>Hebron Hossain Hamim</span>, A
            passionate web developer based on{" "}
            <span className={styles.bold}>Dhaka, Bangladesh</span>. I have been
            learning and exploring Full Stack Web Development with{" "}
            <span className={styles.bold}>MERN stack</span> for the last 6
            months. Though I am learning full stack web development currently my
            expertise or comfort zone is front end development with{" "}
            <span className={styles.bold}></span>React. I have completed several
            projects using MERN stack and I am trying to gain more knowledge on
            this stack.
          </p>
          <p>
            I have Completed my{" "}
            <span className={styles.bold}>
              Bachelor of Science in Compouter Science and Engineering
            </span>{" "}
            degree from{" "}
            <span className={styles.bold}>United International University</span>{" "}
            with a{" "}
            <span className={styles.bold}>CGPA of 3.29 out of 4.00.</span>{" "}
            During my university days, I have completed several projects for my
            course requirements.
          </p>
          <p>
            I am a motivated and goal-oriented web developer, currently looking
            for an opportunity to demonstrate my skills and contribute to the
            organization's business value by applying my knowledge as well as
            obtaining industry experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
