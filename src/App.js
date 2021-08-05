import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import "./App.css";
import Users from "./Components/Users";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";

function App() {
  return (
    <div>
      <center>
        <BrowserRouter>
          <>
            <Navbar bg="dark" variant="dark">
              <Container>
                <Navbar.Brand as={Link} to="/">
                  CRUD APP
                </Navbar.Brand>
                <Nav className="me-auto">
                  <Nav.Link as={Link} to="/users">
                    UserList
                  </Nav.Link>
                  <Nav.Link as={Link} to="/AddUser">
                    Add User
                  </Nav.Link>
                </Nav>
              </Container>
            </Navbar>
          </>
          <br />
          <br />
          <Switch>
            <Route exact path="/">
              <Users />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
          </Switch>
        </BrowserRouter>
      </center>
    </div>
  );
}

export default App;
