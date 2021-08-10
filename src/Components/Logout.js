import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { resetLoginMember } from "../Redux/Actions/allAction";

export default function Logout() {
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetLoginMember());
    localStorage.removeItem("_id")
    localStorage.removeItem("token")
    alert("You are SuccessFully LogOut");
    history.push("/login");
  }, [dispatch,history]);
  return <div></div>;
}
