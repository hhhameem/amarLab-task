import React from "react";
import styles from "./Blog.module.css";

const Blog = ({ blog, deleteBlog }) => {
  return (
    <div className={styles.blogContainer}>
      <div>
        <img src={blog.imageUrl} alt='' className={styles.blogImage} />
      </div>
      <div className={styles.blogDetailsContainer}>
        <h3>{blog.title}</h3>
        <h5 className={styles.h5}>
          Author: <span className={styles.simpleText}>{blog.author}</span>
        </h5>
        <h5 className={styles.h5}>
          Published On: <span className={styles.simpleText}>{blog.date}</span>
        </h5>
        <div className={styles.btnParent}>
          <button
            className={styles.deleteBtn}
            onClick={() => {
              deleteBlog(blog._id);
            }}
          >
            Delete Blog
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
