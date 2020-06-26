import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/nav/Nav';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';
import Landing from './components/landing/Landing';

const App = () => (
	<Router>
		<Nav />
		<section className="container">
			<Route exact path="/" component={Landing} />
			<Route exact path="/projects" component={Projects} />
			<Route exact path="/skills" component={Skills} />
			<Route exact path="/contact" component={Contact} />
		</section>
	</Router>
);

export default App;
