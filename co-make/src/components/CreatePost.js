import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import axiosWithAuth from "../utils/axiosWithAuth";
import { addPost } from "../store/actions/fetchPostsActions";
import { Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// MUI Styling
const useStyles = makeStyles((theme) => ({
    formContainer: {
      display: "flex",
      alignContent: "center",
      flexDirection: "column",
      width: "25%",
      textAlign: "center",
      margin: "0 37%",
    },

    submitButton: {
      marginTop: "2%",
    },

    contentWrapper: {
      textAlign: "center",
    },
}));

const initialState = {
    name: "",
    description: "",
    location: "",
    // id: Date.now() ? 
}

const CreatePost = (props) => {
  const [value, setValue] = useState(initialState);
  // const [postList, setPostList] = useState([])
  const { id } = useParams();
  const history = useHistory();
  const classes = useStyles();

  // const createPost = (data) => {
  //   const newPost = {...data};
  //   axiosWithAuth()
  //     .post(`/api/posts`, newPost)
  //     .then((res) => {
  //       const newPostList = [...postList]
  //       newPostList.push(newPost)
  //       setPostList(newPostList)
  //       history.push("/allposts")
  //     })
  //     .catch((err) => console.log("POST error: ", err))
  // }

  const handleChanges = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addPost(value);
    history.push('/allposts')
  };

  useEffect(() => {
    axiosWithAuth()
      .get(`/api/posts/${id}`)
      .then((res) => {
        setValue({...res.data})
      })
      .catch((err) => console.log("Error creating post.", err))
  }, []);

  return (
    <div className={classes.contentWrapper}>
      <h2>Create a Post!</h2>
      <h4>See an issue that's not already on the list?</h4>
      <h4>Please fill out the form below to let everyone know!</h4>
      
      <form className={classes.formContainer}>
        <p>Please enter your name.</p>
        <TextField 
          variant="outlined"
          label="Full Name" 
          type="text"
          name="name"
          onChange={handleChanges}
          placeholder="Full Name"
          value={value.title}
        />
        <div className="breakpoint" />

        <p>What is the issue?</p>
        <TextField 
          variant="outlined"
          label="Description" 
          type="text"
          name="description"
          onChange={handleChanges}
          placeholder="Issue Description"
          value={value.description}
        />
        <div className="breakpoint" />

        <p>Where is the issue?</p>
        <TextField 
          variant="outlined"
          label="Location" 
          type="text"
          name="location"
          onChange={handleChanges}
          placeholder="Issue Location"
          value={value.location}
        />
        <div className="breakpoint" />

        <Button 
        className={classes.submitButton}
        variant="contained"
        color="secondary"
        size="large"
        onClick={handleSubmit}>Create your Post!</Button>

      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    name: state.name,
    description: state.description,
    location: state.location,
  };
};

export default connect(mapStateToProps, { addPost })(CreatePost);
