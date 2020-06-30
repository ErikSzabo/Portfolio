import React from 'react';
import ContentItem from './components/ContentItem';
import VisitContent from './components/VisitContent';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import devrik1 from '../images/content/devrik1.png';
import devrik2 from '../images/content/devrik2.png';

export default (
	<div>
		<p className="p-description">Using technology like React, written in JavaScript.</p>

		<VisitContent url="https://github.com/ErikSzabo/ErikSzabo.github.io" />

		<AwesomeSlider className="awesome-slider">
			<div data-src={devrik2} />
			<div data-src={devrik1} />
		</AwesomeSlider>

		<ContentItem title="About the project">
			I really wanted a good looking portfolio site, and I thought, okay let's learn React, and make it. Although
			I didn't used any server side stuff and the frontend feels it... But, I learnt a lot of things about{' '}
			<span className="text-highlight">React</span>.
		</ContentItem>
	</div>
);
