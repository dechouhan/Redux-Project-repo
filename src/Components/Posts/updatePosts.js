import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEditModelStatus } from "../../Redux/Actions/userAction";
import { updatePost } from "../../API-Thunk/postThunk";

export default function EditPost() {
  const dispatch = useDispatch();
  const loggedUserId = useSelector((state) => state.Members._id);
  const selectPost = useSelector((state) => state.Posts.setPost);
  const show = useSelector((state) => state.Users.setEditModel);
  const handleClose = () => dispatch(setEditModelStatus({ status: false }));

  const submitPostHandle = (e) => {
    e.preventDefault();
    dispatch(
      updatePost(
        selectPost._id,
        {
          title: e.target.title.value,
          description: e.target.description.value,
        },
        loggedUserId
      )
    );
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
                defaultValue={selectPost.title}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                name="description"
                placeholder="Enter discription"
                defaultValue={selectPost.description}
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
