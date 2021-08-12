import { SET_ADD_POST_FOR_COMMENTS, SET_COMMENTS_BY_ID } from "../Actions";

const initialState = {
  comments: [],
  commentsById: [],
  setPostForComments: localStorage.getItem("setPostForComments"),
};

const Comments = (state = initialState, action) => {
  switch (action.type) {
    case SET_COMMENTS_BY_ID:
      return {
        ...state,
        commentsById: [...action.payload],
      };

    case SET_ADD_POST_FOR_COMMENTS:
      return {
        ...state,
        setPostForComments: action.payload._id,
      };

    default:
      return state;
  }
};
export default Comments;
