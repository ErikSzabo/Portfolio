import React, { useState, useEffect } from 'react';
import DirWatcher from '../../content/DirWatcher';

const pageMap = {
	DirWatcher: DirWatcher,
	'Snake multiplayer': '',
	'This website': '',
	'Digital Circuits Simulator': '',
	'TicTacToe Online': ''
};

const ProjectPage = ({ match: { params: { id: name } } }) => {
	const [ content, setContent ] = useState('');

	useEffect(() => {
		setContent(pageMap[name]);
	}, []);

	return (
		<div className="project-page">
			<h1>{name}</h1>
			{content}
		</div>
	);
};

export default ProjectPage;
