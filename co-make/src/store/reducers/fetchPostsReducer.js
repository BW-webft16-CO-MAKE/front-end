import { 

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