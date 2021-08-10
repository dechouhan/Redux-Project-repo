import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { signupMember } from "../Redux/thunks";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";

export default function Signup() {
  const history = useHistory();
  const dispatch = useDispatch();


  const submitHandle = (e) => {
    e.preventDefault();
    if (
      e.target.name.value &&
      e.target.email.value &&
      e.target.password.value &&
      e.target.password.value === e.target.reEnterPassword.value
    ) {
      dispatch(
        signupMember({
          name: e.target.name.value,
          email: e.target.email.value,
          password: e.target.password.value,
        })
      );
      history.push("/login");
    } else {
      alert("invlid input");
    }
  };

  return (
    <div>
      <Container>
        <Form onSubmit={submitHandle}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="name" placeholder="Enter name" />
          </Form.Group>

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

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Retype Password</Form.Label>
            <Form.Control
              type="password"
              name="reEnterPassword"
              placeholder="Enter Retype Password"
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
