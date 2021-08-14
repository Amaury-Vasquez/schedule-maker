import React, { useContext } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

import { AppContext } from '../../Context/AppContext';

export const ProtectedRoute = (props: RouteProps) => {
  const { path, component } = props;
  const { isLogged } = useContext(AppContext);
  return isLogged ? (
    <Route path={path} component={component} />
  ) : (
    <Redirect to={{ pathname: '/auth' }} />
  );
};
