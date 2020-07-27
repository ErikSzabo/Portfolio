import React from 'react';
import './Tags.css';

const colorMap = {
    javascript: {
        background: '#F0DB4F',
        front: '#000000',
    },
    css: {
        background: '#F954BE',
        front: '#313244',
    },
    python: {
        background: '#3879AB',
        front: '#FFDA5D',
    },
    java: {
        background: '#E76F00',
        front: '#242429',
    },
    react: {
        background: '#222222',
        front: '#00D8FF',
    },
    typescript: {
        background: '#2775C3',
        front: '#FFFFFF',
    },
    default: {
        background: '#454E56',
        front: '#B2BECD',
    },
};

const Tag = ({ name }) => {
    function getStyle(name) {
        name = name.trim().toLowerCase();
        if (!colorMap[name]) {
            return {
                background: colorMap.default.background,
                color: colorMap.default.front,
            };
        }
        return {
            background: colorMap[name].background,
            color: colorMap[name].front,
        };
    }

    return (
        <div className="tag" style={getStyle(name)}>
            {`#${name}`}
        </div>
    );
};

export default Tag;
