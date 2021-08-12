import {
  createPostAction,
  fetchPostsAction,
  fetchPostsByUserIdAction,
  updatePostAction,
} from "../Redux/Actions/postAction";
import PostService from "../Services/PostService";

export const fetchPosts = () => async (dispatch) => {
  try {
    const res = await PostService.getAll();
    dispatch(fetchPostsAction(res.data));
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const fetchPostsByUserId = (id) => async (dispatch) => {
  try {
    const res = await PostService.get(id);
    dispatch(fetchPostsByUserIdAction(res.data));
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const createPost = (data, userId) => async (dispatch) => {
  try {
    const res = await PostService.create(data);
    dispatch(createPostAction(res.data));
    dispatch(fetchPostsByUserId(userId));
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const updatePost = (id, data, userId) => async (dispatch) => {
  try {
    const res = await PostService.update(id, data);
    dispatch(updatePostAction(res.data));
    dispatch(fetchPostsByUserId(userId));
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
