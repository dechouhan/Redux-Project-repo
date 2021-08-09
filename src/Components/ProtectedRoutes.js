import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";

const Protected = ({ component: Component, ...rest }) => {
  debugger;
  const loggedUser = useSelector((state) => state.Todos.setLoginMember);
  return (
    <Route
      {...rest}
      render={(props) => {
        loggedUser._id ? (
          <Component {...rest} {...props} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    />
  );
};

export default Protected;
