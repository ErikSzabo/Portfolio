import React, { useState, useEffect } from 'react';

export const ApplicationContext = React.createContext(null);

const getProjects = async () => {
    const raw = await fetch('https://devrik-net.herokuapp.com/api/v1/projects');
    return await raw.json();
};

const getSkills = async () => {
    const raw = await fetch('https://devrik-net.herokuapp.com/api/v1/skills');
    return await raw.json();
};

const Container = ({ children }) => {
    const [projects, setProjects] = useState(null);
    const [skills, setSkills] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const qProjects = await getProjects();
            const qSkills = await getSkills();
            setProjects(qProjects);
            setSkills(qSkills);
            setLoading(false);
        })();
    }, []);

    return (
        <ApplicationContext.Provider value={{ projects, skills, loading }}>
            <div className="page-container">{children}</div>
        </ApplicationContext.Provider>
    );
};

export default Container;
