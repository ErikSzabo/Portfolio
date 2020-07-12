import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/nav/Nav';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';
import Landing from './components/landing/Landing';
import Container from './components/Container';
import ProjectPage from './components/projects/ProjectPage';
import './App.css';

const App = () => (
	<Router>
		<Nav />
		<Container>
			<Switch>
				<Route exact path="/" component={Landing} />
				<Route path="/skills" component={Skills} />
				<Route path="/contact" component={Contact} />
				<Route exact path="/projects" component={Projects} />
				<Route path="/projects/:id" component={ProjectPage} />
			</Switch>
		</Container>
	</Router>
);

export default App;
