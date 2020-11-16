import { ADD_POST_START,
         ADD_POST_SUCCESS,
         ADD_POST_FAILURE,
         FETCH_POST_START,
         FETCH_POST_SUCCESS,
         FETCH_POST_FAILURE,
         EDIT_POST_START,
         EDIT_POST_SUCCESS,
         EDIT_POST_FAILURE,
         DELETE_POST_START,
         DELETE_POST_SUCCESS,
         DELETE_POST_FAILURE,
        } from "../actions/fetchPostsActions";


const initialState = {
    posts: [],
    isLoading: false,
    error: "",
    updated: false,
}


export function reducer (state = initialState, action) {
    switch(action.type) {
        
        
        default: 
            return state;
    };
};