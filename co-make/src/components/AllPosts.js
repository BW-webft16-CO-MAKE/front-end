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
  //   const [editing, setEditing] = useState(false);
  //   const [postToEdit, setPostToEdit] = useState(initialValues);

  //   const editPost = (post) => {
  //     setEditing(true);
  //     setPostToEdit(post);
  //   };

  //   const saveEdit = (e) => {
  //     e.preventDefault();
  //     axiosWithAuth()
  //       .put(`api/posts/:${postToEdit.id}`, postToEdit)
  //       .then((res) => {
  //         setEditing(false);
  //         updatePost(
  //           posts.map((post) => {
  //             return post.id === postToEdit.id ? res.data : post;
  //           })
  //         );
  //       })
  //       .catch((err) => console.log(err));
  //     console.log(postToEdit);
  //   };

  const deletePost = (post) => {
    axiosWithAuth()
      .delete(`api/posts/:${id}`)
      .then((res) => {
        updatePost(posts.filter((post) => post.id !== res.data));
      })
      .catch((err) => console.log(err));
  };

  const getAllPosts = () => {
    axiosWithAuth()
      .get("api/posts")
      .then((res) => {
        console.log("All Posts", res);
        setAllPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    deletePost();
    getAllPosts();
    console.log();
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
              <button
                className="update-button"
                onClick={() => {
                  history.push(`/update-post/${id}`);
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
