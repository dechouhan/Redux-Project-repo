import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateMember } from "../Redux/thunks";
import { setEditModelStatus } from "../Redux/Actions/allAction";

export default function EditMember() {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.Todos.setEditModel);
  const handleClose = () => dispatch(setEditModelStatus({ status: false }));
  const loggedUser = useSelector((state) => state.Todos.setLoginMember);

  const submitUserHandle = (e) => {
    e.preventDefault();
    dispatch(
      updateMember(loggedUser._id, {
        name: e.target.name.value,
        email: e.target.email.value,
        password: e.target.password.value,
      })
    );
    handleClose();
  };

  return (
    <div>
      {/* Form Model Code  */}
      <Modal show={show.status} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Member</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={submitUserHandle}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                defaultValue={loggedUser.name}
                placeholder="Enter name"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                defaultValue={loggedUser.email}
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                defaultValue={loggedUser.password}
                placeholder="Enter New Password"
              />
            </Form.Group>

            <center>
              <Button variant="primary" type="submit">
                Submit
              </Button>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </center>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
