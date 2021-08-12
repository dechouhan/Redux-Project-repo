import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAddModelStatus } from "../../Redux/Actions/userAction";
import { createPost } from "../../API-Thunk/postThunk";
import { resetPost } from "../../Redux/Actions/postAction";

export default function AddPost() {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.Users.setAddModel);
  const loggedUserId = useSelector((state) => state.Members._id);
  const handleClose = () => dispatch(setAddModelStatus({ status: false }));

  const submitPostHandle = (e) => {
    e.preventDefault();
    dispatch(
      createPost(
        {
          title: e.target.title.value,
          description: e.target.description.value,
          userId: loggedUserId,
        },
        loggedUserId
      )
    );
    dispatch(resetPost());
    handleClose();
  };

  return (
    <div>
      <Modal show={show.status} onHide={handleClose}>
        <Modal.Header closeButton aria-label="Close">
          <Modal.Title>Add Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={submitPostHandle}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                placeholder="Enter title"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                name="description"
                placeholder="Enter discription"
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
