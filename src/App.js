import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import "./App.css";
import Users from "./Components/Users";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Homepage from "./Components/Homepage";
import Logout from "./Components/Logout";
import Members from "./Components/ShowMembers";
import { useSelector } from "react-redux";
import PrivateRoute from "./Components/PrivateRoutes";
import PublicRoute from "./Components/PublicRoute";

function App() {
  const token = useSelector(state=>state.Todos.token)
  return (
    <div>
      <center>
        <BrowserRouter>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand as={Link} to="/">
                CRUD APP
              </Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/users">
                  UserList
                </Nav.Link>
                {!token ? (
                  <>
                    <Nav.Link as={Link} to="/signup">
                      SignUp
                    </Nav.Link>
                    <Nav.Link as={Link} to="/login">
                      Login
                    </Nav.Link>
                  </>
                ) : (
                  ""
                )}
                {token ? (
                  <>
                    <Nav.Link as={Link} to="/homepage">
                      Homepage
                    </Nav.Link>
                    <Nav.Link as={Link} to="/members">
                      MembersList
                    </Nav.Link>
                    <Nav.Link as={Link} to="/logout">
                      Logout
                    </Nav.Link>
                  </>
                ) : (
                  ""
                )}
              </Nav>
            </Container>
          </Navbar>

          <br />
          <br />
          <Switch>
            <Route exact path="/">
              <Users />
            </Route>
            <Route exact path="/users">
              <Users />
            </Route>
            {/* <Route path="/signup">
              <Signup />
            </Route> */}
            {/* <Route path="/login">
              <Login />
            </Route> */}
            {/* <Route path="/homepage">
              <Homepage />
            </Route> */}
            {/* <Route path="/members">
              <Members />
            </Route>
            <Route path="/logout">
              <Logout />
            </Route> */}
            <PrivateRoute component={Homepage} exact path="/homepage" />
            <PrivateRoute component={Members} exact path="/members" />
            <PrivateRoute component={Logout} exact path="/logout" />
            <PublicRoute component={Signup} exact path="/signup" />
            <PublicRoute component={Login} exact path="/login" />
          </Switch>
        </BrowserRouter>
      </center>
    </div>
  );
}

export default App;
