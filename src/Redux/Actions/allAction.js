import {
  SET_USERS,
  SET_ADD_USER,
  RESET_USER,
  CREATE_USER,
  UPDATE_USER,
  DELETE_USER,
  EDIT_MODEL_STATUS,
  ADD_MODEL_STATUS,
} from "./index";

export const setAddUser = (payload) => ({
  type: SET_ADD_USER,
  payload,
});

export const resetUser = () => ({
  type: RESET_USER,
});

export const fetchUsersAction = (data) => ({
  type: SET_USERS,
  payload: data,
});

export const createUserAction = (data) => ({
  type: CREATE_USER,
  payload: data,
});

export const updateUserAction = (data) => ({
  type: UPDATE_USER,
  payload: data,
});

export const deleteUserAction = (id) => ({
  type: DELETE_USER,
  payload: { id },
});

export const setAddModelStatus = (status) => ({
  type: ADD_MODEL_STATUS,
  payload: status,
});

export const setEditModelStatus = (status) => ({
  type: EDIT_MODEL_STATUS,
  payload: status,
});
