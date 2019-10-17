import React from 'react';
import { Link } from 'gatsby';

interface Props {
	pageContext: {
		tags: string[];
	};
}

const Tags: React.FC<Props> = data => {
	console.log(data);
	const { tags } = data.pageContext;
	return (
		<div>
			<ul>
				{tags.map((tagName, index) => {
					return (
						<li key={index}>
							<Link to={`/tags/${tagName}`}>{tagName}</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Tags;
