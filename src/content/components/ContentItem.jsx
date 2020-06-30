import React from 'react';

const ContentItem = ({ title, children }) => {
	return (
		<div>
			<h2 className="p-title">{title}</h2>
			<div className="p-description">{children}</div>
		</div>
	);
};

export default ContentItem;
