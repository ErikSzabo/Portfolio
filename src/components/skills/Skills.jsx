import React, { useContext } from 'react';
import Skill from './Skill';
import { ApplicationContext } from '../Container';
import './Skills.scoped.css';

const Skills = () => {
  const {
    state: {
      content: { skills },
    },
  } = useContext(ApplicationContext);

  return (
    <div className="skills">
      <div className="skills__position">
        <h1>About Me</h1>
        <div className="skills__container">
          <div className="skills__about">
            <p>
              My name is <span className="text-highlight">Erik Szabó</span> and
              I am a {new Date().getFullYear() - 2000} year old computer science
              student living in Hungary. I'm currently studying at Budapest
              University of Technology and Economics. My enthusiasm for software
              development started at the age of 17. Since then, I'm constantly
              trying to improve my skills on my own and with help of the
              University.
            </p>
            <p>
              My journey (of course) started with{' '}
              <span className="text-highlight">JavaScript / TypeScript</span>,
              the good old HTML, CSS, JS trio. I have a really solid
              understanding about how JavaScript works behind the scenes, and I
              now the old and the new way of wiriting code in this language. I
              moved on quickly from there to{' '}
              <span className="text-highlight">Electron</span>, and then to{' '}
              <span className="text-highlight">React</span>. Nowadays I know a
              lot of things about both of these frameworks. This also includes{' '}
              <span className="text-highlight">NodeJS </span>
              and npm, I'm quite familiar with both of them.
            </p>
            <p>
              After this, I started my studies at the University. Here I learnt
              even more about Java and{' '}
              <span className="text-highlight">OOP</span> (I already known many
              things about OOP before the university). After that I learnt about
              the more important{' '}
              <span className="text-highlight">design patterns</span>, and I had
              the chance to try them out alongside with the{' '}
              <span className="text-highlight">UWP</span> platform in{' '}
              <span className="text-highlight">C#</span>. I also know a lot
              about <span className="text-highlight">MVC </span>
              and <span className="text-highlight">
                MVVM
              </span> architectures.{' '}
              <span className="text-highlight">UML diagrams</span>, like class /
              activity / sequential / use case diagrams are also in my pocket. I
              had a little bit of experince with{' '}
              <span className="text-highlight">agile software development</span>
              , especially with the scrum methodology.
            </p>
            <p>
              As far as databases go, I used{' '}
              <span className="text-highlight">MongoDB</span>, but only with its
              nice JavaScript drivers, and I learnt how to write{' '}
              <span className="text-highlight">SQL</span> queries, create
              tables, modify tables, add constraints to columns and so on. I'm
              not gonna lie, I have to learn a whole lot more about databases.
            </p>
            <p>
              I'm familiar with backend{' '}
              <span className="text-highlight">REST api</span>s, and I'm looking
              forward to learn about GraphQL.
            </p>
            <p>
              I have passed the intermediate{' '}
              <span className="text-highlight">English</span> language exam, and
              although, I'm not the best english speaker, in my opinion, I can
              talk and write in english well enough.
            </p>
          </div>
          <div className="skills__wrapper">
            {skills.map((skill, index) => (
              <Skill
                key={index}
                name={skill.name}
                description={skill.description}
                logo={skill.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
