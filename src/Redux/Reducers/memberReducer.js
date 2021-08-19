import {
  SET_LOGIN_MEMBER,
  RESET_LOGIN_MEMBER,
  SET_MEMBERS,
  DELETE_MEMBER,
  SET_SHOW_MEMBER,
  SHOW_MODEL_STATUS,
  SEARCH_MEMBER,
} from "../Actions/index";

const initialState = {
  setShowModel: { status: false },
  members: [],
  setShowMember: {},
  token: localStorage.getItem("token"),
  _id: localStorage.getItem("_id"),
  searchMember: [],
  username:localStorage.getItem("name"),
};

const Members = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGIN_MEMBER:
      return {
        ...state,
        token: action.payload.token,
        _id: action.payload._id,
        username:action.payload.name,
      };

    case RESET_LOGIN_MEMBER:
      return {
        ...state,
        token: null,
        _id: null,
      };

    case SET_MEMBERS:
      return {
        ...state,
        members: [...action.payload],
      };

    case DELETE_MEMBER:
      return {
        ...state,
        users: [
          ...state.members.filter(
            (setMember) => setMember.id !== action.payload
          ),
        ],
      };

    case SET_SHOW_MEMBER:
      return {
        ...state,
        setShowMember: { ...state.setShowMember, ...action.payload },
      };

    case SHOW_MODEL_STATUS:
      return {
        ...state,
        setShowModel: { ...state.setShowModel, ...action.payload },
      };

    case SEARCH_MEMBER:
      return {
        ...state,
        searchMember: [...action.payload],
      };
    default:
      return state;
  }
};
export default Members;
