import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { loginMember } from "../Redux/thunks";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";

export default function Login() {
  const history = useHistory();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.Todos.token);

  const submitHandle = (e) => {
    e.preventDefault();
    if (e.target.email.value && e.target.password.value) {
      dispatch(
        loginMember({
          email: e.target.email.value,
          password: e.target.password.value,
        })
      );
      if (token) {
        history.push("/homepage");
      }
    } else {
      alert("invlid input");
    }
  };

  return (
    <div>
      <Container>
        <Form method="post" onSubmit={submitHandle}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Enter password"
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
