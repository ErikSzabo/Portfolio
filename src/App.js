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
      <AnimatedRoutes>
        <RouteTransition exact={true} path="/" component={Landing} />
        <RouteTransition path="/skills" component={Skills} />
        <RouteTransition path="/contact" component={Contact} />
        <RouteTransition exact={true} path="/projects" component={Projects} />
        <RouteTransition path="/projects/:id" component={ProjectPage} />
        <RouteTransition path="/login" component={Login} />
        <PrivateRouteTransition path="/dashboard" component={Dashboard} />
        <PrivateRouteTransition path="/dashboard/projects/:id" />
        <PrivateRouteTransition path="/dashboard/skills/:id" />
      </AnimatedRoutes>
    </Container>
  </Router>
);

export default App;
