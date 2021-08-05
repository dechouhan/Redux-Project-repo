import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../Redux/thunks";
import { resetUser, setAddModelStatus } from "../Redux/Actions/allAction";

export default function AddUser() {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.Todos.setAddModel);
  const handleClose = () => dispatch(setAddModelStatus({ status: false }));

  const submitUserHandle = (e) => {
    e.preventDefault();
    dispatch(
      createUser({
        name: e.target.name.value,
        email: e.target.email.value,
        city: e.target.city.value,
        field: e.target.field.value,
      })
    );
    dispatch(resetUser());
    handleClose();
  };

  return (
    <div>
      {/* Form Model Code  */}
      <Modal show={show.status} onHide={handleClose}>
        <Modal.Header closeButton aria-label="Close">
          <Modal.Title>Add User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={submitUserHandle}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" placeholder="Enter name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                name="city"
                placeholder="Enter username"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Field</Form.Label>
              <Form.Control
                type="text"
                name="field"
                placeholder="Enter address"
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
