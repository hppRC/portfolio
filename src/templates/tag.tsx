import React from 'react';
import { Link } from 'gatsby';
import Layout from '../layouts';

interface Props {
	pageContext: {
		posts: [
			{
				frontmatter: {
					path: string;
					title: string;
				};
			}
		];
		tagName: string;
	};
}

const Tag: React.FC<Props> = ({ pageContext }) => {
	const { posts, tagName } = pageContext;
	return (
		<Layout>
			<h1>Posts about {`${tagName}`}</h1>
			<ul>
				{posts.map((post, index) => (
					<li key={index}>
						<Link to={post.frontmatter.path}>
							{post.frontmatter.title}
						</Link>
					</li>
				))}
			</ul>
		</Layout>
	);
};

export default Tag;
