import React from 'react';
import ContentItem from './components/ContentItem';
import VisitContent from './components/VisitContent';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import snake1 from '../images/content/snake1.png';
import snake2 from '../images/content/snake2.png';

export default (
	<div>
		<p className="p-description">Using technology like pygame, written in Python.</p>

		<VisitContent url="https://github.com/ErikSzabo/Python-local-multiplayer-snake" />

		<AwesomeSlider className="awesome-slider">
			<div data-src={snake2} />
			<div data-src={snake1} />
		</AwesomeSlider>

		<ContentItem title="About the project">
			Snake game that I wrote in python. This was my first bigger homework at the university. At that time I was
			really proud, but now, I realised that the code looks like shit, and it's doesn't contain anything like
			clean code... However, it's a really fun and good looking game, and the interesting part is the movement
			which happens in 60 fps.
		</ContentItem>
	</div>
);
