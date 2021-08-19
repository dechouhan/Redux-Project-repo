import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import { createTask } from "../../API-Thunk/taskThunk";

export default function AddTask() {
  const history = useHistory();
  const dispatch = useDispatch();
  const loggedUserId = useSelector((state) => state.Members._id);
  const loggedUsername = useSelector((state) => state.Members.username);

  const submitHandle = (e) => {
    e.preventDefault();
    if (
      e.target.title.value &&
      e.target.date.value &&
      e.target.startTime.value &&
      e.target.endTime.value &&
      loggedUserId &&
      loggedUsername
    ) {
      console.log(
        e.target.title.value,
        e.target.date.value,
        e.target.startTime.value,
        e.target.endTime.value,
        loggedUserId,
        loggedUsername
      );
      dispatch(
        createTask({
          title: e.target.title.value,
          date: e.target.date.value,
          startTime: e.target.startTime.value,
          endTime: e.target.endTime.value,
          userId: loggedUserId,
          username: loggedUsername,
        })
      );
      history.push("/showtasks");
    } else {
      alert("invlid input");
    }
  };

  return (
    <div>
      <Container>
        <Form onSubmit={submitHandle}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" name="title" placeholder="Enter title" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Date</Form.Label>
            <Form.Control type="date" name="date" placeholder="Enter date" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Start time</Form.Label>
            <Form.Control
              type="time"
              name="startTime"
              placeholder="Enter startTime"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>End time</Form.Label>
            <Form.Control
              type="time"
              name="endTime"
              placeholder="Enter endTime"
            />
          </Form.Group>

          <center>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </center>
        </Form>
      </Container>
    </div>
  );
}
