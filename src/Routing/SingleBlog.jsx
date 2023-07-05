import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function SingleBlog() {
  const { id } = useParams();

  const [singlePost, setSinglePost] = useState({});

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/" + id)
      .then((result) => {
        setSinglePost(result.data);
      });
  }, []);

  return (
    <>
      <h3>Single BLog</h3>
      <div className="single-post">
        <h3>{singlePost.title}</h3>
        <p>{singlePost.body}</p>
      </div>
    </>
  );
}

export default SingleBlog;
