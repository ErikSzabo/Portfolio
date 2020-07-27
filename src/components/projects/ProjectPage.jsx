import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import AwesomeSlider from 'react-awesome-slider';
import ContentItem from './ContentItem';
import VisitContent from './VisitContent';
import './ProjectPage.css';
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
    const raw = await fetch(`https://api.devrik.net/project-page/${id}`);
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
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        (async () => {
            const project = await getPorject(id);
            setContent(project);
            if (project.error) setError(true);
            setLoading(false);
        })();
    }, [id]);

    return (
        <div className="project-page">
            {loading
                ? null
                : error
                ? "There isn't any project with this id!"
                : parseContent(content)}
        </div>
    );
};

export default withRouter(ProjectPage);
