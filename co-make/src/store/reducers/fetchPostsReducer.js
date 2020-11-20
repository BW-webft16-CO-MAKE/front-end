import {
  ADD_POST_START,
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
  Post: {
    id: "",
    post_name: "",
    post_description: "",
    post_location: "",
  },
  isLoading: false,
  error: "",
};

export const fetchPostsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // CREATE/POST
    case ADD_POST_START:
      return {
        ...state,
      };
    case ADD_POST_SUCCESS:
      // ?
      return {
        ...state,
        posts: [payload, ...state.posts],
        error: "",
      };
    case ADD_POST_FAILURE:
      return {
        posts: state.posts,
        error: payload,
      };

    // READ/GET
    case FETCH_POST_START:
      return {
        ...initialState,
        isLoading: true,
      };
    case FETCH_POST_SUCCESS:
      return {
        ...initialState,
        isLoading: false,
        posts: payload,
      };
    case FETCH_POST_FAILURE:
      return {
        ...initialState,
        isLoading: false,
        error: payload,
      };

    // UPDATE/PUT
    case EDIT_POST_START:
      return {
        ...state,
      };
    case EDIT_POST_SUCCESS:
      return {
        ...state,
        posts: state.posts.map((item) => {
          if (item.id !== payload.id) {
            return item;
          } else {
            return payload;
          }
        }),
      };

    case EDIT_POST_FAILURE:
      return {
        ...state,
        error: payload,
      };

    // DELETE
    case DELETE_POST_START:
      return {
        ...state,
      };
    case DELETE_POST_SUCCESS:
      return {
        ...state,
      };
    case DELETE_POST_FAILURE:
      return {
        ...state,
        updated: false,
        error: payload,
      };

    default:
      return state;
  }
};
