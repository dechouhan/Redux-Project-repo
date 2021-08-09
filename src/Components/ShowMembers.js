import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import { deleteMembers, fetchMembers } from "../Redux/thunks";
import { useHistory } from "react-router-dom";

function Members() {
  let member = null;
  const dispatch = useDispatch()
  const history = useHistory()
  const loggedUser = useSelector(state=>state.Todos.setLoginMember)
  useEffect(() => {
    dispatch(fetchMembers());
  }, [dispatch]);

  useEffect(() => {
    if (!loggedUser.name) {
        history.push("/login")
    }
  }, [loggedUser]);


  const deleteMemberBtn= (memberData)=>{
    dispatch(deleteMembers(memberData._id))
  }

  const members = useSelector((state) => state.Todos.members);
  if (members) {
    member = members.map((memberData) => {
      return (
        <tr key={memberData._id}>
          <td>{memberData.name}</td>
          <td>{memberData.email}</td>
          <td><button onClick={()=>deleteMemberBtn(memberData)}>Delete</button></td>
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

    </div>
  );
}
export default Members;
