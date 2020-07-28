import React from 'react';
import { Route } from 'react-router-dom';
import MountTransition from './MountTransition';

const RouteTransition = ({
    children,
    exact = false,
    path,
    slide = 0,
    slideUp = 0,
    ...rest
}) => (
    <Route exact={exact} path="/" {...rest}>
        <MountTransition slide={slide} slideUp={slideUp}>
            {children}
        </MountTransition>
    </Route>
);

export default RouteTransition;
