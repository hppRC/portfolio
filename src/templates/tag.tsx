import React from 'react';
import { Link } from 'gatsby';
import { Layout } from '../layouts';
import { SitePageContext } from '../../types/graphql-types.d';

type Props = {
	pageContext: SitePageContext;
};

const Tag: React.FC<Props> = ({ pageContext }) => {
	const { posts, tagName } = pageContext;
	return (
		<Layout>
			<h1>Posts about {`${tagName}`}</h1>
			<ul>
				{posts?.map((post, index) => (
					<li key={index}>
						<Link to={`/posts/${post?.frontmatter?.slug}`}>
							{post?.frontmatter?.title}
						</Link>
					</li>
				))}
			</ul>
		</Layout>
	);
};

export default Tag;
