import {
  deleteMemberAction,
  fetchMembersAction,
  setLoginMember,
  updateMemberAction,
} from "../Redux/Actions/memberAction";
import MemberService from "../Services/MemberService";

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
    dispatch(fetchMembers());
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
