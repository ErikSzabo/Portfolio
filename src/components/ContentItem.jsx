import React, { useState, useEffect } from 'react';

const ContentItem = ({ title, children }) => {
	return (
		<div>
			<h2 className="p-title">{title}</h2>
			<p className="p-description">{children}</p>
		</div>
	);
};

export default ContentItem;
