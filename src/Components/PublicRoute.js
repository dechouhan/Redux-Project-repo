import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";

const PublicRoute = ({ component: Component, ...rest }) => {
  const token = useSelector((state) => state.Members.token);
  return (
    <Route
      {...rest}
      render={(props) =>
        token ? <Redirect to="/homepage" /> 
        : 
        <Component {...rest} {...props} />
      }
    />
  );
};

export default PublicRoute;
