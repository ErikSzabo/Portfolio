import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './components/nav/Nav';
import Login from './components/admin/Login';
import Dashboard from './components/admin/Dashboard';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';
import Landing from './components/landing/Landing';
import Container from './components/Container';
import ProjectPage from './components/projects/ProjectPage';
import AnimatedRoutes from './components/transition/AnimatedRoutes';
import RouteTransition from './components/transition/RouteTransition';
import PrivateRouteTransition from './components/transition/PrivateRouteTransition';
import './App.css';

const App = () => (
  <Router>
    <Nav />
    <Container>
      <AnimatedRoutes exitBeforeEnter initial={false}>
        <RouteTransition exact path="/" slide={50} component={Landing} />
        <RouteTransition path="/skills" slide={50} component={Skills} />
        <RouteTransition path="/contact" slide={50} component={Contact} />
        <RouteTransition
          exact
          path="/projects"
          slide={50}
          component={Projects}
        />
        <RouteTransition
          path="/projects/:id"
          slide={50}
          component={ProjectPage}
        />
        <RouteTransition path="/login" slide={50} component={Login} />
        <PrivateRouteTransition
          exact
          path="/dashboard"
          slide={50}
          component={Dashboard}
        />
      </AnimatedRoutes>
    </Container>
  </Router>
);

export default App;
