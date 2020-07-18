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
            <AnimatedRoutes exitBeforeEnter initial={false}>
                <RouteTransition exact path="/" slide={50}>
                    <Landing />
                </RouteTransition>
                <RouteTransition path="/skills" slide={50}>
                    <Skills />
                </RouteTransition>
                <RouteTransition path="/contact" slide={50}>
                    <Contact />
                </RouteTransition>
                <RouteTransition exact path="/projects" slide={50}>
                    <Projects />
                </RouteTransition>
                <RouteTransition path="/projects/:id" slide={50}>
                    <ProjectPage />
                </RouteTransition>
            </AnimatedRoutes>
        </Container>
    </Router>
);

export default App;
