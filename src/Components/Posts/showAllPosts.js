import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { fetchPosts } from "../../API-Thunk/postThunk";
import { useHistory } from "react-router-dom";
import { setAddPostForComments } from "../../Redux/Actions/commentAction";

function AllPosts() {
  let post = null;
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const showCommentsData = (userPost) => {
    dispatch(setAddPostForComments(userPost));
    history.push("/showcomments");
  };
  const posts = useSelector((state) => state.Posts.posts);
  if (posts) {
    post = posts.map((userPost) => {
      return (
        <tr key={userPost._id}>
          <td>{userPost.title}</td>
          <td>{userPost.description}</td>
          <td>{userPost.userId}</td>
          <td>
            <Button variant="danger" onClick={() => showCommentsData(userPost)}>
              Show Comments
            </Button>
          </td>
        </tr>
      );
    });
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Post List</h1>
      <p style={{ textAlign: "right", paddingRight: "20px" }}></p>
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
    </div>
  );
}
export default AllPosts;
