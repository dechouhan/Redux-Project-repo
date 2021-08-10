import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { deleteMembers, fetchMembers } from "../Redux/thunks";
import { useHistory } from "react-router-dom";
import {
  setEditModelStatus,
  setShowMember,
  setShowModelStatus,
} from "../Redux/Actions/allAction";
import EditMember from "./EditMember";
import ShowMemberFullInfo from "./ShowFullIInfoMember";

function Members() {
  let member = null;
  const dispatch = useDispatch();
  const history = useHistory();
  const token = useSelector((state) => state.Todos.token);
  const loggedUserId = useSelector((state) => state.Todos._id);
  const editModelStatus = useSelector((state) => state.Todos.setEditModel);
  const showModelStatus = useSelector((state) => state.Todos.setShowModel);
  useEffect(() => {
    dispatch(fetchMembers());
  }, [dispatch]);

  useEffect(() => {
    if (!token) {
      history.push("/login");
    }
  }, [history,token]);

  const deleteMemberBtn = (memberData) => {
    dispatch(deleteMembers(memberData._id));
  };

  const editMemberBtn = (memberData) => {
    dispatch(setShowMember(memberData));
    dispatch(setEditModelStatus({ status: true }));
  };

  const showMemberBtn = (memberData) => {
    dispatch(setShowMember(memberData));
    dispatch(setShowModelStatus({ status: true }));
  };
  const members = useSelector((state) => state.Todos.members);
  if (members) {
    member = members.map((memberData) => {
      return (
        <tr key={memberData._id}>
          <td>{memberData.name}</td>
          <td>{memberData.email}</td>
          {loggedUserId === memberData._id ? (
            <>
              <td>
                <Button variant="warning" onClick={() => editMemberBtn(memberData)}>
                  Edit
                </Button>
                &nbsp;&nbsp;
                <Button
                  variant="danger"
                  onClick={() => deleteMemberBtn(memberData)}
                >
                  Delete
                </Button>
              </td>
            </>
          ) : (
            <td>
              <Button
                variant="success"
                onClick={() => showMemberBtn(memberData)}
              >
                Show Member Info
              </Button>
            </td>
          )}
        </tr>
      );
    });
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Members List</h1>
      <p style={{ textAlign: "right", paddingRight: "20px" }}></p>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{member}</tbody>
      </Table>
      <>
        {editModelStatus.status ? <EditMember /> : ""}
        {showModelStatus.status ? <ShowMemberFullInfo /> : ""}
      </>
    </div>
  );
}
export default Members;
