import React, { useState, useContext, useMemo } from 'react';
import { ApplicationContext } from '../Container';
import Project from './Project';
import FilterTag from './FilterTag';

const filters = {
    none: 'ALL',
    frontend: 'FRONTEND',
    backend: 'BACKEND',
    javascript: 'JAVASCRIPT',
    python: 'PYTHON',
};

const Projects = () => {
    const [filter, setFilter] = useState(filters.none);
    const { projects, loading } = useContext(ApplicationContext);

    const filterProjects = () => {
        if (filter === filters.none) return projects;
        return projects.filter((p) =>
            p.filterTags.includes(filter.toLowerCase())
        );
    };

    const filterTags = useMemo(() => {
        return Array.from(Object.keys(filters)).map((key) => (
            <FilterTag
                key={key}
                name={filters[key]}
                filter={filters[key]}
                setter={setFilter}
            />
        ));
    }, [setFilter]);

    return (
        <div className="projects">
            <div className="projects-header">
                <h1>My Projects</h1>
                <p>
                    These are all of my own projects. I'm an unversity student,
                    so the projects may vary. I mostly work with the frontend
                    and javascript, although I learnt python and java at the
                    university as well.
                </p>
                <div className="filter-tags">{filterTags}</div>
                <br />
                <p className="filter-text">
                    Feel free to use these filters above!
                </p>
            </div>

            <div className="projects-wrapper">
                {!loading &&
                    filterProjects().map((p) => (
                        <Project
                            key={p._id}
                            id={p._id}
                            name={p.name}
                            description={p.description}
                            img={p.img}
                            tags={p.tags}
                        />
                    ))}
            </div>
        </div>
    );
};

export default Projects;
