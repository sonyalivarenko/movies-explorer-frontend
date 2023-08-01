import React from 'react';
import { Navigate } from "react-router-dom";

const ProtectedRouteElement = (props) => {
  if (props.loggedIn) {
    return props.children
  }

  return <Navigate to="/signin" replace/>

  }

export default ProtectedRouteElement;