import {
  CREATE_TASK,
  RESET_DATE,
  SET_END_DATE,
  SET_START_DATE,
  SET_TASKS,
} from "../Actions";

const initialState = {
  tasks: [],
  startDate: null,
  endDate: null,
};

const Tasks = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case SET_TASKS:
      return {
        ...state,
        tasks: [...action.payload],
      };

    case SET_START_DATE:
      return {
        ...state,
        startDate: action.payload,
      };

    case SET_END_DATE:
      return {
        ...state,
        endDate: action.payload,
      };
    case RESET_DATE:
      return {
        ...state,
        startDate:null,
        endDate: null,
      };

    default:
      return state;
  }
};
export default Tasks;
