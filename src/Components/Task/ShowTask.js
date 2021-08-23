import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import { fetchTasks } from "../../API-Thunk/taskThunk";
import {
  fetchTasksAction,
  resetDateAction,
  setEndDateAction,
  setNameAction,
  setStartDateAction,
} from "../../Redux/Actions/taskAction";
import axios from "axios";
function ShowTasks() {
  let task = null;
  let count = 0
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
    dispatch(resetDateAction());
  }, [dispatch]);

  const Search = async () => {
    const res = await axios.get(
      `http://localhost:7000/tasks?startDate=${startDate}&endDate=${endDate}`
    );
    dispatch(fetchTasksAction(res.data));
  };
  const startDate = useSelector((state) => state.Tasks.startDate);
  const endDate = useSelector((state) => state.Tasks.endDate);
  const setName = useSelector((state) => state.Tasks.setName);
  let tasks = useSelector((state) => state.Tasks.tasks);
  if (setName) {
    const checkName = new RegExp(setName, "gi");
    if (tasks) {
      task = tasks.map((userTask) => {
        if (userTask.username.match(checkName)) {
          count+=1
          return (
            <tr key={userTask._id}>
              <td>{userTask.title}</td>
              <td>{userTask.startTime}</td>
              <td>{userTask.endTime}</td>
              <td>{userTask.date}</td>
              <td>{userTask.username}</td>
            </tr>
          );
        } else {
          return "";
        }
      });
    }
  } else {
    if (tasks) {
      task = tasks.map((userTask) => {
        count+=1
        return (
          <tr key={userTask._id}>
            <td>{userTask.title}</td>
            <td>{userTask.startTime}</td>
            <td>{userTask.endTime}</td>
            <td>{userTask.date}</td>
            <td>{userTask.username}</td>
          </tr>
        );
      });
    }
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Task List</h1>
      <label>Start Date:-&nbsp;</label>
      <input
        type="date"
        name="startDate"
        onChange={(e) => dispatch(setStartDateAction(e.target.value))}
      />
      &nbsp;<label>End Date:-&nbsp;</label>
      <input
        type="date"
        name="endDate"
        onChange={(e) => dispatch(setEndDateAction(e.target.value))}
      />
      <button onClick={(e) => Search()}>Show</button>
      &nbsp;<label>Search by Name:-&nbsp;</label>
      <input
        type="text"
        onChange={(e) => dispatch(setNameAction(e.target.value))}
        name="search"
        placeholder="Enter Keyword"
      />
      <p style={{ textAlign: "right", paddingRight: "20px" }}></p>
      {count?
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Date</th>
            <th>User's name</th>
          </tr>
        </thead>
        <tbody>{task}</tbody>
      </Table>:<h1>Data Not Found</h1>}
    </div>
  );
}
export default ShowTasks;
