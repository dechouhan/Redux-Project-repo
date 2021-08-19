import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import { fetchTasks } from "../../API-Thunk/taskThunk";
import {
  fetchTasksAction,
  resetDateAction,
  setEndDateAction,
  setStartDateAction,
} from "../../Redux/Actions/taskAction";
import axios from "axios";

function ShowTasks() {
  let task = null;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
    dispatch(resetDateAction());
  }, [dispatch]);

  const Search = async (key) => {
    const res = await axios.get(`http://localhost:7000/tasks/${key}`);
    dispatch(fetchTasksAction(res.data));
  };
  const startDate = useSelector((state) => state.Tasks.startDate);
  const endDate = useSelector((state) => state.Tasks.endDate);
  let tasks = useSelector((state) => state.Tasks.tasks);
  if (startDate && endDate) {
    if (tasks) {
      task = tasks.map((userTask) => {
        if (userTask.date >= startDate && userTask.date <= endDate) {
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
      &nbsp;<label>Search by Name:-&nbsp;</label>
      <input
        type="text"
        onChange={(e) => Search(e.target.value)}
        name="search"
        placeholder="Enter Keyword"
      />
      <p style={{ textAlign: "right", paddingRight: "20px" }}></p>
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
      </Table>
    </div>
  );
}
export default ShowTasks;
