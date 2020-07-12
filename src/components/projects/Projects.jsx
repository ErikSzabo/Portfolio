import React, { useState } from 'react';
import Project from './Project';
import dirwatcher from '../../images/dirwatcher.png';
import snake from '../../images/snake.png';
import portfolio from '../../images/portfolio.png';
import circuit from '../../images/circuit.png';
import tiktaktoe from '../../images/tiktaktoe.png';
import FilterTag from './FilterTag';

// Fake API data 😢
const projects = [
	{
		name: 'DirWatcher',
		description: 'Electron app to organize and monitor folders. Uses LitElement inside Electron.',
		img: dirwatcher,
		tags: ['JavaScript', 'CSS', 'Electron'],
		filterTags: ['javascript']
	},
	{
		name: 'Snake multiplayer',
		description: 'Really bad snake game that I wrote in python, in my first semester at the University. But hey, it\'s 60 fps.',
		img: snake,
		tags: ['Python', 'pygame'],
		filterTags: ['python']
	},
	{
		name: 'This portfolio',
		description: 'This is just my portfolio. The only reason why it\'s using React...Well, I didn\'t have a React project before.',
		img: portfolio,
		tags: ['JavaScript', 'CSS', 'React'],
		filterTags: ['frontend', 'javascript']
	},
	{
		name: 'Digital Circuits Simulator',
		description: 'I chose this topic as a homework in the second semester at the University. Very basic circuit simulator.',
		img: circuit,
		tags: ['Java'],
		filterTags: []
	},
	{
		name: 'TicTacToe Online',
		description: 'Client - Server based tictactoe using python sockets and pygame module.',
		img: tiktaktoe,
		tags: ['Python', 'pygame', 'sockets'],
		filterTags: ['python']
	}
]

const Projects = () => {
	const filters = {
		none: '',
		frontend: 'frontend',
		backend: 'backend',
		javascript: 'javascript',
		python: 'python'
	}

	const [filter, setFilter] = useState(filters.none);

	const filterProjects = (filterType) => {
		if (!(filterType in filters)) return projects;
		if (filterType === filters.none) return projects;
		return projects.filter(p => p.filterTags.includes(filterType));
	}

	return (
		<div className="projects">
			<div className="projects-header">
				<h1>My Projects</h1>
				<p>
					These are all of my own projects. I'm an unversity student, so the projects may vary.
					I mostly work with the frontend and javascript, although I learnt python and java at the
					university as well.
				</p>
				<div className="filter-tags">
					<FilterTag name="ALL" filter={filters.none} setter={setFilter} />
					<FilterTag name="FRONTEND" filter={filters.frontend} setter={setFilter} />
					<FilterTag name="BACKEND" filter={filters.backend} setter={setFilter} />
					<FilterTag name="JAVASCRIPT" filter={filters.javascript} setter={setFilter} />
					<FilterTag name="PYTHON" filter={filters.python} setter={setFilter} />
				</div>
			</div>

			<div className="projects-wrapper">
				{filterProjects(filter).map(p => <Project key={p.name} name={p.name} description={p.description} img={p.img} tags={p.tags} />)}
			</div>
		</div>
	);
}

export default Projects;
