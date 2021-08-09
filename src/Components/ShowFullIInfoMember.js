import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { setShowModelStatus } from "../Redux/Actions/allAction";

export default function ShowMemberFullInfo() {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.Todos.setShowModel);
  const selectedMember = useSelector((state) => state.Todos.setShowMember);
  const handleClose = () => dispatch(setShowModelStatus({ status: false }));
  return (
    <div>
      {/* Form Model Code  */}
      <Modal show={show.status} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Show Member Full Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Name:{selectedMember.name}</h5>
          <h5>Email:{selectedMember.email}</h5>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
