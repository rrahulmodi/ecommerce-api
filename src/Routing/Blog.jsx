import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((results) => {
      setPosts(results.data);
    });
  }, []);
  return (
    <>
      <div className="postss">
        {posts.map((post) => {
          return (
            <div className="singlepost">
              <h3>
                <Link to={`/blog/${post.id}`}>{post.title}</Link>
              </h3>

              <p>{post.body}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Blog;
