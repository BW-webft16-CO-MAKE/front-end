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
        // CREATE/POST
        case ADD_POST_START:
            return {
                ...state,
            };
        case ADD_POST_SUCCESS:
            // ?
            return {
                ...state, 
                posts: action.payload,
                updated: true,
            };
        case ADD_POST_FAILURE:
            return {
                ...state,
                updated: false,
                error: action.payload,
            }

        // READ/GET
        case FETCH_POST_START:
            return {
                ...state,
                isLoading: true,
            };
        case FETCH_POST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                posts: action.payload
            };
        case FETCH_POST_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };

        // UPDATE/PUT
        case EDIT_POST_START:
            return {
                ...state,
            };
        case EDIT_POST_SUCCESS:
            return {
                ...state,
                updated: true,
                // ?
            };
        case EDIT_POST_FAILURE:
            return {
                ...state,
                updated: false,
                error: action.payload,
            };

        // DELETE
        case DELETE_POST_START:
            return {
                ...state,
            };
        case DELETE_POST_SUCCESS:
            return {
                ...state,
                updated: true,
                // ?
            };
        case DELETE_POST_FAILURE:
            return {
                ...state,
                updated: false,
                error: action.payload,
            };
        
        default: 
            return state;
    };
};