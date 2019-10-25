import React from 'react';
import { Link } from 'gatsby';
import Layout from '../layouts';

interface Props {
	pageContext: {
		tags: string[];
	};
}

const Tags: React.FC<Props> = data => {
	const { tags } = data.pageContext;
	return (
		<Layout>
			<ul>
				{tags.map((tagName, index) => (
					<li key={index}>
						<Link to={`/tags/${tagName}`}>{tagName}</Link>
					</li>
				))}
			</ul>
		</Layout>
	);
};

export default Tags;
