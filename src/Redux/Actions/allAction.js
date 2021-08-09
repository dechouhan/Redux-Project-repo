import {
  SET_USERS,
  SET_ADD_USER,
  RESET_USER,
  CREATE_USER,
  UPDATE_USER,
  DELETE_USER,
  EDIT_MODEL_STATUS,
  ADD_MODEL_STATUS,
  SET_LOGIN_MEMBER,
  RESET_LOGIN_MEMBER,
  SET_MEMBERS,
  DELETE_MEMBER,
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

export const setLoginMember = (payload) => ({
  type: SET_LOGIN_MEMBER,
  payload,
});

export const resetLoginMember = () => ({
  type: RESET_LOGIN_MEMBER,
});

export const fetchMembersAction = (data) => ({
  type: SET_MEMBERS,
  payload: data,
});

export const deleteMemberAction = (id) =>({
  type: DELETE_MEMBER,
  payload:id,
})