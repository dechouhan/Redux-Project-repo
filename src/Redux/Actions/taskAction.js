import { CREATE_TASK, RESET_DATE, SET_END_DATE, SET_START_DATE, SET_TASKS } from ".";

export const createTaskAction = (data) => ({
  type: CREATE_TASK,
  payload: data,
});

export const fetchTasksAction = (data) => ({
    type:SET_TASKS,
    payload:data,
})

export const setStartDateAction = (data)=>({
    type:SET_START_DATE,
    payload:data,
})

export const setEndDateAction = (data)=>({
    type:SET_END_DATE,
    payload:data,
})

export const resetDateAction = ()=>({
    type:RESET_DATE,
})