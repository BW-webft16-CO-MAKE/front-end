import axiosWithAuth from "../utils/axiosWithAuth";
import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

const UpdateForm = () => {
  const history = useHistory();
  const { id } = useParams();
  const [formValues, setFormValues] = useState();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get(`api/posts/${id}`)
      .then((res) => {
        setFormValues(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, [id]);

  const handleChange = (e) => {
    e.preventDefault();
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .put(`api/posts/${id}`, formValues)
      .then((res) => {
        setPosts([...posts, res.data]);
        history.push("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {!formValues ? (
        "Loading..."
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="post_name"
            value={formValues.post_name}
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
      )}
    </div>
  );
};
export default UpdateForm;
