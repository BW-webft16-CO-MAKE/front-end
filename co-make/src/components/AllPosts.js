import React, { useEffect, useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { useHistory, useParams } from "react-router-dom";

// const initialValues = {
//   name: "",
//   description: "",
//   location: "",
// };

const AllPosts = ({ posts, updatePost }) => {
  const [allPosts, setAllPosts] = useState([]);
  const { id } = useParams();
  const history = useHistory();

  const getAllPosts = () => {
    axiosWithAuth()
      .get("api/posts")
      .then((res) => {
        console.log("All Posts", res.data);
        setAllPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deletePost = () => {
    axiosWithAuth()
      .delete(`api/posts/${id}`)
      .then((res) => history.push("/allposts"))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    deletePost();
    getAllPosts();
  }, []);

  return (
    <div className="postspage">
      <section className="section">
        <h3 className="Posts">Posts</h3>
        <br></br>
        <div className="posts">
          {allPosts.map((post) => (
            <div className="item">
              <p>Name: {post.post_name}</p>
              <p>Descrription: {post.post_description}</p>
              <p>Location: {post.post_location}</p>
              <p>Id: {post.id}</p>
              <button
                className="update-button"
                onClick={() => {
                  history.push(`/updatepost/${post.id}`);
                }}
              >
                Update
              </button>
              <button className="update-button" onClick={deletePost}>
                Delete
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AllPosts;
