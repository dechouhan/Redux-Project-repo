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
import AllPosts from "./Components/Posts/showAllPosts";
import MyAllPosts from "./Components/Posts/showMyPosts";
import AddPost from "./Components/Posts/addPost";
import ShowComments from "./Components/Comments/showComments";
import SearchMember from "./Components/SearchMemberAutocomplete";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import 'bootstrap/dist/css/bootstrap.css';
import AddTask from "./Components/Task/AddTask";
import ShowTasks from "./Components/Task/ShowTask";
function App() {
  const token = useSelector((state) => state.Members.token);
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
                {token ? (
                  <>
                    <Nav.Link as={Link} to="/homepage">
                      Homepage
                    </Nav.Link>
                    <Nav.Link as={Link} to="/allposts">
                      All Posts
                    </Nav.Link>
                    <Nav.Link as={Link} to="/myallposts">
                      My All Posts
                    </Nav.Link>
                    <Nav.Link as={Link} to="/members">
                      MembersList
                    </Nav.Link>
                    <Nav.Link as={Link} to="/addtask">
                      AddTask
                    </Nav.Link>
                    <Nav.Link as={Link} to="/showtasks">
                      ShowTask
                    </Nav.Link>
                    <Nav.Link as={Link} to="/logout">
                      Logout
                    </Nav.Link>
                  </>
                ) : (
                  <>
                    <Nav.Link as={Link} to="/signup">
                      SignUp
                    </Nav.Link>
                    <Nav.Link as={Link} to="/login">
                      Login
                    </Nav.Link>
                  </>
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
            <Route exact path="/search">
              <SearchMember />
            </Route>
            <PrivateRoute component={Homepage} exact path="/homepage" />
            <PrivateRoute component={Members} exact path="/members" />
            <PrivateRoute component={Logout} exact path="/logout" />
            <PrivateRoute component={AllPosts} exact path="/allposts" />
            <PrivateRoute component={MyAllPosts} exact path="/myallposts" />
            <PrivateRoute component={AddPost} exact path="/addpost" />
            <PrivateRoute component={ShowComments} exact path="/showcomments" />
            <PrivateRoute component={AddTask} exact path="/addtask" />
            <PrivateRoute component={ShowTasks} exact path="/showtasks" />
            <PublicRoute component={Signup} exact path="/signup" />
            <PublicRoute component={Login} exact path="/login" />
          </Switch>
        </BrowserRouter>
      </center>
    </div>
  );
}

export default App;
