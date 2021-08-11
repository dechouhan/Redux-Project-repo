import {
  SET_LOGIN_MEMBER,
  RESET_LOGIN_MEMBER,
  SET_MEMBERS,
  DELETE_MEMBER,
  UPDATE_MEMBER,
  SET_SHOW_MEMBER,
  SHOW_MODEL_STATUS,
} from "./index";

export const setShowModelStatus = (status) => ({
  type: SHOW_MODEL_STATUS,
  payload: status,
});

export const setLoginMember = (payload) => {
  localStorage.setItem("token", payload.token);
  localStorage.setItem("_id", payload._id);
  return { type: SET_LOGIN_MEMBER, payload };
};

export const resetLoginMember = () => ({
  type: RESET_LOGIN_MEMBER,
});

export const fetchMembersAction = (data) => ({
  type: SET_MEMBERS,
  payload: data,
});

export const deleteMemberAction = (id) => ({
  type: DELETE_MEMBER,
  payload: id,
});

export const updateMemberAction = (data) => ({
  type: UPDATE_MEMBER,
  payload: data,
});

export const setShowMember = (payload) => ({
  type: SET_SHOW_MEMBER,
  payload,
});
