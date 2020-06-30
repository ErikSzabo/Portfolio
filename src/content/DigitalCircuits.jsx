import React from 'react';
import ContentItem from './components/ContentItem';
import VisitContent from './components/VisitContent';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import digit1 from '../images/circuit.png';

export default (
	<div>
		<p className="p-description">Written in Java, runs in the console.</p>

		<VisitContent url="https://github.com/ErikSzabo/digital-circuitsv2.0" />

		<AwesomeSlider className="awesome-slider">
			<div data-src={digit1} />
		</AwesomeSlider>

		<ContentItem title="About the project">
			This was my choosen homework int the second semester at the university. I really liked building this, object
			oriented and staticly typed languges are really amazing.
		</ContentItem>
	</div>
);
