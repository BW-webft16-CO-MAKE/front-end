import React, { useEffect, useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

const AllPosts = () => {
  const [posts, setPosts] = useState([]);

  const getAllPosts = () => {
    axiosWithAuth()
      .get("api/posts")
      .then((res) => {
        console.log("All Posts", res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllPosts();
    console.log();
  }, []);

  return (
    <div className="postspage">
      <section className="section">
        <h3 className="Posts">Posts</h3>
        <br></br>
        <div className="posts">
          {posts.map((post) => (
            <div className="item">
              <p>Name: {post.post_name}</p>
              <p>Descrription: {post.post_description}</p>
              <p>Location: {post.post_location}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AllPosts;
