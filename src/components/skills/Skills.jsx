import React from 'react';
import Skill from './Skill';
import jsLogo from '../../images/js_logo.png';
import cssLogo from '../../images/css_logo.png';
import pyLogo from '../../images/py_logo.png';
import javaLogo from '../../images/java_logo.png';
import gitLogo from '../../images/git_logo.png';
import reactLogo from '../../images/react_logo.png';

const Skills = () => (
	<div className="skills-container">
		<h1>Skills</h1>
		<div className="skills">
			<Skill name="JavaScript" fill="80" logo={jsLogo}>
				<p>
					This was my really first language that I learnt. I have really strong emotions about this language,
					both good and bad, for reasons. I used it first with{' '}
					<span className="text-highlight">static sites</span>, then I moved to{' '}
					<span className="text-highlight">electron</span>, and now, here I am, using{' '}
					<span className="text-highlight">react</span>.
				</p>
			</Skill>

			<Skill name="CSS" fill="60" logo={cssLogo}>
				This amazing style language... Well, I need this everywhere. It's my biggest enemy, when it comes to
				websites. But... everyone can improve over time{' '}
				<span role="img" aria-label="">
					😃
				</span>
			</Skill>

			<Skill name="Python" fill="50" logo={pyLogo}>
				There aren't any developer who didn't tried python at least once. But this time it's different. I fell
				in love with <span className="text-highlight">pygame</span> and especially with the{' '}
				<span className="text-highlight">sockets</span> module.
			</Skill>

			<Skill name="Java" fill="40" logo={javaLogo}>
				Java is like fresh air with its static typing after python and other dynamic languages. I really loved
				it, although I just only used it in the 2nd semester.
			</Skill>

			<Skill name="Git, GitHub" fill="60" logo={gitLogo}>
				I've always used git with almost all of my projects. I'm familiar with the{' '}
				<span className="text-highlight">basic commands</span> and with{' '}
				<span className="text-highlight">branches</span>, however I haven't really done merges and rebase.
			</Skill>

			<Skill name="React" fill="40" logo={reactLogo}>
				Ever since I started web development I've always wanted to try{' '}
				<span className="text-highlight">react</span>. Now I'm really using it, and it's amazing!
			</Skill>
		</div>
	</div>
);

export default Skills;
