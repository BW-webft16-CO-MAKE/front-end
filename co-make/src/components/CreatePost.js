import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";

const initialValues = {
  id: "",
  post_name: "",
  post_description: "",
  post_location: "",
};

const CreatePost = () => {
  const [formValues, setFormValues] = useState(initialValues);
  const history = useHistory();

  const handleChange = (e) => {
    e.preventDefault();
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      ...formValues,
    };
    axiosWithAuth()
      .post(`api/users/3/newpost`, newPost)
      .then((res) => history.push("/allposts"))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="post_name"
          value={formValues.post_name}
          placeholder="Title"
          onChange={handleChange}
        />
        <input
          type="text"
          name="post_description"
          value={formValues.post_description}
          onChange={handleChange}
        />
        <input
          type="text"
          name="post_location"
          value={formValues.post_location}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default CreatePost;
