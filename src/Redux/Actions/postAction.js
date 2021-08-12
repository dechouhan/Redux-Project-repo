import {
  CREATE_POST,
  RESET_POST,
  SET_ADD_POST,
  SET_POSTS,
  SET_POSTS_BY_ID,
  UPDATE_POST,
} from "./index";

export const fetchPostsAction = (data) => ({
  type: SET_POSTS,
  payload: data,
});

export const fetchPostsByUserIdAction = (data) => ({
  type: SET_POSTS_BY_ID,
  payload: data,
});

export const createPostAction = (data) => ({
  type: CREATE_POST,
  payload: data,
});

export const updatePostAction = (data) => ({
  type: UPDATE_POST,
  payload: data,
});

export const setAddPost = (payload) => ({
  type: SET_ADD_POST,
  payload,
});

export const resetPost = () => ({
  type: RESET_POST,
});
