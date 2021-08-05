import UserService from "../Services/Service";
import {
  createUserAction,
  deleteUserAction,
  fetchUsersAction,
  updateUserAction,
} from "./Actions/allAction";

export const fetchUsers = () => async (dispatch) => {
  try {
    const res = await UserService.getAll();
    dispatch(fetchUsersAction(res.data));
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const createUser = (data) => async (dispatch) => {
  try {
    const res = await UserService.create(data);
    dispatch(createUserAction(res.data));
    dispatch(fetchUsers());
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const updateUser = (id, data) => async (dispatch) => {
  try {
    const res = await UserService.update(id, data);
    dispatch(updateUserAction(res.data));
    dispatch(fetchUsers());
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    await UserService.delete(id);
    dispatch(deleteUserAction(id));
    dispatch(fetchUsers());
  } catch (err) {
    console.log(err);
  }
};
