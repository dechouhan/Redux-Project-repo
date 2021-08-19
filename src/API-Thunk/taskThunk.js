import { createTaskAction, fetchTasksAction } from "../Redux/Actions/taskAction";
import TaskService from "../Services/TaskService";

export const createTask = (data) => async (dispatch) => {
  try {
    const res = await TaskService.create(data);
    dispatch(createTaskAction(res.data));
  } catch (err) {
    alert(err);
  }
};

export const fetchTasks = () => async (dispatch) => {
    try {
      const res = await TaskService.getAll();
      console.log("fetch tasks",res.data)
      dispatch(fetchTasksAction(res.data));
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };