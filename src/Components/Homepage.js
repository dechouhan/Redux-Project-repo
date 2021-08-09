import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export default function Homepage() {
  const history = useHistory();
  const loggedUser = useSelector((state) => state.Todos.setLoginMember);
  useEffect(() => {
    if (!loggedUser._id) {
      history.push("/login");
    }
  }, [loggedUser,history]);
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
}
