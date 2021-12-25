import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import Navbar from "../Navbar/Navbar";
import styles from "./Blogs.module.css";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("./blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  console.log(blogs);

  const deleteBlog = (id) => {
    if (window.confirm("Do you want to DELETE this blog?")) {
      const restBlogs = blogs.filter((blog) => blog._id !== id);
      setBlogs(restBlogs);
    }
  };

  return (
    <div className='containerParent'>
      <Navbar></Navbar>
      <div className='container'>
        <h1>Available Blogs</h1>
        <div className={styles.blogs}>
          {blogs.map((blog) => (
            <Blog key={blog._id} blog={blog} deleteBlog={deleteBlog}></Blog>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
