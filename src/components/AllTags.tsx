import React from 'react';
import { Link } from 'gatsby';
import { useAllTags } from '../hooks';

export const AllTags: React.FC<{}> = () => (
	<div>
		<ul>
			{useAllTags().map((tagName, index) => (
				<li key={index}>
					<Link to={`/tags/${tagName}`}>{tagName}</Link>
				</li>
			))}
		</ul>
	</div>
);

export default AllTags;
