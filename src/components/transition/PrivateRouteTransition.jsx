import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import MountTransition from './MountTransition';
import { UserContext } from '../Container';

const PrivateRouteTransition = ({
  component: Component,
  exact = false,
  path,
  slide = 0,
  slideUp = 0,
  ...rest
}) => {
  const {
    state: { isAuthenticated },
  } = useContext(UserContext);

  return (
    <MountTransition slide={slide} slideUp={slideUp}>
      <Route
        exact={exact}
        path={path}
        {...rest}
        render={(props) =>
          !isAuthenticated ? <Redirect to="/login" /> : <Component {...props} />
        }
      />
    </MountTransition>
  );
};

export default PrivateRouteTransition;
