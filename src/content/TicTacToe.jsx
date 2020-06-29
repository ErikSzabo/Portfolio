import React from 'react';
import ContentItem from '../components/ContentItem';
import VisitContent from '../components/VisitContent';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import tiktaktoe1 from '../images/content/tiktaktoe1.png';

export default (
	<div>
		<p className="p-description">Using pygame and sockets, written in Python</p>

		<VisitContent url="#" />

		<AwesomeSlider className="awesome-slider">
			<div data-src={tiktaktoe1} />
		</AwesomeSlider>

		<ContentItem title="About the project">
			I wanted to practice and use sockets, so I created a client-server based game. I really enjoyed making this,
			and also playing with this.
		</ContentItem>
	</div>
);
