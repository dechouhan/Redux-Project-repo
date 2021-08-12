import {
  createCommentAction,
  fetchCommentsByPostIdAction,
} from "../Redux/Actions/commentAction";
import CommentService from "../Services/CommentService";

export const fetchCommentsByPostId = (id) => async (dispatch) => {
  try {
    const res = await CommentService.get(id);
    dispatch(fetchCommentsByPostIdAction(res.data));
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const createComment = (data, selectPost_id) => async (dispatch) => {
  try {
    const res = await CommentService.create(data);
    dispatch(createCommentAction(res.data));
    dispatch(fetchCommentsByPostId(selectPost_id));
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
