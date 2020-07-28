import React from 'react';
import { Link } from 'react-router-dom';
import github from '../../assets/github.png';
import './Landing.scoped.css';

const Landing = () => {
    return (
        <div className="landing-page">
            <div className="landing">
                <h1 className="landing__title">Hey, my name is Erik Szabó!</h1>
                <p className="landing__description">
                    I'm an unversity student in Hungary at{' '}
                    <span className="text-highlight">
                        Budapest University of Technology and Economcs
                    </span>
                    . I want to become a full stack developer, but until then,
                    you can check out my projects and things that I'am currently
                    good at. If you are intrested in any ways, feel free to
                    contact me!
                </p>
                <div className="landing__buttons">
                    <Link to="/projects">
                        <div className="landing__btn">{'<Projects />'}</div>
                    </Link>
                    <a
                        href="https://github.com/ErikSzabo?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="landing__btn--git">
                            <img
                                src={github}
                                alt=""
                                className="landing__git"
                            ></img>
                            Github
                        </div>
                    </a>
                </div>
            </div>
            <div className="development hidden">Under Development!</div>
        </div>
    );
};

export default Landing;
