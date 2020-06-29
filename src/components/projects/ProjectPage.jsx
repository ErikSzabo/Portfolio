import React, { useState, useEffect } from 'react';
import DirWatcher from '../../content/DirWatcher';
import SnakeMultiplayer from '../../content/SnakeMultiplayer';
import DevrikNet from '../../content/DevrikNet';
import DigitalCircuits from '../../content/DigitalCircuits';
import TicTacToe from '../../content/TicTacToe';

const pageMap = {
	DirWatcher: DirWatcher,
	'Snake multiplayer': SnakeMultiplayer,
	'This website': DevrikNet,
	'Digital Circuits Simulator': DigitalCircuits,
	'TicTacToe Online': TicTacToe
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
