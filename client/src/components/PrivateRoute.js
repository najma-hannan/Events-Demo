import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { isAuthenticated } from '../utils';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    element={isAuthenticated() ? <Component /> : <Navigate to="/login" replace />}
  />
);

export default PrivateRoute;
