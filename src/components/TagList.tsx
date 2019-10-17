import React from 'react';
import { Link } from 'gatsby';

interface Props {
	tags: string[];
}

export const TagList: React.FC<Props> = ({ tags }) => {
	return (
		<>
			<ul>
				{tags.map(tag => (
					<li key={tag}>
						<Link to={`/tags/${tag}`}>{tag}</Link>
					</li>
				))}
			</ul>
		</>
	);
};

export default TagList;
