import React from 'react';
import { Route } from 'react-router-dom';
import MountTransition from './MountTransition';

const RouteTransition = ({
  component,
  exact = false,
  path,
  slide = 0,
  slideUp = 0,
  ...rest
}) => (
  <MountTransition slide={slide} slideUp={slideUp}>
    <Route exact={exact} path={path} component={component} {...rest} />
  </MountTransition>
);

export default RouteTransition;
