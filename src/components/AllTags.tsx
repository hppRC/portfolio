import React from 'react';
import { graphql, Link, StaticQuery } from 'gatsby';

interface Props {
	allMdx: {
		edges: [
			{
				node: NodeInterface;
			}
		];
	};
}

interface NodeInterface {
	frontmatter: {
		slug: string;
		date: string;
		title: string;
		tags: string[];
	};
}

export const AllTags = () => (
	<StaticQuery
		query={query}
		render={({ allMdx: { edges } }: Props) => {
			const postsByTag: {
				[key: string]: NodeInterface[];
			} = {};

			edges.forEach(({ node }) => {
				if (node.frontmatter.tags) {
					node.frontmatter.tags.forEach(tag => {
						if (!postsByTag[tag]) {
							postsByTag[tag] = [];
						}
						postsByTag[tag].push(node);
					});
				}
			});

			const tags = Object.keys(postsByTag);
			return (
				<div>
					<ul>
						{tags.map((tagName, index) => (
							<li key={index}>
								<Link to={`/tags/${tagName}`}>{tagName}</Link>
							</li>
						))}
					</ul>
				</div>
			);
		}}
	/>
);

const query = graphql`
	query Tags {
		allMdx(sort: { order: ASC, fields: [frontmatter___date] }) {
			edges {
				node {
					frontmatter {
						slug
						date
						title
						tags
					}
				}
			}
		}
	}
`;

export default AllTags;
