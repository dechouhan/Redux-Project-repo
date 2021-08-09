import {
  SET_USERS,
  SET_ADD_USER,
  RESET_USER,
  DELETE_USER,
  ADD_MODEL_STATUS,
  EDIT_MODEL_STATUS,
  SET_LOGIN_MEMBER,
  RESET_LOGIN_MEMBER,
  SET_MEMBERS,
  DELETE_MEMBER,
  SET_SHOW_MEMBER,
  SHOW_MODEL_STATUS,
} from "../Actions/index";

const initialState = {
  users: [],
  setUser: { name: "" },
  setAddModel: { status: false },
  setEditModel: { status: false },
  setShowModel: { status: false },
  members: [],
  setLoginMember: { name: "" },
  setShowMember: {},
};

const Todos = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: [...action.payload],
      };

    case SET_ADD_USER:
      return {
        ...state,
        setUser: { ...state.Setuser, ...action.payload },
      };

    case RESET_USER:
      return {
        ...state,
        setUser: {},
      };

    case DELETE_USER:
      return {
        ...state,
        users: [
          ...state.users.filter((setUser) => setUser.id !== action.payload),
        ],
      };

    case ADD_MODEL_STATUS:
      return {
        ...state,
        setAddModel: { ...state.setAddModel, ...action.payload },
      };

    case EDIT_MODEL_STATUS:
      return {
        ...state,
        setEditModel: { ...state.setEditModel, ...action.payload },
      };

    case SET_LOGIN_MEMBER:
      return {
        ...state,
        setLoginMember: { ...state.setLoginMember, ...action.payload },
      };

    case RESET_LOGIN_MEMBER:
      return {
        ...state,
        setLoginMember: {},
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

    default:
      return state;
  }
};
export default Todos;
