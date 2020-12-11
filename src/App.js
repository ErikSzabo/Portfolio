import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './components/nav/Nav';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';
import Landing from './components/landing/Landing';
import Container from './components/Container';
import ProjectPage from './components/projects/ProjectPage';
import AnimatedRoutes from './components/transition/AnimatedRoutes';
import RouteTransition from './components/transition/RouteTransition';
import './App.css';

const App = () => (
  <Router>
    <Nav />
    <Container>
      <AnimatedRoutes>
        <RouteTransition exact path="/" component={Landing} />
        <RouteTransition path="/about" component={Skills} />
        <RouteTransition path="/contact" component={Contact} />
        <RouteTransition exact path="/projects" component={Projects} />
        <RouteTransition path="/projects/:id" component={ProjectPage} />
      </AnimatedRoutes>
    </Container>
  </Router>
);

export default App;
