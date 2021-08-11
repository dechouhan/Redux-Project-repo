import {
    SET_USERS,
    SET_ADD_USER,
    RESET_USER,
    DELETE_USER,
    ADD_MODEL_STATUS,
    EDIT_MODEL_STATUS,
  } from "../Actions/index";
  
  const initialState = {
    users: [],
    setUser: { name: "" },
    setAddModel: { status: false },
    setEditModel: { status: false },
  };
  
  const Users = (state = initialState, action) => {
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
  
      default:
        return state;
    }
  };
  export default Users;
  