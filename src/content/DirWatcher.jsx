import React from 'react';
import ContentItem from '../components/ContentItem';
import VisitContent from '../components/VisitContent';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import dirwatcher1 from '../images/content/dirwatcher1.png';
import dirwatcher2 from '../images/content/dirwatcher2.png';
import dirwatcher3 from '../images/content/dirwatcher3.png';

export default (
	<div>
		<p className="p-description">Using technology like Electron, written in JavaScript.</p>

		<VisitContent url="https://github.com/ErikSzabo/DirWatcher-v2.0" />

		<AwesomeSlider className="awesome-slider">
			<div data-src={dirwatcher1} />
			<div data-src={dirwatcher2} />
			<div data-src={dirwatcher3} />
		</AwesomeSlider>

		<ContentItem title="About the project">
			Ever wanted to sort your new downloaded files into different folders instead of leaving them in the
			Downloads forever? Well now you can do that or even more... You can sort your files from "root" folders into
			"sub" folders by their extensions. You can even monitor your folders activity, but... well this thing is
			still not that great.
		</ContentItem>

		<ContentItem title="How to use?">
			There are two types of folders: root and sub. Root folders can have multiple sub folders (but can't have the
			same sub folder twice) You can specify extensions for the subfolders. Then if watching is enabled,
			DirWatcher will move the files from root folder to its subfolders. (Only when file is created or dropped to
			the root folder) For example:
			<ul className="p-list">
				<li>set up your Downloads folder as a root folder (Browse, then Add at the dashboard page)</li>
				<li>add subfolders (subfolders can be anywhere in your computer)</li>
				<li>add extensions to your subfolders (cog wheel icon)</li>
				<li>Well, now if watching is enabled, your downloaded files will be moved to the subfolders</li>
			</ul>
		</ContentItem>

		<ContentItem title="Logging">
			You can view logs about your folder activity if you turn this option on. Actually it's turned on by default.
			New files, or modification, even a delete will appear in the logs. A new log will be created in every day.
			This logging thingy still doesn't functioning very well, but it can be useful sometimes.
		</ContentItem>

		<ContentItem title="Why I created this?">
			Well... nice question. I wanted to learn javascript even more, and play around with some kind of components
			a little. This is just a simple project to show off what I can do so far. This code might be not the best,
			but I'm still trying to improve.
		</ContentItem>
	</div>
);
