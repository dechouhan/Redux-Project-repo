import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { fetchPostsByUserId } from "../../API-Thunk/postThunk";
import { setAddPost } from "../../Redux/Actions/postAction";
import {
  setAddModelStatus,
  setEditModelStatus,
} from "../../Redux/Actions/userAction";
import AddPost from "./addPost";
import EditPost from "./updatePosts";

function MyAllPosts() {
  let post = null;
  const dispatch = useDispatch();
  const loggedUserId = useSelector((state) => state.Members._id);
  const addModelStatus = useSelector((state) => state.Users.setAddModel);
  const editModelStatus = useSelector((state) => state.Users.setEditModel);
  useEffect(() => {
    dispatch(fetchPostsByUserId(loggedUserId));
  }, [dispatch, loggedUserId]);

  const deletePostData = (userPost) => {
    dispatch(deletePostData(userPost._id));
    dispatch(fetchPostsByUserId(loggedUserId));
  };

  const editPostModel = (userPost) => {
    dispatch(setAddPost(userPost));
    dispatch(setEditModelStatus({ status: true }));
    dispatch(fetchPostsByUserId(loggedUserId));
  };

  const addPostModel = () => {
    dispatch(setAddModelStatus({ status: true }));
    dispatch(fetchPostsByUserId(loggedUserId));
  };

  const posts = useSelector((state) => state.Posts.postsById);
  if (posts) {
    post = posts.map((userPost) => {
      return (
        <tr key={userPost._id}>
          <td>{userPost.title}</td>
          <td>{userPost.description}</td>
          <td>{userPost.userId}</td>
          <td style={{ textAlign: "center" }}>
            <span>
              <Button
                style={{ marginBottom: "10px", width: "68px" }}
                variant="warning"
                onClick={() => editPostModel(userPost)}
              >
                Edit
              </Button>
              <br />
              <Button
                style={{ width: "68px" }}
                variant="danger"
                onClick={() => deletePostData(userPost)}
              >
                Delete
              </Button>
            </span>
          </td>
        </tr>
      );
    });
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Post List</h1>
      <p style={{ textAlign: "right", paddingRight: "20px" }}>
        <Button variant="success" onClick={() => addPostModel()}>
          Add New Post
        </Button>
      </p>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>userId</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{post}</tbody>
      </Table>

      {addModelStatus.status ? <AddPost /> : ""}
      {editModelStatus.status ? <EditPost /> : ""}
    </div>
  );
}
export default MyAllPosts;
