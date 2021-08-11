import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import AddUser from "./AddUser";
import EditUser from "./EditUser";
import {
  setAddModelStatus,
  setAddUser,
  setEditModelStatus,
} from "../Redux/Actions/userAction";
import { deleteUser, fetchUsers } from "../API-Thunk/userThunk";

function Users() {
  let user = null;
  //user models state start
  const addModelStatus = useSelector((state) => state.Users.setAddModel);
  const editModelStatus = useSelector((state) => state.Users.setEditModel);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const deleteUserData = (userData) => {
    dispatch(deleteUser(userData._id));
    dispatch(fetchUsers());
  };

  const editUserModel = (userData) => {
    dispatch(setAddUser(userData));
    dispatch(setEditModelStatus({ status: true }));
  };

  const addUserModel = () => {
    dispatch(setAddModelStatus({ status: true }));
  };

  const users = useSelector((state) => state.Users.users);
  if (users) {
    user = users.map((userData) => {
      return (
        <tr key={userData._id}>
          <td>{userData.name}</td>
          <td>{userData.email}</td>
          <td>{userData.city}</td>
          <td>{userData.field}</td>
          <td style={{ textAlign: "center" }}>
            <span>
              <Button
                style={{ marginBottom: "10px", width: "68px" }}
                variant="warning"
                onClick={() => editUserModel(userData)}
              >
                Edit
              </Button>
              <br />
              <Button
                style={{ width: "68px" }}
                variant="danger"
                onClick={() => deleteUserData(userData)}
              >
                Delete
              </Button>
            </span>
          </td>
        </tr>
      );
    });
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>User List</h1>
      <p style={{ textAlign: "right", paddingRight: "20px" }}>
        <Button variant="success" onClick={() => addUserModel()}>
          Add New User
        </Button>
      </p>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
            <th>field</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{user}</tbody>
      </Table>
      {/* For Model Conditional Renderering */}
      <>
        {addModelStatus.status ? <AddUser /> : ""}
        {editModelStatus.status ? <EditUser /> : ""}
      </>
    </div>
  );
}
export default Users;
