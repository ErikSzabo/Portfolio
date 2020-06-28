import React from 'react';
import ProjectListItem from './Project';
import dirwatcher from '../../images/dirwatcher.png';
import snake from '../../images/snake.png';
import portfolio from '../../images/portfolio.png';
import circuit from '../../images/circuit.png';
import tiktaktoe from '../../images/tiktaktoe.png';

const Projects = () => (
	<div className="page-container projects">
		<h1>My Projects</h1>
		<div className="projects-wrapper">
			<ProjectListItem
				name="DirWatcher"
				description="Electron app to organize and monitor folders. Lorem ipsum and other smaple text just to fill up the space"
				img={dirwatcher}
				langs={[ 'JavaScript', 'HTML', 'CSS' ]}
			/>

			<ProjectListItem
				name="Snake multiplayer"
				description="Really bad snake game that I wrote in python, in my first semester at the University. But hey, it's 60 fps."
				img={snake}
				langs={[ 'Python' ]}
			/>

			<ProjectListItem
				name="This website"
				description="This is just my portfolio. The only reason why it's using React... Well, I didn't have a React project before."
				img={portfolio}
				langs={[ 'JavaScript', 'CSS', 'React' ]}
			/>

			<ProjectListItem
				name="Digital Circuits Simulator"
				description="I chose this topic as a homework in the second semester at the University. Very basic circuit simulator."
				img={circuit}
				langs={[ 'Java' ]}
			/>

			<ProjectListItem
				name="TicTacToe Online"
				description="Client - Server based tictactoe using python sockets and pygame module."
				img={tiktaktoe}
				langs={[ 'Python', 'pygame', 'sockets' ]}
			/>
		</div>
	</div>
);

export default Projects;
