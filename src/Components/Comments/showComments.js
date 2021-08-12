import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { setAddModelStatus } from "../../Redux/Actions/userAction";
import { fetchCommentsByPostId } from "../../API-Thunk/commentThunk";
import AddComment from "./addComment";

function ShowComments() {
  let comment = null;
  const dispatch = useDispatch();
  const selectPost_id = useSelector(
    (state) => state.Comments.setPostForComments
  );
  const addModelStatus = useSelector((state) => state.Users.setAddModel);

  useEffect(() => {
    dispatch(fetchCommentsByPostId(selectPost_id));
  }, [dispatch, selectPost_id]);

  const addCommentModel = () => {
    dispatch(setAddModelStatus({ status: true }));
    dispatch(fetchCommentsByPostId(selectPost_id));
  };

  const comments = useSelector((state) => state.Comments.commentsById);
  if (comments) {
    comment = comments.map((postComment) => {
      return (
        <tr key={postComment._id}>
          <td>{postComment.title}</td>
          <td>{postComment.description}</td>
          <td>{postComment.postId}</td>
        </tr>
      );
    });
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Comments List</h1>
      <p style={{ textAlign: "right", paddingRight: "20px" }}>
        <Button variant="success" onClick={() => addCommentModel()}>
          Add New Comment
        </Button>
      </p>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>PostId</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{comment}</tbody>
      </Table>

      {addModelStatus.status ? <AddComment /> : ""}
    </div>
  );
}
export default ShowComments;
