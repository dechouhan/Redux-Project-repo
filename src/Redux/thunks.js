import MemberService from "../Services/MemberService";
import UserService from "../Services/Service";

import {
  createUserAction,
  deleteUserAction,
  fetchUsersAction,
  setLoginMember,
  updateUserAction,
  fetchMembersAction,
  deleteMemberAction,
  updateMemberAction,
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

export const signupMember = (data) => async (dispatch) => {
  try {
    const res = await MemberService.signup(data);
    return Promise.resolve(alert(JSON.stringify(res.data.message)));
  } catch (err) {
    return Promise.reject(alert(JSON.stringify(err)));
  }
};

export const loginMember = (data) => async (dispatch) => {
  try {
    const res = await MemberService.login(data);
    return Promise.resolve(dispatch(setLoginMember(res.data)));
  } catch (err) {
    return Promise.reject(alert(err));
  }
};

export const fetchMembers = () => async (dispatch) => {
  try {
    const res = await MemberService.getAll();
    dispatch(fetchMembersAction(res.data));
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deleteMembers = (id) => async (dispatch) => {
  try {
    await MemberService.delete(id);
    dispatch(deleteMemberAction(id));
    dispatch(fetchMembers());
  } catch (err) {
    console.log(err);
  }
};

export const updateMember = (id, data) => async (dispatch) => {
  try {
    const res = await MemberService.update(id, data);
    dispatch(updateMemberAction(res.data));
    dispatch(fetchUsers());
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
