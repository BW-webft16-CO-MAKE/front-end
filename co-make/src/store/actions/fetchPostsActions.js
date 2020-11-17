import axios from "axios";

// CRUD OPERATIONS: 
    //// CREATE/POST -
    export const ADD_POST_START = "ADD_POST_START"
    export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS"
    export const ADD_POST_FAILURE = "ADD_POST_FAILURE"

    //// READ/GET -
    export const FETCH_POST_START = "FETCH_POST_START"
    export const FETCH_POST_SUCCESS = "FETCH_POST_SUCCESS"
    export const FETCH_POST_FAILURE = "FETCH_POST_FAILURE"

    //// UPDATE/PUT -
    export const EDIT_POST_START = "EDIT_POST_START"
    export const EDIT_POST_SUCCESS = "EDIT_POST_SUCCESS"
    export const EDIT_POST_FAILURE = "EDIT_POST_FAILURE"

    //// DELETE/DELETE -
    export const DELETE_POST_START = "DELETE_POST_START"
    export const DELETE_POST_SUCCESS = "DELETE_POST_SUCCESS"
    export const DELETE_POST_FAILURE = "DELETE_POST_FAILURE"

export const addPost = (newPost) => (dispatch) => {
    dispatch({ type: ADD_POST_START });
        axios   
            .post("URL", newPost)
            .then((res) => {
                console.log(res)
                dispatch({ type: ADD_POST_SUCCESS, payload: res.data })
            })
            .catch((err) => {
                dispatch({ type: ADD_POST_FAILURE, payload: err })
            });
};

export const getPosts = () => (dispatch) => {
    dispatch({ type: FETCH_POST_START });
        axios   
            .get("URL")
            .then((res) => {
                console.log(res)
                dispatch({ type: FETCH_POST_SUCCESS, payload: res.data })
            })
            .catch((err) => {
                dispatch({ type: FETCH_POST_FAILURE, payload: err })
            });
};

// Post id date.now()? 
export const editPost = (postToEdit) => (dispatch) => {
    dispatch({ type: EDIT_POST_START });
        axios   
            .put("URL", postToEdit)
            .then((res) => {
                // // ?
                // dispatch({ type: EDIT_POST_SUCCESS, payload: posts.map((post) => 
                // post.id === res.data.id ? res.data : post
                // )})
            })
            .catch((err) => {
                dispatch({ type: EDIT_POST_FAILURE, payload: err })
            });
};

export const deletePost = (post) => (dispatch) => {
    dispatch({ type: DELETE_POST_START });
        axios
            .delete(`URL/${post.id}`)
            .then((res) => {
                // // ?
                // dispatch({ type: DELETE_POST_SUCCESS, payload: posts.filter((post) => {
                //     return post.id !== res.data
                // })})
            })
            .catch((err) => {
                dispatch({ type: DELETE_POST_FAILURE, payload: err })
            });
};