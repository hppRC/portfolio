import React from 'react';
import { Link } from 'gatsby';

interface Props {
	tags: string[];
}

export const TagList: React.FC<Props> = ({ tags }) => {
	return (
		<div>
			{tags.map(tag => (
				<Link key={tag} to={`/tags/${tag}`}>
					{tag}
				</Link>
			))}
		</div>
	);
};

export default TagList;
