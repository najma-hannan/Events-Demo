import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { isAuthenticated } from '../utils';

const PrivateRoute = ({ children }) => {
  if (!isAuthenticated()) {
    return <Navigate to={"/"} replace={true} />
  }

  return children ? children : <Outlet />
};

export default PrivateRoute;
