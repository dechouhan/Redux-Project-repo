import {
  CREATE_COMMENT,
  SET_ADD_POST_FOR_COMMENTS,
  SET_COMMENTS_BY_ID,
} from ".";

export const fetchCommentsByPostIdAction = (data) => ({
  type: SET_COMMENTS_BY_ID,
  payload: data,
});

export const createCommentAction = (data) => ({
  type: CREATE_COMMENT,
  payload: data,
});

export const setAddPostForComments = (payload) => {
  localStorage.setItem("setPostForComments", payload._id);
  return { type: SET_ADD_POST_FOR_COMMENTS, payload };
};
