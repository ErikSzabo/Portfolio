import React, { useState, useEffect } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import ContentItem from './ContentItem';
import VisitContent from './VisitContent';
import 'react-awesome-slider/dist/styles.css';

// content
// - name: string
// - description: string
// - githubUrl: string
// - images: string[] (actually url strings)
// - elements: element[]

// element
// - title: string
// - content: string
// - contentType: "list" | "text"
// - listItems?: string[]

const getPorject = async (id) => {
    const raw = await fetch(
        `https://devrik-net.herokuapp.com/api/v1/projects/${id}`
    );
    const result = await raw.json();
    return result;
};

const parseContent = (content) => {
    if (!content) return null;
    return (
        <div>
            <h1>{content.name}</h1>
            <p className="p-description">{content.description}</p>

            <VisitContent url={content.githubUrl} />

            <AwesomeSlider className="awesome-slider">
                {content.images.map((url) => (
                    <div key={url} data-src={url} />
                ))}
            </AwesomeSlider>

            {content.elements.map((element, index) => (
                <ContentItem key={index} title={element.title}>
                    {element.content}
                    {element.contentType === 'list' && (
                        <ul className="p-list">
                            {element.listItems.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    )}
                </ContentItem>
            ))}
        </div>
    );
};

const ProjectPage = ({ match }) => {
    const id = match.params.id;
    const [content, setContent] = useState(null);
    const [error, setError] = useState(true);

    useEffect(() => {
        (async () => {
            const project = await getPorject(id);
            setContent(project);
            if (!project.error) setError(false);
        })();
    }, [id]);

    return (
        <div className="project-page">
            {error
                ? "There isn't any project with this id!"
                : parseContent(content)}
        </div>
    );
};

export default ProjectPage;
