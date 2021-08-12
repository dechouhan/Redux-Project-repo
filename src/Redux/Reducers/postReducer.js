import {
  DELETE_POST,
  RESET_POST,
  SET_ADD_POST,
  SET_POSTS,
  SET_POSTS_BY_ID,
} from "../Actions";

const initialState = {
  posts: [],
  postsById: [],
  setPost: {},
};

const Posts = (state = initialState, action) => {
  switch (action.type) {
    case SET_POSTS:
      return {
        ...state,
        posts: [...action.payload],
      };

    case SET_POSTS_BY_ID:
      return {
        ...state,
        postsById: [...action.payload],
      };

    case SET_ADD_POST:
      return {
        ...state,
        setPost: { ...state.setPost, ...action.payload },
      };

    case RESET_POST:
      return {
        ...state,
        setPost: {},
      };

    case DELETE_POST:
      return {
        ...state,
        posts: [
          ...state.posts.filter((setPost) => setPost.id !== action.payload),
        ],
      };

    default:
      return state;
  }
};
export default Posts;
